
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Inquiry Sent Successfully",
      description: "We'll get back to you as soon as possible!",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-estate-50 bg-opacity-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-estate-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Interested in this property? Contact us for pricing details and to schedule a site visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 border border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="Your email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    placeholder="Your phone number" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="I'm interested in this property and would like more information..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full bg-estate-600 hover:bg-estate-700">Send Inquiry</Button>
              </form>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-estate-100 p-2 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-estate-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Call Us</h4>
                    <a href="tel:+919876543210" className="text-estate-600 hover:underline">+91 98765 43210</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-estate-100 p-2 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-estate-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Email Us</h4>
                    <a href="mailto:info@ommaniya.site" className="text-estate-600 hover:underline">info@ommaniya.site</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-estate-100 p-2 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-estate-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-700">Sangasar Village, Dholera SIR, Gujarat, India</p>
                  </div>
                </div>
                
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Business Hours</h4>
                  <p className="text-gray-700">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-700">Sunday: By appointment only</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
