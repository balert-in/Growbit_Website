import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Send, Zap } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import { PROJECTS_DATA } from '../constants/projectsData';
import { PHONE_REGEX, EMAIL_MAX_LENGTH } from '../constants/constant';

const AppleIcon = () => (
  <svg viewBox="0 0 384 512" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg viewBox="0 0 512 512" className="w-4 h-4 sm:w-5 sm:h-5 fill-current">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
  </svg>
);

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', message: '' });
  const [errors, setErrors] = useState({});

  const project = PROJECTS_DATA.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-white flex-col gap-4">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <button 
          onClick={() => navigate('/about')}
          className="px-6 py-2 bg-[#75ccc3] text-gray-900 rounded-full font-semibold cursor-pointer"
        >
          Return
        </button>
      </div>
    );
  }

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !emailRegex.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.phone.trim() || !PHONE_REGEX.test(formData.phone)) newErrors.phone = "Valid 10-digit phone number required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Query Submitted Successfully!");
      setFormData({ name: '', email: '', phone: '', city: '', message: '' });
      setErrors({});
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name' && value && !/^[A-Za-z\s]*$/.test(value)) return;
    if (name === 'city' && value && !/^[A-Za-z\s]*$/.test(value)) return;
    if (name === 'phone' && value && !/^\d*$/.test(value)) return;

    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] font-sans">
      <Navbar />
      
      <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
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
              className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 bg-white p-5 rounded-2xl shadow-xl flex items-center justify-center border-4 border-white/10"
            >
              <img 
                src={project.logo} 
                alt={project.name} 
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3"
              >
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: project.themeColor }} />
                <span className="text-[11px] font-semibold tracking-wide text-gray-300 uppercase">
                  Active Operation
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2"
              >
                {project.shortName} <span style={{ color: project.themeColor }}>Project</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-sm sm:text-base leading-snug mb-5 max-w-2xl"
              >
                {project.name}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-row flex-wrap justify-center md:justify-start gap-3 w-full"
              >
                <a 
                  href={project.appInfo.playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 hover:bg-gray-200 rounded-lg font-bold transition-all cursor-pointer"
                >
                  <PlayStoreIcon />
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] leading-none uppercase text-gray-600">Get it on</span>
                    <span className="text-sm leading-tight">Google Play</span>
                  </div>
                </a>
                
                {project.appInfo.appStoreLink && (
                  <a 
                    href={project.appInfo.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1c] text-white hover:bg-[#252528] border border-white/10 rounded-lg font-bold transition-all cursor-pointer"
                  >
                    <AppleIcon />
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] leading-none uppercase text-gray-400">Download on</span>
                      <span className="text-sm leading-tight">App Store</span>
                    </div>
                  </a>
                )}
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            <div className="lg:col-span-7 xl:col-span-8 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="prose prose-sm sm:prose-base prose-invert max-w-none text-gray-300 leading-relaxed font-light">
                  {project.fullDescription.map((para, index) => (
                    <p key={index} className="mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-6 border-t border-white/10"
              >
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" style={{ color: project.themeColor }} />
                  Key Capabilities
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.appInfo.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 bg-[#1a1a1c] border border-white/5 rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle2 
                        className="w-4 h-4 shrink-0" 
                        style={{ color: project.themeColor }} 
                      />
                      <span className="text-gray-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 xl:col-span-4 space-y-6">
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1c] border border-white/5 rounded-xl p-5"
              >
                <h3 className="text-white font-bold mb-3 text-base">App Specs</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-gray-400 text-xs sm:text-sm">Platform</span>
                    <span className="text-white text-xs sm:text-sm font-medium">{project.appInfo.os}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-xs sm:text-sm">Version</span>
                    <span className="text-white text-[11px] sm:text-xs font-mono font-bold bg-white/10 px-2 py-0.5 rounded">{project.appInfo.version}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1a1a1c] to-[#09090b] border border-white/5 rounded-xl p-6 shadow-xl"
              >
                <h3 className="text-white font-bold mb-1 text-lg">Have a Query?</h3>
                <p className="text-gray-400 text-xs mb-5">Fill out the form below and our team will get back to you.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      maxLength={20}
                      className={`w-full bg-[#09090b] border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#75ccc3] transition-colors`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 px-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      maxLength={EMAIL_MAX_LENGTH || 50}
                      className={`w-full bg-[#09090b] border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#75ccc3] transition-colors`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 px-1">{errors.email}</p>}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        maxLength={10}
                        className={`w-full bg-[#09090b] border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#75ccc3] transition-colors`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1 px-1">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <input 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        maxLength={30}
                        className={`w-full bg-[#09090b] border ${errors.city ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#75ccc3] transition-colors`}
                      />
                      {errors.city && <p className="text-red-500 text-xs mt-1 px-1">{errors.city}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message..."
                      rows="3"
                      maxLength={500}
                      className={`w-full bg-[#09090b] border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#75ccc3] transition-colors resize-none`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1 px-1">{errors.message}</p>}
                  </div>
                  
                  <button 
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 text-[#09090b] font-bold text-sm py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/10 cursor-pointer"
                    style={{ backgroundColor: project.themeColor }}
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </button>
                </form>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
