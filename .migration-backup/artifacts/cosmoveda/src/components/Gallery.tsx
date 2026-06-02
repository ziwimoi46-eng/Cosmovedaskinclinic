import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

import logoImg from "@assets/IMG-20260515-WA0009_1779168460656.jpg";
import drImg from "@assets/Screenshot_20260519-104241_ChatGPT_1779168460866.jpg";
import receptionImg from "@assets/IMG-20260225-WA0011_1779168460696.jpg";
import drRoomImg from "@assets/IMG-20260225-WA0010_1779168460705.jpg";
import room1Img from "@assets/IMG-20260225-WA0012(1)_1779168460688.jpg";
import room2Img from "@assets/IMG-20260225-WA0013_1779168460679.jpg";
import panchaImg from "@assets/IMG-20260225-WA0015_1779168460670.jpg";
import shiroImg from "@assets/Screenshot_20260519-103409_WhatsApp_1779168460958.jpg";
import steamerImg from "@assets/Screenshot_20260519-103430_WhatsApp_1779168460987.jpg";
import quantumImg from "@assets/Screenshot_20260519-103435_WhatsApp_1779168461005.jpg";
import eyebrowPromoImg from "@assets/file_00000000aa9471fa9d183dd538e909d5_1779168460889.png";
import microbladingPosterImg from "@assets/Screenshot_20260519-104227_ChatGPT_1779168460920.jpg";
import earPiercingImg from "@assets/Screenshot_20260519-104254_ChatGPT_1779168460833.jpg";
import pigmentImg from "@assets/Screenshot_20260519-104529_WhatsApp_1779168460714.jpg";
import hair1Img from "@assets/Screenshot_20260519-104521_WhatsApp_1779168460726.jpg";
import micro1Img from "@assets/Screenshot_20260519-104437_WhatsApp_1779168460764.jpg";

const galleryItems = [
  { id: 1, image: logoImg, alt: "CosmoVeda Logo", category: "Clinic" },
  { id: 2, image: drImg, alt: "Dr. Jayshree Londhe", category: "Clinic" },
  { id: 3, image: receptionImg, alt: "Reception Area", category: "Clinic" },
  { id: 4, image: drRoomImg, alt: "Consultation Room", category: "Clinic" },
  { id: 5, image: room1Img, alt: "Treatment Room 1", category: "Clinic" },
  { id: 6, image: room2Img, alt: "Treatment Room 2", category: "Clinic" },
  { id: 7, image: panchaImg, alt: "Panchakarma Setup", category: "Clinic" },
  { id: 8, image: shiroImg, alt: "Shirodhara Equipment", category: "Equipment" },
  { id: 9, image: steamerImg, alt: "Ozone Steamer", category: "Equipment" },
  { id: 10, image: quantumImg, alt: "Quantum Pro Duo Laser", category: "Equipment" },
  { id: 11, image: eyebrowPromoImg, alt: "Eyebrow Promo", category: "PMU" },
  { id: 12, image: microbladingPosterImg, alt: "Microblading Information", category: "PMU" },
  { id: 13, image: earPiercingImg, alt: "Ear Piercing Service", category: "Clinic" },
  { id: 14, image: pigmentImg, alt: "Pigmentation Result", category: "Results" },
  { id: 15, image: hair1Img, alt: "Hair PRP Result", category: "Results" },
  { id: 16, image: micro1Img, alt: "Microblading Result", category: "Results" },
];

const categories = ["All", "Clinic", "Equipment", "PMU", "Results"];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeTab === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  const openLightbox = (index: number) => setLightboxIndex(index);
  
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="w-full overflow-hidden bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-semibold text-[#3A2D2D] mb-4">
            Clinic Gallery
          </h2>
          <p className="text-gray-600">
            Step inside CosmoVeda
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setLightboxIndex(null);
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat
                  ? "bg-[#3A2D2D] text-white shadow-md"
                  : "bg-gray-50 text-gray-600 hover:text-[#3A2D2D] hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="aspect-square overflow-hidden rounded-xl cursor-pointer relative group bg-gray-100"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <ZoomIn className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50"
              onClick={prevImage}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            
            <button 
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50"
              onClick={nextImage}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] max-w-[90vw] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].alt}
                className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl"
              />
              <p className="text-white/80 mt-4 text-sm font-medium tracking-wide">
                {filteredItems[lightboxIndex].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
