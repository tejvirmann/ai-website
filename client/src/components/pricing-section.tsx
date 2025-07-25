import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "One-time setup",
    features: [
      "Basic chatbot implementation",
      "Simple process automation",
      "Basic training & setup",
      "30-day support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$5,000",
    period: "One-time setup",
    features: [
      "Advanced AI chatbot",
      "Multiple process automation",
      "Basic analytics dashboard",
      "Integration with existing systems",
      "90-day support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$10,000+",
    period: "Custom pricing",
    features: [
      "Custom AI solution development",
      "Advanced analytics & reporting",
      "Multi-system integration",
      "Dedicated support team",
      "Ongoing maintenance"
    ],
    popular: false
  }
];

export function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">Transparent Pricing</h2>
          <p className="text-xl text-brand-gray">Choose the plan that fits your business needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`hover:shadow-xl transition-shadow relative ${plan.popular ? 'border-2 border-brand-orange' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-brand-orange mb-2">{plan.price}</div>
                  <div className="text-brand-gray">{plan.period}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                      <span className="text-brand-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-3 font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-brand-orange hover:bg-orange-600 text-white' 
                      : 'bg-brand-blue hover:bg-blue-800 text-white'
                  }`}
                  onClick={scrollToContact}
                >
                  {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-brand-gray mb-4">All plans include free consultation and 30-day money-back guarantee</p>
          <div className="flex justify-center items-center space-x-8 text-sm text-brand-gray">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-brand-orange rounded-full mr-2"></div>
              Secure & Compliant
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-brand-orange rounded-full mr-2"></div>
              Local Support
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-brand-orange rounded-full mr-2"></div>
              Quick Implementation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
