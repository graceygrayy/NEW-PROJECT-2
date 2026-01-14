import { Heart, TreePine, GraduationCap, Droplets } from "lucide-react";

const initiatives = [
  {
    icon: Heart,
    title: "Community Development",
    description: "Supporting local communities through infrastructure projects, healthcare initiatives, and social welfare programs that improve quality of life.",
    stats: "20+ Communities Served",
  },
  {
    icon: TreePine,
    title: "Environmental Conservation",
    description: "Tree planting campaigns, sustainable farming advocacy, and ecosystem preservation efforts to combat climate change.",
    stats: "10,000+ Trees Planted",
  },
  {
    icon: GraduationCap,
    title: "Empowerment Programs",
    description: "Training and capacity building for farmers, especially women and youth, to enhance skills and create sustainable livelihoods.",
    stats: "2,000+ Trained",
  },
  {
    icon: Droplets,
    title: "Disaster Relief",
    description: "Rapid response support during floods, droughts, and other agricultural emergencies affecting farming communities.",
    stats: "500+ Families Supported",
  },
];

export const CSRSection = () => {
  return (
    <section id="csr" className="py-20 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
            Corporate Social Responsibility
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
            Giving Back to Our Communities
          </h2>
          <p className="text-background/80 text-lg">
            At Seedbury ACR, we believe in business that benefits everyone. Our CSR 
            initiatives focus on creating lasting positive impact in the communities 
            where we operate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={initiative.title}
              className="group flex gap-6 p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                  <initiative.icon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2">
                  {initiative.title}
                </h3>
                <p className="text-background/70 text-sm leading-relaxed mb-3">
                  {initiative.description}
                </p>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold">
                  {initiative.stats}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};