import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Send,
  Zap,
  Download,
  HelpCircle,
  Info,
} from "lucide-react";
import Navbar from "../components/common/Navbar";
import { PROJECTS_DATA } from "../constants/projectsData";
import { PHONE_REGEX, EMAIL_MAX_LENGTH } from "../constants/constant";


const FadeInUp = ({ children, className = "", delay = 0, inView = false }) => {
  const animationProps = inView
    ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }
    : { animate: { opacity: 1, y: 0 } };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      transition={{ delay }}
      className={className}
      {...animationProps}
    >
      {children}
    </motion.div>
  );
};

const InputField = ({ type = "text", name, value, onChange, placeholder, maxLength, error }) => (
  <div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      className={`w-full bg-[#09090b] border ${error ? "border-red-500" : "border-white/10"} rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#75ccc3] transition-colors`}
    />
    {error && <p className="text-red-500 text-xs mt-1 px-1">{error}</p>}
  </div>
);

const TextAreaField = ({ name, value, onChange, placeholder, maxLength, rows = 3, error }) => (
  <div>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      maxLength={maxLength}
      className={`w-full bg-[#09090b] border ${error ? "border-red-500" : "border-white/10"} rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#75ccc3] transition-colors resize-none`}
    ></textarea>
    {error && <p className="text-red-500 text-xs mt-1 px-1">{error}</p>}
  </div>
);

const SpecRow = ({ label, value, isMonospace = false, borderClass = "" }) => (
  <div className={`flex justify-between items-center ${borderClass}`}>
    <span className="text-gray-400 text-xs sm:text-sm">{label}</span>
    <span className={`text-white ${isMonospace ? "text-[11px] sm:text-xs font-mono font-bold bg-white/10 px-2 py-0.5 rounded" : "text-xs sm:text-sm font-medium"}`}>
      {value}
    </span>
  </div>
);


