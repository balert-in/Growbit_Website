import React from 'react'
import { motion } from 'framer-motion'
import { Car } from 'lucide-react'
import { ABOUT_DATA } from '../../constants'

const Timeline = () => {
    return (
        <section className="relative bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1120] mb-4">
                        The Road Traveled
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        A direct path from our humble beginnings to our future vision.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Road SVG */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-20 -translate-x-1/2 hidden md:block">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 80 100">
                            <motion.path
                                d="M20,0 L20,100 M60,0 L60,100"
                                vectorEffect="non-scaling-stroke"
                                className="stroke-gray-200 stroke-[4]"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                            <motion.line
                                x1="40" y1="0" x2="40" y2="100"
                                vectorEffect="non-scaling-stroke"
                                className="stroke-gray-300 stroke-[4]"
                                strokeDasharray="10 10"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </svg>
                        {/* Gradient Overlay for Fade Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-50" />
                    </div>

                    <div className="space-y-24 relative z-10">
                        {ABOUT_DATA.timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="relative"
                            >
                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center ${item.side === 'left' ? '' : 'md:grid-flow-dense'
                                    }`}>
                                    <div className={`${item.side === 'right' ? 'md:col-start-2' : ''} relative text-center md:text-left`}>
                                        <div className="relative z-10 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                            <h3 className="text-2xl sm:text-3xl font-black text-[#0B1120] mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
                                                {item.description}
                                            </p>
                                            <div className="relative h-16 sm:h-20 overflow-hidden">
                                                <span className="absolute bottom-0 left-0 text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-100 opacity-50 leading-none select-none transform translate-y-2">
                                                    {item.year}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${item.side === 'left' ? 'md:col-start-2' : ''} hidden md:block`} />
                                </div>

                                {/* Center Marker / Car */}
                                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                                    {item.year === "2025" ? (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                                            className="relative z-20 bg-[#0B1120] p-3 rounded-full shadow-xl border-4 border-white animate-bounce"
                                        >
                                            <Car className="w-6 h-6 text-white" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 }}
                                            className="w-4 h-4 rounded-full bg-[#75ccc3] border-2 border-white shadow-md"
                                        />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline
