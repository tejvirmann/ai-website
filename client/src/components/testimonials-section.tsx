import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    business: "Owner, Mitchell's Bakery",
    initials: "SM",
    testimonial: "The AI customer service bot has been a game-changer for our bakery. We're now handling orders 24/7 and our customers love the instant responses. Revenue increased 35% in just 3 months!"
  },
  {
    name: "James Rodriguez",
    business: "CEO, Rodriguez Plumbing",
    initials: "JR",
    testimonial: "The scheduling automation has saved us 20 hours per week. No more missed appointments or double bookings. Our team can focus on what they do best - quality plumbing work."
  },
  {
    name: "Lisa Chen",
    business: "Owner, Chen's Boutique",
    initials: "LC",
    testimonial: "The inventory management AI has been incredible. We've reduced overstock by 40% and never run out of popular items. The predictive analytics are spot-on!"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">What Our Clients Say</h2>
          <p className="text-xl text-brand-gray">Real results from real Madison businesses</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-brand-blue">{testimonial.name}</div>
                    <div className="text-sm text-brand-gray">{testimonial.business}</div>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-brand-gray italic">
                  "{testimonial.testimonial}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
