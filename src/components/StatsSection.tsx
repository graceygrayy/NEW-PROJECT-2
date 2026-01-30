import React from "react";
import { AnimatedCounter } from "./AnimatedCounter";

export const StatsSection: React.FC = () => {
  return (
    <section
      style={{
        background: "linear-gradient(rgba(0,60,0,0.85), rgba(0,60,0,0.85)), url('/public/leaf-bg.jpg') center/cover",
        color: "#fff",
        padding: "3rem 0",
        textAlign: "center",
        borderRadius: "1rem",
        margin: "2rem 0",
        position: "relative",
      }}
    >
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "4rem",
        maxWidth: "900px",
        margin: "0 auto",
        borderTop: "1px solid #fff3",
        borderBottom: "1px solid #fff3",
        padding: "2rem 0"
      }}>
        <div>
          <div style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            <AnimatedCounter target={15} suffix="+" />
          </div>
          <div style={{ fontSize: "1.1rem", opacity: 0.85 }}>Years Experience</div>
        </div>
        <div style={{ borderLeft: "1px solid #fff3", height: "60px" }} />
        <div>
          <div style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            <AnimatedCounter target={5000} suffix="+" />
          </div>
          <div style={{ fontSize: "1.1rem", opacity: 0.85 }}>Farmers Empowered</div>
        </div>
        <div style={{ borderLeft: "1px solid #fff3", height: "60px" }} />
        <div>
          <div style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            <AnimatedCounter target={50} suffix="+" />
          </div>
          <div style={{ fontSize: "1.1rem", opacity: 0.85 }}>Seed Varieties</div>
        </div>
      </div>
    </section>
  );
};
