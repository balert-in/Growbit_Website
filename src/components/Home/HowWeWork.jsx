import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HandDrawnTitle from '../common/HandDrawnTitle'

gsap.registerPlugin(ScrollTrigger)

const phases = [
    {
        id: 1,
        title: "Scope",
        description: "We start by understanding your goals — target regions, customer segments, and what success looks like for you.",
        align: "left"
    },
    {
        id: 2,
        title: "Deploy",
        description: "Our verified field teams hit the ground running. We handle recruitment, training, and logistics so you don't have to.",
        align: "right"
    },
    {
        id: 3,
        title: "Track",
        description: "Every task is geo-tagged and monitored in real-time. You get live dashboards, instant updates, and complete visibility.",
        align: "left"
    },
    {
        id: 4,
        title: "Scale",
        description: "Once the model works, we scale fast. Add more agents, enter new territories, or expand scope — all with performance accountability.",
        align: "right"
    }
]

const HowWeWork = () => {
    const sectionRef = useRef(null)
    const progressLineRef = useRef(null)
    const mobileProgressRef = useRef(null)
    const containerRef = useRef(null)
    const cardsRef = useRef([])

    useEffect(() => {
        const mm = gsap.matchMedia()

        mm.add("(min-width: 768px)", () => {
            if (progressLineRef.current) {
                gsap.fromTo(
                    progressLineRef.current,
                    { height: '0%' },
                    {
                        height: '100%',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top 80%',
                            end: 'bottom 50%',
                            scrub: 0.8,
                        }
                    }
                )
            }

            cardsRef.current.forEach((card, index) => {
                if (!card) return
                const isLeft = phases[index].align === 'left'
                gsap.fromTo(
                    card,
                    { opacity: 0, x: isLeft ? -60 : 60 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        }
                    }
                )
            })
        })

        mm.add("(max-width: 767px)", () => {
            if (mobileProgressRef.current) {
                gsap.fromTo(
                    mobileProgressRef.current,
                    { height: '0%' },
                    {
                        height: '100%',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top 85%',
                            end: 'bottom 60%',
                            scrub: 0.5,
                        }
                    }
                )
            }

            cardsRef.current.forEach((card, index) => {
                if (!card) return
                gsap.fromTo(
                    card,
                    { opacity: 0, x: 30 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 88%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                )
            })
        })

        return () => mm.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-16 lg:py-24 bg-[#09090b] overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
                    <HandDrawnTitle text="How We Work" />
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                        From Plan to Ground
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                        A straightforward process that takes your requirements and turns them into real-world execution — with tracking at every step.
                    </p>
                </div>

                <div ref={containerRef} className="relative max-w-4xl mx-auto">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[3px] hidden md:block">
                        <div className="absolute inset-0 bg-gray-800 rounded-full" />
                        <div
                            ref={progressLineRef}
                            className="absolute top-0 left-0 w-full rounded-full"
                            style={{
                                background: 'linear-gradient(to bottom, #75ccc3, #d7e48a, #75ccc3)',
                                height: '0%'
                            }}
                        />
                    </div>

                    <div className="hidden md:block space-y-16 relative">
                        {phases.map((item, index) => (
                            <div
                                key={item.id}
                                ref={el => cardsRef.current[index] = el}
                                className={`flex flex-row items-center gap-8 ${item.align === 'right' ? 'flex-row-reverse' : ''}`}
                            >
                                <div className={`w-[calc(50%-2rem)] ${item.align === 'right' ? 'text-left' : 'text-right'}`}>
                                    <div className="relative">
                                        <span className={`absolute -top-8 text-8xl font-black text-gray-800/40 select-none ${item.align === 'right' ? 'left-0' : 'right-0'}`}>
                                            {item.id}
                                        </span>
                                        <h3 className="text-3xl font-bold text-white mb-3 relative z-10 pt-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-base text-gray-400 leading-relaxed relative z-10">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="relative z-10 flex items-center justify-center w-10 h-10 shrink-0">
                                    <div className="w-5 h-5 bg-gradient-to-br from-[#75ccc3] to-[#d7e48a] rounded-full shadow-lg shadow-[#75ccc3]/40" />
                                </div>

                                <div className="w-[calc(50%-2rem)]" />
                            </div>
                        ))}
                    </div>

                    <div className="md:hidden relative pl-12">
                        <div className="absolute left-[18px] top-2 bottom-2 w-[2px]">
                            <div className="absolute inset-0 bg-gray-800 rounded-full" />
                            <div
                                ref={mobileProgressRef}
                                className="absolute top-0 left-0 w-full rounded-full"
                                style={{
                                    background: 'linear-gradient(to bottom, #75ccc3, #d7e48a, #75ccc3)',
                                    height: '0%'
                                }}
                            />
                        </div>

                        <div className="space-y-6">
                            {phases.map((item, index) => (
                                <div
                                    key={item.id}
                                    ref={el => { if (typeof window !== 'undefined' && window.innerWidth < 768) cardsRef.current[index] = el }}
                                    className="relative"
                                >
                                    <div className="absolute -left-12 top-0 w-10 h-10 flex items-center justify-center">
                                        <div className="relative">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#75ccc3] to-[#d7e48a] flex items-center justify-center shadow-lg shadow-[#75ccc3]/30">
                                                <span className="text-sm font-bold text-[#09090b]">{item.id}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-gray-800/50">
                                        <h3 className="text-lg font-bold text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWeWork


