import { useState, useEffect } from "react";
import { Phone, ChevronUp, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingButtons() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Call Button - Bottom Left */}
      <a
        href="tel:+919860618850"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#F8C8C0] shadow-xl flex items-center justify-center hover:bg-[#FAD7D0] transition-colors"
        data-testid="button-call"
      >
        <Phone color="#3A2D2D" size={24} />
      </a>

      {/* WhatsApp Button - Bottom Right */}
      <a
        href="https://wa.me/919860618850"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
        data-testid="button-whatsapp"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-14 h-14 rounded-full bg-[#25D366] shadow-xl flex items-center justify-center"
        >
          <MessageCircle color="white" size={24} />
        </motion.div>
      </a>

      {/* Back to Top Button - Above WhatsApp */}
      <AnimatePresence>
        {showBackTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-[#D4A373] shadow-xl flex items-center justify-center hover:bg-[#b88c5d] transition-colors"
            data-testid="button-back-to-top"
          >
            <ChevronUp color="white" size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
