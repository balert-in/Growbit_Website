import React from 'react'
// import HeroSection from '../components/HeroSection'
// import AboutSection from '../components/AboutSection'
// import ProcessStepSection from '../components/ProcessStepSection'
// import CallToActionSection from '../components/CallToActionSection'
// import TestimonialSection from '../components/TestimonialSection'
import ServicesSection from '../components/ServicesSection'

import { motion } from "framer-motion";
import svgPaths from "../assets/SvgPaths";
import heroSvgPaths from "../assets/HeroSVG";
import processSvgPaths from "../assets/ProgressSVG";
import imgImg from "/ExpertTeam.webp";
import imgImg1 from "/Solution.webp";
import imgImg2 from "/Growth.webp";
import heroImg from "/hero.webp";
import imgImg3 from "/user1.webp";
import imgImg4 from "/user1.webp";
import imgImg5 from "/user1.webp";
import Testimonials1 from '../assets/Testimonials1.svg'
import Testimonials2 from '../assets/Testimonials2.svg'
import Testimonials3 from '../assets/Testimonials3.svg'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const useIsLargeScreen = () => {
  const [isLarge, setIsLarge] = useState(() => typeof window !== 'undefined' ? window.innerWidth >= 1024 : false);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLarge;
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-10">
      <div className="absolute inset-0 opacity-10">
        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1350 900">
          <path d={heroSvgPaths.p343ac240} fill="url(#paint0_linear_9_110)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_110" x1="0" x2="39940.8" y1="337.5" y2="96195.5">
              <stop stopColor="#9CD4AF" />
              <stop offset="0.5" stopColor="#75CCC3" />
              <stop offset="1" stopColor="#D7E48A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        className="absolute bg-[rgba(156,212,175,0.2)] left-10 lg:left-20 rounded-full w-20 h-20 lg:w-32 lg:h-32 top-16 lg:top-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.div
        className="absolute bg-[rgba(117,204,195,0.2)] right-10 lg:right-32 rounded-full w-16 h-16 lg:w-24 lg:h-24 top-32 lg:top-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
      <motion.div
        className="absolute bg-[rgba(215,228,138,0.15)] left-8 lg:left-80 rounded-full w-24 h-24 lg:w-40 lg:h-40 bottom-16 lg:bottom-32"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute bg-[rgba(156,212,175,0.25)] right-16 lg:right-60 rounded-full w-16 h-16 lg:w-28 lg:h-28 top-1/2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20">
          <motion.div
            className="space-y-5 lg:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50, filter: "blur(20px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center relative left-1/2 -translate-x-1/2  sm:left-0 sm:-translate-x-0 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-[#9cd4af] text-sm font-medium text-center sm:text-left">🚀 Next-Wave Gig Marketplace</span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center sm:text-left"
              initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="text-white block">Scale Your Business</span>
              <span className="text-white">With </span>
              <span className="text-[#9cd4af]">GrowBit</span>
            </motion.h1>

            <motion.p
              className="text-md sm:text-xl text-center sm:text-left text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Connect with seasoned professionals across the country. From B2B to B2C, startups to enterprises - we're obsessed with scaling your business through our next-wave gig marketplace services.
            </motion.p>

            <motion.div
              className="flex justify-center sm:justify-normal gap-4"
              initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <button className="bg-gradient-to-r from-[#9cd4af] to-[#75ccc3] text-black cursor-pointer group px-4 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap">
                Get Started Today
                <svg className="w-4 h-4 group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300" viewBox="0 0 16 16" fill="none">
                  <path d={heroSvgPaths.p2e18f270} fill="black" />
                </svg>
              </button>
              <button className="bg-transparent border-2 border-white/30 text-white cursor-pointer group px-4 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap">
                <svg className="w-3 h-4 group-hover:scale-125 transition-all duration-300" viewBox="0 0 12 16" fill="none">
                  <path d={heroSvgPaths.p29731900} fill="white" />
                </svg>
                Watch Demo
              </button>
            </motion.div>

            <motion.div
              className="space-y-4 pt-4 sm:pt-8"
              initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="text-gray-400 font-medium text-center sm:text-left">Download Our Mobile App</p>
              <div className="flex justify-center sm:justify-normal gap-4">
                <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <svg className="w-6 h-6" viewBox="0 0 18 24" fill="none">
                    <path d={heroSvgPaths.p36df8700} fill="white" />
                  </svg>
                  <div>
                    <p className="text-gray-400 text-xs whitespace-nowrap">Download on the</p>
                    <p className="text-white font-semibold">App Store</p>
                  </div>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d={heroSvgPaths.pcde400} fill="white" />
                  </svg>
                  <div>
                    <p className="text-gray-400 text-xs whitespace-nowrap">Get it on</p>
                    <p className="text-white font-semibold whitespace-nowrap">Google Play</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative order-2 flex items-center justify-center"
            initial={{ opacity: 0, x: 50, filter: "blur(20px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="bg-gradient-to-r from-[#75ccc3] to-[#d7e48a] absolute -left-6 lg:-left-10 top-80 lg:top-96 w-24 h-24 lg:w-40 lg:h-40 rounded-full opacity-15"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="bg-gradient-to-r from-[#9cd4af] to-[#75ccc3] absolute -right-6 lg:-right-10 -top-4 lg:-top-10 w-20 h-20 lg:w-32 lg:h-32 rounded-full opacity-20"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <div className="relative w-full max-w-md lg:max-w-lg">
              <div
                className="w-full h-80 lg:h-96 bg-cover bg-center rounded-2xl shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]"
                style={{ backgroundImage: `url('${heroImg}')` }}
              />

              <motion.div
                className="absolute -left-4 lg:-left-6 top-8 lg:top-12 bg-white/90 rounded-lg p-3 lg:p-4 shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8, x: -20, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-[#9cd4af] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4" viewBox="0 0 10.5 12" fill="none">
                      <path d={heroSvgPaths.p9ef4800} fill="white" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium text-xs lg:text-sm">Project Completed</p>
                    <p className="text-gray-600 text-xs">+15% this week</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 lg:-right-6 bottom-16 lg:bottom-20 bg-white/90 rounded-lg p-3 lg:p-4 shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8, x: 20, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-[#75ccc3] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4" viewBox="0 0 15 12" fill="none">
                      <path d={heroSvgPaths.p234eaa80} fill="white" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium text-xs lg:text-sm">New Clients</p>
                    <p className="text-gray-600 text-xs">250+ this month</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 lg:-top-6 right-8 lg:right-0 bg-white/10 border border-white/20 rounded-2xl p-3 lg:p-4 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8, y: -20, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-[#9cd4af] rounded-full"></div>
                  <span className="text-white font-medium text-xs lg:text-sm">1000+ Active Gigs</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 lg:-bottom-6 left-8 lg:left-0 bg-white/10 border border-white/20 rounded-2xl p-3 lg:p-4 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8, y: 20, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-[#75ccc3] rounded-full"></div>
                  <span className="text-white font-medium text-xs lg:text-sm">99% Client Satisfaction</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const WhyChooseSection = () => {
  const features = [
    {
      image: imgImg,
      title: "Expert Team Network",
      description:
        "Our dedicated team of well-trained professionals from across the country ensures every project is completed with excellence and precision.",
      features: ["Seasoned niche experts", "Nationwide coverage", "Quick turnaround"],
    },
    {
      image: imgImg1,
      title: "End-to-End Solutions",
      description:
        "From development to marketing, we provide comprehensive services that cover every aspect of your business needs.",
      features: ["Complete service portfolio", "Integrated approach", "Scalable solutions"],
    },
    {
      image: imgImg2,
      title: "Client-Focused Growth",
      description:
        "We're obsessed with client satisfaction because our business is to scale up your business, whether B2B or B2C.",
      features: ["100% client satisfaction", "Proven growth strategies", "Long-term partnerships"],
    },
  ]

  const fadeInBlur = {
    hidden: { opacity: 0, y: 50, filter: "blur(20px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#9cd4af]/3 via-transparent to-[#75ccc3]/3"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#d7e48a]/3 via-transparent to-[#9cd4af]/3"></div>

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-[#9cd4af]/10 to-[#75ccc3]/10 rounded-full top-20 left-10 sm:left-20"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-tr from-[#75ccc3]/10 to-[#d7e48a]/10 rounded-full top-1/2 right-10 sm:right-20"
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-gradient-to-bl from-[#d7e48a]/10 to-[#9cd4af]/10 rounded-full bottom-32 left-1/4"
          animate={{
            y: [-15, 15, -15],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1200 800">
          <motion.path
            d="M0 200 Q 300 50 600 200 Q 900 350 1200 200"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.path
            d="M0 400 Q 400 250 800 400 Q 1000 550 1200 400"
            stroke="green"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 2,
            }}
          />
          <motion.path
            d="M0 600 Q 200 450 400 600 Q 800 750 1200 600"
            stroke="#000000"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 4,
            }}
          />
        </svg>

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#9cd4af] rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(156, 212, 175, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(156, 212, 175, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        <motion.div
          className="absolute top-1/4 left-1/3 w-8 h-8 sm:w-12 sm:h-12 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="#75ccc3">
            <path d="M17.5 3.5L22 12l-4.5 8.5h-11L2 12l4.5-8.5h11z" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-6 h-6 sm:w-10 sm:h-10 opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="#d7e48a">
            <path d="M17.5 3.5L22 12l-4.5 8.5h-11L2 12l4.5-8.5h11z" />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={fadeInBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose GrowBit?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the leading gig marketplace for your business growth
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              variants={fadeInBlur}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">

                  <div className="relative overflow-hidden rounded-3xl ">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-700"
                    />

                  </div>

                </div>
              </motion.div>

              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <motion.div
                  className="space-y-4 sm:space-y-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{feature.description}</p>

                  {/* Features List */}
                  <div className="space-y-3 sm:space-y-4">
                    {feature.features.map((item, fIndex) => (
                      <motion.div
                        key={fIndex}
                        className="flex items-center gap-3 sm:gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + fIndex * 0.1 }}
                      >
                        <div
                          className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${index === 0
                              ? "bg-gradient-to-br from-[#9cd4af] to-[#75ccc3]"
                              : index === 1
                                ? "bg-gradient-to-br from-[#75ccc3] to-[#d7e48a]"
                                : "bg-gradient-to-br from-[#d7e48a] to-[#9cd4af]"
                            }`}
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 16 16" fill="none">
                            <path d={svgPaths.p1dd1d300} fill="white" />
                          </svg>
                        </div>
                        <span className="text-gray-900 font-medium text-sm sm:text-base">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


const OurProcessSection = () => {
  const isLarge = useIsLargeScreen();
  const steps = [
    {
      icon: (
        <svg className="w-6 h-6 md:w-4 md:h-4 lg:w-6 lg:h-6" viewBox="0 0 18 24" fill="none">
          <path d={processSvgPaths.p11883600} fill="white" />
        </svg>
      ),
      title: "Ideation",
      description: "Brainstorm and conceptualize your vision with our creative framework",
      position: "top",
      bgColor: "bg-gradient-to-br from-[#75ccc3] to-[#9cd4af]",
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-4 md:h-4 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none">
          <path d={processSvgPaths.p8055700} fill="white" />
        </svg>
      ),
      title: "Planning",
      description: "Structure your approach with detailed roadmaps and strategic planning",
      position: "bottom",
      bgColor: "bg-gradient-to-tr from-[#d7e48a] to-[#75ccc3]",
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-4 md:h-4 lg:w-6 lg:h-6" viewBox="0 0 27 24" fill="none">
          <path d={processSvgPaths.pe45f600} fill="white" />
        </svg>
      ),
      title: "Development",
      description: "Build and create with precision using industry-leading tools and methods",
      position: "top",
      bgColor: "bg-gradient-to-bl from-[#75ccc3] to-[#9cd4af]",
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-4 md:h-4 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none">
          <path d={processSvgPaths.p31a038f0} fill="white" />
        </svg>
      ),
      title: "Launch",
      description: "Deploy your solution and celebrate your success with ongoing support",
      position: "bottom",
      bgColor: "bg-gradient-to-r from-[#75ccc3] to-[#9cd4af]",
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
  }

  const stepVariants = {
    hidden: { opacity: 0, filter: "blur(12px)", scale: 0.95 },
    visible: { opacity: 1, filter: "blur(0px)", scale: 1, transition: { duration: 0.7, type: "spring" } },
  }

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black relative overflow-hidden">
     <motion.div
        className="absolute bg-[#75ccc3] rounded-full opacity-10 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 right-8 sm:right-16 lg:right-32 top-64 sm:top-80 lg:top-96"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute bg-[#9cd4af] rounded-full opacity-10 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 left-4 sm:left-6 lg:left-10 top-4 sm:top-6 lg:top-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute bg-[#d7e48a] rounded-full opacity-10 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 right-4 sm:right-6 lg:right-10 bottom-8 sm:bottom-12 lg:bottom-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

     <motion.div
        className="absolute bg-[#75ccc3] rounded-full opacity-5 w-8 h-8 sm:w-12 sm:h-12 left-1/4 top-20"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bg-[#9cd4af] rounded-full opacity-5 w-6 h-6 sm:w-10 sm:h-10 right-1/4 top-32"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bg-[#d7e48a] rounded-full opacity-5 w-4 h-4 sm:w-8 sm:h-8 left-1/3 bottom-32"
        animate={{ y: [-5, 15, -5] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#75ccc3] opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 8 + 8}px`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

     <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1200 800">
        <motion.path
          d="M0 400 Q 300 200 600 400 Q 900 600 1200 400"
          stroke="#9cd4af"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <motion.path
          d="M0 200 Q 400 50 800 200 Q 1000 350 1200 200"
          stroke="#75ccc3"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 2 }}
        />
        <motion.path
          d="M0 600 Q 200 450 400 600 Q 800 750 1200 600"
          stroke="#d7e48a"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 4 }}
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Our Process</h2>
          <p className="text-lg sm:text-xl text-gray-300">Follow our proven path to success</p>
        </motion.div>

        <div className="hidden md:block relative w-full flex flex-col items-center justify-center py-10">
          <div className="relative w-full h-[420px] md:h-[420px] flex items-center justify-center">
            {/* Curved SVG Path */}
            <svg
              className="absolute left-0 top-36 -translate-y-1/2 w-full h-48 md:h-72 hidden md:block"
              width="100%"
              height="100%"
              viewBox="0 0 1200 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M60 180 Q 320 40 600 180 Q 880 320 1140 180"
                stroke="#75CCC3"
                strokeWidth="4"
                strokeDasharray="10 10"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1 }}
              />
            </svg>

            <motion.div
              className="absolute w-full h-full flex flex-col justify-between"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex justify-between w-full items-center">
                {steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    className="relative flex flex-col items-center w-1/4"
                    style={
                      step.position === 'top'
                        ? { top: step.title === 'Ideation' ? '140px' : (isLarge ? '240px' : "210px"), position: 'relative' }
                        : { bottom: step.title === 'Planning' ? '-130px' : (isLarge ? '-220px' : '-200px'), position: 'relative' }
                    }
                    variants={stepVariants}
                  >
                    <motion.div
                      className={`${step.bgColor} rounded-full md:w-10 md:h-10 lg:w-16 lg:h-16 flex items-center justify-center z-10 shadow-lg mb-2`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.icon}
                    </motion.div>

                    <motion.div
                      className={`bg-white rounded-lg shadow-lg md:p-4 lg:p-6 border border-[#d7e48a] md:w-64 lg:w-80 max-w-xs text-center ${step.position === 'top' ? 'mb-8 -mt-8' : 'mt-8 -mb-8'
                        } hidden md:block z-20`}
                      style={{
                        position: 'absolute',
                        top: step.position === 'top' ? (isLarge ? '-140px' : '-110px') : 'auto',
                        bottom: step.position === 'bottom' ? (isLarge ? '-140px' : '-110px') : 'auto',
                        left: '50%',
                        transform: 'translateX(-50%)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="font-semibold text-black mb-0 lg:mb-3">{step.title}</div>
                      <div className="text-xs lg:text-sm text-black/70 leading-relaxed">{step.description}</div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Timeline Layout */}
        <div className="block md:hidden">
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#75ccc3] via-[#9cd4af] to-[#d7e48a]"></div>

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <motion.div key={idx} className="relative flex items-start" variants={timelineVariants}>
                  <motion.div
                    className={`${step.bgColor} rounded-full w-16 h-16 flex items-center justify-center z-10 shadow-lg flex-shrink-0`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.icon}
                  </motion.div>

                  <motion.div
                    className="ml-6 bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#9cd4af] flex-1"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#75ccc3] to-[#9cd4af] rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">{idx + 1}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>

                    <div className="mt-4 flex items-center">
                      <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#75ccc3] to-[#9cd4af]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${((idx + 1) / steps.length) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                      <span className="ml-3 text-xs text-gray-500 font-medium">
                        {idx + 1}/{steps.length}
                      </span>
                    </div>
                  </motion.div>

                  {idx < steps.length - 1 && (
                    <motion.div
                      className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-[#9cd4af] to-[#75ccc3] opacity-50"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-[#75ccc3] to-[#9cd4af] rounded-full px-6 py-3">
                <svg className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white font-semibold">Process Complete</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      image: imgImg3,
      name: "Rahul Sharma",
      role: "CEO, TechStart",
      quote:
        "GrowBit transformed our business completely. Their expertise in development and marketing helped us scale from startup to market leader.",
      rating: 5,
    },
    {
      image: imgImg4,
      name: "Tony Stark",
      role: "Founder, Stark Industry",
      quote:
        "The team's dedication and expertise exceeded our expectations. They delivered quality solutions that drove real business growth.",
      rating: 5,
    },
    {
      image: imgImg5,
      name: "Saleem",
      role: "Founder, B Alert",
      quote:
        "Professional, reliable, and results-driven. GrowBit is the partner every business needs for sustainable growth.",
      rating: 5,
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <section className="py-12 sm:py-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#9cd4af]/10 to-[#75ccc3]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#75ccc3]/10 to-[#d7e48a]/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-[#d7e48a]/5 to-[#9cd4af]/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className='relative space-y-4 w-fit mx-auto mb-2'>
            <div className='absolute bottom-0 -left-12 m-0 -z-10'>
              <img src={Testimonials2} alt="growbit testimonials" />
            </div>
            <div className='absolute bottom-0 -right-12 m-0 -z-10 scale-x-[-1]'>
              <img src={Testimonials3} alt="growbit testimonials" />
            </div>
            <div className=' relative w-fit mx-auto'>
              <img src={Testimonials1} alt="growbit testimonials" />
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 sm:h-16 sm:w-16 bg-[#9cd4af] rounded-full blur-2xl opacity-90 z-0 pointer-events-none' />
            </div>
            <p className='text-sm uppercase text-center text-white/60 tracking-widest'>Testimonials</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Some Honest Feedbacks</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">Trusted & loved by many partners & company</p>
          <span className='block sm:hidden text-base sm:text-lg md:text-xl text-gray-300'>Don&apos;t just take our words, take theirs.
          </span>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 lg:p-8"
              initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center mb-6 lg:mb-8">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover mr-4 border-2 border-[#9cd4af]/30"
                />
                <div>
                  <h4 className="text-lg lg:text-xl text-white font-semibold font-caveat">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm lg:text-base">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 lg:mb-8 leading-relaxed italic text-sm lg:text-base">
                "{testimonial.quote}"
              </p>
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <motion.svg
                    key={starIndex}
                    className="w-4 h-4 lg:w-5 lg:h-5"
                    viewBox="0 0 18 16"
                    fill="none"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + starIndex * 0.1 }}
                  >
                    <path d={svgPaths.p1e351580} fill="#FACC15" />
                  </motion.svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel Layout */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <motion.div
                    className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 mx-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-[#9cd4af]/30"
                      />
                      <div>
                        <h4 className="text-lg text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed italic text-sm">"{testimonial.quote}"</p>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                        <svg key={starIndex} className="w-4 h-4" viewBox="0 0 18 16" fill="none">
                          <path d={svgPaths.p1e351580} fill="#FACC15" />
                        </svg>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-[#9cd4af] w-6" : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#9cd4af] via-[#75ccc3] to-[#d7e48a]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">Ready to Scale Your Business?</h2>
          <p className="text-lg sm:text-xl text-gray-800 mb-12 max-w-3xl mx-auto">
            Join hundreds of successful businesses that trust GrowBit for their growth journey
          </p>

          <div className="flex gap-3 sm:gap-4 justify-center">
            <motion.button
              className="bg-black group cursor-pointer text-white px-4 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap"
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
              <svg className="w-4 h-4 mt-1 group-hover:translate-x-2 transition-all duration-300" viewBox="0 0 14 16" fill="none">
                <path d={svgPaths.p18af0c00} fill="white" />
              </svg>
            </motion.button>
            <Link
            to="/contact"
            >
            <motion.button
              className="bg-transparent cursor-pointer border-2 border-black text-black px-4 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap"
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


const Home = () => (
  <>
    <HeroSection />
    <WhyChooseSection />
    <OurProcessSection />
    <ServicesSection />
    <TestimonialsSection />
    <CTASection />
  </>
)

export default Home 