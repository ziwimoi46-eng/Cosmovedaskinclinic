import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Is laser hair reduction safe?", a: "Yes, completely safe. We use the Quantum Pro Duo medical-grade laser with contact cooling, making it safe for all skin types. Our doctor performs a patch test before every session." },
  { q: "How many PRP sessions are required?", a: "Typically 4–6 sessions for hair regrowth and 3–4 for skin PRP, spaced 3–4 weeks apart. Dr. Jayshree will assess your individual needs during consultation." },
  { q: "Is eyebrow microblading painful?", a: "A topical numbing cream is applied 30 minutes before the procedure, making it very comfortable. Most clients report minimal to no discomfort." },
  { q: "What is the recovery time after treatments?", a: "Most treatments have zero to minimal downtime. Laser and PRP may cause mild redness for 24–48 hours. Microblading requires 7–10 days of aftercare. We provide full aftercare instructions." },
  { q: "Are treatments customized per patient?", a: "Absolutely. Every patient receives a personalized consultation with Dr. Jayshree before any treatment. Your skin type, concerns, and goals all shape your unique treatment plan." },
  { q: "Do you provide free consultation?", a: "Yes! We offer a complimentary initial consultation with Dr. Jayshree Londhe. Book your appointment via call, WhatsApp, or our online form." },
  { q: "Is the clinic hygienic and certified?", a: "CosmoVeda follows strict hospital-grade sterilization protocols. All equipment is sanitized before each use, and single-use disposables are used wherever required." },
  { q: "Are Ayurvedic therapies available?", a: "Yes! We offer traditional Panchakarma, Shirodhara, Nadi Swedana, and Ayurvedic skin therapies alongside our modern aesthetic treatments." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full overflow-hidden bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3A2D2D]">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-[#F8C8C0] last:border-0"
              >
                <div 
                  className="w-full flex justify-between items-center py-4 text-left cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  data-testid={`faq-question-${i}`}
                >
                  <h3 className="font-semibold text-[#3A2D2D] text-base pr-4">
                    {faq.q}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="text-[#3A2D2D]" size={20} />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 text-sm leading-relaxed pb-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
