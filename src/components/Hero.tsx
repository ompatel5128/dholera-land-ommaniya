
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80')" }}
      ></div>
      <div className="relative z-20 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Premium Land in Sangasar Village, Dholera SIR
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            A rare investment opportunity in the upcoming Dholera Special Investment Region. Secure your future with this prime land parcel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-estate-600 hover:bg-estate-700 text-white font-medium px-8 py-6">
              View Property Details
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Contact Now
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent h-32 z-10"></div>
    </section>
  );
};

export default Hero;
