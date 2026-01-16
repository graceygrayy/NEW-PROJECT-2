import { Shield, Trophy, Users, Sprout, Target } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We conduct business with honesty, transparency, and ethical practices in all our dealings.",
    color: "bg-orange-600",
    textColor: "text-white",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description:
      "We strive for the highest standards in everything we do, from seed quality to customer service.",
    color: "bg-green-500",
    textColor: "text-white",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in the power of partnerships and working together to achieve shared goals.",
    color: "bg-blue-900",
    textColor: "text-white",
  },
  {
    icon: Sprout,
    title: "Sustainability",
    description:
      "We are committed to practices that protect and preserve our environment for future generations.",
    color: "bg-green-200",
    textColor: "text-gray-800",
  },
  {
    icon: Target,
    title: "Impact",
    description:
      "We measure our success by the positive change we create in communities and livelihoods.",
    color: "bg-orange-500",
    textColor: "text-white",
  },
];

export const ValuesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            What Drives Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
            Our Core Values
          </h2>
          <p className="text-muted-foreground text-lg">
            These principles guide every decision we make and every action we
            take as we work to transform agriculture in Ghana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div key={value.title} className="relative group">
              <div className="bg-card rounded-2xl p-6 h-full border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div
                  className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <value.icon className={`h-7 w-7 ${value.textColor}`} />
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
  );
};
