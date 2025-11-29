import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, DollarSign, Activity, TrendingUp, BarChart3, PieChart, ArrowRight } from 'lucide-react'

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

const Screen1 = () => (
    <div className="w-full h-full bg-[#18181b] flex flex-col p-5">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-200">Overview</h3>
            <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
        </div>
        <div className="mb-4">
            <h2 className="text-2xl font-bold text-[#75ccc3]">$124,500</h2>
            <p className="text-xs text-gray-500">Total Revenue</p>
        </div>
        <div className="flex items-end gap-1.5 h-24 mb-4">
            <div className="w-1/5 bg-[#9CD4AF]/30 h-[40%] rounded-t-md"></div>
            <div className="w-1/5 bg-[#d7e48a] h-[70%] rounded-t-md"></div>
            <div className="w-1/5 bg-[#9CD4AF]/50 h-[50%] rounded-t-md"></div>
            <div className="w-1/5 bg-[#9CD4AF]/80 h-[90%] rounded-t-md"></div>
            <div className="w-1/5 bg-[#9CD4AF] h-[60%] rounded-t-md"></div>
        </div>
        <div className="mt-auto space-y-2">
            <div className="flex items-center justify-between p-2 bg-gray-800/50 rounded-lg">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#d7e48a] flex items-center justify-center">
                        <Users className="w-3 h-3 text-white" />
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-gray-200">New sub</div>
                    </div>
                </div>
                <span className="text-[10px] font-bold text-green-600">+$49</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-800/50 rounded-lg">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#75ccc3] flex items-center justify-center">
                        <DollarSign className="w-3 h-3 text-white" />
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-gray-200">Sale</div>
                    </div>
                </div>
                <span className="text-[10px] font-bold text-green-600">+$250</span>
            </div>
        </div>
    </div>
)

const Screen2 = () => (
    <div className="w-full h-full bg-[#18181b] flex flex-col p-5">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-200">Analytics</h3>
            <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-blue-900/20 p-3 rounded-xl">
                <Activity className="w-4 h-4 text-blue-500 mb-1" />
                <div className="text-lg font-bold text-gray-200">85%</div>
                <div className="text-[10px] text-gray-400">Engage</div>
            </div>
            <div className="bg-purple-900/20 p-3 rounded-xl">
                <TrendingUp className="w-4 h-4 text-purple-500 mb-1" />
                <div className="text-lg font-bold text-gray-200">+12%</div>
                <div className="text-[10px] text-gray-400">Growth</div>
            </div>
        </div>
        <div className="bg-gray-800/50 p-3 rounded-xl h-32 mb-3 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-gray-700 border-t-[#75ccc3] border-r-[#d7e48a]"></div>
        </div>
    </div>
)

const Screen3 = () => (
    <div className="w-full h-full bg-[#18181b] flex flex-col p-5">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-200">Team</h3>
            <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
        </div>
        <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3 p-2 border border-gray-800 rounded-lg bg-[#18181b]">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <div className="h-2 bg-gray-700 rounded w-16 mb-1"></div>
                        <div className="h-1.5 bg-gray-800 rounded w-10"></div>
                    </div>
                </div>
            ))}
        </div>
        <div className="mt-auto bg-white text-[#09090b] p-3 rounded-lg text-center text-xs font-bold">
            Invite Member
        </div>
    </div>
)

const Screen4 = () => (
    <div className="w-full h-full bg-[#18181b] flex flex-col p-5">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-200">Goals</h3>
            <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
        </div>
        <div className="space-y-4">
            <div>
                <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold">Q1 Revenue</span>
                    <span className="text-green-600">92%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#75ccc3] w-[92%]"></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold">User Growth</span>
                    <span className="text-blue-600">78%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 w-[78%]"></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold">Retention</span>
                    <span className="text-orange-600">64%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400 w-[64%]"></div>
                </div>
            </div>
        </div>
    </div>
)

