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

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Cultivating Tomorrow's{" "}
          <span className="text-secondary">Agricultural Excellence</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          At Seedbury ACR, we're revolutionizing agriculture in Ghana through
          innovation, quality, and sustainability. We empower farmers and
          nurture communities for a thriving future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
          <div className="text-center">
            <span className="block font-serif text-4xl md:text-5xl font-bold text-white">
              15+
            </span>
            <span className="text-sm text-white/80">Years Experience</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/30" />
          <div className="text-center">
            <span className="block font-serif text-4xl md:text-5xl font-bold text-white">
              5000+
            </span>
            <span className="text-sm text-white/80">Farmers Empowered</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/30" />
          <div className="text-center">
            <span className="block font-serif text-4xl md:text-5xl font-bold text-white">
              50+
            </span>
            <span className="text-sm text-white/80">Seed Varieties</span>
          </div>
        </div>
      </div>
    </section>
  );
};
