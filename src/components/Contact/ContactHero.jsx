import React from 'react'
import { motion } from 'framer-motion'

const ContactHero = () => {
    return (
        <section className="relative bg-[#09090b] pt-32 pb-20 sm:pb-24 md:pb-32 overflow-hidden">
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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#9cd4af]/10 to-[#75ccc3]/10 border border-[#9cd4af]/20 backdrop-blur-sm"
                    >
                        <span className="text-sm font-bold text-white tracking-wide uppercase">Get in Touch</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-400"
                        >
                            Let's Start a Conversation
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl sm:text-2xl text-gray-400 leading-relaxed font-medium max-w-3xl mx-auto mb-12"
                    >
                        Have a project in mind or just want to say hello? We'd love to hear from you.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex justify-center items-center gap-4"
                    >
                        <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-white to-transparent" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-white to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactHero
