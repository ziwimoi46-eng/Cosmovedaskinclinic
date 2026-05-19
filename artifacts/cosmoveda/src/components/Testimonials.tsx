import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  { name: "Priya Sharma", treatment: "Eyebrow Microblading", text: "Dr. Jayshree is an absolute artist. My eyebrows look so natural — I've never had to fill them in since! The clinic was immaculate and the team very professional.", initials: "PS", color: "bg-rose-200" },
  { name: "Sunita Patil", treatment: "Pigmentation Treatment", text: "After years of struggling with dark spots, just 3 sessions at CosmoVeda gave me results I never thought possible. My skin is clear and glowing.", initials: "SP", color: "bg-orange-200" },
  { name: "Meera Kulkarni", treatment: "Hair Regrowth PRP", text: "My hair loss was a constant worry for me. Dr. Jayshree's PRP treatment has genuinely brought back my confidence. Visible results after just 2 sessions!", initials: "MK", color: "bg-amber-200" },
  { name: "Ananya Desai", treatment: "Medi Facial", text: "The most relaxing and effective facial I've ever had. My skin felt like I'd turned back the clock by 5 years. I come every month now!", initials: "AD", color: "bg-pink-200" },
  { name: "Rohini Jadhav", treatment: "Laser Hair Reduction", text: "Completely painless with the Quantum Pro Duo. I was skeptical at first but after 4 sessions there's barely any hair left. Worth every penny!", initials: "RJ", color: "bg-rose-100" },
  { name: "Kavita Bhatia", treatment: "PMU Services", text: "I got lip blush done by Dr. Jayshree. Being an international PMU expert, her technique is flawless. The color is perfect and looks completely natural.", initials: "KB", color: "bg-amber-100" },
];

export default function Testimonials() {
  const [paused, setPaused] = useState(false);
  const controls = useAnimationControls();
  const doubled = [...testimonials, ...testimonials];

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section id="testimonials" className="w-full overflow-hidden bg-[#FFF8F5] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3A2D2D]">
            What Our Clients Say
          </h2>
        </motion.div>
      </div>

      <div 
        className="w-full overflow-hidden relative"
        onMouseEnter={() => { setPaused(true); controls.stop(); }}
        onMouseLeave={() => { 
          setPaused(false); 
          controls.start({
            x: ["0%", "-50%"],
            transition: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }); 
        }}
      >
        <motion.div 
          animate={controls}
          className="flex w-max cursor-grab active:cursor-grabbing"
        >
          {doubled.map((testimonial, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl p-6 shadow-md border border-[#F8C8C0]/30 w-80 flex-shrink-0 mx-3 flex flex-col"
            >
              <div className="flex gap-1 mb-3 text-[#D4A373]">
                {Array(5).fill(0).map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>
              <p className="italic text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[#3A2D2D] font-bold text-sm ${testimonial.color}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-[#3A2D2D] text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-[#D4A373]">{testimonial.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
