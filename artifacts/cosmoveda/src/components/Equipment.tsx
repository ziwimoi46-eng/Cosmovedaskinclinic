import { motion } from "framer-motion";
import laserImg from "@assets/IMG-20260225-WA0013_1779168460679.jpg";
import hydraImg from "@assets/IMG-20260225-WA0012(1)_1779168460688.jpg";
import steamerImg from "@assets/Screenshot_20260519-103430_WhatsApp_1779168460987.jpg";
import panchakarmaImg from "@assets/IMG-20260225-WA0015_1779168460670.jpg";

const equipmentList = [
  {
    title: "Quantum Pro Duo (Laser/IPL)",
    description: "Advanced medical-grade laser for skin rejuvenation, pigmentation, vascular lesions, and pain-free laser hair reduction. Features a Contact Cooling System, Emergency Stop, and Adjustable Skin-Type Settings.",
    image: laserImg,
  },
  {
    title: "HydraFacial Machine",
    description: "State-of-the-art multi-step facial machine for deep skin cleansing, exfoliation, and targeted serum infusion. Equipped with an Adjustable Vacuum and Closed Sanitary Loop.",
    image: hydraImg,
  },
  {
    title: "Ozone Facial Steamer",
    description: "Antibacterial steam therapy to safely open pores and prep skin for treatments. Includes Auto Low-Water Shutoff and Thermal Protection for maximum safety.",
    image: steamerImg,
  },
  {
    title: "Ayurvedic Shirodhara & Nadi Swedana",
    description: "Premium setup for traditional Ayurvedic therapies utilizing warm herbal oils and targeted steam therapy for deep relaxation and detox.",
    image: panchakarmaImg,
  }
];

export default function Equipment() {
  return (
    <section id="equipment" className="py-24 bg-[#3A2D2D] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-label tracking-widest text-sm uppercase text-accent font-semibold mb-4 block">World-Class Technology</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Advanced <span className="italic text-primary">Equipment</span>
          </h2>
          <p className="text-white/70 font-light">We invest in the finest international medical-grade technology to ensure your treatments are safe, effective, and comfortable.</p>
        </div>

        <div className="space-y-16">
          {equipmentList.map((item, index) => (
            <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-center`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl border border-white/10"
                  />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <h3 className="font-serif text-3xl font-medium mb-4 text-white">{item.title}</h3>
                <p className="text-white/70 font-light text-lg leading-relaxed">{item.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}