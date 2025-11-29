import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FIRSTNAME_MAX_LENGTH, LASTNAME_MAX_LENGTH, EMAIL_MAX_LENGTH, PHONE_REGEX, MESSAGE_MAX_LENGTH } from '../..//constants/constant'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        agree: false
    })
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        const newErrors = {}
        if (!formData.firstName) newErrors.firstName = 'First Name is required'
        if (!formData.lastName) newErrors.lastName = 'Last Name is required'
        if (!formData.email) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
        }
        if (formData.phone && !PHONE_REGEX.test(formData.phone)) {
            newErrors.phone = 'Invalid phone number'
        }
        if (!formData.subject) newErrors.subject = 'Subject is required'
        if (!formData.message) newErrors.message = 'Message is required'
        if (!formData.agree) newErrors.agree = 'You must agree to the privacy policy'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            console.log('Form submitted:', formData)
        }
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const inputClasses = "w-full bg-[#18181b] border border-gray-800 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#75ccc3]/20 focus:border-[#75ccc3]/30 transition-all duration-300 placeholder-gray-500 text-sm text-gray-200 font-medium"
    const errorClasses = "border-red-500/50 focus:ring-red-500/20"
    const labelClasses = "block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wide"
    const errorTextClasses = "text-xs text-red-400 mt-1 font-medium"

    return (
        <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className={labelClasses}>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        maxLength={FIRSTNAME_MAX_LENGTH}
                        placeholder="Rahul"
                        className={`${inputClasses} ${errors.firstName ? errorClasses : ''}`}
                    />
                    {errors.firstName && <p className={errorTextClasses}>{errors.firstName}</p>}
                </div>
                <div>
                    <label className={labelClasses}>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        maxLength={LASTNAME_MAX_LENGTH}
                        placeholder="Sharma"
                        className={`${inputClasses} ${errors.lastName ? errorClasses : ''}`}
                    />
                    {errors.lastName && <p className={errorTextClasses}>{errors.lastName}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className={labelClasses}>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        maxLength={EMAIL_MAX_LENGTH}
                        placeholder="rahul.sharma@company.com"
                        className={`${inputClasses} ${errors.email ? errorClasses : ''}`}
                    />
                    {errors.email && <p className={errorTextClasses}>{errors.email}</p>}
                </div>
                <div>
                    <label className={labelClasses}>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="9876543210"
                        className={`${inputClasses} ${errors.phone ? errorClasses : ''}`}
                    />
                    {errors.phone && <p className={errorTextClasses}>{errors.phone}</p>}
                </div>
            </div>

            <div>
                <label className={labelClasses}>Subject</label>
                <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none cursor-pointer ${errors.subject ? errorClasses : ''}`}
                >
                    <option value="" disabled>Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="project">Project Proposal</option>
                    <option value="support">Support</option>
                    <option value="careers">Careers</option>
                </select>
                {errors.subject && <p className={errorTextClasses}>{errors.subject}</p>}
            </div>

            <div>
                <label className={labelClasses}>Message</label>
                <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={MESSAGE_MAX_LENGTH}
                    placeholder="Tell us about your project timeline, budget, and goals..."
                    className={`${inputClasses} resize-none ${errors.message ? errorClasses : ''}`}
                />
                {errors.message && <p className={errorTextClasses}>{errors.message}</p>}
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex items-start gap-3 pt-1">
                    <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 rounded border-gray-600 bg-[#18181b] text-[#75ccc3] focus:ring-[#75ccc3] focus:ring-offset-0"
                    />
                    <p className="text-xs text-gray-500 leading-relaxed">
                        I agree to the <a href="#" className="underline hover:text-[#75ccc3] font-medium text-gray-400 transition-colors">Privacy Policy</a> and consent to being contacted.
                    </p>
                </div>
                {errors.agree && <p className={errorTextClasses}>{errors.agree}</p>}
            </div>

            <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full bg-white text-[#09090b] font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl text-sm uppercase tracking-wide mt-2"
            >
                <span>Send Message</span>
            </motion.button>
        </motion.form>
    )
}

export default ContactForm
