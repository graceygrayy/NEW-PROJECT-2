import { Shield, Lightbulb, Leaf, Handshake, Target } from "lucide-react";

const qualities = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Rigorous standards ensure every seed and product meets premium quality benchmarks.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Cutting-edge agricultural technologies and practices drive our solutions forward.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Environmentally responsible methods that protect our planet for future generations.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "Building lasting relationships with farmers, communities, and stakeholders.",
  },
  {
    icon: Target,
    title: "Impact",
    description:
      "Measurable positive change in food security and farmer livelihoods across Ghana.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Who We Are */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Seedbury ACR is a pioneering private seed and food processing
              company based in Ghana. Our mission is to transform agriculture
              through innovation, delivering high-quality seeds and agricultural
              solutions that empower farmers and sustain communities.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              We envision a future where every farmer has access to premium
              agricultural resources, enabling food security and economic
              prosperity across West Africa and beyond.
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
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/web 2.png"
                alt="Who We Are Banner"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-center">
                <span className="block font-serif text-2xl font-bold text-accent-foreground">
                  Ghana
                </span>
                <span className="text-xs text-accent-foreground/80">Based</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Commitment
          </span>
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Why Choose Seedbury ACR?
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {qualities.map((quality, index) => (
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
  );
};
