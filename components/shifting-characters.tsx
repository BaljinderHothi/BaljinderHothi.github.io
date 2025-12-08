"use client"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*"
const TARGET_TEXT = "STRIVING TO IMPROVE"

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
                    const availableIndices = Array.from({ length: TARGET_TEXT.length }, (_, i) => i).filter(i => !prev.includes(i))
                    if (availableIndices.length === 0) return prev

                    // Lock one random available index
                    const nextIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)]
                    return [...prev, nextIndex]
                })
            }, 100)
        }, 2000)

        return () => {
            clearInterval(interval)
            clearTimeout(timeout)
        }
    }, []) // Empty dependency array to run only once on mount

    // Force update effect to ensure locked characters visually update to target
    useEffect(() => {
        setText(prev => prev.map((char, i) => lockedIndices.includes(i) ? TARGET_TEXT[i] : char))
    }, [lockedIndices])


    return (
        <div className="flex font-mono text-4xl sm:text-6xl md:text-8xl font-bold tracking-widest text-slate-200">
            {text.map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className={lockedIndices.includes(i) ? "text-terminal-green" : "text-slate-500"}
                >
                    {char}
                </motion.span>
            ))}
        </div>
    )
}
