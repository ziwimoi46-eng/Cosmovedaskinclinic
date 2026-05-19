import { motion } from "framer-motion";
import { Sparkles, Droplets, Smile, Zap, Scissors, HeartPulse, Stethoscope, Scissors as Syringe, Wind, PlusCircle, PenTool, CheckCircle, Leaf } from "lucide-react";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const services = [
  { title: "Medi Facials", desc: "Customized medical-grade facials for glowing skin", icon: Sparkles },
  { title: "Hyperpigmentation", desc: "Target dark spots and uneven skin tone", icon: Smile },
  { title: "Anti-aging", desc: "Turn back the clock with advanced rejuvenation", icon: HeartPulse },
  { title: "Acne Treatment", desc: "Clear skin solutions with lasting results", icon: Droplets },
  { title: "Acne Scar Treatment", desc: "Erase the past, reveal smooth skin", icon: PlusCircle },
  { title: "Hair Regrowth", desc: "Restore volume and density naturally", icon: Scissors },
  { title: "PRP Skin & Hair", desc: "Harness your own platelets for renewal", icon: Syringe },
  { title: "Mesotherapy", desc: "Precision micro-injections for deep nourishment", icon: Stethoscope },
  { title: "Skin Boosters", desc: "Hyaluronic acid hydration boost", icon: Droplets },
  { title: "Laser Hair Reduction", desc: "Permanent, pain-free hair reduction with Quantum Pro Duo", icon: Zap },
  { title: "Eyebrow Microblading", desc: "Natural hair-stroke brows by an International PMU Expert", icon: PenTool },
  { title: "Lip Pigmentation", desc: "Define and enhance lip color naturally", icon: Smile },
  { title: "Scalp Micropigmentation", desc: "Hairline definition and density illusion", icon: Scissors },
  { title: "PMU Services", desc: "Permanent makeup by Dr. Jayshree", icon: PenTool },
  { title: "Panchakarma", desc: "Traditional Ayurvedic detox and healing therapy", icon: Leaf },
  { title: "Ayurvedic Therapies", desc: "Ancient wisdom for modern skin concerns", icon: Wind },
];

function ServiceCard({ service, index }: { service: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300" style={{ transform: "translateZ(30px)" }}>
        <service.icon className="w-6 h-6" />
      </div>
      <h3 className="font-serif text-xl font-medium text-foreground mb-2" style={{ transform: "translateZ(20px)" }}>{service.title}</h3>
      <p className="text-muted-foreground text-sm flex-grow mb-6 font-light" style={{ transform: "translateZ(10px)" }}>{service.desc}</p>
      <Button variant="outline" className="w-full rounded-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors mt-auto" style={{ transform: "translateZ(20px)" }}>
        Learn More
      </Button>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-label tracking-widest text-sm uppercase text-accent font-semibold mb-4 block">Our Treatments</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Bespoke <span className="italic text-primary">Aesthetic Solutions</span>
          </h2>
          <p className="text-muted-foreground font-light">From advanced clinical dermatology to permanent makeup and traditional Ayurvedic therapies, our comprehensive range of services caters to your unique beauty needs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}