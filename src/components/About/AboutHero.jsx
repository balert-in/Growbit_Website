import React from 'react'
import { motion } from 'framer-motion'
import { ABOUT_DATA } from '../../constants'

const AboutHero = () => {
    return (
        <section className="relative bg-white pt-32 pb-20 sm:pb-24 md:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-[#9cd4af]/30 to-[#75ccc3]/20 rounded-full blur-[100px]"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#d7e48a]/20 to-[#9cd4af]/20 rounded-full blur-[120px]"
                />
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#9cd4af]/10 to-[#75ccc3]/10 border border-[#9cd4af]/20 backdrop-blur-sm"
                    >
                        <span className="text-sm font-bold text-[#0B1120] tracking-wide uppercase">Our Story</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl font-bold text-[#0B1120] mb-8 leading-tight">
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="block bg-clip-text text-transparent bg-gradient-to-b from-[#0B1120] via-[#0B1120] to-secondary-3"
                        >
                            {ABOUT_DATA.hero.title}
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-medium max-w-3xl mx-auto mb-12"
                    >
                        {ABOUT_DATA.hero.subtitle}
                    </motion.p>

                    {/* Decorative line/icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex justify-center items-center gap-4"
                    >
                        <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#0B1120] to-transparent" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0B1120]" />
                        <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#0B1120] to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutHero
