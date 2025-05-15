
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-estate-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We specialize in premium land investments in the rapidly developing Dholera SIR region.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Dholera SIR Development" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Why Invest in Dholera SIR?</h3>
            <p className="text-gray-700">
              Dholera Special Investment Region (SIR) is India's first greenfield industrial smart city and a key node on the Delhi-Mumbai Industrial Corridor. With planned world-class infrastructure, this region presents an exceptional investment opportunity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <Card className="border border-gray-200">
                <CardContent className="p-4">
                  <h4 className="font-bold text-estate-700 mb-2">Government Backing</h4>
                  <p className="text-sm text-gray-600">
                    Supported by both central and state governments as a flagship smart city project.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="p-4">
                  <h4 className="font-bold text-estate-700 mb-2">Infrastructure Plans</h4>
                  <p className="text-sm text-gray-600">
                    Major plans include an international airport, metro connectivity, and industrial zones.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="p-4">
                  <h4 className="font-bold text-estate-700 mb-2">Growth Potential</h4>
                  <p className="text-sm text-gray-600">
                    Early investors stand to gain significantly as development progresses.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="p-4">
                  <h4 className="font-bold text-estate-700 mb-2">Clear Title Land</h4>
                  <p className="text-sm text-gray-600">
                    We provide legally vetted land with clear titles and all necessary approvals.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-gray-700 italic">
              "The Dholera SIR project represents one of the most ambitious infrastructure developments in India's history, with potential to transform the economic landscape of the region."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
