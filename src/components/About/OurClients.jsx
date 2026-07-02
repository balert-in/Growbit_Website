import { motion } from "framer-motion";
import { CLIENTS_DATA } from "../../constants";
import HandDrawnTitle from "../common/HandDrawnTitle";

const OurClients = () => {
  const midPoint = Math.ceil(CLIENTS_DATA.length / 2);
  const row1 = CLIENTS_DATA.slice(0, midPoint);
  const row2 = CLIENTS_DATA.slice(midPoint);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="mx-auto px-4 max-w-7xl mb-12">
        <div className="text-center">
          <HandDrawnTitle theme="light" text="Trusted By" />
        </div>
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight px-4 mt-2">
          Powering <span className="text-[#0f766e]">India's Fastest</span>{" "}
          Growing Brands
        </h2>
        <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed text-center">
          From fintech unicorns to retail giants, we help the best businesses
          execute on the ground with speed and precision.
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden flex flex-col gap-6 sm:gap-8"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8"
          >
            {[...row1, ...row1].map((client, index) => (
              <div
                key={`${client.name}-1-${index}`}
                className="relative bg-white border border-gray-100 shadow-sm rounded-xl p-4 w-40 h-16 sm:w-56 sm:h-24 flex items-center justify-center shrink-0 cursor-pointer hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8 pb-2"
          >
            {[...row2, ...row2].map((client, index) => (
              <div
                key={`${client.name}-2-${index}`}
                className="relative bg-white border border-gray-100 shadow-sm rounded-xl p-4 w-40 h-16 sm:w-56 sm:h-24 flex items-center justify-center shrink-0 cursor-pointer hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
