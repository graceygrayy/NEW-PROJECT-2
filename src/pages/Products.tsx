import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import productsBg from "@/assets/pic2.jpg";

const products = [
  {
    name: "Maize Seeds",
    variety: "Hybrid & OPV",
    features: ["High yielding", "Drought tolerant", "Disease resistant"],
    category: "Cereals",
    image: "https://source.unsplash.com/featured/?maize,400x300",
  },
  {
    name: "Rice Seeds",
    variety: "Jasmine & Aromatic",
    features: ["Premium quality", "Short maturity", "High germination"],
    category: "Cereals",
    image: "https://source.unsplash.com/featured/?rice,400x300",
  },
  {
    name: "Sorghum Seeds",
    variety: "White & Red",
    features: ["Heat tolerant", "Low water requirement", "Versatile use"],
    category: "Cereals",
    image: "https://source.unsplash.com/featured/?sorghum,400x300",
  },
  {
    name: "Soybean Seeds",
    variety: "Improved Varieties",
    features: ["High protein", "Early maturing", "Nitrogen fixing"],
    category: "Legumes",
    image: "https://source.unsplash.com/featured/?soybean,400x300",
  },
  {
    name: "Cowpea Seeds",
    variety: "Local & Improved",
    features: ["Heat tolerant", "Pest resistant", "Dual purpose"],
    category: "Legumes",
    image: "https://source.unsplash.com/featured/?cowpea,400x300",
  },
  {
    name: "Bambara Groundnut",
    variety: "Indigenous Variety",
    features: ["Drought tolerant", "Nutritious", "Low input"],
    category: "Legumes",
    image: "https://source.unsplash.com/featured/?bambara+groundnut,400x300",
  },
  {
    name: "Groundnut Seeds",
    variety: "Virginia & Spanish",
    features: ["High oil content", "Good shell-out", "Storage quality"],
    category: "Oilseeds",
    image: "https://source.unsplash.com/featured/?groundnut,400x300",
  },
  {
    name: "Sesame Seeds",
    variety: "White & Black",
    features: ["Export quality", "High yield", "Premium pricing"],
    category: "Oilseeds",
    image: "https://source.unsplash.com/featured/?sesame,400x300",
  },
  {
    name: "Tomato Seeds",
    variety: "Hybrid Varieties",
    features: ["High yielding", "Disease resistant", "Long shelf life"],
    category: "Vegetables",
    image: "https://source.unsplash.com/featured/?tomato,400x300",
  },
  {
    name: "Pepper Seeds",
    variety: "Hot & Sweet",
    features: ["Vibrant colors", "High pungency", "Market demand"],
    category: "Vegetables",
    image: "https://source.unsplash.com/featured/?pepper,400x300",
  },
  {
    name: "Okra Seeds",
    variety: "Smooth & Ridged",
    features: ["Fast growing", "High yield", "Good texture"],
    category: "Vegetables",
    image: "https://source.unsplash.com/featured/?okra,400x300",
  },
  {
    name: "Garden Eggs",
    variety: "Local Selection",
    features: ["Popular variety", "Good taste", "Pest resistant"],
    category: "Vegetables",
    image: "https://source.unsplash.com/featured/?eggplant,400x300",
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
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Products
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-background mt-2 mb-6">
            Premium Seed Varieties
          </h1>
          <p className="text-background/90 text-lg max-w-4xl mx-auto">
            Seedbury ACR plans to focus on a diverse portfolio of staple and
            high-value crops, selected for their nutritional value, market
            demand, and suitability to local growing conditions. Our portfolio
            includes a wide range of crops, namely:
          </p>
          <ul className="text-background/90 text-lg max-w-4xl mx-auto mt-6 space-y-2">
            <li>
              <strong>Maize:</strong> A major staple crop in Ghana, maize will
              be central to our seed and crop production activities. It serves
              as a key food and feed source.
            </li>
            <li>
              • <strong>Tomato:</strong> High in demand for both domestic
              consumption and processing, tomato cultivation presents
              significant value addition potential.
            </li>
            <li>
              • <strong>Pepper:</strong> Both sweet and hot pepper varieties
              offer opportunities for nutritional enhancement and income
              generation for smallholder farmers
            </li>
            <li>
              • <strong>Soybean:</strong> With its protein-rich profile and
              soil-enriching properties, soybean supports food security and
              sustainable farming systems
            </li>
            <li>
              • <strong>Cowpea:</strong> Drought-tolerant and protein-rich,
              cowpea plays a crucial role in improving diets and livelihoods in
              semi-arid regions.
            </li>
            <li>
              • <strong>Rice:</strong> As an increasingly important staple in
              urban diets, rice offers commercial opportunities and contributes
              to national food self-sufficiency
            </li>
            <li>
              • <strong>Sorghum:</strong> Known for its resilience in harsh
              climates, sorghum is ideal for arid zones and supports food and
              beverage industries
            </li>
          </ul>
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
                {/* Product Image */}
                <div className="h-40 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
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
