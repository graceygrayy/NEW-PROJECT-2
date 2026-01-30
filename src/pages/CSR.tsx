import { Navbar } from "@/components/Navbar";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Footer } from "@/components/Footer";
import {
  Heart,
  TreePine,
  GraduationCap,
  Droplets,
  Users,
  Leaf,
} from "lucide-react";
import csrBg from "@/assets/pic 6.jpg";

const initiatives = [
  {
    icon: Heart,
    title: "Community Development",
    description:
      "We support community development projects aimed at improving education, healthcare, and infrastructure in rural areas.",
    stats: "20+ Communities Served",
    details: [
      "Building community centers and schools",
      "Healthcare outreach programs",
      "Clean water and sanitation projects",
      "Support for local businesses",
    ],
  },
  {
    icon: TreePine,
    title: "Environmental Conservation",
    description:
      "We prioritize environmental conservation efforts, promoting sustainable farming practices and biodiversity preservation.",
    stats: "10,000+ Trees Planted",
    details: [
      "Annual tree planting campaigns",
      "Sustainable farming practices",
      "Soil conservation initiatives",
      "Biodiversity protection",
    ],
  },
  {
    icon: GraduationCap,
    title: "Empowerment Programs",
    description:
      "We implement empowerment programs that provide training, resources, and opportunities for women, youth, and marginalized groups in agriculture.",
    stats: "2,000+ Trained",
    details: [
      "Agricultural training workshops",
      "Women farmer cooperatives",
      "Youth entrepreneurship programs",
      "Financial literacy education",
    ],
  },
  {
    icon: Droplets,
    title: "Disaster Relief",
    description:
      "We stand ready to provide assistance during times of crisis, offering relief efforts and support to communities affected by natural disasters and emergencies.",
    stats: "500+ Families Supported",
    details: [
      "Emergency seed distribution",
      "Food relief programs",
      "Post-disaster recovery support",
      "Climate resilience planning",
    ],
  },
];

const impactStats = [
  { number: 20, label: "Communities Reached", duration: 2500, suffix: "+" },
  { number: 10000, label: "Trees Planted", duration: 3500, suffix: "+" },
  { number: 2000, label: "Farmers Trained", duration: 3000, suffix: "+" },
  { number: 500, label: "Families Supported", duration: 2500, suffix: "+" },
];

const CSR = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${csrBg})` }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Removed 'Corporate Social Responsibility' as requested */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-background mt-2 mb-6">
            Giving Back to Our Communities
          </h1>
          <p className="text-background/90 text-lg max-w-2xl mx-auto">
            Together, we spark change for a brighter future!
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block font-serif text-3xl md:text-4xl font-bold text-primary-foreground">
                  <AnimatedCounter target={stat.number} duration={stat.duration} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-primary-foreground/80">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {initiatives.map((initiative) => (
              <div
                key={initiative.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                      <initiative.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {initiative.title}
                      </h3>
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold">
                        {initiative.stats}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {initiative.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {initiative.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Leaf className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 text-secondary mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Our Commitment to a Better Tomorrow
            </h2>
            <p className="text-background/80 text-lg mb-8">
              We are committed to sustainable practices that not only benefit
              our business but also contribute to the well-being of our
              communities and the environment. Through our CSR initiatives, we
              aim to create a lasting positive impact that extends beyond
              agriculture.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 rounded-full bg-background/10 border border-background/20">
                <span className="text-sm font-medium">
                  Sustainable Agriculture
                </span>
              </div>
              <div className="px-6 py-3 rounded-full bg-background/10 border border-background/20">
                <span className="text-sm font-medium">Community First</span>
              </div>
              <div className="px-6 py-3 rounded-full bg-background/10 border border-background/20">
                <span className="text-sm font-medium">
                  Environmental Stewardship
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CSR;
