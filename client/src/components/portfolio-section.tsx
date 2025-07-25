import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "Restaurant Order Management",
    description: "Implemented AI-powered order processing system that reduced wait times by 50% and increased accuracy to 99.8%.",
    client: "Madison Family Restaurant",
    result: "50% Efficiency Gain",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Retail Inventory AI",
    description: "Automated inventory tracking and predictive restocking that eliminated stockouts and reduced overstock by 40%.",
    client: "Madison Retail Co.",
    result: "40% Cost Reduction",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Professional Services Bot",
    description: "24/7 customer service chatbot that handles 80% of inquiries automatically while maintaining personal touch.",
    client: "Madison Legal Services",
    result: "80% Automation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Manufacturing Analytics",
    description: "Predictive maintenance system that reduced equipment downtime by 60% and maintenance costs by 30%.",
    client: "Madison Manufacturing",
    result: "60% Less Downtime",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Healthcare Scheduling",
    description: "AI appointment scheduling system that reduced no-shows by 45% and improved patient satisfaction scores.",
    client: "Madison Dental Practice",
    result: "45% Fewer No-Shows",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Financial Analytics",
    description: "Automated financial reporting and cash flow prediction system that improved forecasting accuracy by 85%.",
    client: "Madison Accounting Firm",
    result: "85% Better Forecasting",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  }
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">Portfolio Showcase</h2>
          <p className="text-xl text-brand-gray">Recent AI implementations for Madison businesses</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover" 
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-brand-blue mb-2">{item.title}</h3>
                <p className="text-brand-gray mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-brand-gray">{item.client}</span>
                  <span className="text-brand-orange font-semibold">{item.result}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
