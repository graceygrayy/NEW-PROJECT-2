import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import heroCrops from "@/assets/hero-crops.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCrops})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <Leaf className="h-5 w-5 text-secondary" />
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">
              Private Seed & Food Processing Company
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-background mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Cultivating Tomorrow's{" "}
            <span className="text-secondary">Agricultural Excellence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-background/90 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            At Seedbury ACR, we're revolutionizing agriculture in Ghana through innovation, 
            quality, and sustainability. We empower farmers and nurture communities for a 
            thriving future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/about">
              <Button size="lg" className="group">
                Explore Our Story
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="bg-background/10 border-background/30 text-background hover:bg-background/20">
                View Products
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 md:gap-8 mt-12 pt-8 border-t border-background/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div>
              <span className="block font-serif text-3xl md:text-4xl font-bold text-background">15+</span>
              <span className="text-sm text-background/70">Years Experience</span>
            </div>
            <div className="w-px h-12 bg-background/30" />
            <div>
              <span className="block font-serif text-3xl md:text-4xl font-bold text-background">5000+</span>
              <span className="text-sm text-background/70">Farmers Empowered</span>
            </div>
            <div className="w-px h-12 bg-background/30" />
            <div>
              <span className="block font-serif text-3xl md:text-4xl font-bold text-background">50+</span>
              <span className="text-sm text-background/70">Seed Varieties</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-2.5 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
