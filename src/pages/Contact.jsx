import React from 'react'
import ContactHero from '../components/Contact/ContactHero'
import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'
import FAQ from '../components/Contact/FAQ'

const Contact = () => {
    return (
        <div className="min-h-screen bg-white">
            <ContactHero />

            <section className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-bl from-[#9cd4af]/10 to-transparent rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#75ccc3]/10 to-transparent rounded-full blur-[100px]" />
                </div>

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0B1120] mb-4">
                            Contact Information
                        </h2>
                        <p className="text-lg text-gray-600">
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
