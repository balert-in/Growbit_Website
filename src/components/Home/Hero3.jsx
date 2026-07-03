import { motion } from "framer-motion";
import { MapPin, Map, ClipboardList, Store, Users } from "lucide-react";

const PATHS = [
  { d: "M 0 0 L 0 360", transform: "translate(370 0)" },
  {
    d: "M 164 0 L 98.814 0 L 0 83.557 L 0 250",
    transform: "translate(395 120)",
  },
  {
    d: "M 0 0 L 56.317 0 C 93.572 34.834 114.632 53.417 155 84.826 L 155 250",
    transform: "translate(190 120)",
  },
  { d: "M 0 0 L 295 0 L 295 139", transform: "translate(25 221)" },
  { d: "M 296 0 L 0 0 L 0 139", transform: "translate(420 221)" },
];

const SEGMENT = 0.1;
const GAP = 1 - SEGMENT;

const Tag = ({ children, className }) => {
  return (
    <div
      className={`flex items-center justify-center gap-1.5 sm:gap-2 max-w-[calc(100%-0.5rem)] border border-white/20  bg-gradient-to-tr from-white/20 to-transparent px-2 py-1.5 text-center font-mono text-[10px] font-light uppercase text-gray-300 backdrop-blur-xl sm:px-3 sm:py-2 sm:text-xs md:w-60 md:px-4 md:text-sm whitespace-nowrap ${className || ""}`}
    >
      {children}
    </div>
  );
};

const AnimatedLine = ({ d, transform }) => {
  const transitionConfig = {
    duration: 2.5,
    ease: "linear",
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 0.5,
  };

  return (
    <g transform={transform}>
      <path
        d={d}
        stroke="color-mix(in srgb, #75ccc3 20%, transparent)"
        strokeWidth={3}
        fill="none"
      />
      <motion.path
        d={d}
        pathLength={1}
        stroke="#75ccc3"
        strokeWidth={1.5}
        strokeLinecap="butt"
        fill="none"
        strokeDasharray={`${SEGMENT} ${GAP}`}
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -(SEGMENT + GAP) }}
        transition={transitionConfig}
      />
      <motion.path
        d={d}
        pathLength={1}
        stroke="#ffffff"
        strokeWidth={5}
        strokeLinecap="round"
        fill="none"
        strokeDasharray="0.001 0.999"
        initial={{ strokeDashoffset: -SEGMENT }}
        animate={{ strokeDashoffset: -(SEGMENT + GAP) - SEGMENT }}
        transition={transitionConfig}
        className="filter drop-shadow-[0_0_6px_#ffffff]"
      />
    </g>
  );
};

const AnimationContainer = () => {
  return (
    <div className="w-full px-2 sm:px-4 flex items-end justify-center pointer-events-none mt-10 sm:mt-16 md:mt-20">
      <div className="relative w-full max-w-[900px] aspect-[734/360]">
        <Tag className="absolute left-[50.41%] top-0 z-10 w-fit -translate-x-1/2">
          <MapPin className="size-3 sm:size-4 text-[#75ccc3]" />
          <span>Field Operations</span>
        </Tag>
        <Tag className="absolute left-[22%] top-[31%] z-10 w-fit -translate-x-1/2">
          <Map className="size-3 sm:size-4 text-[#75ccc3]" />
          <span>GIS Survey</span>
        </Tag>
        <Tag className="absolute left-[79%] top-[31%] z-10 w-fit max-w-[60%] -translate-x-1/2 sm:max-w-none">
          <ClipboardList className="size-3 sm:size-4 text-[#75ccc3]" />
          <span>Research & Surveys</span>
        </Tag>
        <Tag className="absolute left-0 top-[57%] z-10 w-fit translate-x-0">
          <Store className="size-3 sm:size-4 text-[#75ccc3]" />
          <span>Merchant Acquisition</span>
        </Tag>
        <Tag className="absolute right-0 top-[57%] z-10 w-fit translate-x-0">
          <Users className="size-3 sm:size-4 text-[#75ccc3]" />
          <span>Payroll & Workforce</span>
        </Tag>

        <svg
          role="presentation"
          viewBox="0 0 734 360"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          {PATHS.map((path, index) => (
            <AnimatedLine key={index} {...path} />
          ))}
        </svg>

        <div className="absolute bottom-0 left-[50.41%] size-20 sm:size-32 md:size-40 lg:size-48 -translate-x-1/2 translate-y-1/2 rounded-xl bg-[#09090b] p-1.5 sm:p-2 border border-[#27272a] shadow-2xl z-20 pointer-events-auto">
          <div className="relative h-full w-full bg-gradient-to-br from-[#18181b] to-[#27272a] rounded-lg shadow-inner border border-white/5 flex items-center justify-center overflow-hidden">
            <motion.div
              className="relative z-10 w-full h-full flex items-center justify-center"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
            >
              <img
                src="/logo-white.webp"
                alt="GrowBit"
                className="w-full h-[130%] sm:h-[170%] object-cover filter drop-shadow-[0_0_15px_rgba(117,204,195,0.5)]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero3 = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-clip overflow-y-visible bg-[#09090b] flex flex-col pt-[12vh] sm:pt-[15vh] lg:pt-[18vh] z-10">
      <div className="relative z-10 flex flex-col justify-start px-4 flex-grow-0 shrink-0">
        <div className="mx-auto w-fit bg-[#75ccc3]/10 px-3 py-1 font-mono text-xs uppercase text-[#75ccc3] sm:px-4 sm:text-sm rounded-full border border-[#75ccc3]/20">
          ✨ Let's grow together
        </div>
        <h1 className="mx-auto mt-2 sm:mt-4 md:mt-8  max-w-3xl text-center text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          On-Ground <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#75ccc3] to-[#d7e48a]">
            Execution at Scale
          </span>
        </h1>
        <p className="mx-auto mt-1 sm:mt-3 md:mt-6 max-w-[700px] text-center text-sm font-normal text-gray-400 sm:text-base md:text-[17px] leading-relaxed">
          The leading nationwide network for on-ground field operations. Manage
          background verifications, conduct GIS surveys, and acquire local
          merchants - seamlessly. Trusted by leading enterprises and
          fast-growing businesses.
        </p>
        <div className="mx-auto mt-8 flex w-fit items-center justify-center sm:mt-10 md:mt-12">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex -space-x-2 sm:-space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-[#09090b] bg-gray-700 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-[#09090b] bg-gradient-to-r from-[#9cd4af] to-[#75ccc3] flex items-center justify-center text-[#09090b] text-[10px] sm:text-xs font-bold">
                5k+
              </div>
            </div>
            <div className="flex flex-col items-start justify-center">
              <div className="flex text-yellow-400 text-xs sm:text-sm tracking-widest">
                {"★".repeat(5)}
              </div>
              <span className="text-xs sm:text-sm text-gray-300 font-medium mt-0.5">
                Trusted by 150+ enterprises
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow flex items-end w-full">
        <AnimationContainer />
      </div>
    </div>
  );
};

export default Hero3;
