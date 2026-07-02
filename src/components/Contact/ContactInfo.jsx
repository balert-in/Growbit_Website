import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FOOTER_DATA } from '../../constants'

const ContactInfo = () => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };
    const contactDetails = [
        {
            icon: Mail,
            title: "Email us",
            content: FOOTER_DATA.sections[2].links[0].label,
            href: FOOTER_DATA.sections[2].links[0].url,
        },
        {
            icon: Phone,
            title: "Call us",
            content: FOOTER_DATA.sections[2].links[1].label,
            href: FOOTER_DATA.sections[2].links[1].url,
            subtext: "Mon-Fri, 9am - 6pm IST"
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 h-full flex flex-col relative overflow-hidden border border-gray-100 shadow-xl shadow-[#75ccc3]/10 group"
        >
            <div
                className="pointer-events-none absolute -inset-px transition duration-300 z-0"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(117, 204, 195, 0.15), transparent 40%)`,
                }}
            />
            <div className="relative z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-7 md:mb-8 text-gray-900">Contact Information</h3>

                <div className="space-y-4 sm:space-y-5 relative z-10">
                    {contactDetails.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3 sm:gap-4">
                            <div className="p-2 sm:p-2.5 rounded-lg bg-gradient-to-br from-[#75ccc3]/10 to-[#d7e48a]/10 shrink-0 border border-[#75ccc3]/20">
                                <detail.icon className="w-4 sm:w-5 h-4 sm:h-5 text-[#75ccc3]" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-[10px] sm:text-xs font-medium mb-0.5 uppercase tracking-wide">{detail.title}</p>
                                {detail.href ? (
                                    <a
                                        href={detail.href}
                                        className="text-sm sm:text-base font-semibold hover:text-[#75ccc3] transition-colors block text-gray-800"
                                    >
                                        {detail.content}
                                    </a>
                                ) : (
                                    <p className="text-sm sm:text-base font-semibold whitespace-pre-line leading-relaxed text-gray-800">
                                        {detail.content}
                                    </p>
                                )}
                                {detail.subtext && (
                                    <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">{detail.subtext}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9cd4af]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#75ccc3]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        </motion.div>
    )
}

export default ContactInfo

