import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { MapPin, Phone, Mail, CheckCircle, Star, Shield, Users, Clock } from "lucide-react";

const contactFormSchema = insertContactInquirySchema.extend({
  fullName: insertContactInquirySchema.shape.fullName.min(2, "Full name must be at least 2 characters"),
  email: insertContactInquirySchema.shape.email.email("Please enter a valid email address"),
  businessName: insertContactInquirySchema.shape.businessName.min(2, "Business name must be at least 2 characters"),
  businessChallenge: insertContactInquirySchema.shape.businessChallenge.min(10, "Please describe your challenge in at least 10 characters"),
});

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      businessName: "",
      phoneNumber: "",
      industry: "",
      businessChallenge: "",
      preferredContactMethod: "",
    },
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Thank you for your inquiry!",
        description: "We'll contact you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error submitting form",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    submitContactForm.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100">Get a free consultation and see how AI can revolutionize your operations</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg text-brand-gray">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Get Your Free Consultation</h3>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
                  <h4 className="text-xl font-semibold text-brand-blue mb-2">Thank you!</h4>
                  <p className="text-brand-gray">We'll contact you within 24 hours to discuss your AI automation needs.</p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@business.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Smith & Associates" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(608) 555-0123" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="restaurant">Restaurant/Food Service</SelectItem>
                              <SelectItem value="professional">Professional Services</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="businessChallenge"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Challenge *</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
                              placeholder="Describe your biggest business challenge or what you'd like to automate..." 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="preferredContactMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Contact Method</FormLabel>
                          <FormControl>
                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="email" id="email" />
                                <Label htmlFor="email">Email</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="phone" id="phone" />
                                <Label htmlFor="phone">Phone</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="both" id="both" />
                                <Label htmlFor="both">Both</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-brand-orange hover:bg-orange-600 text-white py-3 font-semibold"
                      disabled={submitContactForm.isPending}
                    >
                      {submitContactForm.isPending ? "Submitting..." : "Get Free Consultation"}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-brand-orange mr-4 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold">Madison, Wisconsin</div>
                    <div className="text-blue-100">123 State Street, Madison, WI 53703</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-brand-orange mr-4 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold">(608) 555-0123</div>
                    <div className="text-blue-100">Available Mon-Fri 9am-6pm</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-brand-orange mr-4 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold">hello@madisonaisolutions.com</div>
                    <div className="text-blue-100">We respond within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Why Choose MadisonAI?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-brand-orange mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold">Local Expertise</div>
                    <div className="text-blue-100">We understand Madison's business landscape</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-brand-orange mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold">Proven Results</div>
                    <div className="text-blue-100">50+ successful implementations</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-brand-orange mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold">Ongoing Support</div>
                    <div className="text-blue-100">24/7 technical support available</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-brand-orange mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold">Custom Solutions</div>
                    <div className="text-blue-100">Tailored to your specific needs</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-blue-800 border-blue-700">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4">Free Consultation Includes:</h4>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center">
                    <Star className="text-brand-orange mr-2 flex-shrink-0" size={16} />
                    Business process analysis
                  </li>
                  <li className="flex items-center">
                    <Star className="text-brand-orange mr-2 flex-shrink-0" size={16} />
                    AI opportunity assessment
                  </li>
                  <li className="flex items-center">
                    <Star className="text-brand-orange mr-2 flex-shrink-0" size={16} />
                    Custom solution proposal
                  </li>
                  <li className="flex items-center">
                    <Star className="text-brand-orange mr-2 flex-shrink-0" size={16} />
                    ROI projections
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
