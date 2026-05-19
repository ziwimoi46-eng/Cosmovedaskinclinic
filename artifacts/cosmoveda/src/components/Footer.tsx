import logoImg from "@assets/IMG-20260515-WA0009_1779168460656.jpg";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2A2020] text-white pt-20 pb-10 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="CosmoVeda" className="w-12 h-12 rounded-full bg-white object-contain" />
              <span className="font-serif text-2xl font-semibold text-primary">CosmoVeda</span>
            </div>
            <p className="text-white/70 font-light leading-relaxed">
              Enhance Your Natural Beauty. Aurangabad's premier destination for luxury skin, hair, laser, and aesthetic treatments by International PMU Expert Dr. Jayshree Londhe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#2A2020] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#2A2020] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#2A2020] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 font-light text-white/70">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Clinic</a></li>
              <li><a href="#doctor" className="hover:text-primary transition-colors">Dr. Jayshree Londhe</a></li>
              <li><a href="#results" className="hover:text-primary transition-colors">Before & After</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-white">Popular Services</h4>
            <ul className="space-y-3 font-light text-white/70">
              <li><a href="#services" className="hover:text-primary transition-colors">Eyebrow Microblading</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Laser Hair Reduction</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">PRP Hair Regrowth</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Pigmentation Treatment</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Ayurvedic Panchakarma</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 font-light text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Amrutvel, Niranjan Society, Tilak Nagar, Aurangabad</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 9860618850 / 9766093630</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@cosmovedaclinic.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/50 text-sm font-light">
          <p>© {currentYear} CosmoVeda Skin and Hair Clinic. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}