const Screen5 = () => (
    <div className="w-full h-full bg-[#18181b] flex flex-col p-5">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-200">Messages</h3>
            <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
        </div>
        <div className="space-y-3">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3 p-2 border-b border-gray-800">
                    <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden shrink-0">
                        <img src={`https://i.pravatar.cc/100?img=${i + 30}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-gray-200 mb-0.5">Sarah Connor</div>
                        <div className="text-[10px] text-gray-400 leading-tight">Hey, can we schedule a call for tomorrow?</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)


const screens = [
    { id: 1, component: Screen1 },
    { id: 2, component: Screen2 },
    { id: 3, component: Screen3 },
    { id: 4, component: Screen4 },
    { id: 5, component: Screen5 },
]

const Hero2 = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % screens.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    const getCardStyle = (index) => {
        const total = screens.length;

        let diff = (index - activeIndex + total) % total;

        let position = 'hidden';
        let zIndex = 0;
        let x = 0;
        let scale = 0.8;
        let rotate = 0;
        let opacity = 0;

        if (diff === 0) {
            position = 'center';
            zIndex = 30;
            x = 0;
            scale = 1;
            rotate = 0;
            opacity = 1;
        } else if (diff === 1) {
            position = 'right1';
            zIndex = 20;
            x = 180;
            scale = 0.9;
            rotate = 10;
            opacity = 0.8;
        } else if (diff === 2) {
            position = 'right2';
            zIndex = 10;
            x = 320;
            scale = 0.8;
            rotate = 20;
            opacity = 0.6;
        } else if (diff === total - 1) {
            position = 'left1';
            zIndex = 20;
            x = -180;
            scale = 0.9;
            rotate = -10;
            opacity = 0.8;
        } else if (diff === total - 2) {
            position = 'left2';
            zIndex = 10;
            x = -320;
            scale = 0.8;
            rotate = -20;
            opacity = 0.6;
        }

        return { x, scale, rotate, zIndex, opacity };
    }

    return (
        <div className="relative w-full min-h-screen bg-[#09090b] overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#75ccc3]/20 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#d7e48a]/20 blur-[120px]" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-[#9cd4af]/10 blur-[100px]" />
            </div>

            {/* Main Content */}
            <div className="flex-1 container mx-auto px-4 pt-24 md:pt-32 flex flex-col items-center">

                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 z-10 relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-bold leading-[1.1] mb-4 tracking-tight text-white"
                    >
                        Your All-In-One Partner for <br />
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#75ccc3] to-[#d7e48a]">Business Growth</span>
                            <motion.svg
                                initial={{ scale: 0, x: "-50%" }}
                                animate={{ scale: 1, x: "-50%" }}
                                transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                                className="absolute -bottom-1 left-1/2 w-1/2 h-4 -z-10 text-[#d7e48a]"
                                viewBox="0 0 200 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <motion.path
                                    d="M2.00025 6.99997C25.7501 9.75001 59.6588 1.5 89.5 2.5C119.341 3.5 140 7.5 198 4.5"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </motion.svg>
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                        className="text-base md:text-md text-gray-400 mb-6 leading-relaxed max-w-xl mx-auto"
                    >
                        We bridge the gap between strategy and execution. From development gigs to high-level consulting, Growbit provides the ecosystem your business needs to scale efficiently.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.button
                            initial="initial"
                            whileHover="hover"
                            className="relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0B1120_0%,#4bffec_50%,#0B1120_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm md:text-base font-medium text-[#09090b] backdrop-blur-3xl">
                                <FlipText>Start Growing Now</FlipText>
                            </span>
                        </motion.button>
                    </motion.div>
                </div>

                <div className="relative w-full max-w-5xl h-[500px] md:h-[600px] flex justify-center items-start perspective-1000">

                    <div className="relative w-full h-full flex justify-center scale-[0.6] sm:scale-[0.7] md:scale-[0.85] lg:scale-100 origin-top">

                        <div className="absolute z-40 w-[300px] h-[600px] rounded-[3rem] shadow-md border-[8px] border-[#27272a] pointer-events-none bg-transparent ring-2 ring-[#2a303c]/20">
                            <div className="absolute top-[-2px] left-1/2 transform -translate-x-1/2 w-32 h-5 bg-[#27272a] rounded-b-2xl z-50"></div>
                        </div>

                        <div className="relative w-full h-full flex justify-center items-start pt-3">
                            {screens.map((screen, index) => {
                                const style = getCardStyle(index);
                                return (
                                    <motion.div
                                        key={screen.id}
                                        className="absolute w-[276px] h-[576px] bg-[#18181b] rounded-[2.5rem] shadow-md overflow-hidden border border-gray-800 origin-bottom"
                                        initial={false}
                                        animate={{
                                            x: style.x,
                                            scale: style.scale,
                                            rotate: style.rotate,
                                            zIndex: style.zIndex,
                                            opacity: style.opacity
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <div className="w-full h-full pt-6">
                                            <screen.component />
                                        </div>

                                        {style.zIndex < 30 && (
                                            <div className="absolute inset-0 bg-[#09090b]/30 backdrop-blur-[1px]" />
                                        )}
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero2
