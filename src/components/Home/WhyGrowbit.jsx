import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Globe2, MapPin, Target, Award } from 'lucide-react'
import HandDrawnTitle from '../common/HandDrawnTitle'

gsap.registerPlugin(ScrollTrigger)

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
        description: "Teams with deep regional knowledge and linguistic adaptability. We speak the local language literally and culturally.",
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

const getBentoClasses = (index) => {
    switch (index) {
        case 0: return "col-span-1 sm:col-span-2 lg:col-span-2"
        case 1: return "col-span-1 sm:col-span-1 lg:col-span-1"
        case 2: return "col-span-1 sm:col-span-1 lg:col-span-1"
        case 3: return "col-span-1 sm:col-span-1 lg:col-span-1"
        case 4: return "col-span-1 sm:col-span-1 lg:col-span-1"
        default: return "col-span-1"
    }
}

const SpeedBackground = ({ color }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700">
        <style>
            {`
            @keyframes dashMove {
                0% { stroke-dashoffset: 100; transform: translateX(-5%); }
                100% { stroke-dashoffset: -100; transform: translateX(5%); }
            }
            `}
        </style>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {[...Array(12)].map((_, i) => (
                <line 
                    key={i}
                    x1="-10%" y1={10 + i * 8 + "%"}
                    x2="110%" y2={10 + i * 8 + "%"}
                    stroke={color}
                    strokeWidth={Math.random() * 1.5 + 0.5}
                    strokeDasharray={`${Math.random() * 30 + 10} ${Math.random() * 40 + 20}`}
                    style={{
                        animation: `dashMove ${Math.random() * 2 + 1.5}s linear infinite`,
                        opacity: Math.random() * 0.4 + 0.1
                    }}
                />
            ))}
        </svg>
    </div>
)

const RadarBackground = ({ color }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-700">
        <style>
            {`
            @keyframes radarPulse {
                0% { transform: scale(0.2); opacity: 0.8; }
                100% { transform: scale(2.5); opacity: 0; }
            }
            `}
        </style>
        <svg className="w-[150%] h-[150%]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="10" fill="none" stroke={color} strokeWidth="0.5" style={{ animation: 'radarPulse 4s linear infinite' }} />
            <circle cx="50" cy="50" r="10" fill="none" stroke={color} strokeWidth="0.5" style={{ animation: 'radarPulse 4s linear infinite 1.3s' }} />
            <circle cx="50" cy="50" r="10" fill="none" stroke={color} strokeWidth="0.5" style={{ animation: 'radarPulse 4s linear infinite 2.6s' }} />
            <circle cx="50" cy="50" r="2" fill={color} />
            <line x1="50" y1="10" x2="50" y2="90" stroke={color} strokeWidth="0.2" opacity="0.4" />
            <line x1="10" y1="50" x2="90" y2="50" stroke={color} strokeWidth="0.2" opacity="0.4" />
        </svg>
    </div>
)

const GridNodesBackground = ({ color }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700">
        <style>
            {`
            @keyframes blinkNode {
                0%, 100% { opacity: 0.1; transform: scale(0.8); }
                50% { opacity: 0.8; transform: scale(1.5); }
            }
            `}
        </style>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="dotGridMap" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill={color} opacity="0.2"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotGridMap)" />
            {[...Array(6)].map((_, i) => (
                <circle
                    key={i}
                    cx={`${Math.random() * 80 + 10}%`}
                    cy={`${Math.random() * 80 + 10}%`}
                    r="2"
                    fill={color}
                    style={{
                        animation: `blinkNode ${Math.random() * 2 + 1.5}s ease-in-out infinite`,
                        animationDelay: `${Math.random()}s`,
                        transformOrigin: 'center'
                    }}
                />
            ))}
        </svg>
    </div>
)

const ChartBackground = ({ color }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15 group-hover:opacity-30 transition-opacity duration-700 flex items-end justify-around px-8 pb-4">
        <style>
            {`
            @keyframes barGrow {
                0%, 100% { transform: scaleY(0.4); }
                50% { transform: scaleY(1); }
            }
            `}
        </style>
        {[...Array(6)].map((_, i) => (
            <div 
                key={i}
                className="w-[8%] rounded-t-sm origin-bottom"
                style={{
                    backgroundColor: color,
                    height: `${30 + Math.random() * 50}%`,
                    animation: `barGrow ${2 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random()}s`
                }}
            />
        ))}
    </div>
)

