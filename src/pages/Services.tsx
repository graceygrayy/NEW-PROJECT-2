import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Sprout,
  Shield,
  Leaf,
  Users,
  Archive,
  Cog,
  Building,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import servicesBg from "@/assets/pic.jpg";

const services = [
  {
    icon: Sprout,
    title: "Foundation Seed Production",
    description:
      "We will employ advanced techniques and rigorous quality control measures to produce high-quality foundation seeds. The meticulous processes will ensure genetic purity and superior performance, laying the groundwork for bountiful harvests and agricultural success.",
    features: [],
  },
  {
    icon: Shield,
    title: "Certified Seed Production",
    description:
      "Leveraging years of experience and expertise, Seedbury ACR will produce certified seeds that meet the highest industry standards. We will test our seeds for purity, viability, and disease resistance, to ensure that we empower farmers with the confidence to achieve optimal yields.",
    features: [],
  },
  {
    icon: Leaf,
    title: "Crop Production",
    description:
      "With a focus on diversity and nutrition, Seedbury ACR will be at the forefront of grains, legumes and vegetable production. From maize, sorghum, cowpea and soybeans to tomatoes, garden eggs and peppers, our extensive portfolio of high-quality products will provide nutritious foodstuffs that sustain both people and the planet.",
    features: [],
  },
  {
    icon: Users,
    title: "Out-grower Scheme",
    description:
      "Seedbury ACR is committed to promoting inclusive growth and economic empowerment through our out-grower scheme. By partnering with local farmers and communities, we will provide access to quality inputs, technical support, and market linkages, creating sustainable livelihoods and driving rural development.",
    features: [],
  },
  {
    icon: Archive,
    title: "Bulk Stock Storage",
    description:
      "Seedbury ACR will operate state-of-the-art storage facilities for bulk storage. Our secure and climate-controlled warehouses and silos will ensure the preservation of essential commodities, safeguarding against losses, market fluctuations and food insecurity.",
    features: [],
  },
  {
    icon: Cog,
    title: "Food Processing",
    description:
      "Building on the foundation of excellence in seed and crop production, Seedbury ACR will extend its expertise to food processing and market development. Through value-added processing and strategic market partnerships, we will unlock new opportunities for agricultural value chains, driving innovation and prosperity.",
    features: [],
  },
  {
    icon: Building,
    title: "Vertical Farming",
    description:
      "As part of our commitment to agricultural innovation, SeedBury ACR plans to integrate vertical farming into our operations. This approach utilizes stacked layers and controlled environments to grow crops efficiently in limited spaces. Through hydroponics, aeroponics, and other soil-free techniques, we aim to conserve resources, ensure year-round production, and support sustainable urban food systems.",
    features: [],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${servicesBg})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            What We Offer
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-background mt-2 mb-6">
            Our Areas of Expertise
          </h1>
          <p className="text-background/90 text-lg max-w-2xl mx-auto">
            We provide comprehensive agricultural solutions tailored to meet
            diverse needs—from premium seeds and produce to farmer support
            programs that drive inclusive growth and sustainable development.
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
            Join thousands of farmers who trust Seedbury ACR for their
            agricultural needs. Let's work together to transform agriculture in
            Ghana.
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
