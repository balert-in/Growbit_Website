import React from 'react'
import { motion } from 'framer-motion'

const phases = [
    {
        id: 1,
        phase: "PHASE 01",
        title: "Discover",
        description: "We analyze your current state, identify gaps in your market presence, and understand your core goals.",
        align: "left"
    },
    {
        id: 2,
        phase: "PHASE 02",
        title: "Strategize",
        description: "A tailored roadmap is built to hit your KPIs with defined milestones, resource allocation, and timelines.",
        align: "right"
    },
    {
        id: 3,
        phase: "PHASE 03",
        title: "Execute",
        description: "Our expert teams deploy solutions with agile precision, providing regular updates and rapid iteration.",
        align: "left"
    },
    {
        id: 4,
        phase: "PHASE 04",
        title: "Optimize",
        description: "Continuous monitoring and tweaking for max ROI. We ensure the growth engine keeps running efficiently.",
        align: "right"
    }
]

const HowWeWork = () => {
    return (
        <section className="py-24 bg-[#09090b] overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#9cd4af]/10 to-[#75ccc3]/10 border border-[#9cd4af]/20 backdrop-blur-sm"
                    >
                        <span className="text-sm font-bold text-white tracking-wide uppercase">How We Work</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        The Path to Success
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg leading-relaxed"
                    >
                        A proven four-step methodology that guarantees transparency and results at every stage of the journey.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">

                    {/* Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[#75ccc3]/20 via-[#75ccc3] to-[#d7e48a]/20 hidden md:block" />

                    <div className="space-y-12 md:space-y-24 relative">
                        {phases.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${item.align === 'right' ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 ${item.align === 'right' ? 'md:pl-16' : 'md:pr-16'
                                    }`}>
                                    <div className={`relative group text-center ${item.align === 'right' ? 'md:text-left' : 'md:text-right'
                                        }`}>
                                        <span className={`absolute -top-12 text-[120px] leading-none font-black text-gray-800/60 select-none ${item.align === 'right' ? 'left-0 md:-left-4' : 'right-0 md:right-18'
                                            }`}>
                                            {item.id}
                                        </span>
                                        <h3 className="text-3xl font-bold text-white mb-4 relative z-10 pt-4">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed relative z-10">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Marker */}
                                <div className="relative z-10 flex items-center justify-center w-12 h-12 shrink-0">
                                    <div className="w-4 h-4 bg-[#09090b] rounded-full border-[4px] border-[#75ccc3] shadow-[0_0_0_4px_rgba(117,204,195,0.2)]" />
                                </div>

                                {/* Empty Space for alignment */}
                                <div className="w-full md:w-1/2 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HowWeWork
