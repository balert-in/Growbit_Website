import React from 'react'
import { ArrowRight, Play, BarChart3, Target, Megaphone, Code, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const BeamPath = ({ x1, y1, x2, y2, duration, delay }) => {
    return (
        <g>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#e5e7eb" strokeWidth="1" />

            <motion.line
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#9CD4AF"
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
        <div className="relative w-full min-h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#9CD4AF]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#9CD4AF]/20 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-[#d7e48a]/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-20 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-100 px-4 py-1.5 rounded-full shadow-sm">
                            <Sparkles className="w-4 h-4 text-[#75ccc3]" />
                            <span className="text-sm font-medium text-gray-600">Let's grow together</span>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
                            Accelerate <br />
                            Business <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#75ccc3] to-[#d7e48a]">Growth</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                            Growbit bridges the gap between ambition and execution. An integrated ecosystem for strategy, development, and marketing.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-12">
                            <button className="bg-[#0B1120] text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                                Start Growing Now
                            </button>
                            <button className="bg-white text-gray-700 px-8 py-4 rounded-full font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm">
                                <div className="w-6 h-6 rounded-full border-2 border-gray-900 flex items-center justify-center">
                                    <Play className="w-3 h-3 fill-gray-900" />
                                </div>
                                See How It Works
                            </button>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-[#0B1120] flex items-center justify-center text-white text-xs font-medium">
                                    2k+
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex text-yellow-400 text-sm">
                                    {'★'.repeat(5)}
                                </div>
                                <span className="text-sm text-gray-600 font-medium">Trusted by 500+ founders</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[600px] w-full items-center justify-center hidden lg:flex perspective-1000">
                        <div className="relative w-full h-full flex items-center justify-center transform-style-3d rotate-x-12">
                            <div className="absolute z-20 w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center p-4 border border-gray-100 translate-z-10">
                                <div className="w-full h-full bg-gradient-to-br from-[#9CD4AF] to-[#75ccc3] rounded-2xl flex items-center justify-center">
                                    <img src="/favicon.ico" alt="growbit" />
                                </div>
                            </div>

                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[15%] right-[15%] bg-white p-4 rounded-2xl shadow-lg border border-gray-50 flex items-center gap-3 min-w-[180px] translate-z-20"
                            >
                                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                                    <Target className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Strategy</div>
                                    <div className="text-xs text-gray-500">Audit & Plan</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-[25%] left-[10%] bg-white p-4 rounded-2xl shadow-lg border border-gray-50 flex items-center gap-3 min-w-[180px] translate-z-0"
                            >
                                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                    <BarChart3 className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Analytics</div>
                                    <div className="text-xs text-gray-500">Data Insights</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-[25%] right-[5%] bg-white p-4 rounded-2xl shadow-lg border border-gray-50 flex items-center gap-3 min-w-[180px] translate-z-30"
                            >
                                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                                    <Megaphone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Marketing</div>
                                    <div className="text-xs text-gray-500">Growth SEO</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                className="absolute bottom-[15%] left-[20%] bg-white p-4 rounded-2xl shadow-lg border border-gray-50 flex items-center gap-3 min-w-[180px] translate-z-10"
                            >
                                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                                    <Code className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Development</div>
                                    <div className="text-xs text-gray-500">Web & Apps</div>
                                </div>
                            </motion.div>

                            <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-visible">
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
