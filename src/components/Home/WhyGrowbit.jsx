import { motion } from 'framer-motion'
import { Zap, Globe2, MapPin, Target, Award } from 'lucide-react'
import HandDrawnTitle from '../common/HandDrawnTitle'

const benefits = [
    {
        icon: Zap,
        title: "Faster Deployment",
        description: "Rapidly mobilize field teams in new markets within days, not weeks. Get your operations running while competitors are still planning.",
        color: "#75ccc3"
    },
    {
        icon: Globe2,
        title: "Localized Expertise",
        description: "Teams with deep regional knowledge and linguistic adaptability. We speak the local language — literally and culturally.",
        color: "#d7e48a"
    },
    {
        icon: MapPin,
        title: "Nationwide Coverage",
        description: "Seamless reach across urban, semi-urban, and rural regions. From metros to remote villages, we've got you covered.",
        color: "#9cd4af"
    },
    {
        icon: Target,
        title: "Performance-Driven Model",
        description: "Transparent KPIs and measurable business outcomes. Every task tracked, every result accountable.",
        color: "#75ccc3"
    },
    {
        icon: Award,
        title: "Trusted by Leading Brands",
        description: "Proven results with top enterprises across retail, fintech, and logistics. We deliver when it matters most.",
        color: "#d7e48a"
    }
]

const CardBackground = ({ title, color }) => {
    switch (title) {
        case "Nationwide Coverage":
            return (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full h-full flex items-center justify-center p-4"
                    >
                        <img 
                            src="/in.svg" 
                            alt="India Map" 
                            className="w-full h-full object-contain filter hue-rotate-15 saturate-50"
                        />
                    </motion.div>
                </div>
            )
        case "Faster Deployment":
            return (
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
                        <motion.path
                            d="M-50,450 L450,-50"
                            stroke={color}
                            strokeWidth="40"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                        <motion.path
                            d="M50,450 L450,50"
                            stroke={color}
                            strokeWidth="20"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        />
                    </svg>
                </div>
            )
        case "Localized Expertise":
            return (
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1" fill={color} />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-pattern)" opacity="0.3" />
                        
                        {[
                            { cx: 50, cy: 50 }, { cx: 150, cy: 50 },
                            { cx: 50, cy: 150 }, { cx: 150, cy: 150 },
                            { cx: 100, cy: 100 }
                        ].map((point, i) => (
                            <g key={i}>
                                <motion.circle
                                    cx={point.cx}
                                    cy={point.cy}
                                    r="4"
                                    fill="none"
                                    stroke={color}
                                    strokeWidth="2"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                />
                                <motion.circle
                                    cx={point.cx}
                                    cy={point.cy}
                                    r="15"
                                    fill={color}
                                    fillOpacity="0.2"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
                                />
                            </g>
                        ))}
                        
                        <motion.path
                            d="M50 50 L100 100 L150 50 M50 150 L100 100 L150 150"
                            stroke={color}
                            strokeWidth="1"
                            fill="none"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                    </svg>
                </div>
            )
        case "Performance-Driven Model":
            return (
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 flex items-end justify-around pb-8 px-8">
                    {[0.4, 0.6, 0.3, 0.8, 0.5, 0.9].map((height, i) => (
                        <motion.div
                            key={i}
                            className="w-[10%] rounded-t-lg"
                            style={{ backgroundColor: color, height: `${height * 100}%` }}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height * 100}%` }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                        />
                    ))}
                </div>
            )
        case "Trusted by Leading Brands":
            return (
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 flex items-center justify-center">
                    <svg className="w-[150%] h-[150%] animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke={color} strokeWidth="1" strokeDasharray="4 4" fill="none" />
                        <circle cx="50" cy="50" r="30" stroke={color} strokeWidth="2" strokeDasharray="2 6" fill="none" />
                        <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill={color} opacity="0.5" />
                    </svg>
                </div>
            )
        default:
            return null
    }
}

const BenefitCard = ({ benefit, index }) => {
    const isNationwide = benefit.title === "Nationwide Coverage";

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative ${isNationwide ? 'md:col-span-2 lg:col-span-1' : ''}`}
        >
            <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800/50 hover:border-gray-700/80 transition-all duration-500 overflow-hidden">
                
                <CardBackground title={benefit.title} color={benefit.color} />

                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at 50% 0%, ${benefit.color}10 0%, transparent 70%)`
                    }}
                />
                
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg"
                    style={{ 
                        background: `linear-gradient(135deg, ${benefit.color}20 0%, ${benefit.color}10 100%)`,
                        border: `1px solid ${benefit.color}30`
                    }}
                >
                    <benefit.icon 
                        className="w-6 h-6 sm:w-7 sm:h-7" 
                        style={{ color: benefit.color }}
                    />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 relative z-10">
                    {benefit.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed relative z-10">
                    {benefit.description}
                </p>

                <div 
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{
                        background: `linear-gradient(90deg, transparent 0%, ${benefit.color} 50%, transparent 100%)`
                    }}
                />
            </div>
        </motion.div>
    )
}

const WhyGrowbit = () => {
    return (
        <section className="relative py-16 sm:py-20 lg:py-24 bg-[#09090b] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[-5%] w-[40%] h-[40%] bg-[#75ccc3]/8 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-[#d7e48a]/8 rounded-full blur-[100px]" />
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="whyGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#75ccc3" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#whyGrid)" />
            </svg>

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
                    <HandDrawnTitle text="Why GrowBit" />
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
                    >
                        Built for{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#75ccc3] to-[#d7e48a]">
                            Real-World Scale
                        </span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
                    >
                        What makes us different? Speed, reach, accountability, and a track record that speaks for itself.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                    {benefits.slice(0, 3).map((benefit, index) => (
                        <BenefitCard key={benefit.title} benefit={benefit} index={index} />
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mt-5 sm:mt-6 lg:mt-8 max-w-4xl mx-auto">
                    {benefits.slice(3).map((benefit, index) => (
                        <BenefitCard key={benefit.title} benefit={benefit} index={index + 3} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyGrowbit


