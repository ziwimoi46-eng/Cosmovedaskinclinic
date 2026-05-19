import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

import pigmImg from "@assets/Screenshot_20260519-104529_WhatsApp_1779168460714.jpg";
import hair1Img from "@assets/Screenshot_20260519-104521_WhatsApp_1779168460726.jpg";
import hair2Img from "@assets/Screenshot_20260519-104505_WhatsApp_1779168460734.jpg";
import brows1Img from "@assets/Screenshot_20260519-104437_WhatsApp_1779168460764.jpg";
import clinicImg from "@assets/IMG-20260225-WA0011_1779168460696.jpg";
import roomImg from "@assets/IMG-20260225-WA0010_1779168460705.jpg";
import hydraImg from "@assets/IMG-20260225-WA0012(1)_1779168460688.jpg";
import laserImg from "@assets/IMG-20260225-WA0013_1779168460679.jpg";
import panchakarmaImg from "@assets/IMG-20260225-WA0015_1779168460670.jpg";
import promo1 from "@assets/file_00000000aa9471fa9d183dd538e909d5_1779168460889.png";
import promo2 from "@assets/Screenshot_20260519-104227_ChatGPT_1779168460920.jpg";
import promo3 from "@assets/Screenshot_20260519-104254_ChatGPT_1779168460833.jpg";

const galleryItems = [
  { src: clinicImg, category: "Clinic Interior", aspect: "aspect-video" },
  { src: promo1, category: "PMU Work", aspect: "aspect-[3/4]" },
  { src: hair1Img, category: "Before & After", aspect: "aspect-square" },
  { src: hydraImg, category: "Equipment", aspect: "aspect-[4/3]" },
  { src: brows1Img, category: "Before & After", aspect: "aspect-[3/4]" },
  { src: roomImg, category: "Clinic Interior", aspect: "aspect-video" },
  { src: promo2, category: "PMU Work", aspect: "aspect-square" },
  { src: laserImg, category: "Equipment", aspect: "aspect-[4/3]" },
  { src: pigmImg, category: "Before & After", aspect: "aspect-[3/4]" },
  { src: promo3, category: "Treatments", aspect: "aspect-square" },
  { src: panchakarmaImg, category: "Clinic Interior", aspect: "aspect-[4/3]" },
  { src: hair2Img, category: "Before & After", aspect: "aspect-square" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-label tracking-widest text-sm uppercase text-accent font-semibold mb-4 block">Visual Journey</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Clinic <span className="italic text-primary">Gallery</span>
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(item.src)}
            >
              <img 
                src={item.src} 
                alt={item.category} 
                className={`w-full object-cover ${item.aspect} transition-transform duration-700 group-hover:scale-110`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-10 h-10 text-white" />
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <span className="text-xs font-medium text-foreground">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 bg-black/20 rounded-full"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}