import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/IMG-20260515-WA0009_1779168460656.jpg";

const navLinks = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Doctor", href: "doctor" },
  { name: "Services", href: "services" },
  { name: "Equipment", href: "equipment" },
  { name: "Gallery", href: "gallery" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logoImg} alt="CosmoVeda Logo" className="max-h-12 w-auto object-contain rounded-full" />
            <span className="ml-2 font-display font-semibold text-xl text-foreground">CosmoVeda</span>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection("appointment")}
              className="rounded-full bg-gradient-to-r from-[#F8C8C0] to-[#E8A0BF] text-white px-5 py-2 text-sm font-semibold hover:shadow-md transition-shadow"
              data-testid="nav-btn-book"
            >
              Book Appointment
            </button>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-foreground"
              data-testid="btn-mobile-menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white"
          >
            <div className="flex flex-col h-full w-full overflow-hidden p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="font-display font-semibold text-xl">CosmoVeda</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button 
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-lg font-medium text-left"
                  >
                    {link.name}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection("appointment")}
                  className="rounded-full bg-gradient-to-r from-[#F8C8C0] to-[#E8A0BF] text-white px-5 py-3 text-center font-semibold mt-4"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
