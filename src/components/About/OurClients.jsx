import { motion } from 'framer-motion'
import { CLIENTS_DATA } from '../../constants'
import HandDrawnTitle from '../common/HandDrawnTitle'

const OurClients = () => {
    return (
        <section className="py-20 bg-[#09090b] relative overflow-hidden">
            <div className="mx-auto px-4 max-w-7xl mb-12">
                <div className="text-center">
                    <HandDrawnTitle text="Trusted By" />
                </div>
                <h2 className="section-heading mt-2">
                    Powering <span className="text-[#75ccc3]">India's Fastest</span> Growing Brands
                </h2>
                <p className="section-subheading">
                    From fintech unicorns to retail giants, we help the best businesses execute on the ground with speed and precision.
                </p>
            </div>

            <div 
                className="relative w-full overflow-hidden"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}
            >
                <div className="flex py-4">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 50,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex items-center gap-8 sm:gap-16 pr-8 sm:pr-16"
                    >
                        {[...CLIENTS_DATA, ...CLIENTS_DATA].map((client, index) => (
                            <div
                                key={`${client.name}-${index}`}
                                className="relative bg-white rounded-2xl p-4 w-48 h-20 sm:w-60 sm:h-28 flex items-center justify-center shrink-0 cursor-pointer hover:shadow-lg hover:shadow-[#75ccc3]/20 transition-all duration-300 group"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default OurClients
