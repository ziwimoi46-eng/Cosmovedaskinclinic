import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const servicesList = [
  "Medi Facials",
  "Hyperpigmentation Treatment",
  "Anti-Aging Treatment",
  "Acne Treatment",
  "Acne Scar Treatment",
  "Hair Regrowth Treatment",
  "PRP Skin & Hair",
  "Mesotherapy",
  "Skin Boosters",
  "Laser Hair Reduction",
  "Eyebrow Microblading",
  "Lip Pigmentation",
  "Scalp Micropigmentation",
  "PMU Services",
  "Panchakarma",
  "Ayurvedic Skin Therapies"
];

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.time) newErrors.time = "Please select a preferred time";
    if (!formData.message) newErrors.message = "Please provide a short message";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit successful
    setShowSuccess(true);
  };

  const closePopup = () => {
    setShowSuccess(false);
    setFormData({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: ""
    });
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="appointment" className="w-full overflow-hidden bg-gradient-to-br from-[#FAD7D0] to-[#FFF8F5] py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3A2D2D] mb-4">
            Book Your Appointment
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Take the first step towards your beauty transformation
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-[#F8C8C0]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full rounded-xl border ${errors.name ? 'border-red-500' : 'border-[#F8C8C0]'} px-4 py-3 text-[#3A2D2D] bg-white focus:outline-none focus:ring-2 focus:ring-[#D4A373] transition-all`}
                data-testid="input-name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name}</p>}
            </div>
            
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className={`w-full rounded-xl border ${errors.phone ? 'border-red-500' : 'border-[#F8C8C0]'} px-4 py-3 text-[#3A2D2D] bg-white focus:outline-none focus:ring-2 focus:ring-[#D4A373] transition-all`}
                data-testid="input-phone"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1 ml-2">{errors.phone}</p>}
            </div>

            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full rounded-xl border ${errors.service ? 'border-red-500' : 'border-[#F8C8C0]'} px-4 py-3 text-[#3A2D2D] bg-white focus:outline-none focus:ring-2 focus:ring-[#D4A373] transition-all`}
                data-testid="select-service"
              >
                <option value="" disabled>Select a Service</option>
                {servicesList.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.service && <p className="text-red-500 text-xs mt-1 ml-2">{errors.service}</p>}
            </div>

            <div>
              <input
                type="date"
                name="date"
                min={today}
                value={formData.date}
                onChange={handleChange}
                className={`w-full rounded-xl border ${errors.date ? 'border-red-500' : 'border-[#F8C8C0]'} px-4 py-3 text-[#3A2D2D] bg-white focus:outline-none focus:ring-2 focus:ring-[#D4A373] transition-all`}
                data-testid="input-date"
              />
              {errors.date && <p className="text-red-500 text-xs mt-1 ml-2">{errors.date}</p>}
            </div>

            <div className="md:col-span-2">
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={`w-full rounded-xl border ${errors.time ? 'border-red-500' : 'border-[#F8C8C0]'} px-4 py-3 text-[#3A2D2D] bg-white focus:outline-none focus:ring-2 focus:ring-[#D4A373] transition-all`}
                data-testid="select-time"
              >
                <option value="" disabled>Preferred Time</option>
                <option value="Morning (9am-12pm)">Morning (9am-12pm)</option>
                <option value="Afternoon (12pm-4pm)">Afternoon (12pm-4pm)</option>
                <option value="Evening (4pm-7pm)">Evening (4pm-7pm)</option>
              </select>
              {errors.time && <p className="text-red-500 text-xs mt-1 ml-2">{errors.time}</p>}
            </div>

            <div className="md:col-span-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Any specific concerns or details?"
                className={`w-full rounded-xl border ${errors.message ? 'border-red-500' : 'border-[#F8C8C0]'} px-4 py-3 text-[#3A2D2D] bg-white focus:outline-none focus:ring-2 focus:ring-[#D4A373] transition-all`}
                data-testid="input-message"
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1 ml-2">{errors.message}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#F8C8C0] to-[#E8A0BF] rounded-full py-4 text-[#3A2D2D] font-semibold text-lg hover:shadow-lg transition-all transform hover:-translate-y-1"
            data-testid="button-submit"
          >
            Request Appointment
          </button>
        </motion.form>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="bg-white rounded-3xl p-8 text-center max-w-sm w-full shadow-2xl"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="text-green-600" size={40} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#3A2D2D] mb-2">
                Appointment Requested!
              </h3>
              <p className="text-gray-600 mb-8">
                We will call you within 24 hours to confirm your slot.
              </p>
              <button
                onClick={closePopup}
                className="w-full bg-[#3A2D2D] text-white rounded-full py-3 font-semibold hover:bg-black transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
