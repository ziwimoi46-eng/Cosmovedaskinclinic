import { motion } from "framer-motion";
import { Star, ShieldCheck, HeartPulse, Clock, Sparkles, Gem, Globe, UserCheck, Shield } from "lucide-react";

const features = [
  { icon: Globe, title: "International PMU Expert", desc: "Dr. Jayshree brings Canada-certified expertise to your treatments." },
  { icon: ShieldCheck, title: "Experienced Professionals", desc: "Highly trained team dedicated to clinical excellence." },
  { icon: Sparkles, title: "Advanced Techniques", desc: "Combining modern science with proven holistic methods." },
  { icon: Gem, title: "Premium Quality Products", desc: "Using only top-tier international standard materials." },
  { icon: UserCheck, title: "Personalized Consultation", desc: "Bespoke treatment plans tailored to your unique needs." },
  { icon: Shield, title: "Safe & Hygienic", desc: "Strict adherence to medical-grade hygiene protocols." },
  { icon: HeartPulse, title: "Comfortable Environment", desc: "A luxurious, relaxing space designed for your comfort." },
  { icon: Clock, title: "Modern Technology", desc: "State-of-the-art equipment for precise, painless procedures." },
  { icon: Star, title: "Trusted Patient Care", desc: "Ongoing support and aftercare to ensure perfect results." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-label tracking-widest text-sm uppercase text-accent font-semibold mb-4 block">The CosmoVeda Difference</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Why Choose <span className="italic text-primary">Us?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}