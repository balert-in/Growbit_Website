import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Apple, Play, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const FloatingDots = () => {
    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="dotGradient1" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#75ccc3" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#75ccc3" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="dotGradient2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#d7e48a" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#d7e48a" stopOpacity="0" />
                </radialGradient>
            </defs>
            <circle cx="10%" cy="20%" r="3" fill="url(#dotGradient1)" className="animate-pulse" style={{ animationDelay: '0s' }} />
            <circle cx="85%" cy="15%" r="4" fill="url(#dotGradient2)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="90%" cy="70%" r="3" fill="url(#dotGradient1)" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="5%" cy="80%" r="5" fill="url(#dotGradient2)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <circle cx="75%" cy="85%" r="3" fill="url(#dotGradient1)" className="animate-pulse" style={{ animationDelay: '2s' }} />
            <circle cx="20%" cy="60%" r="4" fill="url(#dotGradient2)" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
        </svg>
    )
}

const AnimatedRing = ({ className, delay = 0 }) => {
    return (
        <svg className={`absolute pointer-events-none ${className}`} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id={`ringGrad${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#75ccc3" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#d7e48a" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#75ccc3" stopOpacity="0.1" />
                </linearGradient>
            </defs>
            <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke={`url(#ringGrad${delay})`}
                strokeWidth="1"
                strokeDasharray="20 10 5 10"
                style={{
                    animation: `spin 20s linear infinite`,
                    animationDelay: `${delay}s`,
                    transformOrigin: 'center'
                }}
            />
            <circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke={`url(#ringGrad${delay})`}
                strokeWidth="0.5"
                strokeDasharray="8 15"
                style={{
                    animation: `spin 25s linear infinite reverse`,
                    animationDelay: `${delay + 0.5}s`,
                    transformOrigin: 'center'
                }}
            />
        </svg>
    )
}

const GridPattern = () => {
    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#75ccc3" strokeWidth="0.5" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
    )
}

const AppShowcase = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const descRef = useRef(null)
    const buttonsRef = useRef(null)
    const glowRef = useRef(null)
    const leftPhoneRef = useRef(null)
    const centerPhoneRef = useRef(null)
    const rightPhoneRef = useRef(null)
    const decorRef = useRef(null)
    const appBtnRef = useRef(null)
    const playBtnRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            gsap.fromTo(
                descRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            gsap.fromTo(
                buttonsRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            gsap.fromTo(
                glowRef.current,
                { opacity: 0, scale: 0.5 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            gsap.fromTo(
                decorRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            gsap.fromTo(
                centerPhoneRef.current,
                { opacity: 0, y: 100, scale: 0.8 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            gsap.fromTo(
                leftPhoneRef.current,
                { opacity: 0, x: 60, rotate: 0 },
                {
                    opacity: 1,
                    x: 0,
                    rotate: -8,
                    duration: 1.2,
                    delay: 0.3,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            gsap.fromTo(
                rightPhoneRef.current,
                { opacity: 0, x: -60, rotate: 0 },
                {
                    opacity: 1,
                    x: 0,
                    rotate: 8,
                    duration: 1.2,
                    delay: 0.3,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )



            const handleAppBtnEnter = () => {
                gsap.to(appBtnRef.current, {
                    scale: 1.02,
                    y: -2,
                    duration: 0.3,
                    ease: 'power2.out'
                })
            }
            const handleAppBtnLeave = () => {
                gsap.to(appBtnRef.current, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                })
            }

            const handlePlayBtnEnter = () => {
                gsap.to(playBtnRef.current, {
                    scale: 1.02,
                    y: -2,
                    duration: 0.3,
                    ease: 'power2.out'
                })
            }
            const handlePlayBtnLeave = () => {
                gsap.to(playBtnRef.current, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                })
            }

            appBtnRef.current?.addEventListener('mouseenter', handleAppBtnEnter)
            appBtnRef.current?.addEventListener('mouseleave', handleAppBtnLeave)
            playBtnRef.current?.addEventListener('mouseenter', handlePlayBtnEnter)
            playBtnRef.current?.addEventListener('mouseleave', handlePlayBtnLeave)

            return () => {
                appBtnRef.current?.removeEventListener('mouseenter', handleAppBtnEnter)
                appBtnRef.current?.removeEventListener('mouseleave', handleAppBtnLeave)
                playBtnRef.current?.removeEventListener('mouseenter', handlePlayBtnEnter)
                playBtnRef.current?.removeEventListener('mouseleave', handlePlayBtnLeave)
            }
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 bg-[#09090b] overflow-hidden">
            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .btn-shimmer::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transform: translateX(-100%);
                }
                .btn-shimmer:hover::before {
                    animation: shimmer 0.8s ease-in-out;
                }
            `}</style>

            <GridPattern />
            <FloatingDots />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-20">

                    <div className="flex-1 text-center lg:text-left z-10">
                        <h2
                            ref={titleRef}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
                        >
                            Manage Your Growth <br />
                            <span className="bg-gradient-to-r from-[#75ccc3] to-[#d7e48a] bg-clip-text text-transparent">Anytime, Anywhere</span>
                        </h2>

                        <p
                            ref={descRef}
                            className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            Download the Growbit app to track your revenue, manage your team, and stay ahead of the competition right from your pocket.
                        </p>

                        <div
                            ref={buttonsRef}
                            className="flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3"
                        >
                            <button
                                ref={appBtnRef}
                                className="btn-shimmer relative flex items-center gap-2 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] text-white px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl cursor-pointer group overflow-hidden transition-all duration-500 border border-[#75ccc3]/20 hover:border-[#75ccc3]/50 shadow-md shadow-black/20 hover:shadow-[#75ccc3]/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#75ccc3]/10 via-[#d7e48a]/5 to-[#75ccc3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#75ccc3]/20 to-[#d7e48a]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                                <div className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-gradient-to-br from-[#75ccc3] to-[#5ab5ad] rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-md">
                                    <Apple className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
                                </div>
                                <div className="text-left relative z-10">
                                    <div className="text-[8px] sm:text-[9px] uppercase text-gray-400 group-hover:text-[#75ccc3] transition-colors duration-300 tracking-wider">Download on</div>
                                    <div className="text-xs sm:text-sm font-bold leading-tight">App Store</div>
                                </div>
                            </button>

                            <a
                                ref={playBtnRef}
                                href="https://play.google.com/store/apps/details?id=com.growbittechnologies.growbitappnew"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-shimmer relative flex items-center gap-2 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] text-white px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl cursor-pointer group overflow-hidden transition-all duration-500 border border-[#d7e48a]/20 hover:border-[#d7e48a]/50 shadow-md shadow-black/20 hover:shadow-[#d7e48a]/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#d7e48a]/10 via-[#75ccc3]/5 to-[#d7e48a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#d7e48a]/20 to-[#75ccc3]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                                <div className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-gradient-to-br from-[#d7e48a] to-[#c4d178] rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-md">
                                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-[#09090b] text-[#09090b] ml-0.5" />
                                </div>
                                <div className="text-left relative z-10">
                                    <div className="text-[8px] sm:text-[9px] uppercase text-gray-400 group-hover:text-[#d7e48a] transition-colors duration-300 tracking-wider">Get it on</div>
                                    <div className="text-xs sm:text-sm font-bold leading-tight">Google Play</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 relative w-full flex items-center justify-center py-8 sm:py-0">
                        <div ref={decorRef} className="absolute inset-0 pointer-events-none">
                            <AnimatedRing className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" delay={0} />
                            <AnimatedRing className="w-[150px] sm:w-[220px] md:w-[300px] lg:w-[380px] h-[150px] sm:h-[220px] md:h-[300px] lg:h-[380px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" delay={2} />
                        </div>

                        <div
                            ref={glowRef}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] bg-gradient-to-tr from-[#75ccc3]/25 to-[#d7e48a]/25 blur-[60px] sm:blur-[80px] md:blur-[100px] rounded-full pointer-events-none"
                        />

                        <div className="relative w-full h-[280px] sm:h-[380px] md:h-[450px] lg:h-[550px] flex items-center justify-center">
                            <div
                                ref={leftPhoneRef}
                                className="absolute z-10 w-[130px] sm:w-[170px] md:w-[185px] lg:w-[220px] left-[20%] sm:left-[18%] md:left-[25%] lg:left-[15%]"
                                style={{ transformOrigin: 'center bottom' }}
                            >
                                <div className="absolute -inset-2 bg-gradient-to-tr from-[#75ccc3]/20 to-transparent rounded-[1.5rem] sm:rounded-[2rem] blur-xl opacity-60" />
                                <img
                                    src="/welcome.png"
                                    alt="Welcome Screen"
                                    className="relative w-full h-auto drop-shadow-2xl"
                                />
                            </div>

                            <div
                                ref={centerPhoneRef}
                                className="relative z-20 w-[140px] sm:w-[180px] md:w-[195px] lg:w-[230px]"
                            >
                                <div className="absolute -inset-3 bg-gradient-to-tr from-[#75ccc3]/30 to-[#d7e48a]/30 rounded-[1.5rem] sm:rounded-[2rem] blur-xl opacity-70" />
                                <img
                                    src="/dashboard.png"
                                    alt="Dashboard Screen"
                                    className="relative w-full h-auto drop-shadow-2xl"
                                />
                            </div>

                            <div
                                ref={rightPhoneRef}
                                className="absolute z-10 w-[140px] sm:w-[180px] md:w-[195px] lg:w-[230px] right-[20%] sm:right-[18%] md:right-[25%] lg:right-[15%]"
                                style={{ transformOrigin: 'center bottom' }}
                            >
                                <div className="absolute -inset-2 bg-gradient-to-tl from-[#d7e48a]/20 to-transparent rounded-[1.5rem] sm:rounded-[2rem] blur-xl opacity-60" />
                                <img
                                    src="/leads.png"
                                    alt="Leads Screen"
                                    className="relative w-full h-auto drop-shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AppShowcase
