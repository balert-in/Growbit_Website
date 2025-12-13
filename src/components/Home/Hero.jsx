import React from 'react'
import { ArrowRight, Play, BarChart3, Target, Megaphone, Code, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const FlipText = ({ children }) => {
    return (
        <div className="relative block overflow-hidden whitespace-nowrap">
            <div className="relative block">
                {children.split("").map((l, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            initial: { y: 0 },
                            hover: { y: "-100%" },
                        }}
                        transition={{
                            duration: 0.25,
                            ease: "easeInOut",
                            delay: 0.025 * i,
                        }}
                        className="inline-block"
                    >
                        {l === " " ? "\u00A0" : l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            initial: { y: "100%" },
                            hover: { y: 0 },
                        }}
                        transition={{
                            duration: 0.25,
                            ease: "easeInOut",
                            delay: 0.025 * i,
                        }}
                        className="inline-block"
                    >
                        {l === " " ? "\u00A0" : l}
                    </motion.span>
                ))}
            </div>
        </div>
    );
};

const BeamPath = ({ x1, y1, x2, y2, duration, delay }) => {
    const gradientId = `gradient-${x1}-${y1}-${x2}-${y2}`
    return (
        <g>
            <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9CD4AF" stopOpacity="0" />
                    <stop offset="50%" stopColor="#9CD4AF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#9CD4AF" stopOpacity="0" />
                </linearGradient>
            </defs>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#4b5563" strokeWidth="1" opacity="0.3" />

            <motion.line
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={`url(#${gradientId})`}
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                    pathLength: [0, 0.4, 0],
                    opacity: [0, 1, 0],
                    pathOffset: [0, 1]
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: delay,
                    repeatDelay: 0.5
                }}
            />
        </g>
    )
}

