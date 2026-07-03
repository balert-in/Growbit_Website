import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import axios from "axios";
import {
  FIRSTNAME_MAX_LENGTH,
  LASTNAME_MAX_LENGTH,
  EMAIL_MAX_LENGTH,
  PHONE_REGEX,
  API_URL,
} from "../..//constants/constant";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    if (submitMessage.text) {
      const timer = setTimeout(() => {
        setSubmitMessage({ type: "", text: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  const wordCount = formData.message.trim().split(/\s+/).filter(Boolean).length;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (formData.phone && !PHONE_REGEX.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
    } else if (wordCount < 10) {
      newErrors.message = "Message must be at least 10 words";
    } else if (wordCount > 100) {
      newErrors.message = "Message cannot exceed 100 words";
    }
    if (!formData.agree)
      newErrors.agree = "You must agree to the privacy policy";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    /\S+@\S+\.\S+/.test(formData.email) &&
    (!formData.phone || PHONE_REGEX.test(formData.phone)) &&
    wordCount >= 10 &&
    wordCount <= 100 &&
    formData.agree;

  const isButtonDisabled = isSubmitting || !isFormValid;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitMessage({ type: "", text: "" });
      try {
        const payload = {
          TYPE: "i",
          DATA_TYPE: "HELP_CENTER",
          REQUEST_TYPE: "CONTACT_US",
          MESSAGE: { TEXT: formData.message },
          FULL_NAME: `${formData.firstName} ${formData.lastName}`.trim(),
          MOBILE_NUMBER: formData.phone,
          EMAIL: formData.email,
          SERVICE_TYPE: "WEB_SITE",
        };

        await axios.post(`${API_URL}/Adminagent/ContactUs`, payload);

        setSubmitMessage({
          type: "success",
          text: "Thank you for reaching out! We will get back to you soon.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          agree: false,
        });
      } catch (error) {
        setSubmitMessage({
          type: "error",
          text: "Something went wrong. Please try again later.",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const inputClasses =
    "w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#75ccc3]/30 focus:border-[#75ccc3]/50 transition-all duration-300 placeholder-gray-400 text-sm text-gray-800 font-medium";
  const errorClasses = "border-red-400 focus:ring-red-400/20";
  const labelClasses =
    "block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide";
  const errorTextClasses = "text-xs text-red-500 mt-1 font-medium";

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
          <label className={labelClasses}>
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            maxLength={FIRSTNAME_MAX_LENGTH}
            placeholder="Rahul"
            className={`${inputClasses} ${errors.firstName ? errorClasses : ""}`}
          />
          {errors.firstName && (
            <p className={errorTextClasses}>{errors.firstName}</p>
          )}
        </div>
        <div>
          <label className={labelClasses}>
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            maxLength={LASTNAME_MAX_LENGTH}
            placeholder="Sharma"
            className={`${inputClasses} ${errors.lastName ? errorClasses : ""}`}
          />
          {errors.lastName && (
            <p className={errorTextClasses}>{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClasses}>
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            maxLength={EMAIL_MAX_LENGTH}
            placeholder="rahul.sharma@company.com"
            className={`${inputClasses} ${errors.email ? errorClasses : ""}`}
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
            className={`${inputClasses} ${errors.phone ? errorClasses : ""}`}
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
          className={`${inputClasses} appearance-none cursor-pointer ${errors.subject ? errorClasses : ""}`}
        >
          <option value="" disabled>
            Select a topic
          </option>
          <option value="general">General Inquiry</option>
          <option value="project">Project Proposal</option>
          <option value="support">Support</option>
          <option value="careers">Careers</option>
        </select>
        {errors.subject && <p className={errorTextClasses}>{errors.subject}</p>}
      </div>

      <div>
        <label className={labelClasses}>
          Message <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project timeline, budget, and goals..."
            className={`${inputClasses} resize-none pb-8 ${errors.message ? errorClasses : ""}`}
          />
          <div
            className={`absolute bottom-3 right-3 text-xs font-semibold ${wordCount < 10 || wordCount > 100 ? "text-red-500" : "text-gray-400"}`}
          >
            {wordCount} / 100 words
          </div>
        </div>
        {errors.message && <p className={errorTextClasses}>{errors.message}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-start gap-3 pt-1">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 bg-white text-[#75ccc3] focus:ring-[#75ccc3] focus:ring-offset-0"
          />
          <p className="text-xs text-gray-500 leading-relaxed">
            I agree to the{" "}
            <a
              href="/PrivacyPolicy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#75ccc3] font-medium text-gray-600 transition-colors"
            >
              Privacy Policy
            </a>{" "}
            and consent to being contacted.
          </p>
        </div>
        {errors.agree && <p className={errorTextClasses}>{errors.agree}</p>}
      </div>

      <motion.button
        whileHover={!isButtonDisabled ? { scale: 1.01 } : {}}
        whileTap={!isButtonDisabled ? { scale: 0.99 } : {}}
        type="submit"
        disabled={isButtonDisabled}
        className={`cursor-pointer group w-full bg-gradient-to-r from-[#75ccc3] to-[#9cd4af] text-gray-900 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all text-sm uppercase tracking-wide mt-2 ${isButtonDisabled ? "opacity-50 cursor-not-allowed grayscale" : "hover:shadow-lg hover:shadow-[#75ccc3]/25"}`}
      >
        <span>{isSubmitting ? "Sending..." : "Discuss Your Project"}</span>
        {!isSubmitting && (
          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        )}
      </motion.button>
      {submitMessage.text && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-3 rounded-lg text-sm font-medium text-center ${submitMessage.type === "success" ? "bg-[#9cd4af]/20 text-[#2c5f42] border border-[#9cd4af]" : "bg-red-50 text-red-600 border border-red-200"}`}
        >
          {submitMessage.text}
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
