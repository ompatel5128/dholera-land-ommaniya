
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertyDetails from "@/components/PropertyDetails";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PropertyDetails />
      <Gallery />
      <Location />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
};

export default Index;