const OrbitalBackground = ({ color }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700 flex items-center justify-center">
        <style>
            {`
            @keyframes orbitSpin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            @keyframes orbitSpinReverse {
                0% { transform: rotate(360deg); }
                100% { transform: rotate(0deg); }
            }
            `}
        </style>
        <svg className="w-[120%] h-[120%]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g style={{ animation: 'orbitSpin 20s linear infinite', transformOrigin: '50% 50%' }}>
                <circle cx="50" cy="50" r="30" fill="none" stroke={color} strokeWidth="0.3" strokeDasharray="4 4" />
                <circle cx="80" cy="50" r="2" fill={color} />
                <circle cx="20" cy="50" r="1.5" fill={color} opacity="0.6"/>
            </g>
            <g style={{ animation: 'orbitSpinReverse 25s linear infinite', transformOrigin: '50% 50%' }}>
                <circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="0.2" strokeDasharray="2 6" />
                <circle cx="50" cy="5" r="3" fill={color} opacity="0.8" />
                <circle cx="50" cy="95" r="1.5" fill={color} opacity="0.5" />
            </g>
        </svg>
    </div>
)

const CardBackground = ({ color, title }) => {
    switch (title) {
        case "Faster Deployment": return <SpeedBackground color={color} />
        case "Localized Expertise": return <RadarBackground color={color} />
        case "Nationwide Coverage": return <GridNodesBackground color={color} />
        case "Performance-Driven Model": return <ChartBackground color={color} />
        case "Trusted by Leading Brands": return <OrbitalBackground color={color} />
        default: return null
    }
}

const WhyGrowbit = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const descRef = useRef(null)
    const cardsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            )

            gsap.fromTo(
                descRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            )

            cardsRef.current.forEach((card, index) => {
                if (!card) return
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 40, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                )
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative py-20 sm:py-24 bg-[#09090b] overflow-hidden selection:bg-[#75ccc3]/30">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-[#75ccc3]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-[#d7e48a]/10 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-[#9cd4af]/5 rounded-full blur-[100px]" />
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="whyGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#75ccc3" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#whyGrid)" />
            </svg>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <div className="inline-block mb-4 sm:mb-6">
                        <HandDrawnTitle text="Why GrowBit" />
                    </div>
                    
                    <h2
                        ref={titleRef}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight opacity-0"
                    >
                        Built for{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#75ccc3] via-[#9cd4af] to-[#d7e48a]">
                            Real-World Scale
                        </span>
                    </h2>
                    
                    <p
                        ref={descRef}
                        className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed font-light opacity-0"
                    >
                        What makes us different? Speed, reach, accountability, and a track record that speaks for itself.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon
                        return (
                            <div
                                key={benefit.title}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className={`group relative flex flex-col ${getBentoClasses(index)} opacity-0`}
                            >
                                <div className="relative flex-1 bg-[#111113]/80 backdrop-blur-xl rounded-[1.5rem] p-6 border border-white/[0.05] hover:border-white/[0.1] transition-all duration-500 overflow-hidden shadow-xl hover:shadow-[0_8px_32px_rgba(117,204,195,0.08)] hover:-translate-y-1">
                                    
                                    <CardBackground color={benefit.color} title={benefit.title} />

                                    <div className="relative z-10 flex flex-col h-full justify-between">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 backdrop-blur-md shrink-0 transition-transform duration-500 group-hover:scale-110"
                                            style={{ 
                                                background: `linear-gradient(135deg, ${benefit.color}15 0%, ${benefit.color}05 100%)`,
                                                border: `1px solid ${benefit.color}30`
                                            }}
                                        >
                                            <Icon 
                                                className="w-6 h-6" 
                                                style={{ color: benefit.color }}
                                            />
                                        </div>

                                        <div className="mt-auto">
                                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-sm">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WhyGrowbit
