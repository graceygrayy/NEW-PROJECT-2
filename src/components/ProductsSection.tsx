import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
            Premium Seed Varieties
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our diverse range of high-quality seeds, carefully selected and 
            processed to ensure optimal performance across Ghana's varied climatic zones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-primary">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-primary/90">
                  {product.category}
                </Badge>
              </div>

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
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
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