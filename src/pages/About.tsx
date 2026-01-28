import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Shield,
  Lightbulb,
  Leaf,
  Handshake,
  Target,
  Heart,
  Star,
  Users,
  Sprout,
  Zap,
} from "lucide-react";
import aboutBg from "@/assets/pic3.jpg";
import aboutImage from "@/assets/pic 5.jpeg";
import whoWeAreImg from "@/assets/who-we-are.webp";

const qualities = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Our commitment to quality ensures that every seed and service meets the highest standards of excellence.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Through continuous research and development, we pioneer innovative solutions to address the evolving needs of agriculture.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We prioritize sustainability in all aspects of our operations, promoting environmental stewardship and social responsibility.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We believe in the power of collaboration and partnership, working closely with stakeholders to achieve shared goals and mutual success.",
  },
  {
    icon: Target,
    title: "Impact",
    description:
      "By empowering farmers and communities, we create lasting positive impact that extends far beyond the field.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We conduct business with honesty, transparency, and ethical practices in all our dealings.",
    color: "bg-primary",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We strive for the highest standards in everything we do, from seed quality to customer service.",
    color: "bg-secondary",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in the power of partnerships and working together to achieve shared goals.",
    color: "bg-accent",
  },
  {
    icon: Sprout,
    title: "Sustainability",
    description:
      "We are committed to practices that protect and preserve our environment for future generations.",
    color: "bg-leaf",
  },
  {
    icon: Zap,
    title: "Impact",
    description:
      "We measure our success by the positive change we create in communities and livelihoods.",
    color: "bg-earth",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${whoWeAreImg})` }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-background mb-4">
            Who We Are
          </h1>
          <p className="font-sans text-background/90 text-lg max-w-2xl mx-auto">
            Transforming agriculture in Ghana through innovation, quality, and
            sustainability.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                At Seedbury ACR, our mission is to revolutionize agriculture
                through innovation, quality, and sustainability.
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                To be a driving force in sustainable agricultural transformation
                by empowering farmers and communities to thrive and protecting
                the environment for future generations.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="text-center">
                  <span className="block font-serif text-3xl font-bold text-primary">
                    15+
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Years Experience
                  </span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <span className="block font-serif text-3xl font-bold text-primary">
                    5000+
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Farmers Empowered
                  </span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <span className="block font-serif text-3xl font-bold text-primary">
                    50+
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Seed Varieties
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Seedbury ACR Agriculture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <span className="block font-serif text-2xl font-bold text-accent-foreground">
                    Ghana
                  </span>
                  <span className="text-xs text-accent-foreground/80">
                    Based
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Our Commitment
            </span> */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Why Choose Seedbury ACR?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {qualities.map((quality) => (
              <div
                key={quality.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <quality.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {quality.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {quality.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              What Drives Us
            </span> */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg">
              These principles guide every decision we make and every action we
              take as we work to transform agriculture in Ghana.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value) => (
              <div key={value.title} className="relative group">
                <div className="bg-card rounded-2xl p-6 h-full border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div
                    className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <value.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
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

export default About;
