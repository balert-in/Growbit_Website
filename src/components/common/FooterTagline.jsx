import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TextHoverEffect = ({ lines, duration = 0 }) => {
    const svgRef = useRef(null)
    const [hovered, setHovered] = useState(false)
    const [maskPosition, setMaskPosition] = useState({ cx: '50%', cy: '50%' })
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const handleMouseMove = (e) => {
        if (!svgRef.current) return
        const svg = svgRef.current
        const pt = svg.createSVGPoint()
        pt.x = e.clientX
        pt.y = e.clientY
        const svgP = pt.matrixTransform(svg.getScreenCTM().inverse())
        setMaskPosition({
            cx: `${svgP.x}`,
            cy: `${svgP.y}`,
        })
    }

    const viewBox = isMobile ? "0 0 380 200" : "0 0 600 200"
    const fontSize = isMobile ? "63" : "80"

    return (
        <svg
            ref={svgRef}
            width="100%"
            height="100%"
            viewBox={viewBox}
            preserveAspectRatio="xMinYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
            className="select-none"
        >
            <defs>
                <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
                    {hovered && (
                        <>
                            <stop offset="0%" stopColor="#9cd4af" />
                            <stop offset="25%" stopColor="#75ccc3" />
                            <stop offset="50%" stopColor="#d7e48a" />
                            <stop offset="75%" stopColor="#9cd4af" />
                            <stop offset="100%" stopColor="#75ccc3" />
                        </>
                    )}
                </linearGradient>

                <motion.radialGradient
                    id="revealMask"
                    gradientUnits="userSpaceOnUse"
                    r="20%"
                    initial={{ cx: '50%', cy: '50%' }}
                    animate={maskPosition}
                    transition={{ duration: duration, ease: 'easeOut' }}
                >
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="black" />
                </motion.radialGradient>
                <mask id="textMask">
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
                </mask>
            </defs>
            <text
                x="0"
                y="80"
                textAnchor="start"
                strokeWidth="1"
                fontSize={fontSize}
                className="fill-transparent stroke-gray-700 font-black"
                style={{ opacity: hovered ? 0.7 : 0 }}
            >
                {lines.map((line, i) => (
                    <tspan key={i} x="0" dy={i === 0 ? 0 : '1em'}>{line}</tspan>
                ))}
            </text>
            <motion.text
                x="0"
                y="80"
                textAnchor="start"
                strokeWidth="1"
                fontSize={fontSize}
                className="fill-transparent stroke-gray-700 font-black"
                initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
                animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
                transition={{ duration: 4, ease: 'easeInOut' }}
            >
                {lines.map((line, i) => (
                    <tspan key={i} x="0" dy={i === 0 ? 0 : '1em'}>{line}</tspan>
                ))}
            </motion.text>
            <text
                x="0"
                y="80"
                textAnchor="start"
                stroke="url(#textGradient)"
                strokeWidth="1"
                fontSize={fontSize}
                mask="url(#textMask)"
                className="fill-transparent font-black"
            >
                {lines.map((line, i) => (
                    <tspan key={i} x="0" dy={i === 0 ? 0 : '1em'}>{line}</tspan>
                ))}
            </text>
        </svg>
    )
}

const FooterTagline = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 w-full bg-[#09090b] z-[-1] h-[200px] sm:h-[206px] md:h-[306px]">
            <div className="w-full h-full px-4 sm:px-6 lg:px-8">
                <TextHoverEffect lines={["LET'S GROW", "TOGETHER"]} duration={0} />
            </div>
        </div>
    )
}

export default FooterTagline

