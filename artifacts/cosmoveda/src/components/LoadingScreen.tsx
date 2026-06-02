import { motion } from "framer-motion";
import logoImg from "@assets/IMG-20260515-WA0009_1779168460656.jpg";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FFF8F5]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.8 }}
      onAnimationComplete={onComplete}
      data-testid="loading-screen"
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-xl overflow-hidden mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img src={logoImg} alt="CosmoVeda Logo" className="w-24 h-24 object-contain" />
        </motion.div>
        <motion.h1
          className="text-3xl font-display font-semibold text-[#3A2D2D]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          CosmoVeda
        </motion.h1>
      </div>
    </motion.div>
  );
}
