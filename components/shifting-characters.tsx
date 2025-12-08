"use client"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
const TARGET_TEXT = "Never assume what you're trying to prove, unless what you're trying to prove is that you're an idiot."

export const ShiftingCharacters = () => {
    const [text, setText] = useState(TARGET_TEXT.split("").map(() => CHARS[Math.floor(Math.random() * CHARS.length)]))
    const lockedIndices = useRef<Set<number>>(new Set())
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        let interval: NodeJS.Timeout
        let lockInterval: NodeJS.Timeout

        // Start scrambling immediately
        interval = setInterval(() => {
            setText((currentText) =>
                currentText.map((char, i) => {
                    if (lockedIndices.current.has(i)) {
                        return TARGET_TEXT[i]
                    }
                    if (TARGET_TEXT[i] === " ") return " "
                    return CHARS[Math.floor(Math.random() * CHARS.length)]
                })
            )
        }, 50)

        // Start locking characters after a delay
        const startLockingTimeout = setTimeout(() => {
            lockInterval = setInterval(() => {
                const locked = lockedIndices.current
                if (locked.size >= TARGET_TEXT.length) {
                    clearInterval(lockInterval)
                    clearInterval(interval)
                    // Final fetch to ensure 100% correct
                    setText(TARGET_TEXT.split(""))
                    return
                }

                // Find indices that are not yet locked
                const availableIndices: number[] = []
                for (let i = 0; i < TARGET_TEXT.length; i++) {
                    if (!locked.has(i)) {
                        availableIndices.push(i)
                    }
                }

                // Lock a batch of characters (2-4 at a time to be faster)
                const countToLock = Math.min(availableIndices.length, Math.floor(Math.random() * 3) + 2)

                for (let k = 0; k < countToLock; k++) {
                    const randomIndex = Math.floor(Math.random() * availableIndices.length)
                    const idx = availableIndices[randomIndex]
                    locked.add(idx)
                    // Remove from temp array so we don't pick it again this tick
                    availableIndices.splice(randomIndex, 1)
                }

            }, 50)
        }, 1000)

        return () => {
            clearInterval(interval)
            clearInterval(lockInterval)
            clearTimeout(startLockingTimeout)
        }
    }, [])

    if (!isMounted) {
        return <div className="min-h-[60px]" /> // Prevent hydration mismatch flicker
    }

    return (
        <div className="max-w-3xl text-center text-base sm:text-lg md:text-xl leading-relaxed break-words">
            {text.map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={lockedIndices.current.has(i) ? "font-serif text-slate-300 italic" : "font-mono text-slate-600"}
                >
                    {char}
                </motion.span>
            ))}
        </div>
    )
}
