import React from 'react'
import { motion } from 'framer-motion'
import { ABOUT_DATA } from '../../constants'
import HandDrawnTitle from '../common/HandDrawnTitle'

const CEONote = () => {
    return (
        <section className="relative bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#9cd4af]/20 via-[#75ccc3]/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#d7e48a]/20 via-[#9cd4af]/15 to-transparent rounded-full blur-[120px] pointer-events-none" />

            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="ceoDots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill="#75ccc3" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ceoDots)" />
            </svg>

            <svg className="hidden sm:block absolute top-10 left-10 w-[300px] h-[300px] pointer-events-none opacity-20" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 100 Q 60 20, 100 100 T 180 100" stroke="url(#ceoCurveGrad)" strokeWidth="2" fill="none" />
                <path d="M20 120 Q 60 40, 100 120 T 180 120" stroke="url(#ceoCurveGrad)" strokeWidth="1.5" fill="none" />
                <defs>
                    <linearGradient id="ceoCurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#75ccc3" />
                        <stop offset="100%" stopColor="#d7e48a" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 sm:mb-12 md:mb-16"
                >
                    <HandDrawnTitle text="Founder's Vision" theme="light" />
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                        A Personal Note
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        From our founder's desk — the vision, passion, and commitment that drives everything we do.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl shadow-xl shadow-[#75ccc3]/10 border border-gray-100 relative overflow-hidden"
                >
                    <div className="relative order-2 md:order-1 min-h-96 sm:min-h-[400px] md:min-h-[500px] lg:min-h-[500px] h-full w-auto">
                        <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-[#9cd4af]/25 to-[#75ccc3]/25 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-60" />
                        <div className="relative overflow-hidden w-full h-full">
                            <img
                                src="/shailendra.webp"
                                alt="Shailendra Kumar"
                                className="w-full h-full object-cover drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    <div className="relative order-1 md:order-2 text-center md:text-left p-5 sm:p-6 md:p-8">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8 font-['Caveat'] md:text-justify">
                            {ABOUT_DATA.ceoNote.message}
                        </p>

                        <div className="flex items-center gap-2 sm:gap-3 border-t border-gray-200 pt-4 sm:pt-6">
                            <span className='w-0.5 h-10 sm:h-12 md:h-14 bg-gradient-to-b from-[#75ccc3] to-[#d7e48a]'></span>
                            <div>
                                <p className="text-2xl sm:text-3xl font-['Caveat'] text-gray-900 font-bold mb-0.5 sm:mb-1">
                                    {ABOUT_DATA.ceoNote.author}
                                </p>
                                <p className="text-xs sm:text-sm md:text-base text-gray-500 font-normal">
                                    {ABOUT_DATA.ceoNote.role}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CEONote

