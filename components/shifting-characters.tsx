"use client"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
const TARGET_TEXT = "Never assume what you're trying to prove, unless what you're trying to prove is that you're an idiot."

export const ShiftingCharacters = () => {
    const [text, setText] = useState(TARGET_TEXT.split("").map(() => CHARS[Math.floor(Math.random() * CHARS.length)]))
    const [lockedIndices, setLockedIndices] = useState<number[]>([])

    useEffect(() => {
        let interval: NodeJS.Timeout
        let iterations = 0

        const scramble = () => {
            setText((prev) =>
                prev.map((char, i) => {
                    if (lockedIndices.includes(i)) return TARGET_TEXT[i]
                    if (TARGET_TEXT[i] === " ") return " "
                    return CHARS[Math.floor(Math.random() * CHARS.length)]
                })
            )
            iterations++
        }

        interval = setInterval(scramble, 50)

        // Start locking characters after a delay
        const timeout = setTimeout(() => {
            const lockInterval = setInterval(() => {
                setLockedIndices(prev => {
                    if (prev.length >= TARGET_TEXT.length) {
                        clearInterval(lockInterval)
                        clearInterval(interval)
                        return prev
                    }
                    // Lock multiple characters per frame to speed up long text
                    const availableIndices = Array.from({ length: TARGET_TEXT.length }, (_, i) => i).filter(i => !prev.includes(i))
                    if (availableIndices.length === 0) return prev

                    const charsToLock = Math.min(3, availableIndices.length)
                    const newIndices = []
                    for (let k = 0; k < charsToLock; k++) {
                        const idx = availableIndices[Math.floor(Math.random() * availableIndices.length)]
                        newIndices.push(idx)
                        // remove chosen index from temp available list to avoid dupes in this batch
                        const removeIdx = availableIndices.indexOf(idx)
                        if (removeIdx > -1) availableIndices.splice(removeIdx, 1)
                    }

                    return [...prev, ...newIndices]
                })
            }, 50)
        }, 1500)

        return () => {
            clearInterval(interval)
            clearTimeout(timeout)
        }
    }, [])

    // Force update effect to ensure locked characters visually update to target
    useEffect(() => {
        setText(prev => prev.map((char, i) => lockedIndices.includes(i) ? TARGET_TEXT[i] : char))
    }, [lockedIndices])


    return (
        <div className="flex flex-wrap justify-center max-w-2xl text-center font-mono text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed">
            {text.map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className={lockedIndices.includes(i) ? "text-slate-300" : "text-slate-600"}
                    style={{ whiteSpace: "pre" }} // Preserve spaces
                >
                    {char}
                </motion.span>
            ))}
        </div>
    )
}
