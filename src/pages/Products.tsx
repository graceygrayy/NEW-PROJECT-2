import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productsBg from "@/assets/pic2.jpg";
import maizeImg from "@/assets/maize seed .jpg";
import riceImg from "@/assets/rice.jpg";
import sorghumImg from "@/assets/sorghum-seeds.jpg";
import soybeanImg from "@/assets/soyabeans.jpg";
import cowpeaImg from "@/assets/cowbea seed.jpg";
import tomatoImg from "@/assets/tomatoes seed.jpg";
import pepperImg from "@/assets/pepper seed.jpg";

const products = [
  {
    name: "Maize Seeds",
    variety: "Hybrid & OPV",
    features: ["High yielding", "Drought tolerant", "Disease resistant"],
    category: "Cereals",
    image: maizeImg,
  },
  {
    name: "Rice Seeds",
    variety: "Jasmine & Aromatic",
    features: ["Premium quality", "Short maturity", "High germination"],
    category: "Cereals",
    image: riceImg,
  },
  {
    name: "Sorghum Seeds",
    variety: "White & Red",
    features: ["Heat tolerant", "Low water requirement", "Versatile use"],
    category: "Cereals",
    image: sorghumImg,
  },
  {
    name: "Soybean Seeds",
    variety: "Improved Varieties",
    features: ["High protein", "Early maturing", "Nitrogen fixing"],
    category: "Legumes",
    image: soybeanImg,
  },
  {
    name: "Cowpea Seeds",
    variety: "Local & Improved",
    features: ["Heat tolerant", "Pest resistant", "Dual purpose"],
    category: "Legumes",
    image: cowpeaImg,
  },
  {
    name: "Tomato Seeds",
    variety: "Hybrid Varieties",
    features: ["High yielding", "Disease resistant", "Long shelf life"],
    category: "Vegetables",
    image: tomatoImg,
  },
  {
    name: "Pepper Seeds",
    variety: "Hot & Sweet",
    features: ["Vibrant colors", "High pungency", "Market demand"],
    category: "Vegetables",
    image: pepperImg,
  },
];

const categories = ["All", "Cereals", "Legumes", "Oilseeds", "Vegetables"];

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${productsBg})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">
            Our Products
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-background mt-2 mb-6">
            Premium Seed Varieties
          </h1>
          <p className="text-background/90 text-lg max-w-4xl mx-auto">
            Seedbury ACR plans to focus on a diverse portfolio of staple and
            high-value crops, selected for their nutritional value, market
            demand, and suitability to local growing conditions.
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
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Product Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground shadow-lg">
                    {product.category}
                  </Badge>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-black text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    {product.variety}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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
