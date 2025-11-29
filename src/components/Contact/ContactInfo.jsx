import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FOOTER_DATA } from '../../constants'

const ContactInfo = () => {
    const contactDetails = [
        {
            icon: Mail,
            title: "Email us",
            content: FOOTER_DATA.sections[2].links[0].label,
            href: FOOTER_DATA.sections[2].links[0].url,
            // subtext: "support@growbit.com"
        },
        {
            icon: Phone,
            title: "Call us",
            content: FOOTER_DATA.sections[2].links[1].label,
            href: FOOTER_DATA.sections[2].links[1].url,
            subtext: "Mon-Fri, 9am - 6pm IST"
        },
        {
            icon: MapPin,
            title: "Headquarters",
            content: FOOTER_DATA.sections[2].links[2].label,
            href: null,
            subtext: null
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0B1120] rounded-3xl p-8 text-white h-full flex flex-col justify-between relative overflow-hidden"
        >
            <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-8">Contact Information</h3>

                <div className="space-y-5 relative z-10">
                    {contactDetails.map((detail, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="p-2.5 rounded-lg bg-white/10 backdrop-blur-sm shrink-0">
                                <detail.icon className="w-5 h-5 text-[#75ccc3]" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs font-medium mb-0.5 uppercase tracking-wide">{detail.title}</p>
                                {detail.href ? (
                                    <a
                                        href={detail.href}
                                        className="text-base font-semibold hover:text-[#75ccc3] transition-colors block"
                                    >
                                        {detail.content}
                                    </a>
                                ) : (
                                    <p className="text-base font-semibold whitespace-pre-line leading-relaxed">
                                        {detail.content}
                                    </p>
                                )}
                                {detail.subtext && (
                                    <p className="text-xs text-gray-400 mt-0.5">{detail.subtext}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-10 relative h-64 rounded-xl overflow-hidden border border-white/10 shadow-inner">
                <iframe
                    title="GrowBit Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.964858807839!2d78.4992085!3d17.4555086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bf604a7d579:0x45423566396cc91f!2sGrowBit%20Business%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1718030000000!5m2!1sen!2sin"
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#75ccc3]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        </motion.div>
    )
}

export default ContactInfo
