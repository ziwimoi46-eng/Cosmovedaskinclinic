import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-label tracking-widest text-sm uppercase text-accent font-semibold mb-4 block">Get In Touch</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Visit <span className="italic text-primary">CosmoVeda</span>
            </h2>
            <p className="text-muted-foreground font-light mb-10">
              Step into a world of luxury and care. We are located in the heart of Aurangabad, ready to welcome you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-foreground mb-1">Clinic Address</h4>
                  <p className="text-muted-foreground font-light">Amrutvel, Niranjan Society,<br />Tilak Nagar, Chhatrapati Sambhajinagar<br />(Aurangabad), Maharashtra</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-foreground mb-1">Contact Numbers</h4>
                  <p className="text-muted-foreground font-light">+91 9860618850<br />+91 9766093630</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-foreground mb-1">Working Hours</h4>
                  <p className="text-muted-foreground font-light">Mon - Sat: 10:00 AM - 8:00 PM<br />Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border border-border"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.417088924296!2d75.3340054760086!3d19.864571981507727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba299c8555555%3A0x6b77c5e575d71c!2sTilak%20Nagar%2C%20Aurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716301234567!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}