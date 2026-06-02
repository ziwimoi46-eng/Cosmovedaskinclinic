import { motion } from "framer-motion";
import { Award, Zap, Gem, UserCheck, ShieldCheck, Home, Cpu, Heart, Globe } from "lucide-react";

const features = [
  { icon: Award, title: "Experienced Professionals", desc: "Led by Dr. Jayshree Londhe, BAMS & International PMU Expert" },
  { icon: Zap, title: "Advanced Techniques", desc: "Cutting-edge procedures combining modern science with Ayurveda" },
  { icon: Gem, title: "Premium Quality Products", desc: "Only internationally certified, dermatologically tested products" },
  { icon: UserCheck, title: "Personalized Consultation", desc: "Every treatment plan is uniquely crafted for your skin type" },
  { icon: ShieldCheck, title: "Safe & Hygienic", desc: "Hospital-grade sterilization and disposable protocol for every procedure" },
  { icon: Home, title: "Comfortable Environment", desc: "A welcoming, luxurious clinic designed for your comfort" },
  { icon: Cpu, title: "Modern Technology", desc: "Quantum Pro Duo laser and state-of-the-art equipment" },
  { icon: Heart, title: "Trusted Patient Care", desc: "500+ satisfied clients with verifiable before & after results" },
  { icon: Globe, title: "International PMU Expert", desc: "Canada-certified permanent makeup expertise right here in Aurangabad" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function WhyChooseUs() {
  return (
    <section id="why" className="w-full overflow-hidden bg-gradient-to-b from-[#FAD7D0] to-[#FFF8F5] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3A2D2D] mb-4">
            Why Choose CosmoVeda
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            What sets us apart in luxury aesthetic care
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md border border-white/50"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F8C8C0] to-[#E8A0BF] mx-auto mb-4 flex items-center justify-center">
                  <Icon size={24} color="#3A2D2D" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-[#3A2D2D] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
