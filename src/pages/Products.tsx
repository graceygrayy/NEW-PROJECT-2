import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
    name: "Sorghum Seeds",
    variety: "White & Red",
    features: ["Heat tolerant", "Low water requirement", "Versatile use"],
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
    name: "Bambara Groundnut",
    variety: "Indigenous Variety",
    features: ["Drought tolerant", "Nutritious", "Low input"],
    category: "Legumes",
  },
  {
    name: "Groundnut Seeds",
    variety: "Virginia & Spanish",
    features: ["High oil content", "Good shell-out", "Storage quality"],
    category: "Oilseeds",
  },
  {
    name: "Sesame Seeds",
    variety: "White & Black",
    features: ["Export quality", "High yield", "Premium pricing"],
    category: "Oilseeds",
  },
  {
    name: "Tomato Seeds",
    variety: "Hybrid Varieties",
    features: ["High yielding", "Disease resistant", "Long shelf life"],
    category: "Vegetables",
  },
  {
    name: "Pepper Seeds",
    variety: "Hot & Sweet",
    features: ["Vibrant colors", "High pungency", "Market demand"],
    category: "Vegetables",
  },
  {
    name: "Okra Seeds",
    variety: "Smooth & Ridged",
    features: ["Fast growing", "High yield", "Good texture"],
    category: "Vegetables",
  },
  {
    name: "Garden Eggs",
    variety: "Local Selection",
    features: ["Popular variety", "Good taste", "Pest resistant"],
    category: "Vegetables",
  },
];

const categories = ["All", "Cereals", "Legumes", "Oilseeds", "Vegetables"];

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Products
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
            Premium Seed Varieties
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our diverse range of high-quality seeds, carefully selected and 
            processed to ensure optimal performance across Ghana's varied climatic zones.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Product Image Placeholder */}
                <div className="h-40 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-serif text-xl font-bold text-primary">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-primary/90">
                    {product.category}
                  </Badge>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.variety}
                  </p>
                  <ul className="space-y-1.5">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="group">
              View Full Catalog
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
