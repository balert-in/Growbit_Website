import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Users, DollarSign, Activity, TrendingUp, BarChart3, PieChart, ArrowRight, CheckCircle, Clock, Star, Briefcase, Code, Megaphone, Rocket, ShieldCheck, MessageSquare, Zap, Layers, Globe } from 'lucide-react'
import HoverBorderGradient from '../common/HoverBorderGradient'

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

const CardHeader = ({ icon: Icon, title, color, subtext }) => (
    <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl bg-${color}/10 ring-1 ring-${color}/20`}>
                <Icon className={`w-4 h-4 text-${color}`} />
            </div>
            <h3 className="text-sm font-bold text-white tracking-wide">{title}</h3>
        </div>
        {subtext && <div className={`text-[10px] font-medium text-${color} bg-${color}/10 px-2 py-1 rounded-full`}>{subtext}</div>}
    </div>
)

const Screen1 = () => (
    <div className="w-full h-full bg-[#18181b] flex flex-col p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#9cd4af]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#9cd4af]/10 ring-1 ring-[#9cd4af]/20">
                    <TrendingUp className="w-4 h-4 text-[#9cd4af]" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-wide">Growth</h3>
            </div>
            <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9cd4af] animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#9cd4af]/30" />
            </div>
        </div>

        <div className="mb-8 relative z-10">
            <div className="flex items-baseline gap-3 mb-2">
                <h2 className="text-4xl font-bold text-white tracking-tight">+127%</h2>
                <span className="flex items-center gap-1 text-xs font-bold text-[#09090b] bg-[#9cd4af] px-2 py-0.5 rounded-full">
                    <Zap className="w-3 h-3" /> ROI
                </span>
            </div>
            <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">Consulting Revenue</p>
        </div>

        <div className="flex-1 w-full relative flex items-end gap-1.5 mb-2">
            {[40, 65, 55, 85, 60, 95, 75].map((h, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                    className="w-full bg-gradient-to-t from-[#9cd4af]/10 via-[#9cd4af]/40 to-[#9cd4af] rounded-t-sm relative group"
                >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
            ))}
        </div>

        <div className="pt-4 border-t border-white/5 flex justify-between items-center">
            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Active Campaigns</div>
            <div className="text-xs font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                12 Running
            </div>
        </div>
    </div>
)

const Screen2 = () => (
    <div className="w-full h-full bg-[#18181b] flex flex-col p-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#75ccc3]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#75ccc3]/10 ring-1 ring-[#75ccc3]/20">
                    <Layers className="w-4 h-4 text-[#75ccc3]" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-wide">Roadmap</h3>
            </div>
            <div className="text-[10px] font-bold text-[#75ccc3] bg-[#75ccc3]/10 px-2.5 py-1 rounded-full">Q4 2024</div>
        </div>

        <div className="space-y-5 relative z-10">
            {[
                { title: 'MVP Launch', status: 'Done', color: '#9cd4af', width: '100%' },
                { title: 'Beta Testing', status: 'In Progress', color: '#75ccc3', width: '75%' },
                { title: 'Global Scale', status: 'Pending', color: '#71717a', width: '0%' }
            ].map((item, i) => (
                <div key={i} className="group">
                    <div className="flex justify-between mb-2">
                        <span className="text-xs font-bold text-gray-200 group-hover:text-white transition-colors">{item.title}</span>
                        <span className="text-[10px] font-medium" style={{ color: item.color }}>{item.status}</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: item.width }}
                            transition={{ duration: 1.5, delay: 0.5 + (i * 0.2), type: "spring" }}
                            className="h-full rounded-full relative"
                            style={{ backgroundColor: item.color }}
                        >
                            {item.status === 'In Progress' && (
                                <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
                            )}
                        </motion.div>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-auto bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#75ccc3]/20 flex items-center justify-center">
                <Code className="w-4 h-4 text-[#75ccc3]" />
            </div>
            <div>
                <div className="text-xs font-bold text-white">Tech Stack</div>
                <div className="text-[10px] text-gray-400">React • Node • AI</div>
            </div>
        </div>
    </div>
)

const Screen3 = () => (
    <div className="w-full h-full bg-[#18181b] flex flex-col p-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-[#d7e48a]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#d7e48a]/10 ring-1 ring-[#d7e48a]/20">
                    <Users className="w-4 h-4 text-[#d7e48a]" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-wide">Experts</h3>
            </div>
            <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gray-800 border-2 border-[#18181b] overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="" className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>

        <div className="space-y-3 relative z-10">
            {[
                { name: 'Alex M.', role: 'Senior Dev', rating: '5.0', img: 12 },
                { name: 'Sarah K.', role: 'SEO Pro', rating: '4.9', img: 24 },
                { name: 'David R.', role: 'Product Lead', rating: '5.0', img: 33 }
            ].map((expert, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.03)' }}
                    className="flex items-center gap-3 p-2.5 border border-white/5 rounded-xl bg-white/[0.02] transition-colors cursor-pointer"
                >
                    <div className="w-9 h-9 rounded-full bg-gray-800 overflow-hidden ring-2 ring-white/5">
                        <img src={`https://i.pravatar.cc/100?img=${expert.img}`} alt={expert.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <div className="text-xs font-bold text-white">{expert.name}</div>
                        <div className="text-[10px] text-gray-400">{expert.role}</div>
                    </div>
                    <div className="flex items-center gap-1 bg-[#d7e48a]/10 px-1.5 py-0.5 rounded-md">
                        <Star className="w-3 h-3 text-[#d7e48a] fill-[#d7e48a]" />
                        <span className="text-[10px] font-bold text-[#d7e48a]">{expert.rating}</span>
                    </div>
                </motion.div>
            ))}
        </div>

        <div className="mt-auto">
            <button className="w-full py-2.5 bg-[#d7e48a] text-[#09090b] rounded-xl text-xs font-bold hover:bg-[#c5d66a] transition-colors shadow-[0_0_20px_rgba(215,228,138,0.2)]">
                Hire Top Talent
            </button>
        </div>
    </div>
)

