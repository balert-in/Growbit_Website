import React, { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { ABOUT_DATA } from '../../constants'

const Counter = ({ value }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 })

    // Parse the number and suffix (e.g., "150+" -> 150 and "+")
    const numericValue = parseFloat(value) || 0
    const suffix = value.toString().replace(numericValue.toString(), '')

    useEffect(() => {
        if (isInView) {
            motionValue.set(numericValue)
        }
    }, [isInView, numericValue, motionValue])

    // Create a ref for the text element to update directly for performance
    const textRef = useRef(null)

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (textRef.current) {
                textRef.current.textContent = Math.floor(latest) + suffix
            }
        })
        return () => unsubscribe()
    }, [springValue, suffix])

    return <span ref={ref}><span ref={textRef}>0{suffix}</span></span>
}

const Stats = () => {
    return (
        <section className="relative bg-[#09090b] border-y border-gray-800 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#9cd4af]/10 via-[#d7e48a]/5 to-[#75ccc3]/10 opacity-50 pointer-events-none" />
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, staggerChildren: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-800"
                >
                    {ABOUT_DATA.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 text-center group hover:bg-white/5 transition-colors duration-300"
                        >
                            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 tracking-tight group-hover:scale-105 transition-transform duration-300">
                                <Counter value={stat.value} />
                            </div>
                            <div className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Stats
