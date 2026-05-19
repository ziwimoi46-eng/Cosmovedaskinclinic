import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, Sun, Heart, Shield, Star, Wind, Droplets, Zap,
  Gem, Scan, Brush, Smile, Circle, PenTool, Leaf, Flower2
} from "lucide-react";

const services = [
  { id:1, name:"Medi Facials", desc:"Customized medical-grade facials for deep cleansing and radiant glow", category:"skin", icon:Sparkles },
  { id:2, name:"Hyperpigmentation Treatment", desc:"Target dark spots and uneven skin tone with advanced laser and chemical protocols", category:"skin", icon:Sun },
  { id:3, name:"Anti-Aging Treatment", desc:"Turn back the clock with collagen-boosting rejuvenation therapies", category:"skin", icon:Heart },
  { id:4, name:"Acne Treatment", desc:"Clear, lasting solutions for active acne with medical-grade protocols", category:"skin", icon:Shield },
  { id:5, name:"Acne Scar Treatment", desc:"Erase scars and reveal smooth, even-textured skin", category:"skin", icon:Star },
  { id:6, name:"Hair Regrowth Treatment", desc:"Restore volume and density with targeted hair restoration therapies", category:"hair", icon:Wind },
  { id:7, name:"PRP Skin & Hair", desc:"Harness your own platelets for natural skin and hair renewal", category:"hair", icon:Droplets },
  { id:8, name:"Mesotherapy", desc:"Precision micro-injections delivering vitamins and nutrients deep into skin", category:"skin", icon:Zap },
  { id:9, name:"Skin Boosters", desc:"Hyaluronic acid hydration boost for plump, glowing skin", category:"skin", icon:Gem },
  { id:10, name:"Laser Hair Reduction", desc:"Permanent, pain-free hair reduction with Quantum Pro Duo technology", category:"laser", icon:Scan },
  { id:11, name:"Eyebrow Microblading", desc:"Natural hair-stroke eyebrows by an International PMU Expert", category:"pmu", icon:Brush },
  { id:12, name:"Lip Pigmentation", desc:"Define and enhance lip color naturally with long-lasting PMU", category:"pmu", icon:Smile },
  { id:13, name:"Scalp Micropigmentation", desc:"Hairline definition and density illusion for thinning hair", category:"pmu", icon:Circle },
  { id:14, name:"PMU Services", desc:"Permanent makeup by Dr. Jayshree, International PMU Expert", category:"pmu", icon:PenTool },
  { id:15, name:"Panchakarma", desc:"Traditional Ayurvedic detox and healing therapy for whole-body wellness", category:"ayurveda", icon:Leaf },
  { id:16, name:"Ayurvedic Skin Therapies", desc:"Ancient wisdom combined with modern techniques for radiant skin", category:"ayurveda", icon:Flower2 },
];

const categories = ["All", "Skin", "Hair", "Laser", "PMU", "Ayurveda"];

export default function Services() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredServices = activeTab === "All" 
    ? services 
    : services.filter(s => s.category.toLowerCase() === activeTab.toLowerCase());

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth <= 768) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth <= 768) return;
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <section id="services" className="w-full overflow-hidden bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-semibold text-[#3A2D2D] mb-4">
            Our Premium Services
          </h2>
          <p className="text-gray-600">
            Comprehensive skin, hair and aesthetic treatments tailored to your unique needs
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat
                  ? "bg-[#F8C8C0] text-[#3A2D2D] shadow-md"
                  : "bg-gray-50 text-gray-500 hover:text-[#3A2D2D] hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="bg-white rounded-2xl p-6 shadow-md border border-[#F8C8C0]/50 transition-all duration-300 hover:shadow-xl sm:hover:-translate-y-1 cursor-pointer flex flex-col h-full"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FAD7D0] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#D4A373]" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-[#3A2D2D] mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                  <span className="text-sm text-[#D4A373] font-medium mt-4 block">
                    Learn More &rarr;
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
