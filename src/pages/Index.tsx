import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Link as LinkIcon,
  Lightbulb,
  Handshake,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: LinkIcon,
    title: "Integration",
    description:
      "We seamlessly integrate all aspects of the agricultural value chain, from seed production to market access, ensuring efficiency, quality control, and traceability.",
    link: "/services",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously invest in research and support the development of pioneer new technologies, practices, and products that address emerging challenges and opportunities in agriculture.",
    link: "/about",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description:
      "We collaborate with farmers, research institutions, governments, and industry stakeholders to co-create solutions, share knowledge, and drive collective impact.",
    link: "/csr",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We prioritize sustainability in our operations, promoting environmental stewardship, social responsibility, and economic viability across the value chain.",
    link: "/about",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Quick Highlights Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Our Business Model
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
              Vertically Integrated Business Model
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Seedbury ACR will operates on a vertically integrated business
              model, encompassing seed and crop production, bulk storage,
              distribution, processing and market development. This model is
              characterized by:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {highlights.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/about">
              <Button size="lg" variant="outline" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of farmers who trust Seedbury ACR for their
            agricultural needs. Let's work together to transform agriculture in
            Ghana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="group">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/products">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                View Our Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
