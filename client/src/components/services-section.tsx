import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageSquare, Settings, TrendingUp, Megaphone, Shield, HandHeart, 
  Phone, Database, FileText, UserCheck, Video, Bot, 
  DollarSign, Calendar, Zap 
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Customer Service AI",
    description: "24/7 intelligent chatbots that handle customer inquiries, bookings, and support tickets with human-like responses.",
    features: [
      "Multi-channel support",
      "Natural language processing",
      "Integration with existing systems"
    ]
  },
  {
    icon: Phone,
    title: "Remote AI Assistant",
    description: "AI-powered remote employee accessible via phone or text that handles calls, messages, and administrative tasks for your business.",
    features: [
      "Phone & SMS support",
      "Call routing & screening",
      "Remote task management"
    ]
  },
  {
    icon: Database,
    title: "MCP & RAG Systems",
    description: "Custom Model Context Protocol (MCP) and Retrieval-Augmented Generation (RAG) systems for intelligent document processing and knowledge management.",
    features: [
      "Document intelligence",
      "Knowledge base creation",
      "Contextual AI responses"
    ]
  },
  {
    icon: FileText,
    title: "Data Processing",
    description: "Automated data extraction, transformation, and analysis from various sources including documents, forms, and databases.",
    features: [
      "Document digitization",
      "Data cleaning & validation",
      "Automated reporting"
    ]
  },
  {
    icon: UserCheck,
    title: "AI Sales Assistant",
    description: "Intelligent sales automation that qualifies leads, schedules appointments, and follows up with prospects automatically.",
    features: [
      "Lead qualification",
      "Appointment scheduling",
      "Follow-up automation"
    ]
  },
  {
    icon: Video,
    title: "AI Security Guard",
    description: "24/7 AI-powered security monitoring using computer vision and anomaly detection to protect your business premises.",
    features: [
      "Real-time monitoring",
      "Threat detection",
      "Automated alerts"
    ]
  },
  {
    icon: DollarSign,
    title: "AI Accounting Assistant",
    description: "Automated bookkeeping, expense tracking, and financial reporting that keeps your finances organized and compliant.",
    features: [
      "Automated bookkeeping",
      "Expense categorization",
      "Tax preparation support"
    ]
  },
  {
    icon: Calendar,
    title: "Smart Scheduling System",
    description: "AI-powered appointment scheduling that optimizes staff time, reduces no-shows, and manages complex booking scenarios.",
    features: [
      "Intelligent scheduling",
      "Conflict resolution",
      "Automated reminders"
    ]
  },
  {
    icon: Bot,
    title: "AI Content Creator",
    description: "Automated content generation for marketing materials, social media posts, and customer communications tailored to your brand.",
    features: [
      "Brand-consistent content",
      "Multi-platform posting",
      "Performance optimization"
    ]
  },
  {
    icon: Settings,
    title: "Process Automation",
    description: "Streamline repetitive tasks like data entry, invoicing, inventory management, and scheduling through intelligent automation.",
    features: [
      "Workflow optimization",
      "Error reduction",
      "Time savings"
    ]
  },
  {
    icon: TrendingUp,
    title: "Business Intelligence",
    description: "AI-powered analytics and reporting that provide actionable insights for better decision-making and growth strategies.",
    features: [
      "Real-time dashboards",
      "Predictive analytics",
      "Custom reporting"
    ]
  },
  {
    icon: Megaphone,
    title: "Marketing Automation",
    description: "Intelligent marketing campaigns that personalize customer experiences and optimize lead generation automatically.",
    features: [
      "Email automation",
      "Lead scoring",
      "Social media management"
    ]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "AI-driven security monitoring and compliance management to protect your business data and maintain regulatory standards.",
    features: [
      "Threat detection",
      "Data protection",
      "Compliance automation"
    ]
  },
  {
    icon: Zap,
    title: "AI Workflow Optimizer",
    description: "Intelligent workflow analysis and optimization that identifies bottlenecks and automates complex business processes.",
    features: [
      "Process mapping",
      "Bottleneck identification",
      "Automated optimization"
    ]
  },
  {
    icon: HandHeart,
    title: "Consulting & Training",
    description: "Comprehensive AI strategy consulting and team training to ensure successful implementation and adoption of AI solutions.",
    features: [
      "Strategy development",
      "Staff training",
      "Ongoing support"
    ]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">Our AI Services</h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Comprehensive AI solutions designed specifically for small businesses to automate processes, improve customer service, and drive growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand-orange rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-white text-2xl" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">{service.title}</h3>
                <p className="text-brand-gray mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-brand-gray">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
