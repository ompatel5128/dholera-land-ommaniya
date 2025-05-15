
import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Strategic Location</h2>
          <div className="w-20 h-1 bg-estate-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Located in Sangasar village within the prestigious Dholera Special Investment Region (SIR),
            one of India's most ambitious infrastructure projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <MapPin className="h-5 w-5 text-estate-600 mr-2" /> 
                Dholera SIR Advantage
              </h3>
              <p className="text-gray-700">
                Dholera SIR is India's first planned smart city under the Delhi-Mumbai Industrial Corridor (DMIC),
                set to revolutionize industrial development and urban living in the region.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Key Connectivity</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-estate-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-3 h-3 bg-estate-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Proximity to the upcoming Dholera International Airport</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-estate-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-3 h-3 bg-estate-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Well-connected to Ahmedabad (approximately 100 km)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-estate-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-3 h-3 bg-estate-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Part of the Delhi-Mumbai Industrial Corridor</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-estate-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-3 h-3 bg-estate-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Planned metro rail connectivity</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-estate-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-3 h-3 bg-estate-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Easy access to major highways and expressways</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
            <div className="h-[400px] w-full bg-gray-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59114.72555192617!2d72.1535935!3d22.2422511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f567c5c371849%3A0x1d4c6a7fccbbe915!2sDholera%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1658258852945!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Property Location"
                className="absolute inset-0"
              ></iframe>
            </div>
            <div className="p-4 bg-white">
              <h4 className="font-semibold text-estate-700">Sangasar Village, Dholera SIR</h4>
              <p className="text-sm text-gray-600">Gujarat, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
