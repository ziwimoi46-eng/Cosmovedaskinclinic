import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full overflow-hidden bg-[#FFF8F5] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3A2D2D] mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We'd love to welcome you to CosmoVeda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-5 shadow-md border border-[#F8C8C0]/50 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#F8C8C0] flex items-center justify-center flex-shrink-0">
                <MapPin className="text-[#3A2D2D]" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#3A2D2D] mb-1">Our Location</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Amrutvel, Niranjan Society, Tilak Nagar, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-5 shadow-md border border-[#F8C8C0]/50 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#F8C8C0] flex items-center justify-center flex-shrink-0">
                <Phone className="text-[#3A2D2D]" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#3A2D2D] mb-1">Call Us</h3>
                <div className="flex flex-col gap-1">
                  <a href="tel:9860618850" className="text-[#D4A373] text-sm hover:underline font-medium">
                    +91 98606 18850
                  </a>
                  <a href="tel:9766093630" className="text-[#D4A373] text-sm hover:underline font-medium">
                    +91 97660 93630
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-5 shadow-md border border-[#F8C8C0]/50 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#3A2D2D] mb-1">WhatsApp Us</h3>
                <a 
                  href="https://wa.me/919860618850" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 text-sm hover:underline font-medium"
                >
                  Message us on WhatsApp
                </a>
              </div>
            </div>

            {/* Timings */}
            <div className="mt-2 bg-gradient-to-r from-[#F8C8C0]/20 to-transparent p-4 rounded-xl border border-[#F8C8C0]/30">
              <p className="text-sm text-[#3A2D2D] font-medium text-center">
                Mon–Sat: 10:00 AM – 7:00 PM | Sunday: By Appointment
              </p>
            </div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Tilak+Nagar,+Chhatrapati+Sambhajinagar,+Maharashtra&output=embed"
              className="w-full h-full border-0" 
              title="CosmoVeda Clinic Location"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
