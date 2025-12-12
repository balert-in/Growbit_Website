import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import { FAQ_DATA } from '../../constants'

import HandDrawnTitle from '../common/HandDrawnTitle'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="relative py-16 sm:py-20 md:py-24 bg-[#09090b] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(117,204,195,0.05)_0%,rgba(156,212,175,0.05)_50%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-[10%] right-[-10%] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-bl from-[#9cd4af]/10 via-[#75ccc3]/5 to-transparent rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[10%] left-[-10%] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-tr from-[#75ccc3]/10 via-[#d7e48a]/5 to-transparent rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 sm:mb-14 md:mb-16">
                    <HandDrawnTitle text="Common Questions" />
                    <h2 className="section-heading mb-4 sm:mb-5 md:mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="section-subheading">
                        Find answers to common questions about our services and how we can help your business grow.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-20">
                    <div className="lg:col-span-5">
                        <div className="sticky top-24">
                            <div className="relative">
                                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#9cd4af]/10 rounded-full blur-3xl" />
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 relative z-10 leading-tight">
                                    Any questions?
                                    <br />
                                    We have answers!
                                </h3>
                            </div>
                            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
                                Still have questions? We're here to help. Reach out and let's start a conversation.
                            </p>
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="cursor-pointer group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white/5 hover:bg-white/10 rounded-full border border-gray-800 transition-all duration-300"
                            >
                                <span className="font-bold text-white text-sm sm:text-base">Get in Touch</span>
                                <ArrowRight className="w-4 h-4 text-white group-hover:animate-[arrow-slide_0.8s_ease-in-out_infinite]" />
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="space-y-3 sm:space-y-4">
                            {FAQ_DATA.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b border-gray-800 last:border-0"
                                >
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className="cursor-pointer w-full py-4 sm:py-5 md:py-6 flex items-center justify-between gap-3 sm:gap-4 text-left group"
                                    >
                                        <span className={`text-sm sm:text-base md:text-lg font-bold transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-white'
                                            }`}>
                                            {faq.question}
                                        </span>
                                        <span className={`shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                                            }`}>
                                            {activeIndex === index ? (
                                                <Minus className="w-4 sm:w-5 h-4 sm:h-5 text-[#75ccc3]" />
                                            ) : (
                                                <Plus className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600 group-hover:text-[#75ccc3]" />
                                            )}
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pb-4 sm:pb-5 md:pb-6 text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
