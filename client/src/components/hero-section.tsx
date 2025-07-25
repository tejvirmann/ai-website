import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-brand-blue to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-cover bg-center opacity-10" 
           style={{backgroundImage: "url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Small Business with{" "}
              <span className="text-brand-orange">AI Automation</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Madison's premier AI consultant helping small businesses streamline operations, boost efficiency, and scale intelligently through custom AI agent solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-6 text-lg"
                size="lg"
              >
                Get Free Consultation
              </Button>
              <Button 
                onClick={() => scrollToSection("services")}
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-6 text-lg"
                size="lg"
              >
                View Services
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="text-brand-orange" size={20} />
                <span className="text-blue-100">Madison, WI</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-brand-orange" size={20} />
                <span className="text-blue-100">(608) 555-0123</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="AI technology automation dashboard" 
                className="rounded-xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
