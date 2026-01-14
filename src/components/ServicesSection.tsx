import { Wheat, Package, Users, Truck, FlaskConical, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wheat,
    title: "High-Quality Seeds",
    description: "Premium certified seeds developed for optimal yield and resilience across diverse climatic conditions in Ghana and West Africa.",
  },
  {
    icon: Package,
    title: "Premium Produce",
    description: "Quality agricultural products processed and packaged to meet international standards at competitive prices.",
  },
  {
    icon: Users,
    title: "Farmer Empowerment",
    description: "Comprehensive support programs for smallholder farmers including training, resources, and market access.",
  },
  {
    icon: FlaskConical,
    title: "Seed Processing",
    description: "State-of-the-art seed processing and treatment facilities ensuring maximum germination and crop health.",
  },
  {
    icon: GraduationCap,
    title: "Technical Training",
    description: "Capacity building programs teaching modern agricultural techniques and best practices.",
  },
  {
    icon: Truck,
    title: "Distribution Network",
    description: "Reliable supply chain ensuring timely delivery of seeds and products across Ghana.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-32">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Our Services & Expertise
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We provide comprehensive agricultural solutions tailored to meet diverse 
              needs—from premium seeds and produce to farmer support programs that drive 
              inclusive growth and sustainable development.
            </p>
            <Button size="lg">
              Partner With Us
            </Button>
          </div>

          {/* Right Column - Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};