const Screen4 = () => (
    <div className="w-full h-full bg-[#18181b] flex flex-col p-6 relative overflow-hidden">
        <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 ring-1 ring-blue-500/20">
                    <BarChart3 className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-wide">Marketing</h3>
            </div>
            <Globe className="w-4 h-4 text-blue-400 opacity-50" />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-white/[0.02] p-4 rounded-2xl border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-[10px] text-gray-400 mb-1 font-medium uppercase">Leads</div>
                <div className="text-xl font-bold text-white mb-1">1,240</div>
                <div className="text-[10px] text-green-400 flex items-center gap-1 bg-green-400/10 w-fit px-1.5 py-0.5 rounded">
                    <TrendingUp className="w-3 h-3" /> +18%
                </div>
            </div>
            <div className="bg-white/[0.02] p-4 rounded-2xl border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-[10px] text-gray-400 mb-1 font-medium uppercase">Conv.</div>
                <div className="text-xl font-bold text-white mb-1">4.8%</div>
                <div className="text-[10px] text-green-400 flex items-center gap-1 bg-green-400/10 w-fit px-1.5 py-0.5 rounded">
                    <TrendingUp className="w-3 h-3" /> +2.1%
                </div>
            </div>
        </div>

        <div className="flex-1 bg-white/[0.02] rounded-2xl p-4 border border-white/5 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <PieChart className="w-24 h-24 text-blue-400" />
            </div>
            <div className="relative z-10 text-center">
                <div className="text-xs font-bold text-gray-200 mb-2">Campaign Status</div>
                <div className="flex items-center gap-2 justify-center bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] font-bold text-green-400 uppercase tracking-wide">Active</span>
                </div>
            </div>
        </div>
    </div>
)

