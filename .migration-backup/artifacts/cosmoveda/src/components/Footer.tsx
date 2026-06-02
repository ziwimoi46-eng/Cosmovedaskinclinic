import { Phone, MapPin, Instagram, Facebook, Youtube, Heart } from "lucide-react";
// Assuming alias @assets is configured in tsconfig/vite. If not, this might need updating to a relative path.
// The instructions specifically requested to use this import:
import logoImg from "@assets/IMG-20260515-WA0009_1779168460656.jpg";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full overflow-hidden bg-[#3A2D2D] text-white/80 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1 */}
          <div>
            <img 
              src={logoImg} 
              alt="CosmoVeda Logo" 
              className="w-20 h-20 object-cover rounded-xl mb-4"
              onError={(e) => {
                // Fallback if the alias doesn't work out of the box in the environment
                e.currentTarget.style.display = "none";
              }}
            />
            <h2 className="text-white text-xl font-serif font-bold mb-1">
              CosmoVeda
            </h2>
            <p className="text-white/60 text-sm mb-2">
              Skin and Hair Clinic
            </p>
            <p className="italic text-[#F8C8C0] text-sm mb-4">
              "Enhance Your Natural Beauty"
            </p>
            <p className="text-sm leading-relaxed mb-6">
              A luxury aesthetic clinic in Aurangabad offering advanced skin, hair, laser & PMU treatments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4A373] transition-colors flex items-center justify-center">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4A373] transition-colors flex items-center justify-center">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4A373] transition-colors flex items-center justify-center">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-widest text-sm">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-2">
              {['home', 'about', 'doctor', 'services', 'equipment', 'gallery', 'appointment'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => scrollTo(link)}
                    className="text-white/60 hover:text-[#F8C8C0] transition-colors text-sm py-1 block cursor-pointer capitalize"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-widest text-sm">
              Contact Us
            </h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#F8C8C0] mt-1 shrink-0" size={18} />
                <p className="text-sm text-white/60 leading-relaxed">
                  Amrutvel, Niranjan Society, Tilak Nagar, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-[#F8C8C0] shrink-0" size={18} />
                <div className="flex flex-col text-sm text-white/60">
                  <a href="tel:+919860618850" className="hover:text-white transition-colors">+91 98606 18850</a>
                  <a href="tel:+919766093630" className="hover:text-white transition-colors">+91 97660 93630</a>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-sm font-medium text-white/80">Mon–Sat: 10am – 7pm</p>
              </div>
              <a 
                href="https://wa.me/919860618850" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 text-[#25D366] hover:text-white transition-colors text-sm font-medium"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-sm text-white/50 mb-2">
            © 2025 CosmoVeda Skin and Hair Clinic. All Rights Reserved.
          </p>
          <p className="text-xs text-white/40 flex items-center justify-center gap-1">
            Made with <Heart className="fill-red-500 text-red-500" size={12} /> in Aurangabad
          </p>
        </div>
      </div>
    </footer>
  );
}
