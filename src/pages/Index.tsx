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
    category: "Model",
    img: "/web integration.jpg",
    title: "Integration",
    subtitle: "Seamless Value Chain",
    features: ["Seed to market integration", "Efficiency & traceability", "Quality control"],
    link: "/services",
  },
  {
    category: "Model",
    img: "/innovation.jpeg",
    title: "Innovation",
    subtitle: "Driving Progress",
    features: ["Research investment", "New technologies", "Solving agri challenges"],
    link: "/about",
  },
  {
    category: "Model",
    img: "/partnership.jpg",
    title: "Partnerships",
    subtitle: "Collaborative Solutions",
    features: ["Farmer & industry partners", "Knowledge sharing", "Collective impact"],
    link: "/csr",
  },
  {
    category: "Model",
    img: "/sustainability.jpeg",
    title: "Sustainability",
    subtitle: "Responsible Practices",
    features: ["Environmental stewardship", "Community support", "Long-term prosperity"],
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
              Vertically Integrated Business Model
            </h2>
          </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16 fade-in-up">
              {highlights.map((card, i) => (
                <div
                  key={card.title}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-up"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  {/* Card Image */}
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground shadow-lg px-4 py-1 rounded text-sm font-semibold">
                      {card.category}
                    </span>
                  </div>
                  {/* Card Info */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-black text-foreground mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 italic">
                      {card.subtitle}
                    </p>
                    <ul className="space-y-2">
                      {card.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-right mt-4">
                      <Link to={card.link} className="text-primary underline text-sm font-medium hover:text-primary/80 transition-colors">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Section Divider */}
            <div className="w-full h-1 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 rounded-full mb-16" />

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
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-[#F5F5DC] border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
              Testimonials
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Hear from farmers and partners who have experienced the Seedbury
              ACR difference.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/testimony2.webp",
                alt: "Testimonial 1",
                text: "“Seedbury ACR’s seeds have transformed my farm’s yield. Their support is unmatched!”",
                name: "Kwame A., Farmer",
              },
              {
                img: "/testimony4.jpg",
                alt: "Testimonial 2",
                text: "“The partnership with Seedbury ACR has brought innovation and growth to our community.”",
                name: "Ama S., Community Leader",
              },
              {
                img: "/testimony3.jpg",
                alt: "Testimonial 3",
                text: "“Excellent quality and service. I recommend Seedbury ACR to every farmer.”",
                name: "Joseph T., Agronomist",
              },
            ].map((t, i) => (
              <div key={t.alt}>
                <div className="bg-card p-6 rounded-xl shadow-lg border-2 border-primary/20 flex flex-col items-center">
                  <img
                    src={t.img}
                    alt={t.alt}
                    className="w-32 h-32 rounded-full object-contain mb-4 border-4 border-primary"
                  />
                  <p className="text-foreground italic mb-2">{t.text}</p>
                  <span className="font-semibold text-primary">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
