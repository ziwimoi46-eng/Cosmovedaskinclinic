import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CalendarIcon, CheckCircle2 } from "lucide-react";

const servicesList = [
  "Medi Facials", "Hyperpigmentation", "Anti-aging", "Acne Treatment", 
  "Acne Scar Treatment", "Hair Regrowth", "PRP Skin & Hair", "Mesotherapy",
  "Skin Boosters", "Laser Hair Reduction", "Eyebrow Microblading", 
  "Lip Pigmentation", "Scalp Micropigmentation", "PMU Services",
  "Panchakarma", "Ayurvedic Therapies"
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Enter a valid phone number." }),
  service: z.string({ required_error: "Please select a service." }),
  date: z.string().min(1, { message: "Preferred date is required." }),
  message: z.string().optional(),
});

export default function AppointmentForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      date: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // In a real app, this would send data to an API
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 4000);
  }

  return (
    <section id="appointment" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-white border border-border rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-5/12 bg-gradient-to-br from-primary to-secondary p-10 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
            <div className="relative z-10">
              <h3 className="font-serif text-3xl md:text-4xl mb-4">Request a <span className="italic opacity-90">Consultation</span></h3>
              <p className="text-white/80 font-light leading-relaxed mb-8">
                Take the first step towards enhancing your natural beauty. Fill out the form, and our team will contact you to confirm your appointment.
              </p>
              <div className="space-y-4 text-white/90">
                <p><strong>Call Us Directly:</strong><br />+91 9860618850</p>
                <p><strong>Clinic Hours:</strong><br />10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          <div className="md:w-7/12 p-10 md:p-12 relative">
            <AnimatePresence>
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-8"
                >
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                  >
                    <CheckCircle2 className="w-20 h-20 text-[#25D366] mb-6" />
                  </motion.div>
                  <h3 className="font-serif text-3xl text-foreground mb-2">Request Received!</h3>
                  <p className="text-muted-foreground font-light">Thank you for choosing CosmoVeda. Our reception team will call you shortly to confirm your booking.</p>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" className="bg-muted/50 border-0 focus-visible:ring-primary focus-visible:ring-offset-0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91" className="bg-muted/50 border-0 focus-visible:ring-primary focus-visible:ring-offset-0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Treatment of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-muted/50 border-0 focus:ring-primary focus:ring-offset-0">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {servicesList.map(s => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Preferred Date</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input type="date" className="bg-muted/50 border-0 focus-visible:ring-primary focus-visible:ring-offset-0 pl-10" {...field} />
                            <CalendarIcon className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80">Additional Notes (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your concerns..." 
                          className="resize-none bg-muted/50 border-0 focus-visible:ring-primary focus-visible:ring-offset-0 h-24" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-xl py-6 text-lg shadow-lg border-0 transition-all">
                  Confirm Booking Request
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}