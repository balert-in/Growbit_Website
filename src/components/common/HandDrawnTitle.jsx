import React from 'react'
import { motion } from 'framer-motion'

const HandDrawnTitle = ({ text, color = "#9cd4af", theme = "dark", className = "" }) => {
    const textColor = theme === "light" ? "text-gray-800" : "text-white"
    return (
        <div className={`relative inline-block mb-8 ${className}`}>
            {/* Outer soft glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] z-10 blur-[40px] opacity-40 pointer-events-none"
                style={{
                    background: `radial-gradient(circle, ${color} 0%, transparent 60%)`
                }}
            />
            {/* Inner bright core */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] z-10 blur-[20px] opacity-70 pointer-events-none"
                style={{
                    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`
                }}
            />
            <svg
                className="absolute -top-3 -left-6 w-[calc(100%+3rem)] h-[calc(100%+1.5rem)] pointer-events-none"
                viewBox="0 0 200 70"
                fill="none"
                preserveAspectRatio="none"
            >
                <motion.path
                    d="M20,35 Q30,10 100,10 T180,35 T100,60 T20,35 T100,15 T170,35"
                    stroke={color}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-90"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </svg>
            <span className={`relative z-10 px-4 py-2 text-sm font-semibold ${textColor} tracking-wide capitalize`}>{text}</span>
        </div>
    )
}

export default HandDrawnTitle
