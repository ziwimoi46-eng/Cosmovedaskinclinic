import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { question: "Is laser hair reduction safe?", answer: "Yes, we use the advanced Quantum Pro Duo which has built-in contact cooling and adjustable settings for different skin types, making it both safe and virtually pain-free." },
  { question: "How many PRP sessions are required?", answer: "Typically, a series of 3 to 6 sessions spaced 4 weeks apart is recommended for optimal hair regrowth or skin rejuvenation. A personalized plan will be created during your consultation." },
  { question: "Is eyebrow microblading painful?", answer: "No, the procedure is very comfortable. We use a high-quality topical numbing cream before and during the treatment to ensure a pain-free experience." },
  { question: "What is recovery time after treatment?", answer: "Most of our treatments have little to no downtime. Some advanced procedures may involve mild redness for 24-48 hours. Post-care instructions are provided for every treatment." },
  { question: "Are treatments customized per patient?", answer: "Absolutely. We do not believe in a one-size-fits-all approach. Every patient undergoes a thorough consultation to tailor treatments specific to their concerns and goals." },
  { question: "Do you provide consultation?", answer: "Yes, Dr. Jayshree Londhe provides in-depth personalized consultations to understand your history, concerns, and to recommend the most effective treatment protocol." },
  { question: "Is the clinic hygienic and safe?", answer: "Hygiene is our top priority. We follow strict international medical protocols, use disposable materials wherever possible, and rigorously sterilize all equipment." },
  { question: "Are Ayurvedic therapies available?", answer: "Yes, we proudly offer traditional therapies like Panchakarma, Shirodhara, and Ayurvedic facials, bridging ancient wisdom with modern wellness." },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <span className="font-label tracking-widest text-sm uppercase text-accent font-semibold mb-4 block">Clarifications</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Frequently Asked <span className="italic text-primary">Questions</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border py-2">
                <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary transition-colors text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}