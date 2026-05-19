import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clinicImg from "@assets/IMG-20260225-WA0011_1779168460696.jpg";

function Counter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col">
      <span className="text-4xl font-bold text-[#D4A373]">
        {count}
        {suffix}
      </span>
      <span className="text-sm text-[#3A2D2D] font-medium mt-1">{label}</span>
    </div>
  );
}

export default function AboutClinic() {
  return (
    <section id="about" className="w-full overflow-hidden bg-[#FFF8F5] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={clinicImg}
                alt="CosmoVeda Clinic Interior"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <span className="font-label uppercase text-sm tracking-widest text-[#D4A373] mb-4">
              About CosmoVeda
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#3A2D2D] mb-6 leading-tight">
              Where Ancient Wisdom Meets Modern Aesthetics
            </h2>
            <div className="space-y-4 text-gray-600 mb-10 leading-relaxed">
              <p>
                Welcome to CosmoVeda Skin and Hair Clinic, Aurangabad's premier luxury aesthetic destination. We blend the time-tested principles of Ayurveda with cutting-edge clinical cosmetology to deliver holistic, lasting transformations.
              </p>
              <p>
                Our comprehensive range of services encompasses advanced skincare, targeted hair restoration, permanent makeup (PMU), medical-grade laser treatments, and authentic Ayurvedic therapies. Every protocol is meticulously designed to address your unique physiological needs.
              </p>
              <p>
                At CosmoVeda, we believe that true beauty stems from internal wellness and outward precision. Step into our serene clinic environment and experience aesthetic care that prioritizes your safety, comfort, and profound results.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full mb-10 border-y border-[#F8C8C0]/50 py-8">
              <Counter end={500} suffix="+" label="Happy Clients" />
              <Counter end={16} suffix="+" label="Treatments" />
              <Counter end={5} suffix="+" label="Years Exp." />
              <Counter end={1000} suffix="+" label="Procedures" />
            </div>

            <button className="rounded-full bg-gradient-to-r from-[#F8C8C0] to-[#E8A0BF] px-8 py-3 text-[#3A2D2D] font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              Book Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
