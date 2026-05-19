import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutClinic from "@/components/AboutClinic";
import AboutDoctor from "@/components/AboutDoctor";
import Services from "@/components/Services";
import Equipment from "@/components/Equipment";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import AppointmentForm from "@/components/AppointmentForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingButtons from "@/components/FloatingButtons";
import ParticleField from "@/components/ParticleField";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-foreground relative">
      <ParticleField />
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <AboutClinic />
        <AboutDoctor />
        <Services />
        <Equipment />
        <BeforeAfter />
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