import React, { useState, useEffect } from "react";

import pic6 from "@/assets/pic 6.jpg";
import pic8 from "@/assets/pic8.jpeg";
import heroCrops from "@/assets/hero-crops.jpg";

const images = [pic6, pic8, heroCrops];

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [total]);

  const goTo = (idx: number) => setCurrent((idx + total) % total);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Banner ${idx + 1}`}
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 absolute inset-0 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: "brightness(0.7)" }}
        />
      ))}
      {/* Left Arrow */}
      <button
        aria-label="Previous slide"
        onClick={() => goTo(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-[#0a3d1a] rounded-full p-2 shadow-lg transition"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      {/* Right Arrow */}
      <button
        aria-label="Next slide"
        onClick={() => goTo(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-[#0a3d1a] rounded-full p-2 shadow-lg transition"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full border border-white bg-white transition-all duration-300 ${
              idx === current ? "bg-opacity-100" : "bg-opacity-40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
