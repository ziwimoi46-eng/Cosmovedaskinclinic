import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya S.", initials: "PS", color: "bg-[#F8C8C0]", text: "Dr. Jayshree is an artist. My microbladed eyebrows look incredibly natural. The clinic environment is so luxurious and calming. Highly recommend!", service: "Eyebrow Microblading" },
  { name: "Neha K.", initials: "NK", color: "bg-[#E8A0BF]", text: "I've struggled with pigmentation for years. The personalized treatment plan here finally gave me the clear skin I've always wanted. Truly the best clinic in Aurangabad.", service: "Pigmentation Treatment" },
  { name: "Riya M.", initials: "RM", color: "bg-[#D4A373]", text: "The laser hair reduction was completely painless. The staff is professional, and the hygiene standards are top-notch.", service: "Laser Hair Reduction" },
  { name: "Anjali D.", initials: "AD", color: "bg-[#A3D4C4]", text: "I had a wonderful experience with PRP for hair regrowth. I can already see a significant difference in my hair density.", service: "PRP Hair Regrowth" },
  { name: "Sneha P.", initials: "SP", color: "bg-[#C4A3D4]", text: "The Panchakarma therapy left me feeling rejuvenated and relaxed. It's rare to find a place that offers both modern aesthetics and authentic Ayurveda.", service: "Ayurvedic Wellness" },
  { name: "Pooja V.", initials: "PV", color: "bg-[#D4A3B4]", text: "My Medi Facial gave me an instant glow before my wedding. They customized every step. Felt like absolute royalty!", service: "Medi Facial" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#FFF8F5] to-[#FDE8E4] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-label tracking-widest text-sm uppercase text-accent font-semibold mb-4 block">Client Stories</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Words from our <span className="italic text-primary">Royalty</span>
          </h2>
        </div>

        {/* CSS-based seamless auto-scroll carousel */}
        <div className="relative flex overflow-x-hidden group">
          <div className="py-4 animate-marquee whitespace-nowrap flex gap-6">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div 
                key={i} 
                className="w-[350px] bg-white/60 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] inline-block whitespace-normal flex-shrink-0"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground font-light mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-medium text-lg shadow-inner`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-serif text-foreground font-medium">{t.name}</h4>
                    <span className="text-xs text-primary font-label uppercase tracking-wider">{t.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pause on hover */}
          <style>{`
            .animate-marquee {
              animation: marquee 40s linear infinite;
            }
            .group:hover .animate-marquee {
              animation-play-state: paused;
            }
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}