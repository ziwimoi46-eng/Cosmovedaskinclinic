import { motion } from "framer-motion";
import logoImg from "@assets/IMG-20260515-WA0009_1779168460656.jpg";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="w-full overflow-hidden min-h-screen flex items-center relative pt-20"
      style={{ background: 'linear-gradient(135deg, #FFF8F5 0%, #FAD7D0 40%, #F8C8C0 70%, #E8A0BF 100%)' }}
    >
      {/* Decorative Blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-white/40 rounded-full blur-3xl opacity-50"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 bg-[#E8A0BF]/30 rounded-full blur-3xl opacity-50"
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm text-sm font-medium text-foreground/80 border border-white/40 shadow-sm"
          >
            House of Beauty & Aesthetic
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#3A2D2D]"
          >
            Enhance Your Natural Beauty
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#3A2D2D]/80 max-w-lg"
          >
            Advanced Skin, Hair & Aesthetic Treatments by Dr. Jayshree Londhe, International PMU Expert
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <button 
              onClick={() => scrollTo('appointment')}
              className="rounded-full bg-gradient-to-r from-[#D4A373] to-[#E8A0BF] text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              data-testid="hero-btn-book"
            >
              Book Appointment
            </button>
            <button 
              onClick={() => scrollTo('services')}
              className="rounded-full bg-white/50 backdrop-blur-sm border border-white/60 text-[#3A2D2D] px-8 py-3 font-semibold hover:bg-white/70 transition-all"
              data-testid="hero-btn-services"
            >
              Explore Treatments
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-4"
          >
            <div className="bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">500+ Clients</div>
            <div className="bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">16+ Treatments</div>
            <div className="bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">Canada Certified PMU</div>
          </motion.div>
        </div>

        {/* Right Visual (Desktop Only) */}
        <div className="hidden lg:flex justify-center relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-96 h-96 rounded-full bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-md shadow-2xl flex items-center justify-center p-8 relative border border-white/50"
          >
            <img src={logoImg} alt="CosmoVeda Logo" className="w-3/4 object-contain rounded-full shadow-inner" />
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-10 top-20 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-lg">✓</div>
              <span className="font-semibold text-sm">Safe & Hygienic</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-6 bottom-20 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-lg">★</div>
              <span className="font-semibold text-sm">Expert Care</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
