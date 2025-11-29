import React from 'react'
import { motion } from 'framer-motion'
import { ABOUT_DATA } from '../../constants'

const CEONote = () => {
    return (
        <section className="relative bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-[#9cd4af]/10 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-tl from-[#d7e48a]/10 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1120] mb-12 sm:mb-16 text-center"
                >
                    A Personal Note
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-200"
                >

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#9cd4af]/20 to-[#75ccc3]/20 rounded-3xl blur-2xl opacity-60" />
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/shailendra.webp"
                                alt="Shailendra Kumar"
                                className="w-full h-full object-cover aspect-[3/4]"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 font-['Caveat'] text-justify" style={{ fontSize: '1.5rem', lineHeight: '1.8' }}>
                            {ABOUT_DATA.ceoNote.message}
                        </p>

                        <div className="flex items-center gap-3 border-t border-gray-300 pt-6">
                            <span className='w-0.5 h-14 bg-secondary-2'></span>
                            <div>
                                <p className="text-3xl font-['Caveat'] text-[#0B1120] font-bold mb-1">
                                    {ABOUT_DATA.ceoNote.author}
                                </p>
                                <p className="text-sm sm:text-base text-gray-600 font-normal">
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
