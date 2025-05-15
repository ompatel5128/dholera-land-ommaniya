
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Home, Phone } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Home className="h-6 w-6 text-estate-600 mr-2" />
            <a href="#" className="text-xl font-bold text-estate-700 font-display">Dholera SIR Land</a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`font-medium hover:text-estate-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Home</a>
            <a href="#property" className={`font-medium hover:text-estate-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Property</a>
            <a href="#gallery" className={`font-medium hover:text-estate-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Gallery</a>
            <a href="#location" className={`font-medium hover:text-estate-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Location</a>
            <a href="#about" className={`font-medium hover:text-estate-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>About</a>
          </div>
          <Button variant="default" className="hidden md:flex items-center gap-2 bg-estate-600 hover:bg-estate-700">
            <Phone className="h-4 w-4" />
            Contact Now
          </Button>
          <div className="md:hidden">
            <Button variant="ghost" className={`text-2xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>☰</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
