import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-brand-blue">MadisonAI Solutions</h1>
              <p className="text-xs text-brand-gray">Intelligent Automation</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Pricing
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-brand-orange hover:bg-orange-600 text-white"
            >
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-brand-blue transition-colors text-left font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-brand-blue transition-colors text-left font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-700 hover:text-brand-blue transition-colors text-left font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection("pricing")}
                className="text-gray-700 hover:text-brand-blue transition-colors text-left font-medium"
              >
                Pricing
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-brand-orange hover:bg-orange-600 text-white w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
