import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import drImg from "@assets/Screenshot_20260519-104241_ChatGPT_1779168460866.jpg";

export default function AboutDoctor() {
  return (
    <section id="doctor" className="w-full overflow-hidden bg-gradient-to-b from-[#FFF8F5] to-[#FAD7D0] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative max-w-sm mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-4 ring-[#D4A373]/40 ring-offset-4 ring-offset-transparent aspect-[3/4]">
                <img
                  src={drImg}
                  alt="Dr. Jayshree Londhe"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#D4A373] text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg whitespace-nowrap">
                International PMU Expert – Canada
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col items-start"
          >
            <span className="font-label uppercase text-sm tracking-widest text-[#D4A373] mb-4">
              Meet Your Doctor
            </span>
            <h2 className="font-display text-4xl font-semibold text-[#3A2D2D] mb-6">
              Dr. Jayshree Londhe
            </h2>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-white/60 border border-[#D4A373] text-[#3A2D2D] px-4 py-1.5 rounded-full text-sm font-medium">
                BAMS
              </span>
              <span className="bg-white/60 border border-[#D4A373] text-[#3A2D2D] px-4 py-1.5 rounded-full text-sm font-medium">
                Clinical Cosmetologist
              </span>
              <span className="bg-white/60 border border-[#D4A373] text-[#3A2D2D] px-4 py-1.5 rounded-full text-sm font-medium">
                International PMU Expert
              </span>
            </div>

            <div className="space-y-4 text-gray-700 mb-8 leading-relaxed">
              <p>
                Dr. Jayshree Londhe is a visionary in the field of aesthetic medicine, seamlessly integrating her profound knowledge of Ayurveda with advanced clinical cosmetology. With over five years of dedicated clinical experience, she has transformed the lives of countless patients.
              </p>
              <p>
                As an Internationally Certified Permanent Makeup (PMU) Expert from Canada, Dr. Londhe brings world-class precision to eyebrow microblading, lip pigmentation, and scalp micropigmentation. Her meticulous eye for detail ensures natural, enhancing results tailored to each individual's facial architecture.
              </p>
              <p>
                Her philosophy centers on personalized care—understanding that every skin and hair concern requires a bespoke approach. By combining holistic healing with state-of-the-art medical technology, Dr. Londhe delivers comprehensive solutions that enhance both health and beauty.
              </p>
            </div>

            <ul className="space-y-3 mb-10 w-full">
              {[
                "Internationally Certified PMU Expert (Canada)",
                "BAMS Graduate",
                "5+ Years Clinical Experience",
                "1000+ Successful Procedures",
                "Personalized Treatment Approach"
              ].map((achievement, i) => (
                <li key={i} className="flex items-center gap-3 text-[#3A2D2D] font-medium">
                  <CheckCircle className="w-5 h-5 text-[#D4A373] flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>

            <button className="rounded-full bg-gradient-to-r from-[#F8C8C0] to-[#E8A0BF] px-8 py-3 text-[#3A2D2D] font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              Book with Dr. Jayshree
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
