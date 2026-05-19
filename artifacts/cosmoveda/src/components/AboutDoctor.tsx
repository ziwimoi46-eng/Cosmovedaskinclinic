import { motion } from "framer-motion";
import doctorImg from "@assets/Screenshot_20260519-104241_ChatGPT_1779168460866.jpg";
import roomImg from "@assets/IMG-20260225-WA0010_1779168460705.jpg";

export default function AboutDoctor() {
  return (
    <section id="doctor" className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={roomImg} alt="Consultation Room" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-accent rounded-[2rem] blur-xl opacity-50 animate-pulse" />
              <img 
                src={doctorImg} 
                alt="Dr. Jayshree Londhe" 
                className="relative z-10 w-full max-w-[400px] aspect-[3/4] object-cover rounded-[2rem] shadow-2xl border-4 border-white/50"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="font-label tracking-widest text-sm uppercase text-accent font-semibold mb-4 block">Meet Your Expert</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-2">Dr. Jayshree Londhe</h2>
            <p className="text-xl text-primary font-medium mb-6">BAMS, Clinical Cosmetologist, International PMU Expert</p>
            
            <p className="text-muted-foreground mb-6 font-light leading-relaxed">
              Dr. Jayshree brings international expertise right to Aurangabad. As a certified Clinical Cosmetologist and International PMU Expert from Canada, she combines her deep medical knowledge with a refined aesthetic eye.
            </p>
            <p className="text-muted-foreground mb-8 font-light leading-relaxed">
              Her approach is deeply personal—she listens, evaluates, and crafts bespoke treatment plans. Whether it's advanced laser therapy, precise microblading, or traditional Ayurvedic healing, Dr. Jayshree ensures every procedure is safe, effective, and luxurious.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "International PMU Expert",
                "BAMS",
                "Clinical Cosmetologist",
                "Canada Certified"
              ].map((badge, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-secondary/20 text-foreground text-sm font-medium border border-secondary/30">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}