import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "../../constants";
import { FlashlightCard } from "../common/FlashlightCard";
import "@fontsource/kalam";

const SparkleIcon = ({ className }) => (
  <svg
    viewBox="0 0 45 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#75ccc3" />
        <stop offset="100%" stopColor="#9cd4af" />
      </linearGradient>
    </defs>
    <path
      d="M36.3562 38.1666C37.6286 37.1429 38.8965 36.1398 40.1378 35.0848C40.4057 34.8586 40.4338 34.4919 40.2025 34.2645C39.9705 34.0348 39.5657 34.0335 39.3003 34.2589C38.0651 35.3073 36.8081 36.3022 35.5442 37.3185C35.2718 37.5388 35.2332 37.9064 35.4553 38.1391C35.6805 38.3731 36.0838 38.3869 36.3562 38.1666Z"
      fill="transparent"
      stroke="url(#sparkleGradient)"
      strokeWidth="1.5"
      fillRule="evenodd"
      clipRule="evenodd"
    />
    <path
      d="M23.6045 34.5567C24.4674 29.8476 25.0705 25.117 25.8234 20.4006C25.8737 20.0799 25.6318 19.8005 25.2842 19.7745C24.934 19.7493 24.6099 19.9854 24.5572 20.3069C23.8072 25.0151 23.2072 29.7376 22.3439 34.4371C22.2856 34.7579 22.5207 35.0418 22.8679 35.0751C23.2175 35.1077 23.5455 34.8752 23.6045 34.5567Z"
      fill="transparent"
      stroke="url(#sparkleGradient)"
      strokeWidth="1.5"
      fillRule="evenodd"
      clipRule="evenodd"
    />
    <path
      d="M10.9864 38.4122C9.17055 34.8802 7.23975 31.3954 5.46877 27.8426C5.32557 27.5594 4.94929 27.4485 4.62738 27.595C4.30301 27.7422 4.15728 28.0944 4.29801 28.3784C6.0728 31.9349 8.00496 35.4241 9.82458 38.9597C9.97024 39.2421 10.3483 39.3501 10.6689 39.1992C10.9919 39.0476 11.1327 38.6968 10.9864 38.4122Z"
      fill="transparent"
      stroke="url(#sparkleGradient)"
      strokeWidth="1.5"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

const LeafIcon = ({ className }) => (
  <motion.svg
    viewBox="0 0 30 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={{ rotate: [-5, 5, -5] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <defs>
      <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#75ccc3" />
        <stop offset="50%" stopColor="#9cd4af" />
        <stop offset="100%" stopColor="#d7e48a" />
      </linearGradient>
    </defs>
    <path
      d="M14.0947 9.35871C16.8587 9.08173 19.5519 5.86753 19.2482 1.59668C15.2005 2.17114 12.7117 6.59369 14.0947 9.35871Z"
      stroke="url(#leafGradient)"
      strokeWidth="0.8"
      fill="url(#leafGradient)"
      fillOpacity="0.3"
    />
    <path
      d="M9.84495 15.0454C11.3313 13.8755 12.8841 8.96429 9.62272 5.5204C5.42024 8.68822 8.16782 14.1711 9.84495 15.0454Z"
      stroke="url(#leafGradient)"
      strokeWidth="0.8"
      fill="url(#leafGradient)"
      fillOpacity="0.3"
    />
    <path
      d="M8.46051 23.3394C9.32182 21.6553 9.0378 16.0771 4.0246 15.0236C1.87123 19.234 6.57147 23.2461 8.46051 23.3394Z"
      stroke="url(#leafGradient)"
      strokeWidth="0.8"
      fill="url(#leafGradient)"
      fillOpacity="0.3"
    />
    <path
      d="M8.77875 32.5161C9.07611 30.648 6.91525 24.8271 1.82228 25.3781C1.0788 30.0483 6.2582 32.8936 8.77875 32.5161Z"
      stroke="url(#leafGradient)"
      strokeWidth="0.8"
      fill="url(#leafGradient)"
      fillOpacity="0.3"
    />
    <path
      d="M11.9011 41.4024C11.7067 39.4928 7.80018 34.1114 2.48796 34.954C3.04076 41.4024 10.0796 42.0072 11.9011 41.4024Z"
      stroke="url(#leafGradient)"
      strokeWidth="0.8"
      fill="url(#leafGradient)"
      fillOpacity="0.3"
    />
    <path
      d="M17.5849 49.6023C16.9542 47.5302 10.9975 42.1893 5.07298 43.8383C7.33357 50.3866 15.6209 50.5148 17.5849 49.6023Z"
      stroke="url(#leafGradient)"
      strokeWidth="0.8"
      fill="url(#leafGradient)"
      fillOpacity="0.3"
    />
    <path
      d="M24.8713 56.5979C23.8075 54.7112 17.1405 50.6749 11.7124 53.5655C14.3717 58.2824 21.3974 58.8228 24.8713 56.5979Z"
      stroke="url(#leafGradient)"
      strokeWidth="0.8"
      fill="url(#leafGradient)"
      fillOpacity="0.3"
    />
    <path
      d="M26.5857 55.0667C28.347 54.4303 30.5452 48.9804 25.9242 46.1679C21.7057 49.784 24.2179 53.7486 26.5857 55.0667Z"
      stroke="url(#leafGradient)"
      strokeWidth="0.8"
      fill="url(#leafGradient)"
      fillOpacity="0.3"
    />
    <path
      d="M19.5207 48.7717C21.3778 48.5311 24.5242 43.6143 20.6204 39.8695C15.7201 42.4882 18.3433 47.3157 19.5207 48.7717Z"
      stroke="url(#leafGradient)"
      strokeWidth="0.8"
      fill="url(#leafGradient)"
      fillOpacity="0.3"
    />
    <path
      d="M13.8978 40.9918C15.6131 41.0353 18.6613 37.4608 16.1737 33.5105C12.0313 36.0546 13.0368 39.508 13.8978 40.9918Z"
      stroke="url(#leafGradient)"
      strokeWidth="0.8"
      fill="url(#leafGradient)"
      fillOpacity="0.3"
    />
    <path
      d="M10.1811 32.3355C11.8166 32.7276 15.575 30.4957 14.2307 25.9681C9.53946 26.0767 9.8478 30.7897 10.1811 32.3355Z"
      stroke="url(#leafGradient)"
      strokeWidth="0.8"
      fill="url(#leafGradient)"
      fillOpacity="0.3"
    />
    <path
      d="M10.12 23.6177C11.3059 24.3893 16.173 23.0644 16.1718 18.8474C12.0709 17.9523 10.1563 22.2037 10.12 23.6177Z"
      stroke="url(#leafGradient)"
      strokeWidth="0.8"
      fill="url(#leafGradient)"
      fillOpacity="0.3"
    />
    <path
      d="M11.775 15.8755C12.9608 16.6471 18.1349 16.152 17.8265 11.7638C14.5411 11.176 11.8113 14.4615 11.775 15.8755Z"
      stroke="url(#leafGradient)"
      strokeWidth="0.8"
      fill="url(#leafGradient)"
      fillOpacity="0.3"
    />
  </motion.svg>
);

const Testimonials = () => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current && innerRef.current) {
        setWidth(
          innerRef.current.scrollWidth - containerRef.current.offsetWidth,
        );
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#75ccc3]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#d7e48a]/15 rounded-full blur-[120px]" />
      </div>

      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="testimonialDots"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#75ccc3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#testimonialDots)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative space-y-4 w-fit mx-auto mb-6">
            <div className="relative space-y-4 w-fit mx-auto mb-2">
              <div className="absolute bottom-0 -left-6 sm:-left-10 md:-left-12 m-0 -z-10">
                <LeafIcon className="w-8 h-12 sm:w-10 sm:h-14 md:w-12 md:h-16" />
              </div>
              <div className="absolute bottom-0 -right-6 sm:-right-10 md:-right-12 m-0 -z-10 scale-x-[-1]">
                <LeafIcon className="w-8 h-12 sm:w-10 sm:h-14 md:w-12 md:h-16" />
              </div>
              <div className="relative w-fit mx-auto">
                <SparkleIcon className="w-16 h-16 sm:w-20 sm:h-20" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 sm:h-16 sm:w-16 bg-[#9cd4af] rounded-full blur-2xl opacity-70 z-0 pointer-events-none" />
              </div>
            </div>
            <p className="text-xs sm:text-sm uppercase text-center text-gray-500 tracking-widest font-medium">
              Testimonials
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Some Honest Feedbacks
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Trusted & loved by many partners & company
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="cursor-grab active:cursor-grabbing overflow-hidden"
        >
          <motion.div
            ref={innerRef}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-4 sm:gap-8"
          >
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <FlashlightCard
                key={testimonial.id}
                className="min-w-[85vw] sm:min-w-[350px] md:min-w-[400px] bg-white border border-gray-100 shadow-xl shadow-[#75ccc3]/10 p-6 sm:p-8 rounded-3xl flex flex-col items-center text-center group transition-colors duration-300"
                gradientColor="rgba(117, 204, 195, 0.15)"
              >
                <div className="absolute top-4 left-4 text-[#75ccc3]/30 z-10">
                  <Quote
                    size={32}
                    className="transform scale-x-[-1] sm:w-12 sm:h-12"
                  />
                </div>

                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-gray-100 overflow-hidden mb-6 shadow-lg relative z-10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p
                  className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed relative z-10"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  "{testimonial.feedback}"
                </p>

                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? "text-[#d7e48a] fill-[#d7e48a]" : "text-gray-300"}`}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  {/* <h4 className="text-gray-900 text-xl sm:text-2xl font-bold mb-1" style={{ fontFamily: 'Kalam, cursive' }}>{testimonial.name}</h4> */}
                  <p className="text-[#75ccc3] text-xs sm:text-sm font-medium tracking-wide uppercase">
                    {testimonial.role}
                  </p>
                </div>
              </FlashlightCard>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
