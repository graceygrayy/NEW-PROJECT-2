import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Wheat, Package, Users, Truck, FlaskConical, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Wheat,
    title: "High-Quality Seeds",
    description: "Premium certified seeds developed for optimal yield and resilience across diverse climatic conditions in Ghana and West Africa.",
    features: ["Certified germination rates", "Disease-resistant varieties", "Climate-adapted selection"],
  },
  {
    icon: Package,
    title: "Premium Produce",
    description: "Quality agricultural products processed and packaged to meet international standards at competitive prices.",
    features: ["International quality standards", "Competitive pricing", "Bulk availability"],
  },
  {
    icon: Users,
    title: "Farmer Empowerment",
    description: "Comprehensive support programs for smallholder farmers including training, resources, and market access.",
    features: ["Training programs", "Resource access", "Market linkages"],
  },
  {
    icon: FlaskConical,
    title: "Seed Processing",
    description: "State-of-the-art seed processing and treatment facilities ensuring maximum germination and crop health.",
    features: ["Modern equipment", "Quality testing", "Seed treatment"],
  },
  {
    icon: GraduationCap,
    title: "Technical Training",
    description: "Capacity building programs teaching modern agricultural techniques and best practices.",
    features: ["Hands-on workshops", "Expert instructors", "Certification programs"],
  },
  {
    icon: Truck,
    title: "Distribution Network",
    description: "Reliable supply chain ensuring timely delivery of seeds and products across Ghana.",
    features: ["Nationwide coverage", "Timely delivery", "Cold chain logistics"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            What We Offer
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
            Our Services & Expertise
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide comprehensive agricultural solutions tailored to meet diverse 
            needs—from premium seeds and produce to farmer support programs that drive 
            inclusive growth and sustainable development.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Join thousands of farmers who trust Seedbury ACR for their agricultural needs. 
            Let's work together to transform agriculture in Ghana.
          </p>
          <Link to="/contact">
            <Button size="lg" className="group">
              Partner With Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
