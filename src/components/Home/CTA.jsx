import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <section className="py-18 lg:py-24 bg-[#09090b] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#75ccc3]/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                    >
                        Ready to Grow with <span className="text-[#d7e48a]">Growbit?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
                    >
                        Join hundreds of businesses transforming their future with our ecosystem.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link to="/contact">
                            <button className="cursor-pointer w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#d7e48a] to-[#75ccc3] text-[#0B1120] font-bold text-lg hover:shadow-[0_0_20px_rgba(117,204,195,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                                Start Growing Now
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CTA
