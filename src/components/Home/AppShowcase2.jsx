import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Apple, Play, BarChart3, Users, Zap, Shield, Bell, PieChart } from 'lucide-react'
import HandDrawnTitle from '../common/HandDrawnTitle'

const FeatureItem = ({ icon: Icon, title, description, align = 'left', delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay }}
            className={`flex flex-col ${align === 'left' ? 'items-end text-right' : 'items-start text-left'} gap-2 sm:gap-3 relative z-10 max-w-[140px] sm:max-w-[200px] lg:max-w-xs`}
        >
            <div className="p-2 sm:p-2.5 lg:p-3 rounded-xl lg:rounded-2xl bg-gradient-to-br from-[#18181b] to-[#09090b] border border-gray-800 shadow-xl group hover:border-[#75ccc3]/50 transition-colors duration-300">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#75ccc3] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-0.5 sm:mb-1">{title}</h3>
                <p className="hidden sm:block text-xs sm:text-sm text-gray-400 leading-relaxed">{description}</p>
            </div>
        </motion.div>
    )
}

const ConnectionLine = ({ d, delay = 0, viewBox = "0 0 200 300", preserveAspectRatio = "xMidYMid meet", strokeWidth = "1" }) => {
    return (
        <svg
            viewBox={viewBox}
            preserveAspectRatio={preserveAspectRatio}
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        >
            <motion.path
                d={d}
                fill="none"
                stroke="url(#gradient-line)"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay, ease: "easeInOut" }}
            />
            <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9cd4af" stopOpacity="0" />
                    <stop offset="50%" stopColor="#75ccc3" />
                    <stop offset="100%" stopColor="#d7e48a" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

const AppShowcase2 = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5])

    return (
        <section ref={containerRef} className="relative py-18 lg:py-24 bg-[#09090b] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#75ccc3]/10 via-[#9cd4af]/5 to-transparent rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <HandDrawnTitle text="Mobile App" />
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
                    >
                        Your Business, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9cd4af] via-[#75ccc3] to-[#d7e48a]">
                            In Your Pocket
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Stay connected to your growth. Monitor real-time analytics, manage teams, and close deals from anywhere in the world.
                    </motion.p>
                </div>

                <div className="relative flex items-center justify-center gap-6 sm:gap-8 lg:gap-0">

                    <div className="flex flex-col justify-center gap-12 sm:gap-20 lg:gap-32 flex-1 items-end pr-2 sm:pr-6 lg:pr-12 relative">
                        <FeatureItem
                            icon={BarChart3}
                            title="Real-time Analytics"
                            description="Track revenue, user growth, and engagement metrics live."
                            align="right"
                            delay={0.2}
                        />
                        <FeatureItem
                            icon={Users}
                            title="Team Management"
                            description="Assign tasks and communicate with your team instantly."
                            align="right"
                            delay={0.4}
                        />

                        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[100px] sm:w-[150px] lg:w-[200px] h-[300px] pointer-events-none">
                            <ConnectionLine d="M0,80 C100,80 160,150 220,150" delay={0.6} strokeWidth="1" className="sm:hidden" />
                            <ConnectionLine d="M0,220 C100,220 160,150 220,150" delay={0.8} strokeWidth="1" className="sm:hidden" />
                            <ConnectionLine d="M0,80 C100,80 160,150 220,150" delay={0.6} strokeWidth="1.5" className="hidden sm:block lg:hidden" />
                            <ConnectionLine d="M0,220 C100,220 160,150 220,150" delay={0.8} strokeWidth="1.5" className="hidden sm:block lg:hidden" />
                            <ConnectionLine d="M0,80 C100,80 160,150 220,150" delay={0.6} strokeWidth="2" className="hidden lg:block" />
                            <ConnectionLine d="M0,220 C100,220 160,150 220,150" delay={0.8} strokeWidth="2" className="hidden lg:block" />
                        </div>
                    </div>

                    <div className="relative w-[90px] sm:w-[200px] lg:w-[320px] flex-shrink-0 z-20 perspective-1000">
                        <motion.div
                            style={{ y, rotateX: rotate }}
                            className="relative shadow-2xl"
                        >
                            <img
                                src="/dashboard.png"
                                alt="App Dashboard"
                                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>

                    <div className="flex flex-col justify-center gap-12 sm:gap-20 lg:gap-32 flex-1 items-start pl-2 sm:pl-6 lg:pl-12 relative">
                        <FeatureItem
                            icon={Shield}
                            title="Bank-Grade Security"
                            description="Your data is protected with enterprise-level encryption."
                            align="left"
                            delay={0.3}
                        />
                        <FeatureItem
                            icon={PieChart}
                            title="Custom Reports"
                            description="Generate detailed PDF reports in one click."
                            align="left"
                            delay={0.5}
                        />

                        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[100px] sm:w-[150px] lg:w-[200px] h-[300px] pointer-events-none">
                            <ConnectionLine d="M200,80 C100,80 40,150 -20,150" delay={0.7} strokeWidth="1" className="sm:hidden" />
                            <ConnectionLine d="M200,220 C100,220 40,150 -20,150" delay={0.9} strokeWidth="1" className="sm:hidden" />
                            <ConnectionLine d="M200,80 C100,80 40,150 -20,150" delay={0.7} strokeWidth="1.5" className="hidden sm:block lg:hidden" />
                            <ConnectionLine d="M200,220 C100,220 40,150 -20,150" delay={0.9} strokeWidth="1.5" className="hidden sm:block lg:hidden" />
                            <ConnectionLine d="M200,80 C100,80 40,150 -20,150" delay={0.7} strokeWidth="2" className="hidden lg:block" />
                            <ConnectionLine d="M200,220 C100,220 40,150 -20,150" delay={0.9} strokeWidth="2" className="hidden lg:block" />
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center justify-center gap-4 mt-20"
                >
                    <button className="group relative flex items-center gap-3 bg-white px-6 py-3.5 rounded-xl overflow-hidden transition-transform hover:scale-105 active:scale-95">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9cd4af]/20 to-[#75ccc3]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Apple className="w-6 h-6 text-black relative z-10" />
                        <div className="text-left relative z-10">
                            <div className="text-[10px] font-medium text-gray-600 uppercase">Download on the</div>
                            <div className="text-sm font-bold text-black leading-none">App Store</div>
                        </div>
                    </button>
                    <button className="group relative flex items-center gap-3 bg-[#18181b] border border-gray-800 px-6 py-3.5 rounded-xl overflow-hidden transition-transform hover:scale-105 active:scale-95 hover:border-gray-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9cd4af]/10 to-[#75ccc3]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Play className="w-6 h-6 text-white relative z-10 fill-current" />
                        <div className="text-left relative z-10">
                            <div className="text-[10px] font-medium text-gray-400 uppercase">Get it on</div>
                            <div className="text-sm font-bold text-white leading-none">Google Play</div>
                        </div>
                    </button>
                </motion.div>
            </div>
        </section >
    )
}

export default AppShowcase2
