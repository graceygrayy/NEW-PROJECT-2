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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
            CORE VALUES
          </h2>
        </div>
        <div className="core-values-vertical">
          {values.map((value, idx) => (
            <div
              key={value.title}
              className={`core-value-pill ${value.color}`}
              style={{ position: "relative", zIndex: 1 }}
            >
              <span
                className={`core-value-icon ${value.color}`}
                style={{
                  color: value.color === "bg-green-200" ? "#222" : "#fff",
                  background: "inherit",
                }}
              >
                <value.icon className="w-7 h-7" />
              </span>
              <span className="core-value-title">{value.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
