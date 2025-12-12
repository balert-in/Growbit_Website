import React from 'react'
import { motion } from 'framer-motion'
import { ABOUT_DATA } from '../../constants'
import HandDrawnTitle from '../common/HandDrawnTitle'

const Journey = () => {
    return (
        <section className="relative bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#75ccc3]/20 via-[#9cd4af]/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#d7e48a]/20 via-[#9cd4af]/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#75ccc3]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="journeyDots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill="#75ccc3" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#journeyDots)" />
            </svg>

            <svg className="hidden sm:block absolute top-20 right-10 w-[400px] h-[400px] pointer-events-none opacity-25" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 100 Q 60 20, 100 100 T 180 100" stroke="url(#curveGrad1)" strokeWidth="2" fill="none" />
                <path d="M20 120 Q 60 40, 100 120 T 180 120" stroke="url(#curveGrad1)" strokeWidth="1.5" fill="none" />
                <path d="M20 140 Q 60 60, 100 140 T 180 140" stroke="url(#curveGrad1)" strokeWidth="1" fill="none" />
                <defs>
                    <linearGradient id="curveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#75ccc3" />
                        <stop offset="100%" stopColor="#d7e48a" />
                    </linearGradient>
                </defs>
            </svg>

            <svg className="absolute bottom-10 left-0 w-[300px] h-[300px] pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="leftDotPattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                        <circle cx="4" cy="4" r="3" fill="#d7e48a" />
                        <circle cx="16" cy="16" r="2" fill="#75ccc3" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#leftDotPattern)" />
            </svg>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <HandDrawnTitle text="Our Journey" theme="light" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-1"
                    >
                        <div className="absolute -inset-8 bg-gradient-to-br from-[#75ccc3]/30 via-[#9cd4af]/20 to-[#d7e48a]/30 rounded-full blur-3xl opacity-50" />
                        <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src={ABOUT_DATA.journey.imageUrl}
                                alt="Our Journey"
                                className="w-full h-full object-cover drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 sm:space-y-8 text-center md:text-left"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
                            {ABOUT_DATA.journey.title}
                        </h2>
                        <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                            {ABOUT_DATA.journey.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Journey
