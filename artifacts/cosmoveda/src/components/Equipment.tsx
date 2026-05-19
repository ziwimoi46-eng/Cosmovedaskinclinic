import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

import quantumImg from "@assets/Screenshot_20260519-103435_WhatsApp_1779168461005.jpg";
import hydraImg from "@assets/IMG-20260225-WA0012(1)_1779168460688.jpg";
import steamerImg from "@assets/Screenshot_20260519-103430_WhatsApp_1779168460987.jpg";
import shiroImg from "@assets/Screenshot_20260519-103409_WhatsApp_1779168460958.jpg";

const equipment = [
  {
    name: "Quantum Pro Duo",
    subtitle: "Laser / IPL Workstation",
    image: quantumImg,
    desc: "Professional medical-grade laser and IPL workstation for advanced skin rejuvenation, pigmentation treatment, vascular lesion treatment, and permanent laser hair reduction.",
    howItWorks: "Uses controlled pulses of laser or IPL energy targeting melanin and pigmentation safely and precisely.",
    safety: ["Contact Cooling System", "Emergency Stop Button", "Adjustable Skin-Type Settings"]
  },
  {
    name: "HydraFacial Machine",
    subtitle: "Multi-Step Facial System",
    image: hydraImg,
    desc: "Advanced skin cleansing, exfoliation, and serum infusion system that delivers instant, visible results with no downtime.",
    howItWorks: "Vacuum suction combined with exfoliation tips and serum infusion technology for deep cleansing.",
    safety: ["Adjustable Vacuum Control", "Closed Sanitary Loop", "Hygienic Single-Use Tips"]
  },
  {
    name: "Ozone Facial Steamer",
    subtitle: "Professional Steam Therapy",
    image: steamerImg,
    desc: "Professional ozone steam therapy machine that prepares skin for treatments by opening pores with antibacterial warm steam.",
    howItWorks: "Generates warm, ozonated steam that softens pores and kills surface bacteria while hydrating skin.",
    safety: ["Auto Low-Water Shutoff", "Thermal Protection System", "Ozone Safety Controls"]
  },
  {
    name: "Shirodhara & Nadi Swedana",
    subtitle: "Ayurvedic Therapy Setup",
    image: shiroImg,
    desc: "Traditional Ayurvedic detox and deep relaxation therapy setup combining warm herbal oil drip and herbal steam therapy.",
    howItWorks: "Warm medicinal oils flow in a steady stream over the forehead while herbal steam envelops the body.",
    safety: ["Pressure Relief Valve", "Temperature Regulation", "Open-Head Cooling Design"]
  }
];

export default function Equipment() {
  return (
    <section id="equipment" className="w-full overflow-hidden bg-[#2D1F1F] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-semibold text-white mb-4">
            State-of-the-Art Equipment
          </h2>
          <p className="text-[#F8C8C0]">
            Medical-grade technology for outstanding results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipment.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-[#D4A373]/40 transition-all duration-500 group flex flex-col"
            >
              <div className="w-full aspect-[16/9] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1F1F] to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 text-white flex-grow flex flex-col">
                <h3 className="font-display text-xl font-semibold mb-1">
                  {item.name}
                </h3>
                <p className="text-[#F8C8C0] text-sm uppercase tracking-widest mb-4 font-label">
                  {item.subtitle}
                </p>
                <p className="text-white/70 text-sm mb-6 leading-relaxed flex-grow">
                  {item.desc}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-[#D4A373] font-semibold text-sm mb-2">How It Works</h4>
                  <p className="text-white/60 text-sm">{item.howItWorks}</p>
                </div>
                
                <ul className="space-y-2 mt-auto">
                  {item.safety.map((safeItem, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/70 text-xs">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{safeItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
