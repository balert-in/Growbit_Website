import React from 'react'
import { motion } from 'framer-motion'
import { ABOUT_DATA } from '../../constants'

const Journey = () => {
    return (
        <section className="relative bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#9cd4af]/20 to-[#75ccc3]/20 rounded-3xl blur-2xl opacity-60" />
                        <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src={ABOUT_DATA.journey.imageUrl}
                                alt="Our Journey"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1120] leading-tight">
                            {ABOUT_DATA.journey.title}
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
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
