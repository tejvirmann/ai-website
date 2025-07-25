import { Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg">MadisonAI Solutions</div>
                <div className="text-xs text-gray-400">Intelligent Automation</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming Madison's small businesses through intelligent AI automation solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Remote AI Assistant</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">AI Sales Assistant</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">AI Security Guard</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Data Processing</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">MCP & RAG Systems</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection("portfolio")} className="hover:text-white transition-colors">Portfolio</button></li>
              <li><button onClick={() => scrollToSection("testimonials")} className="hover:text-white transition-colors">Testimonials</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-brand-orange rounded-full mr-2"></div>
                <span>Madison, WI</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-brand-orange rounded-full mr-2"></div>
                <span>(608) 555-0123</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-brand-orange rounded-full mr-2"></div>
                <span>hello@madisonaisolutions.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MadisonAI Solutions. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
