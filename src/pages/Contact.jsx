import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import(motion);
import ContactHero from "../components/Contact/ContactHero";
import ContactForm from "../components/Contact/ContactForm";
import FAQ from "../components/Contact/FAQ";
import HandDrawnTitle from "../components/common/HandDrawnTitle";
import { FOOTER_DATA } from "../constants";
import { motion } from "framer-motion";

const locations = [
  {
    city: "Hyderabad (Headquarters)",
    company: "Growbit Business Services Private Limited",
    address:
      "The Mayflower, Plot No.72, P & T Colony, Karkhana, Secunderabad, Telangana 500009",
  },
  {
    city: "Hyderabad",
    company: "Growbit Business Services Private Limited",
    address:
      "The Mayflower, Plot No.72, P & T Colony, Karkhana, Secunderabad, Telangana 500009",
  },
  {
    city: "Bangalore",
    company: "Growbit Business Services Private Limited",
    address:
      "Innov8 Mantri Commercio, Tower A, 5th Floor, MIS, Deeta Construction Pvt. Ltd., No. 51, Devarabisanahalli, Bangalore, Karnataka – 560103",
  },
  {
    city: "Ahmedabad",
    company: "Growbit Business Services Private Limited",
    address:
      "Workflo Ahmedabad, Mauryansh Elanza, GF-001, Mauryansh Elanza, Shyamal Cross Road, Near Parekh Hospital, Satellite, Ahmedabad, Gujarat – 380015",
  },
  {
    city: "New Delhi",
    company: "Growbit Business Services Private Limited",
    address:
      "Innov8 Okhla, 3rd Floor, 211, Okhla Industrial Estate, Phase-III, New Delhi – 110020",
  },
  {
    city: "Mumbai",
    company: "Growbit Business Services Private Limited",
    address:
      "Innov8 Parinee Crescenzo, 1702, 17th Floor, Crescenzo Building, Opp. MCA Ground, Bandra Kurla Complex, Plot C-38/39, G-Block, Bandra (East), Mumbai, Maharashtra – 400051",
  },
  {
    city: "Lucknow",
    company: "Growbit Business Services Private Limited",
    address:
      "Unit No. 806A, 8th Floor, Levana Cyber Heights, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh – 226010",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />

      <section className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-bl from-[#9cd4af]/20 via-[#75ccc3]/15 to-transparent rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#75ccc3]/20 via-[#d7e48a]/15 to-transparent rounded-full blur-[100px]" />
        </div>

        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="contactDots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#75ccc3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactDots)" />
        </svg>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-10 sm:mb-12 md:mb-16 text-center">
            <HandDrawnTitle text="Reach Out" theme="light" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Reach out to us through any of these channels. We're here to help.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-stretch mb-20 md:mb-28">
            <div className="w-full lg:w-7/12 flex-1">
              <div className="h-full">
                <ContactForm />
              </div>
            </div>

            <div className="w-full lg:w-5/12">
              <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-xl shadow-[#75ccc3]/10 relative overflow-hidden h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-8 text-gray-900">
                  Direct Contact
                </h3>

                <div className="space-y-8 relative z-10 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#75ccc3]/10 to-[#d7e48a]/10 border border-[#75ccc3]/20 shrink-0">
                      <Mail className="w-6 h-6 text-[#75ccc3]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1.5">
                        Email us
                      </p>
                      <a
                        href={FOOTER_DATA.sections[2].links[0].url}
                        className="text-lg font-semibold text-gray-900 hover:text-[#75ccc3] transition-colors"
                      >
                        {FOOTER_DATA.sections[2].links[0].label}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#75ccc3]/10 to-[#d7e48a]/10 border border-[#75ccc3]/20 shrink-0">
                      <Phone className="w-6 h-6 text-[#75ccc3]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1.5">
                        Call us
                      </p>
                      <a
                        href="tel:09063890638"
                        className="text-lg font-semibold text-gray-900 hover:text-[#75ccc3] transition-colors"
                      >
                        090638 90638
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Mon-Sat, 10am - 6pm (Sun Closed)
                      </p>
                    </div>
                  </div>

                  <hr className="border-gray-100 my-4" />

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#75ccc3]/10 to-[#d7e48a]/10 border border-[#75ccc3]/20 shrink-0">
                      <MapPin className="w-6 h-6 text-[#75ccc3]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1.5">
                        {locations[0].city}
                      </p>
                      <p className="text-base font-semibold text-gray-900 mb-1">
                        {locations[0].company}
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {locations[0].address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-64 h-64 bg-[#9cd4af]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#75ccc3]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Regional Offices
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              We operate across multiple major cities to ensure we are always
              close to our clients and operations.
            </p>
          </div>

          {/* Mobile Auto-Scrolling Marquee */}
          <div className="md:hidden overflow-hidden w-full relative -mx-4 px-4 sm:mx-0 sm:px-0 py-2">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            >
              <div className="flex gap-4 pr-4">
                {locations.slice(1).map((loc, idx) => (
                  <div
                    key={`mob1-${idx}`}
                    className="w-[85vw] sm:w-[320px] bg-white rounded-2xl p-5 border border-gray-100 shadow-xl shadow-[#75ccc3]/5 flex items-start gap-4 relative overflow-hidden"
                  >
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#75ccc3]/10 to-[#d7e48a]/10 border border-[#75ccc3]/20 shrink-0 relative z-10">
                      <MapPin className="w-5 h-5 text-[#75ccc3]" />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-base font-bold text-gray-900 mb-0.5">
                        {loc.city}
                      </h3>
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-2">
                        {loc.company}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {loc.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 pr-4">
                {locations.slice(1).map((loc, idx) => (
                  <div
                    key={`mob2-${idx}`}
                    className="w-[85vw] sm:w-[320px] bg-white rounded-2xl p-5 border border-gray-100 shadow-xl shadow-[#75ccc3]/5 flex items-start gap-4 relative overflow-hidden"
                  >
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#75ccc3]/10 to-[#d7e48a]/10 border border-[#75ccc3]/20 shrink-0 relative z-10">
                      <MapPin className="w-5 h-5 text-[#75ccc3]" />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-base font-bold text-gray-900 mb-0.5">
                        {loc.city}
                      </h3>
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-2">
                        {loc.company}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {loc.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {locations.slice(1).map((loc, idx) => (
              <div
                key={`desk-${idx}`}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-xl shadow-[#75ccc3]/5 hover:shadow-[#75ccc3]/20 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 overflow-hidden"
              >
                {/* Subtle animated gradient top border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#75ccc3] to-[#d7e48a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Decorative background blur */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#75ccc3]/10 to-transparent rounded-full blur-2xl -mr-10 -mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="p-3 rounded-xl bg-gradient-to-br from-[#75ccc3]/10 to-[#d7e48a]/10 border border-[#75ccc3]/20 shrink-0 relative z-10 group-hover:bg-[#75ccc3] transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-[#75ccc3] group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-gray-900 mb-0.5 group-hover:text-[#75ccc3] transition-colors duration-300">
                    {loc.city}
                  </h3>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    {loc.company}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed pr-2">
                    {loc.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default Contact;
