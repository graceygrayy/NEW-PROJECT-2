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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
              Vertically Integrated Business Model
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Animated business model cards */}
            {[
              {
                to: "/services",
                img: "/web integration.jpg",
                alt: "Integration",
                title: "Integration",
                desc: "We connect every stage of the agricultural value chain, from seed to market, ensuring efficiency, quality, and transparency for all stakeholders.",
              },
              {
                to: "/about",
                img: "/innovation.jpeg",
                alt: "Innovation",
                title: "Innovation",
                desc: "We drive progress by investing in research and pioneering new technologies, practices, and products to solve agriculture’s biggest challenges.",
              },
              {
                to: "/csr",
                img: "/partnership.jpg",
                alt: "Partnerships",
                title: "Partnerships",
                desc: "We work hand-in-hand with farmers, researchers, and industry partners to co-create solutions, share knowledge, and achieve lasting impact.",
              },
              {
                to: "/about",
                img: "/sustainability.jpeg",
                alt: "Sustainability",
                title: "Sustainability",
                desc: "We champion responsible practices that protect the environment, support communities, and ensure long-term prosperity across the value chain.",
              },
            ].map((card, i) => (
              <div key={card.title}>
                <Link
                  to={card.to}
                  className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300`}
                >
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed min-h-[72px]">
                    {card.desc}
                  </p>
                </Link>
              </div>
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
