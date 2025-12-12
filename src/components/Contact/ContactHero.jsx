import React from 'react'
import { motion } from 'framer-motion'
import HandDrawnTitle from '../common/HandDrawnTitle'

const ContactHero = () => {
    return (
        <section className="relative bg-[#09090b] pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 lg:pb-28 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-[#9cd4af]/20 via-[#75ccc3]/10 to-transparent rounded-full blur-[100px]"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#d7e48a]/20 via-[#9cd4af]/10 to-transparent rounded-full blur-[120px]"
                />
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                   <HandDrawnTitle text="Contact Us" />

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-5 sm:mb-6 md:mb-8 leading-tight px-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-400"
                    >
                        Let's Start a Conversation
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 leading-relaxed font-medium max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4"
                    >
                        Have a project in mind or just want to say hello? We'd love to hear from you.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex justify-center items-center gap-4"
                    >
                        <div className="h-px w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-white to-transparent" />
                        <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-white" />
                        <div className="h-px w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-white to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactHero
