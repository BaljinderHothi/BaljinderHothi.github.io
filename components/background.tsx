"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Background() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const isSun = theme === "sun"

    return (
        <>
            <div
                className="fixed inset-0 z-0 opacity-40 transition-opacity duration-700"
                style={{
                    backgroundImage: `url('${isSun ? "/images/tree-bg-sun.jpg" : "/images/tree-bg.png"}'), radial-gradient(circle at center, ${isSun ? "#2a0a0a" : "#2d3748"} 0%, ${isSun ? "#1a0505" : "#1a1d24"} 100%)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />
            <div className={`fixed inset-0 z-0 ${isSun ? "bg-[#1a0505]/50" : "bg-[#1a1d24]/50"} transition-colors duration-700`} />
        </>
    )
}
