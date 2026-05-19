import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-[#FFF0EC] to-[#FDE8E4] pt-20">
      {/* Background Particles Placeholder */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none" />
      
      <div className="container relative z-10 px-4 py-32 mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="font-label tracking-widest text-sm uppercase text-accent font-semibold mb-4 block">CosmoVeda Skin and Hair Clinic</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 leading-tight max-w-5xl mx-auto">
            Enhance Your <br />
            <span className="italic text-primary">Natural Beauty</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
            Advanced Skin, Hair & Aesthetic Treatments by International PMU Expert, Dr. Jayshree Londhe. Experience luxury care in Aurangabad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button 
            onClick={() => scrollToSection("#appointment")}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-white rounded-full px-8 py-6 text-lg shadow-[0_0_20px_rgba(248,200,192,0.6)] hover:shadow-[0_0_30px_rgba(248,200,192,0.8)] transition-shadow border-0"
          >
            Book Appointment
          </Button>
          <Button 
            onClick={() => scrollToSection("#services")}
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-lg border-primary text-primary hover:bg-primary/5"
          >
            Explore Treatments
          </Button>
        </motion.div>

        {/* Floating Mini Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          {[
            { label: "Happy Clients", value: "500+" },
            { label: "Treatments", value: "15+" },
            { label: "Expertise", value: "Intl. PMU Expert" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-xl"
            >
              <h3 className="font-serif text-3xl text-foreground mb-1">{stat.value}</h3>
              <p className="font-label text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}