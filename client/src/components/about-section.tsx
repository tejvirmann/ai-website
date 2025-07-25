import { Award, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-brand-blue mb-6">About MadisonAI Solutions</h2>
            <p className="text-xl text-brand-gray mb-6">
              Based in the heart of Madison, Wisconsin, we specialize in bringing enterprise-level AI solutions to small businesses. Our mission is to democratize AI technology and help local businesses compete in the digital age.
            </p>
            <p className="text-lg text-brand-gray mb-8">
              With over 10 years of experience in software development and AI implementation, we understand the unique challenges small businesses face. That's why we create custom, scalable solutions that grow with your business.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange mb-2">50+</div>
                <div className="text-brand-gray">Businesses Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange mb-2">95%</div>
                <div className="text-brand-gray">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange mb-2">24/7</div>
                <div className="text-brand-gray">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange mb-2">100%</div>
                <div className="text-brand-gray">Madison Local</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-slate-50 rounded-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional consulting meeting with business owner" 
                className="rounded-xl w-full h-auto" 
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-brand-orange text-white p-4 rounded-xl shadow-lg">
              <Award size={32} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-brand-blue text-white p-4 rounded-xl shadow-lg">
              <Users size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
