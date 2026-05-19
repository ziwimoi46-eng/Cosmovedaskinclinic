import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import pigmentImg from "@assets/Screenshot_20260519-104529_WhatsApp_1779168460714.jpg";
import hair1Img from "@assets/Screenshot_20260519-104521_WhatsApp_1779168460726.jpg";
import hair2Img from "@assets/Screenshot_20260519-104505_WhatsApp_1779168460734.jpg";
import micro1Img from "@assets/Screenshot_20260519-104437_WhatsApp_1779168460764.jpg";
import micro2Img from "@assets/Screenshot_20260519-104431_WhatsApp_1779168460745.jpg";
import laserImg from "@assets/Screenshot_20260519-104410_WhatsApp_1779168460786.jpg";
import hair3Img from "@assets/Screenshot_20260519-104535_WhatsApp_1779168461026.jpg";

const results = [
  { id: 1, category: "Pigmentation", label: "Pigmentation Treatment", image: pigmentImg },
  { id: 2, category: "Hair", label: "Hair Regrowth PRP", image: hair1Img },
  { id: 3, category: "Hair", label: "Hair Regrowth Treatment", image: hair2Img },
  { id: 4, category: "Microblading", label: "Eyebrow Microblading", image: micro1Img },
  { id: 5, category: "Microblading", label: "Eyebrow PMU", image: micro2Img },
  { id: 6, category: "Laser", label: "Laser Hair Reduction", image: laserImg },
  { id: 7, category: "Hair", label: "Hair Regrowth — 2 Sessions", image: hair3Img },
];

const categories = ["All", "Pigmentation", "Hair", "Microblading", "Laser"];

export default function BeforeAfter() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResults = activeCategory === "All"
    ? results
    : results.filter(r => r.category === activeCategory);

  return (
    <section id="results" className="w-full overflow-hidden bg-[#FFF8F5] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-semibold text-[#3A2D2D] mb-4">
            Real Results, Real Transformations
          </h2>
          <p className="text-gray-600">
            Genuine patient results from CosmoVeda Clinic
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#D4A373] text-white shadow-md"
                  : "bg-white border border-[#F8C8C0] text-gray-600 hover:text-[#3A2D2D] hover:border-[#D4A373]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredResults.map((result) => (
              <motion.div
                layout
                key={result.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#F8C8C0]/30"
              >
                <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={result.image}
                    alt={result.label}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="px-5 py-4 bg-white flex flex-col items-start">
                  <span className="text-xs rounded-full px-3 py-1 bg-[#FAD7D0] text-[#3A2D2D] font-medium mb-2">
                    {result.category}
                  </span>
                  <div className="flex justify-between items-center w-full mt-1">
                    <h3 className="font-semibold text-[#3A2D2D]">{result.label}</h3>
                    <span className="text-xs text-[#D4A373] font-medium tracking-wide uppercase">
                      Before & After
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
