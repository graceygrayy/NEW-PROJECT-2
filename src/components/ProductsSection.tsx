import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";


// Map business model titles to their images
const businessModelImageMap: Record<string, string> = {
  Integration: "/web integration.jpg",
  Innovation: "/innovation.jpeg",
  Partnerships: "/partnership.jpg",
  Sustainability: "/sustainability.jpeg",
};

const products = [
  {
    name: "Maize Seeds",
    variety: "Hybrid & OPV",
    features: ["High yielding", "Drought tolerant", "Disease resistant"],
    category: "Cereals",
  },
  {
    name: "Rice Seeds",
    variety: "Jasmine & Aromatic",
    features: ["Premium quality", "Short maturity", "High germination"],
    category: "Cereals",
  },
  {
    name: "Soybean Seeds",
    variety: "Improved Varieties",
    features: ["High protein", "Early maturing", "Nitrogen fixing"],
    category: "Legumes",
  },
  {
    name: "Cowpea Seeds",
    variety: "Local & Improved",
    features: ["Heat tolerant", "Pest resistant", "Dual purpose"],
    category: "Legumes",
  },
  {
    name: "Groundnut Seeds",
    variety: "Virginia & Spanish",
    features: ["High oil content", "Good shell-out", "Storage quality"],
    category: "Oilseeds",
  },
  {
    name: "Vegetable Seeds",
    variety: "Assorted",
    features: ["Tomato", "Pepper", "Okra", "Garden eggs"],
    category: "Vegetables",
  },
];

export const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="relative text-center max-w-3xl mx-auto mb-16">
          {/* Background image with dark overlay for readability */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/your-product-bg.jpg" // Replace with your actual image path
              alt="Premium Seed Varieties Background"
              className="w-full h-full object-cover object-center rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/60 rounded-2xl" />
          </div>
          {/* Removed 'Our Products' title */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-6 drop-shadow-lg">
            Premium Seed Varieties
          </h2>
          <p className="text-white/90 text-lg drop-shadow max-w-2xl mx-auto">
            Discover our diverse range of high-quality seeds, carefully selected
            and processed to ensure optimal performance across Ghana's varied
            climatic zones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Business Model Cards */}
          {[
            { title: "Integration", description: "We seamlessly integrate all aspects of the agricultural value chain, from seed production to market access, ensuring efficiency, quality control, and traceability." },
            { title: "Innovation", description: "We continuously invest in research and support the development of pioneer new technologies, practices, and products that address emerging challenges and opportunities in agriculture." },
            { title: "Partnerships", description: "We collaborate with farmers, research institutions, governments, and industry stakeholders to co-create solutions, share knowledge, and drive collective impact." },
            { title: "Sustainability", description: "We prioritize sustainability in our operations, promoting environmental stewardship, social responsibility, and economic viability across the value chain." },
          ].map((model) => (
            <div
              key={model.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Business Model Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={businessModelImageMap[model.title]}
                  alt={model.title + " image"}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Business Model Info */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                  {model.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {model.description}
                </p>
              </div>
            </div>
          ))}

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.variety}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            View Full Catalog
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
