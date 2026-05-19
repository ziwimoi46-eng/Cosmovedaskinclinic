import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import clinicImg from "@assets/IMG-20260225-WA0011_1779168460696.jpg";

export default function AboutClinic() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl z-0" />
            <img 
              src={clinicImg} 
              alt="CosmoVeda Clinic Reception" 
              className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-2xl border border-white/20"
            />
            <div className="absolute -bottom-8 -right-8 bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/40 z-20">
              <div className="text-center">
                <span className="block font-serif text-4xl text-primary font-bold">5+</span>
                <span className="font-label text-xs uppercase tracking-wider text-muted-foreground">Years Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-label tracking-widest text-sm uppercase text-accent font-semibold mb-4 block">About CosmoVeda</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              A Sanctuary of <span className="italic text-primary">Aesthetic Excellence</span>
            </h2>
            <p className="text-muted-foreground mb-6 font-light leading-relaxed">
              CosmoVeda is Aurangabad's premier luxury skin, hair, laser, and aesthetic clinic. We bring international standards of cosmetic care to your city, blending ancient Ayurvedic wellness wisdom with cutting-edge medical science.
            </p>
            <p className="text-muted-foreground mb-8 font-light leading-relaxed">
              Every client experiences royalty in our warm, elegant, and aspirational clinic. From personalized consultations to advanced treatments, we ensure a cinematic, unhurried journey to your best self.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Advanced Skin & Hair Treatments",
                "Laser & Anti-aging",
                "Permanent Makeup (PMU)",
                "Ayurvedic Wellness & Panchakarma"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <h4 className="font-serif text-3xl text-foreground">1000+</h4>
                <p className="text-sm text-muted-foreground mt-1">Procedures</p>
              </div>
              <div>
                <h4 className="font-serif text-3xl text-foreground">15+</h4>
                <p className="text-sm text-muted-foreground mt-1">Advanced Treatments</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}