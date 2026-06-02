import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutClinic from "@/components/AboutClinic";
import AboutDoctor from "@/components/AboutDoctor";
import Services from "@/components/Services";
import Equipment from "@/components/Equipment";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import AppointmentForm from "@/components/AppointmentForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  if (loading) return <LoadingScreen onComplete={() => setLoading(false)} />;
  
  return (
    <div className="w-full overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <AboutClinic />
        <AboutDoctor />
        <Services />
        <Equipment />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <AppointmentForm />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
