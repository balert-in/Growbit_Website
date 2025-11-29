import React from 'react'
import { motion } from 'framer-motion'
import { Apple, Play } from 'lucide-react'

const AppShowcase = () => {
    return (
        <section className="py-24 bg-[#09090b] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    <div className="flex-1 text-center lg:text-left z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                        >
                            Manage Your Growth <br />
                            <span className="text-[#75ccc3]">Anytime, Anywhere</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            Download the Growbit app to track your revenue, manage your team, and stay ahead of the competition right from your pocket.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                className="relative flex items-center gap-3 bg-white text-[#09090b] px-7 py-4 rounded-2xl cursor-pointer group overflow-hidden transition-all duration-300 hover:shadow-lg"
                            >
                                <motion.div
                                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                                    whileInView={{ clipPath: "inset(0 0 0 0)" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-gradient-to-r from-[#75ccc3]/20 to-[#d7e48a]/20"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-[#75ccc3]/20 to-[#d7e48a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ clipPath: "inset(0 0 0 0)" }}
                                />
                                <Apple className="w-8 h-8 fill-current relative z-10 group-hover:scale-110 transition-transform duration-300" />
                                <div className="text-left relative z-10">
                                    <div className="text-[10px] uppercase opacity-70 group-hover:opacity-90 transition-opacity">Download on the</div>
                                    <div className="text-base font-semibold leading-none">App Store</div>
                                </div>
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#75ccc3]/30 rounded-2xl transition-all duration-300" />
                            </motion.button>

                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                className="relative flex items-center gap-3 bg-white text-[#09090b] px-7 py-4 rounded-2xl cursor-pointer group overflow-hidden transition-all duration-300 hover:shadow-lg"
                            >
                                <motion.div
                                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                                    whileInView={{ clipPath: "inset(0 0 0 0)" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.35, duration: 0.8, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-gradient-to-r from-[#d7e48a]/20 to-[#75ccc3]/20"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-[#d7e48a]/20 to-[#75ccc3]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ clipPath: "inset(0 0 0 0)" }}
                                />
                                <div className="w-8 h-8 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <Play className="w-6 h-6 fill-current ml-1" />
                                </div>
                                <div className="text-left relative z-10">
                                    <div className="text-[10px] uppercase opacity-70 group-hover:opacity-90 transition-opacity">Get it on</div>
                                    <div className="text-base font-semibold leading-none">Google Play</div>
                                </div>
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d7e48a]/30 rounded-2xl transition-all duration-300" />
                            </motion.button>
                        </motion.div>
                    </div>

                    <div className="flex-1 relative w-full h-[450px] sm:h-[550px] flex items-center justify-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#75ccc3]/30 to-[#d7e48a]/30 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative w-full h-full flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: 0, rotate: 0 }}
                                whileInView={{ opacity: 1, x: -180, rotate: -15 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.8, type: "spring", bounce: 0.3 }}
                                className="absolute z-10 w-[160px] sm:w-[200px] md:w-[250px] hidden sm:block"
                                style={{ transformOrigin: 'center center' }}
                            >
                                <img
                                    src="/welcome.png"
                                    alt="Welcome Screen"
                                    className="w-full h-auto drop-shadow-2xl rounded-[2rem]"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                                className="relative z-20 w-[200px] sm:w-[240px] md:w-[260px]"
                            >
                                <img
                                    src="/dashboard.png"
                                    alt="Dashboard Screen"
                                    className="w-full h-auto drop-shadow-2xl rounded-[2rem]"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 0, rotate: 0 }}
                                whileInView={{ opacity: 1, x: 180, rotate: 15 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.8, type: "spring", bounce: 0.3 }}
                                className="absolute z-10 w-[160px] sm:w-[200px] md:w-[260px] hidden sm:block"
                                style={{ transformOrigin: 'center center' }}
                            >
                                <img
                                    src="/leads.png"
                                    alt="Leads Screen"
                                    className="w-full h-auto drop-shadow-2xl rounded-[2rem]"
                                />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AppShowcase
