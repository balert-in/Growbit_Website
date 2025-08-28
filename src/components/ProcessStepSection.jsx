import React from 'react'
import { Lightbulb, ListTodo, Hammer, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: <Lightbulb size={28} className="text-white" />, title: 'Ideation', desc: 'Brainstorm and conceptualize your vision with our creative framework', position: 'top', yOffset: '140px'
  },
  {
    icon: <ListTodo size={28} className="text-white" />, title: 'Planning', desc: 'Structure your approach with detailed roadmaps and strategic planning', position: 'bottom', yOffset: '-130px'
  },
  {
    icon: <Hammer size={28} className="text-white" />, title: 'Development', desc: 'Build and create with precision using industry-leading tools and methods', position: 'top', yOffset: '240px'
  },
  {
    icon: <Rocket size={28} className="text-white" />, title: 'Launch', desc: 'Deploy your solution and celebrate your success with ongoing support', position: 'bottom', yOffset: '-220px'
  }
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } }
}

const stepVariants = {
  hidden: { opacity: 0, filter: 'blur(12px)', scale: 0.95 },
  visible: { opacity: 1, filter: 'blur(0px)', scale: 1, transition: { duration: 0.7, type: 'spring' } }
}

const ProcessStepSection = () => (
  <section className="w-full flex flex-col items-center justify-center py-10 px-2">
    <div className="max-w-7xl w-full mx-auto rounded-xl p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-4">Our Step Process</h2>
      <div className="relative w-full h-[420px] md:h-[420px] flex items-center justify-center">
        <svg className="absolute left-0 top-36 -translate-y-1/2 w-full h-48 md:h-72" width="100%" height="100%" viewBox="0 0 1200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 180 Q 320 40 600 180 Q 880 320 1140 180" stroke="#BDBDBD" strokeWidth="4" strokeDasharray="10 10" fill="none" />
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
                style={step.position === 'top' ? { top: step.yOffset, position: 'relative' } : { bottom: step.yOffset, position: 'relative' }}
                variants={stepVariants}
              >
                <div className="bg-black rounded-full w-14 h-14 flex items-center justify-center z-10 shadow-lg mb-2">{step.icon}</div>
                <div className={`bg-white rounded-lg shadow p-6 border border-black/10 w-80 max-w-xs text-center ${step.position === 'top' ? 'mb-8 -mt-2' : 'mt-8 -mb-2'} hidden md:block z-20`} style={{ position: 'absolute', top: step.position === 'top' ? '-140px' : 'auto', bottom: step.position === 'bottom' ? '-140px' : 'auto', left: '50%', transform: 'translateX(-50%)' }}>
                  <div className="font-semibold text-black mb-1">{step.title}</div>
                  <div className="text-sm text-black/70">{step.desc}</div>
                </div>
                <div className="block md:hidden mt-4 w-full max-w-xs">
                  <div className="bg-white rounded-lg shadow p-4 border border-black/10 text-center">
                    <div className="font-semibold text-black mb-1">{step.title}</div>
                    <div className="text-xs text-black/70">{step.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default ProcessStepSection 



function OurProcessSection() {
  const steps = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 18 24" fill="none">
          <path d={processSvgPaths.p11883600} fill="white" />
        </svg>
      ),
      title: "Ideation",
      description: "Brainstorm and conceptualize your vision with our creative framework",
      position: "top",
      bgColor: "bg-gradient-to-br from-[#75ccc3] to-[#9cd4af]"
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d={processSvgPaths.p8055700} fill="white" />
        </svg>
      ),
      title: "Planning",
      description: "Structure your approach with detailed roadmaps and strategic planning",
      position: "bottom",
      bgColor: "bg-gradient-to-tr from-[#d7e48a] to-[#75ccc3]"
    },
    {
      icon: (
        <svg className="w-7 h-6" viewBox="0 0 27 24" fill="none">
          <path d={processSvgPaths.pe45f600} fill="white" />
        </svg>
      ),
      title: "Development",
      description: "Build and create with precision using industry-leading tools and methods",
      position: "top",
      bgColor: "bg-gradient-to-bl from-[#75ccc3] to-[#9cd4af]"
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d={processSvgPaths.p31a038f0} fill="white" />
        </svg>
      ),
      title: "Launch",
      description: "Deploy your solution and celebrate your success with ongoing support",
      position: "bottom",
      bgColor: "bg-gradient-to-r from-[#75ccc3] to-[#9cd4af]"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } }
  };

  const stepVariants = {
    hidden: { opacity: 0, filter: 'blur(12px)', scale: 0.95 },
    visible: { opacity: 1, filter: 'blur(0px)', scale: 1, transition: { duration: 0.7, type: 'spring' } }
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <motion.div 
        className="absolute bg-[#75ccc3] right-32 rounded-full size-32 top-96 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bg-[#9cd4af] left-10 rounded-full size-40 top-10 opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bg-[#d7e48a] right-10 rounded-full size-24 bottom-20 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Process</h2>
          <p className="text-xl text-gray-300">
            Follow our proven path to success
          </p>
        </motion.div>

        <div className="relative w-full flex flex-col items-center justify-center py-10">
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

            {/* Steps Container */}
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
                        ? { top: step.title === 'Ideation' ? '140px' : '240px', position: 'relative' } 
                        : { bottom: step.title === 'Planning' ? '-130px' : '-220px', position: 'relative' }
                    }
                    variants={stepVariants}
                  >
                    {/* Icon Circle */}
                    <motion.div 
                      className={`${step.bgColor} rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center z-10 shadow-lg mb-2`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Desktop Cards */}
                    <motion.div 
                      className={`bg-white rounded-lg shadow-lg p-4 md:p-6 border border-[#d7e48a] w-72 md:w-80 max-w-xs text-center ${
                        step.position === 'top' ? 'mb-8 -mt-8' : 'mt-8 -mb-8'
                      } hidden md:block z-20`} 
                      style={{ 
                        position: 'absolute', 
                        top: step.position === 'top' ? '-140px' : 'auto', 
                        bottom: step.position === 'bottom' ? '-140px' : 'auto', 
                        left: '50%', 
                        transform: 'translateX(-50%)' 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="font-semibold text-black mb-3">{step.title}</div>
                      <div className="text-sm text-black/70 leading-relaxed">{step.description}</div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}