const InstallationTooltip = ({ showInstallSteps, setShowInstallSteps, project }) => {
  return (
    <div className="relative">
      <button
        onClick={() => setShowInstallSteps(!showInstallSteps)}
        className={`flex items-center justify-center w-[44px] h-[44px] rounded-lg border transition-all cursor-pointer ${showInstallSteps ? "bg-white/20 border-white/30 text-white" : "bg-[#1a1a1c] border-white/10 text-gray-400 hover:text-white hover:bg-[#252528]"}`}
        title="How to install"
      >
        <HelpCircle className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {showInstallSteps && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute right-0 md:right-auto md:left-full md:ml-4 top-full mt-3 md:top-1/2 md:-translate-y-1/2 md:mt-0 w-72 sm:w-80 z-50"
          >
            <div className="hidden md:block absolute top-1/2 -left-2 -translate-y-1/2 size-4 bg-[#1a1a1c] border-l border-b border-white/10 transform rotate-45 z-0" />
            <div className="block md:hidden absolute -top-2 right-[14px] size-4 bg-[#1a1a1c] border-t border-l border-white/10 transform rotate-45 z-0" />

            <div className="bg-[#1a1a1c] border border-white/10 rounded-xl p-5 shadow-2xl relative z-10 text-left">
              <button
                onClick={() => setShowInstallSteps(false)}
                className="cursor-pointer absolute top-3 right-3 text-gray-400 hover:text-white transition-colors p-1"
              >
                <svg
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h4 className="text-white font-extrabold text-sm mb-3 flex items-center gap-2">
                <Info
                  className="size-4"
                  style={{ color: project.themeColor }}
                />
                Installation Guide
              </h4>

              <ol className="text-gray-300 text-xs space-y-3 list-decimal pl-4 marker:text-gray-500 marker:font-bold">
                <li>Download the APK file using the button.</li>
                <li>
                  Uninstall any previous version of the app from your phone.
                </li>
                <li>
                  Go to your phone's <strong>Downloads</strong> folder.
                </li>
                <li>Tap the downloaded APK file to install it.</li>
              </ol>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const QueryForm = ({ project }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !emailRegex.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone.trim() || !PHONE_REGEX.test(formData.phone))
      newErrors.phone = "Valid 10-digit phone number required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Query Submitted Successfully!");
      setFormData({ name: "", email: "", phone: "", city: "", message: "" });
      setErrors({});
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && value && !/^[A-Za-z\s]*$/.test(value)) return;
    if (name === "city" && value && !/^[A-Za-z\s]*$/.test(value)) return;
    if (name === "phone" && value && !/^\d*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <FadeInUp inView className="bg-gradient-to-br from-[#1a1a1c] to-[#09090b] border border-white/5 rounded-xl p-6 shadow-xl">
      <h3 className="text-white font-bold mb-1 text-lg">Have a Query?</h3>
      <p className="text-gray-400 text-xs mb-5">
        Fill out the form below and our team will get back to you.
      </p>

      <form onSubmit={handleFormSubmit} className="space-y-3">
        <InputField
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          maxLength={20}
          error={errors.name}
        />
        <InputField
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
          maxLength={EMAIL_MAX_LENGTH || 50}
          error={errors.email}
        />
        
        <div className="grid grid-cols-2 gap-3">
          <InputField
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            maxLength={10}
            error={errors.phone}
          />
          <InputField
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="City"
            maxLength={30}
            error={errors.city}
          />
        </div>

        <TextAreaField
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message..."
          maxLength={500}
          error={errors.message}
        />

        <button
          type="submit"
          className="group w-full inline-flex items-center justify-center gap-2 text-[#09090b] font-bold text-sm py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/10 cursor-pointer"
          style={{ backgroundColor: project.themeColor }}
        >
          <span>Send Message</span>
          <Send className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </button>
      </form>
    </FadeInUp>
  );
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [showInstallSteps, setShowInstallSteps] = useState(false);

  const project = PROJECTS_DATA.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-white flex-col gap-4">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <button
          onClick={() => navigate("/about")}
          className="px-6 py-2 bg-[#75ccc3] text-gray-900 rounded-full font-semibold cursor-pointer"
        >
          Return
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090b] font-sans">
      <Navbar />

      <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 border-b border-white/5 z-20">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1a1a1c] to-[#09090b]" />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] rounded-full blur-[100px] opacity-10"
            style={{ backgroundColor: project.themeColor }}
          />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-6 sm:gap-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 bg-white p-0.5 rounded-full shadow-xl flex items-center justify-center border-4 border-white/10"
            >
              <img
                src={project.logo}
                alt={project.name}
                className="w-full h-full object-contain"
              />
            </motion.div>

            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <FadeInUp className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: project.themeColor }}
                />
                <span className="text-[11px] font-semibold tracking-wide text-gray-300 uppercase">
                  Active Operation
                </span>
              </FadeInUp>

              <FadeInUp delay={0.1} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2">
                {project.shortName}{" "}
                <span style={{ color: project.themeColor }}>Project</span>
              </FadeInUp>

              <FadeInUp delay={0.2} className="text-gray-400 text-sm sm:text-base leading-snug mb-5 max-w-2xl">
                {project.name}
              </FadeInUp>

              <FadeInUp delay={0.3} className="flex flex-col w-full md:w-auto items-center md:items-start">
                <div className="flex flex-row items-center justify-center md:justify-start gap-3 w-full">
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 hover:bg-gray-200 rounded-lg font-bold transition-all cursor-pointer shadow-lg">
                    <Download className="size-4" />
                    <span>Download APK</span>
                  </button>

                  <InstallationTooltip 
                    showInstallSteps={showInstallSteps} 
                    setShowInstallSteps={setShowInstallSteps} 
                    project={project} 
                  />
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7 xl:col-span-8 space-y-8">
              <FadeInUp inView>
                <div className="prose prose-sm sm:prose-base prose-invert max-w-none text-gray-300 leading-relaxed font-light">
                  {project.fullDescription.map((para, index) => (
                    <p key={index} className="mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </FadeInUp>

              <FadeInUp inView className="pt-6 border-t border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Zap
                    className="w-5 h-5"
                    style={{ color: project.themeColor }}
                  />
                  Key Capabilities
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.appInfo.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#1a1a1c] border border-white/5 rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle2
                        className="size-4 shrink-0"
                        style={{ color: project.themeColor }}
                      />
                      <span className="text-gray-200 text-sm font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>

            <div className="lg:col-span-5 xl:col-span-4 space-y-6">
              <FadeInUp inView className="bg-[#1a1a1c] border border-white/5 rounded-xl p-5">
                <h3 className="text-white font-bold mb-3 text-base">
                  App Specs
                </h3>
                <div className="space-y-2">
                  <SpecRow 
                    label="Platform" 
                    value={project.appInfo.os} 
                    borderClass="pb-2 border-b border-white/5" 
                  />
                  <SpecRow 
                    label="Version" 
                    value={project.appInfo.version} 
                    isMonospace 
                  />
                  <SpecRow 
                    label="Released" 
                    value={project.appInfo.releaseDate} 
                    borderClass="pt-2 border-t border-white/5" 
                  />
                </div>
              </FadeInUp>

              <QueryForm project={project} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