const Screen5 = () => (
    <div className="w-full h-full bg-[#18181b] flex flex-col p-6 relative overflow-hidden">
        <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 ring-1 ring-purple-500/20">
                    <ShieldCheck className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-wide">Success</h3>
            </div>
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
        </div>

        <div className="flex-1 flex flex-col justify-center relative z-10">
            <div className="bg-gradient-to-b from-white/[0.05] to-transparent p-5 rounded-3xl border border-white/10 relative backdrop-blur-sm">
                <div className="absolute -top-3 -left-2 bg-[#18181b] p-1.5 rounded-full border border-gray-800 shadow-xl">
                    <MessageSquare className="w-4 h-4 text-purple-400" />
                </div>
                <p className="text-xs text-gray-300 leading-relaxed italic mb-4 font-medium">
                    "GrowBit helped us scale our operations 10x in just 6 months. The expert talent they provided was game-changing."
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden ring-2 ring-purple-500/20">
                        <img src="https://i.pravatar.cc/100?img=5" alt="Client" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-white">Elena R.</div>
                        <div className="text-[9px] text-gray-500 font-medium uppercase tracking-wide">CEO, TechStart</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-6 flex justify-between items-center bg-white/[0.02] p-3 rounded-xl border border-white/5">
            <div className="text-[10px] text-gray-400 font-medium">Client Satisfaction</div>
            <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500 drop-shadow-[0_0_2px_rgba(234,179,8,0.5)]" />
                ))}
            </div>
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
        }, 3500)
        return () => clearInterval(timer)
    }, [])

    const getCardStyle = useMemo(() => {
        return (index) => {
            const total = screens.length;
            const diff = (index - activeIndex + total) % total;

            if (diff === 0) {
                return { x: 0, scale: 1, rotate: 0, zIndex: 30, opacity: 1 };
            } else if (diff === 1) {
                return { x: 160, scale: 0.85, rotate: 12, zIndex: 20, opacity: 0.6 };
            } else if (diff === 2) {
                return { x: 280, scale: 0.75, rotate: 24, zIndex: 10, opacity: 0.3 };
            } else if (diff === total - 1) {
                return { x: -160, scale: 0.85, rotate: -12, zIndex: 20, opacity: 0.6 };
            } else if (diff === total - 2) {
                return { x: -280, scale: 0.75, rotate: -24, zIndex: 10, opacity: 0.3 };
            }
            return { x: 0, scale: 0, rotate: 0, zIndex: 0, opacity: 0 };
        }
    }, [activeIndex])

    return (
        <div className="relative w-full min-h-screen bg-[#09090b] overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#75ccc3]/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#d7e48a]/10 blur-[120px]" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-[#9cd4af]/5 blur-[100px]" />
            </div>

            {/* Main Content */}
            <div className="flex-1 container mx-auto px-4 pt-24 md:pt-32 flex flex-col items-center">

                <div className="text-center max-w-3xl mx-auto mb-16 z-10 relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-black leading-[1.1] mb-6 tracking-tight text-white"
                    >
                        Your All-In-One Partner for <br />
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#75ccc3] via-[#9cd4af] to-[#d7e48a]">Business Growth</span>
                            <motion.svg
                                initial={{ scale: 0, x: "-50%" }}
                                animate={{ scale: 1, x: "-50%" }}
                                transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                                className="absolute -bottom-2 left-1/2 w-full h-4 -z-10 text-[#d7e48a]/30"
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
                        className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto font-medium"
                    >
                        We bridge the gap between strategy and execution. From development gigs to high-level consulting, Growbit provides the ecosystem your business needs to scale efficiently.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                        className="flex justify-center"
                    >
                        <HoverBorderGradient
                            duration={1}
                            clockwise={true}
                            containerClassName="shadow-[0_0_30px_rgba(117,204,195,0.3)] hover:shadow-[0_0_50px_rgba(117,204,195,0.5)] transition-shadow duration-300"
                            className="text-sm md:text-base font-bold cursor-pointer"
                        >
                            <motion.div initial="initial" whileHover="hover">
                                <FlipText>Start Growing Now</FlipText>
                            </motion.div>
                        </HoverBorderGradient>
                    </motion.div>
                </div>

                <div className="relative w-full max-w-5xl h-[500px] md:h-[600px] flex justify-center items-start perspective-1000">

                    <div className="relative w-full h-full flex justify-center scale-[0.65] sm:scale-[0.75] md:scale-[0.9] lg:scale-100 origin-top">

                        {/* Phone Frame */}
                        <div className="absolute z-40 w-[300px] h-[600px] rounded-[3.5rem] shadow-2xl border-[8px] border-[#27272a] pointer-events-none bg-transparent ring-1 ring-white/10">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#27272a] rounded-b-2xl z-50 flex items-center justify-center">
                                <div className="w-16 h-1.5 bg-[#18181b] rounded-full"></div>
                            </div>
                        </div>

                        <div className="relative w-full h-full flex justify-center items-start pt-3">
                            {screens.map((screen, index) => {
                                const style = getCardStyle(index);
                                return (
                                    <motion.div
                                        key={screen.id}
                                        className="absolute w-[290px] h-[580px] bg-[#18181b] rounded-[3rem] shadow-2xl overflow-hidden border border-gray-800/50 origin-bottom will-change-transform"
                                        initial={false}
                                        animate={{
                                            x: style.x,
                                            scale: style.scale,
                                            rotate: style.rotate,
                                            opacity: style.opacity
                                        }}
                                        style={{ zIndex: style.zIndex }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 30,
                                            mass: 0.8
                                        }}
                                    >
                                        <div className="w-full h-full pt-8">
                                            <screen.component />
                                        </div>

                                        {style.zIndex < 30 && (
                                            <div className="absolute inset-0 bg-[#09090b]/70 pointer-events-none" />
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

