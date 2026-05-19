import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pigmImg from "@assets/Screenshot_20260519-104529_WhatsApp_1779168460714.jpg";
import hair1Img from "@assets/Screenshot_20260519-104521_WhatsApp_1779168460726.jpg";
import hair2Img from "@assets/Screenshot_20260519-104505_WhatsApp_1779168460734.jpg";
import hair3Img from "@assets/Screenshot_20260519-104535_WhatsApp_1779168461026.jpg";
import brows1Img from "@assets/Screenshot_20260519-104437_WhatsApp_1779168460764.jpg";
import brows2Img from "@assets/Screenshot_20260519-104431_WhatsApp_1779168460745.jpg";
import laserHrImg from "@assets/Screenshot_20260519-104410_WhatsApp_1779168460786.jpg";

const categories = ["All", "Pigmentation", "Hair Regrowth", "Microblading", "Laser Hair Reduction"];

const results = [
  { id: 1, category: "Pigmentation", image: pigmImg, label: "Pigmentation Treatment" },
  { id: 2, category: "Hair Regrowth", image: hair1Img, label: "Hair Regrowth PRP" },
  { id: 3, category: "Hair Regrowth", image: hair2Img, label: "Hair Regrowth PRP" },
  { id: 4, category: "Hair Regrowth", image: hair3Img, label: "Hair Regrowth PRP" },
  { id: 5, category: "Microblading", image: brows1Img, label: "Eyebrow Microblading" },
  { id: 6, category: "Microblading", image: brows2Img, label: "Eyebrow Microblading" },
  { id: 7, category: "Laser Hair Reduction", image: laserHrImg, label: "Laser Hair Reduction" },
];

export default function BeforeAfter() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResults = activeCategory === "All" 
    ? results 
    : results.filter(r => r.category === activeCategory);

  return (
    <section id="results" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-label tracking-widest text-sm uppercase text-accent font-semibold mb-4 block">Real Transformations</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Before & <span className="italic text-primary">After</span>
          </h2>
          <p className="text-muted-foreground font-light">Witness the remarkable results achieved through our personalized, advanced treatments.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-label text-sm transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "bg-white border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredResults.map((result) => (
              <motion.div
                key={result.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-border"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img 
                    src={result.image} 
                    alt={result.label} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h4 className="text-white font-serif text-lg">{result.label}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}