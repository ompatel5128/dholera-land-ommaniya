
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Home, Image } from "lucide-react";

const PropertyDetails = () => {
  return (
    <section id="property" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Property Details</h2>
          <div className="w-20 h-1 bg-estate-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Exclusive land for sale in the prestigious Dholera Special Investment Region with excellent growth potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="property-card border border-gray-200 rounded-lg overflow-hidden">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-estate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-estate-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prime Location</h3>
              <p className="text-gray-600">
                Located in Sangasar village under the Dholera SIR project, a planned smart city with excellent connectivity.
              </p>
            </CardContent>
          </Card>

          <Card className="property-card border border-gray-200 rounded-lg overflow-hidden">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-estate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-estate-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Development Potential</h3>
              <p className="text-gray-600">
                Strategically located with significant appreciation potential as the Dholera SIR project develops.
              </p>
            </CardContent>
          </Card>

          <Card className="property-card border border-gray-200 rounded-lg overflow-hidden">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-estate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image className="h-8 w-8 text-estate-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Investment Opportunity</h3>
              <p className="text-gray-600">
                A secure investment with excellent future returns in one of India's most ambitious infrastructure projects.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-4">
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
                  <span className="text-gray-700">Clear and marketable title with all necessary approvals</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-estate-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-3 h-3 bg-estate-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Excellent road connectivity to major cities</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-estate-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-3 h-3 bg-estate-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Close to planned amenities and infrastructure</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium text-gray-600">Location:</span>
                  <span className="text-gray-900">Sangasar Village, Dholera SIR</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium text-gray-600">Type:</span>
                  <span className="text-gray-900">Land</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium text-gray-600">Status:</span>
                  <span className="text-green-600 font-medium">Available</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium text-gray-600">Pricing:</span>
                  <span className="text-gray-900">Available upon request</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium text-gray-600">Payment Terms:</span>
                  <span className="text-gray-900">Flexible options available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
