import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

import heroCrops from "@/assets/hero-crops.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-deep-green overflow-hidden">
      {/* Hero Background Image with Deep Green Overlay */}
      <img
        src={heroCrops}
        alt="Hero Crops"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ filter: "brightness(0.7)" }}
      />
      <div className="absolute inset-0 bg-[#0a3d1a]/80 z-10" />

      {/* Hero Content (Left-aligned) */}
      <div className="relative z-20 container mx-auto px-4 py-24 flex flex-col items-start text-left max-w-3xl">
        <div className="flex items-center gap-2 mb-6 animate-fade-in">
          <Leaf className="h-5 w-5 text-secondary" />
          <span className="text-secondary text-sm font-medium uppercase tracking-wider">
            Private Seed & Food Processing Company
          </span>
        </div>
        <h1
          className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg"
          style={{ animationDelay: "0.1s" }}
        >
          Cultivating Tomorrow's{" "}
          <span className="text-secondary">Agricultural Excellence</span>
        </h1>
        <p
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          At Seedbury ACR, we're revolutionizing agriculture in Ghana through
          innovation, quality, and sustainability. We empower farmers and
          nurture communities for a thriving future.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in mb-10"
          style={{ animationDelay: "0.3s" }}
        >
          <Link to="/about">
            <Button
              size="lg"
              className="bg-white text-[#0a3d1a] font-bold border-2 border-white hover:bg-secondary hover:text-white transition"
            >
              Explore Our Story
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/products">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#0a3d1a] transition"
            >
              View Products
            </Button>
          </Link>
        </div>
        {/* Stats Row */}
        <div
          className="flex items-center gap-6 md:gap-8 mt-12 pt-8 border-t border-white/20 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div>
            <span className="block font-serif text-3xl md:text-4xl font-bold text-white">
              15+
            </span>
            <span className="text-sm text-white/70">Years Experience</span>
          </div>
          <div className="w-px h-12 bg-white/30" />
          <div>
            <span className="block font-serif text-3xl md:text-4xl font-bold text-white">
              5000+
            </span>
            <span className="text-sm text-white/70">Farmers Empowered</span>
          </div>
          <div className="w-px h-12 bg-white/30" />
          <div>
            <span className="block font-serif text-3xl md:text-4xl font-bold text-white">
              50+
            </span>
            <span className="text-sm text-white/70">Seed Varieties</span>
          </div>
        </div>
      </div>
    </section>
  );
};
