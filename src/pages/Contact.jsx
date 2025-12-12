import React from 'react'
import ContactHero from '../components/Contact/ContactHero'
import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'
import FAQ from '../components/Contact/FAQ'
import HandDrawnTitle from '../components/common/HandDrawnTitle'

const Contact = () => {
    return (
        <div className="min-h-screen bg-white">
            <ContactHero />

            <section className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-bl from-[#9cd4af]/20 via-[#75ccc3]/15 to-transparent rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#75ccc3]/20 via-[#d7e48a]/15 to-transparent rounded-full blur-[100px]" />
                </div>

                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="contactDots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.5" fill="#75ccc3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#contactDots)" />
                </svg>

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-10 sm:mb-12 md:mb-16 text-center">
                        <HandDrawnTitle text="Reach Out" theme="light" />
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                            Contact Information
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                            Reach out to us through any of these channels. We're here to help.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        <div className="order-2 lg:order-1">
                            <ContactInfo />
                        </div>

                        <div className="order-1 lg:order-2">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <FAQ />
        </div>
    )
}

export default Contact

