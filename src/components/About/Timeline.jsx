import React from 'react'
import { motion } from 'framer-motion'
import { Car } from 'lucide-react'
import { ABOUT_DATA } from '../../constants'
import { FlashlightCard } from '../common/FlashlightCard'

import HandDrawnTitle from '../common/HandDrawnTitle'

const TimelineCard = ({ item }) => {
    return (
        <FlashlightCard className="z-10 bg-[#18181b]/80 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-gray-800 shadow-sm hover:shadow-md transition-all group text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-3 relative z-10">
                {item.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-3 sm:mb-4 relative z-10">
                {item.description}
            </p>
            <div className="relative h-12 sm:h-16 md:h-20 overflow-hidden z-10">
                <span className="absolute bottom-0 left-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-accent-1 via-gray-500 to-transparent opacity-30 leading-none select-none transform translate-y-2 group-hover:opacity-80 transition-opacity">
                    {item.year}
                </span>
            </div>
        </FlashlightCard>
    );
};

const Timeline = () => {
    return (
        <section className="relative bg-[#09090b] py-16 sm:py-20 md:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(117,204,195,0.05)_0%,rgba(156,212,175,0.05)_50%,transparent_100%)] pointer-events-none" />
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <HandDrawnTitle text="Milestones" />
                    <h2 className="section-heading mb-4 sm:mb-5 md:mb-6">
                        The Road Traveled
                    </h2>
                    <p className="section-subheading">
                        Every milestone tells a story of innovation, growth, and relentless pursuit of excellence as we continue building the future.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Road SVG */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-20 -translate-x-1/2 hidden md:block">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 80 100">
                            <motion.path
                                d="M20,0 L20,100 M60,0 L60,100"
                                vectorEffect="non-scaling-stroke"
                                className="stroke-gray-800 stroke-[4] drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                            <motion.line
                                x1="40" y1="0" x2="40" y2="100"
                                vectorEffect="non-scaling-stroke"
                                className="stroke-gray-700 stroke-[4]"
                                strokeDasharray="10 10"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </svg>
                        {/* Gradient Overlay for Fade Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-transparent to-[#09090b] opacity-50" />
                    </div>

                    <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 relative z-10">
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
                                    <div className={`${item.side === 'right' ? 'md:col-start-2' : ''} relative`}>
                                        <TimelineCard item={item} />
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
                                            className="relative z-20 bg-white p-3 rounded-full shadow-xl border-4 border-[#09090b] animate-bounce"
                                        >
                                            <Car className="w-6 h-6 text-[#09090b]" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 }}
                                            className="w-4 h-4 rounded-full bg-[#75ccc3] border-2 border-[#09090b] shadow-md"
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
