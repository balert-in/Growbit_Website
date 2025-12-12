import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ABOUT_DATA } from '../../constants'
import HandDrawnTitle from '../common/HandDrawnTitle'

gsap.registerPlugin(ScrollTrigger)

const milestonePositions = [
    { x: 200, y: 160, side: 'left' },
    { x: 600, y: 320, side: 'right' },
    { x: 200, y: 480, side: 'left' },
    { x: 600, y: 640, side: 'right' },
    { x: 200, y: 800, side: 'left' }
]

const Timeline2 = () => {
    const sectionRef = useRef(null)
    const pathRef = useRef(null)
    const containerRef = useRef(null)
    const cardsRef = useRef([])
    const dotsRef = useRef([])
    const mobileCardsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (pathRef.current) {
                const pathLength = pathRef.current.getTotalLength()
                gsap.set(pathRef.current, {
                    strokeDasharray: pathLength,
                    strokeDashoffset: pathLength
                })

                gsap.to(pathRef.current, {
                    strokeDashoffset: 0,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                        end: 'bottom 50%',
                        scrub: 1,
                    }
                })
            }

            cardsRef.current.forEach((card, index) => {
                if (!card) return
                const progress = (index + 1) / milestonePositions.length

                gsap.fromTo(
                    card,
                    { opacity: 0, x: milestonePositions[index].side === 'left' ? -50 : 50, scale: 0.9 },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        duration: 0.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: `top+=${(progress - 0.15) * 100}% 70%`,
                            toggleActions: 'play none none reverse'
                        }
                    }
                )
            })



            mobileCardsRef.current.forEach((card, index) => {
                if (!card) return
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                )
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative bg-[#09090b] py-16 sm:py-20 md:py-24 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#75ccc3]/20 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#d7e48a]/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <HandDrawnTitle text="Milestones" />
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                        The Road We've Traveled
                    </h2>
                    <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto">
                        Every milestone marks a step forward in our mission
                    </p>
                </div>

                <div className="block md:hidden space-y-6">
                    <div className="relative pl-8">
                        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#75ccc3] via-[#d7e48a] to-[#75ccc3]" />
                        {ABOUT_DATA.timeline.map((item, index) => (
                            <div
                                key={index}
                                ref={el => mobileCardsRef.current[index] = el}
                                className="relative mb-6 last:mb-0"
                            >
                                <div className="absolute left-[-22px] top-4 w-3 h-3 rounded-full bg-gradient-to-br from-[#75ccc3] to-[#d7e48a] shadow-lg shadow-[#75ccc3]/30" />
                                <div className="bg-[#111113] border border-gray-800/60 rounded-xl p-4 sm:p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-[#75ccc3] to-[#d7e48a] bg-clip-text text-transparent">
                                            {item.year}
                                        </span>
                                        {item.year === "2025" && (
                                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#d7e48a] bg-[#d7e48a]/10 px-2 py-0.5 rounded-full">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#d7e48a] animate-pulse" />
                                                Now
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">{item.title}</h3>
                                    <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div ref={containerRef} className="hidden md:block relative" style={{ height: '900px' }}>
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 800 900"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                    >

                        <path
                            ref={pathRef}
                            d="M400,0 
                               C400,80 200,80 200,160 
                               C200,240 600,240 600,320 
                               C600,400 200,400 200,480 
                               C200,560 600,560 600,640 
                               C600,720 200,720 200,800 
                               C200,880 400,880 400,900"
                            stroke="url(#roadGradient)"
                            strokeWidth="10"
                            strokeLinecap="round"
                            fill="none"
                        />
                        {milestonePositions.map((pos, index) => (
                            <g key={index}>
                                <circle
                                    cx={pos.x}
                                    cy={pos.y}
                                    r="14"
                                    fill="url(#dotGradient)"
                                />
                                <circle
                                    cx={pos.x}
                                    cy={pos.y}
                                    r="6"
                                    fill="#09090b"
                                />
                            </g>
                        ))}
                        <defs>
                            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#75ccc3" />
                                <stop offset="50%" stopColor="#d7e48a" />
                                <stop offset="100%" stopColor="#75ccc3" />
                            </linearGradient>
                            <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#75ccc3" />
                                <stop offset="100%" stopColor="#d7e48a" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {ABOUT_DATA.timeline.map((item, index) => {
                        const pos = milestonePositions[index]
                        if (!pos) return null
                        const topPercent = (pos.y / 900) * 100
                        const isLeft = pos.side === 'left'

                        return (
                            <div
                                key={index}
                                ref={el => cardsRef.current[index] = el}
                                className="absolute w-[38%]"
                                style={{
                                    top: `${topPercent}%`,
                                    transform: 'translateY(-50%)',
                                    left: isLeft ? '0' : 'auto',
                                    right: isLeft ? 'auto' : '0'
                                }}
                            >
                                <div className={`bg-[#111113] border border-gray-800/60 rounded-xl p-4 lg:p-5 group hover:border-[#75ccc3]/30 transition-all duration-300 ${isLeft ? 'mr-4' : 'ml-4'}`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xl lg:text-2xl font-black bg-gradient-to-r from-[#75ccc3] to-[#d7e48a] bg-clip-text text-transparent">
                                            {item.year}
                                        </span>
                                        {item.year === "2025" && (
                                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#d7e48a] bg-[#d7e48a]/10 px-2 py-0.5 rounded-full">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#d7e48a] animate-pulse" />
                                                Now
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-sm lg:text-base font-bold text-white mb-1.5 group-hover:text-[#75ccc3] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs lg:text-sm text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Timeline2
