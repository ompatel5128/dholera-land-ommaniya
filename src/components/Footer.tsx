
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Home } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Home className="h-6 w-6 text-estate-400 mr-2" />
              <h2 className="text-xl font-bold text-white">Dholera SIR Land</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Premium land investment opportunities in the upcoming Dholera Special Investment Region.
            </p>
            <Button variant="outline" className="text-white border-estate-600 hover:bg-estate-700 hover:text-white">
              Contact Us
            </Button>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-estate-400 transition-colors">Home</a></li>
              <li><a href="#property" className="text-gray-400 hover:text-estate-400 transition-colors">Property Details</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-estate-400 transition-colors">Gallery</a></li>
              <li><a href="#location" className="text-gray-400 hover:text-estate-400 transition-colors">Location</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-estate-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-estate-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-estate-400 mr-3 mt-0.5" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-estate-400 mr-3 mt-0.5" />
                <span className="text-gray-400">info@ommaniya.site</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-estate-400 mr-3 mt-0.5" />
                <span className="text-gray-400">Sangasar Village, Dholera SIR, Gujarat, India</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Business Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: By appointment only</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Dholera SIR Land. All rights reserved.
            </p>
            <div>
              <p className="text-gray-400 text-sm">
                <a href="https://www.ommaniya.site" className="hover:text-estate-400 transition-colors">www.ommaniya.site</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
