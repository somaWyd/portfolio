"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const elements = container.querySelectorAll(".hero-animate");
    elements.forEach((el, i) => {
      el.style.transitionDelay = `${i * 100}ms`;
      setTimeout(() => el.classList.add("visible"), 50);
    });
  }, []);

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      {/* Background gradient decoration */}
      <div
        className="absolute top-0 right-0 w-2/3 h-2/3 rounded-bl-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(232,64,64,0.06) 0%, rgba(255,112,67,0.04) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/3 rounded-tr-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(255,112,67,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="hero-animate fade-in">
          <Image
            src="/logo.png"
            alt="MaP - Make a Pulse"
            width={320}
            height={185}
            className="object-contain w-48 sm:w-64 md:w-80"
            priority
          />
        </div>

        {/* Catch copy */}
        <div className="hero-animate fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            子どもたちの
            <span
              className="gradient-text"
              style={{
                background: "linear-gradient(135deg, #E84040, #FF7043)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              "頼る力"
            </span>
            で、
            <br />
            社会を変える。
          </h1>
        </div>

        {/* Sub copy */}
        <div className="hero-animate fade-in">
          <p className="text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed">
            Make a Pulse — 大学生が企業と共創し、
            <br className="hidden sm:block" />
            小学生に届けるワークショップ
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="hero-animate fade-in flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollToSection("#about")}
            className="px-8 py-3.5 rounded-full text-white font-semibold text-sm shadow-md hover:scale-[1.03] transition-transform duration-200"
            style={{
              background: "linear-gradient(135deg, #E84040, #FF7043)",
            }}
          >
            活動を知る
          </button>
          <button
            onClick={() => scrollToSection("#cocreation")}
            className="px-8 py-3.5 rounded-full font-semibold text-sm border-2 border-[#E84040] text-[#E84040] hover:bg-[#FEF0EE] transition-colors duration-200"
          >
            共創しませんか
          </button>
        </div>

        {/* Badge */}
        <div className="hero-animate fade-in">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#E84040] border border-[#F5C4B3]"
            style={{ backgroundColor: "#FEF0EE" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#E84040] animate-pulse" />
            16社以上が参画
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}