const Hero = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-[#09090b]">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] sm:w-[50%] h-[60%] sm:h-[50%] bg-[#9CD4AF]/10 rounded-full blur-[100px] sm:blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] sm:w-[50%] h-[60%] sm:h-[50%] bg-[#75ccc3]/10 rounded-full blur-[100px] sm:blur-[120px]" />
                <div className="absolute top-[20%] right-[10%] w-[40%] sm:w-[30%] h-[40%] sm:h-[30%] bg-[#d7e48a]/10 rounded-full blur-[80px] sm:blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-20">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

                    <div className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="w-fit inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-gray-800 px-3 sm:px-4 py-1.5 rounded-full shadow-sm mb-6 sm:mb-8">
                            <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-[#75ccc3]" />
                            <span className="text-xs sm:text-sm font-medium text-gray-300">Let's grow together</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4 sm:mb-6 tracking-tight text-white">
                            On-Ground <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#75ccc3] to-[#d7e48a]">Execution at Scale</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 leading-relaxed max-w-lg">
                            GrowBit puts boots on the ground so you don't have to. A nationwide feet-on-street network with real-time tracking and measurable results.
                        </p>

                        <motion.button
                            initial="initial"
                            whileHover="hover"
                            className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none shadow-[0_0_30px_rgba(117,204,195,0.3)] hover:shadow-[0_0_50px_rgba(117,204,195,0.5)] transition-all duration-300 group mb-8"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#75ccc3_0%,#0B1120_50%,#0B1120_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#09090b] px-8 py-4 text-sm md:text-base font-bold text-white backdrop-blur-3xl group-hover:bg-[#09090b]/90 transition-colors">
                                <FlipText>Get Started</FlipText>
                            </span>
                        </motion.button>

                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="flex -space-x-2 sm:-space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-[#09090b] bg-gray-700 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-[#09090b] bg-gradient-to-r from-[#9cd4af] to-[#75ccc3] flex items-center justify-center text-[#09090b] text-[10px] sm:text-xs font-bold">
                                    5k+
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex text-yellow-400 text-xs sm:text-sm">
                                    {'★'.repeat(5)}
                                </div>
                                <span className="text-xs sm:text-sm text-gray-400 font-medium">Trusted by 150+ enterprises</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full items-center justify-center flex perspective-1000">
                        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#9cd4af]/5 via-transparent to-[#75ccc3]/5 rounded-3xl" /> */}
                        
                        <div className="relative w-full h-full flex items-center justify-center transform-style-3d lg:rotate-x-12">
                            <motion.div
                                className="absolute z-20 w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 bg-gradient-to-br from-[#18181b] to-[#27272a] rounded-3xl shadow-[0_20px_60px_rgba(156,212,175,0.3)] flex items-center justify-center p-4 sm:p-5 border border-[#9cd4af]/20 backdrop-blur-xl translate-z-10"
                            >
                                <div className="w-full h-full bg-gradient-to-br from-[#9CD4AF] via-[#75ccc3] to-[#d7e48a] rounded-2xl flex items-center justify-center shadow-inner">
                                    <img src="/favicon.ico" alt="growbit" className="drop-shadow-lg" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#9cd4af]/20 to-transparent rounded-3xl" />
                            </motion.div>

                            <motion.div
                                animate={{ 
                                    y: [0, -10, 0],
                                    rotateX: [0, 5, 0]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[15%] right-[5%] sm:right-[15%] bg-gradient-to-br from-[#18181b]/90 to-[#27272a]/90 backdrop-blur-xl p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-[0_8px_32px_rgba(168,85,247,0.2)] border border-purple-500/20 flex items-center gap-2 sm:gap-3 min-w-[120px] sm:min-w-[150px] lg:min-w-[180px] translate-z-20 hover:scale-105 transition-transform"
                            >
                                <div className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-lg sm:rounded-xl flex items-center justify-center text-purple-400 shadow-inner">
                                    <Target className="w-4 sm:w-4 lg:w-5 h-4 sm:h-4 lg:h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-white text-xs sm:text-sm lg:text-base">GIS Survey</div>
                                    <div className="text-[10px] sm:text-xs text-gray-400">Field Mapping</div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl sm:rounded-2xl" />
                            </motion.div>

                            <motion.div
                                animate={{ 
                                    y: [0, 10, 0],
                                    rotateX: [0, -5, 0]
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-[25%] left-[5%] sm:left-[10%] bg-gradient-to-br from-[#18181b] to-[#27272a]    backdrop-blur-xl p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-[0_8px_32px_rgba(59,130,246,0.2)] border border-blue-500/20 flex items-center gap-2 sm:gap-3 min-w-[120px] sm:min-w-[150px] lg:min-w-[180px] translate-z-0 hover:scale-105 transition-transform"
                            >
                                <div className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-lg sm:rounded-xl flex items-center justify-center text-blue-400 shadow-inner">
                                    <BarChart3 className="w-4 sm:w-4 lg:w-5 h-4 sm:h-4 lg:h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-white text-xs sm:text-sm lg:text-base">Tracking</div>
                                    <div className="text-[10px] sm:text-xs text-gray-400">Live Dashboards</div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent  rounded-xl sm:rounded-2xl" />
                            </motion.div>

                            <motion.div
                                animate={{ 
                                    y: [0, -8, 0],
                                    rotateX: [0, 5, 0]
                                }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-[25%] right-[5%] bg-gradient-to-br from-[#18181b]/90 to-[#27272a]/90 backdrop-blur-xl p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-[0_8px_32px_rgba(249,115,22,0.2)] border border-orange-500/20 flex items-center gap-2 sm:gap-3 min-w-[120px] sm:min-w-[150px] lg:min-w-[180px] translate-z-30 hover:scale-105 transition-transform"
                            >
                                <div className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-lg sm:rounded-xl flex items-center justify-center text-orange-400 shadow-inner">
                                    <Megaphone className="w-4 sm:w-4 lg:w-5 h-4 sm:h-4 lg:h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-white text-xs sm:text-sm lg:text-base">Acquisition</div>
                                    <div className="text-[10px] sm:text-xs text-gray-400">Merchant & Customer</div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-xl sm:rounded-2xl" />
                            </motion.div>

                            <motion.div
                                animate={{ 
                                    y: [0, 12, 0],
                                    rotateX: [0, -5, 0]
                                }}
                                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                className="absolute bottom-[15%] left-[10%] sm:left-[20%] bg-gradient-to-br from-[#18181b]/90 to-[#27272a]/90 backdrop-blur-xl p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-[0_8px_32px_rgba(34,197,94,0.2)] border border-green-500/20 flex items-center gap-2 sm:gap-3 min-w-[120px] sm:min-w-[150px] lg:min-w-[180px] translate-z-10 hover:scale-105 transition-transform"
                            >
                                <div className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-lg sm:rounded-xl flex items-center justify-center text-green-400 shadow-inner">
                                    <Code className="w-4 sm:w-4 lg:w-5 h-4 sm:h-4 lg:h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-white text-xs sm:text-sm lg:text-base">Verification</div>
                                    <div className="text-[10px] sm:text-xs text-gray-400">BGV & Compliance</div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-xl sm:rounded-2xl" />
                            </motion.div>

                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [0, -100],
                                        opacity: [0, 1, 0],
                                        scale: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: 3 + i * 0.5,
                                        repeat: Infinity,
                                        delay: i * 0.8,
                                        ease: "easeOut"
                                    }}
                                    className="absolute bottom-0 w-1 h-1 bg-[#9cd4af] rounded-full"
                                    style={{
                                        left: `${20 + i * 10}%`
                                    }}
                                />
                            ))}

                            <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-visible">
                                <defs>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                        <feMerge>
                                            <feMergeNode in="coloredBlur"/>
                                            <feMergeNode in="SourceGraphic"/>
                                        </feMerge>
                                    </filter>
                                </defs>
                                <BeamPath x1="50%" y1="50%" x2="82%" y2="20%" duration={3} delay={0} />
                                <BeamPath x1="50%" y1="50%" x2="20%" y2="30%" duration={3.5} delay={0.5} />
                                <BeamPath x1="50%" y1="50%" x2="85%" y2="70%" duration={4} delay={1} />
                                <BeamPath x1="50%" y1="50%" x2="30%" y2="80%" duration={3.2} delay={1.5} />
                            </svg>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Hero
