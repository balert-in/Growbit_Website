import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ScrollSpy } from "./ScrollSpy";

const ScrollSpyLayout = ({
  data,
  title,
  subtitle,
  titleHighlight = "Policy",
  gradientFrom = "from-[#75ccc3]",
  gradientTo = "to-[#d7e48a]"
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(data[0]?.id || "");

  const handleScroll = useCallback((entry) => {
    if (entry && entry.target.id) {
      setActiveSection(entry.target.id);
    }
  }, []);

  const handleSectionClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const offset = 120;
      window.scrollTo({ top: elementTop - offset, behavior: 'smooth' });
    }
    setIsDropdownOpen(false);
  };

  const Navigation = ({ className = "" }) => (
    <nav className={`space-y-3 ${className}`}>
      {data.map(({ id, title, icon: Icon }) => (
        <button
          key={id}
          onClick={() => handleSectionClick(id)}
          className={`cursor-pointer w-full flex items-center gap-3 rounded-xl text-left transition-all ${activeSection === id
              ? " text-[#9cd4af]"
              : "text-gray-600"
            }`}
        >
          <Icon className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm font-medium truncate">{title}</span>
        </button>
      ))}
    </nav>
  );

  const getCurrentSection = () => {
    return data.find((s) => s.id === activeSection);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 relative">
      <ScrollSpy handleScroll={handleScroll} />

      <motion.div
        className="absolute bg-gradient-to-r from-[#75ccc3]/10 to-[#d7e48a]/10 rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 left-4 top-32 sm:left-8 md:left-16"
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bg-gradient-to-r from-[#9cd4af]/10 to-[#75ccc3]/10 rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 right-4 top-12 sm:right-8 md:right-12"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      <div className="pt-20 relative z-10">
        <div className="bg-gradient-to-r from-black to-gray-800 text-center relative overflow-hidden">
          <motion.div
            className="absolute bg-[#75ccc3] opacity-10 rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 left-4 top-8"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bg-[#d7e48a] opacity-10 rounded-full w-20 h-20 sm:w-28 sm:h-28 right-4 top-16"
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                <span className="text-white">{title} </span>
                <span className="text-[#9cd4af]">{titleHighlight}</span>
              </h1>
              <p className="text-base md:text-lg text-gray-300">
                {subtitle}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="lg:grid lg:grid-cols-12 gap-8 md:gap-12">
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 z-10">
                <Navigation />
              </div>
            </aside>

            <div className="lg:hidden mb-6 sticky top-18">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="cursor-pointer w-full flex items-center justify-between gap-2 p-4 bg-white/80 backdrop-blur-sm rounded-md border border-gray-200 shadow-md"
                >
                  <div className="flex items-center gap-3">
                    {(() => {
                      const currentSection = getCurrentSection();
                      const Icon = currentSection?.icon;
                      return (
                        Icon && (
                          <>
                            <Icon className="w-4 h-4 text-[#9cd4af]" />
                            <span className="font-medium text-gray-800">
                              {currentSection.title}
                            </span>
                          </>
                        )
                      );
                    })()}
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${isDropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-20 top-full left-0 right-0 mt-2 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200"
                    >
                      <Navigation />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="lg:col-span-9">
                <div>
                  {data.map(({ id, title, icon: Icon, content }, index) => (
                    <motion.section
                      key={id}
                      id={id}
                      data-scrollspy
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      className={`py-6 md:py-0 space-y-3 ${index !== data.length - 1 ? 'border-b border-gray-200' : ''}`}
                    >
                      <div className="flex items-start gap-4 mb-6 pt-3">
                        <div className={`p-2 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-xl flex-shrink-0`}>
                          <Icon className="size-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            {title}
                          </h2>
                          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
                            <div className="whitespace-pre-wrap text-sm md:text-base">
                              {content}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.section>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSpyLayout;