"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CONTENT } from "@/data/content";

function SkillBar({ level }: { level: number }) {
  const fillRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && fillRef.current) fillRef.current.style.width = `${level}%`; },
      { threshold: 0.3 }
    );
    if (fillRef.current) observer.observe(fillRef.current.parentElement!);
    return () => observer.disconnect();
  }, [level]);
  return <div className="skill-bar-bg"><div ref={fillRef} className="skill-bar-fill" style={{ width: 0 }} /></div>;
}

export default function SkillsPage() {
  const { skills } = CONTENT;
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <Image src="/images/skills-bg.jpg" alt="Skills" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(253,250,246,0.3) 0%, var(--bg) 100%)" }} />
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1.5rem 6rem" }}>
        <p className="fade-up" style={{ fontSize: "0.72rem", letterSpacing: "0.18em", color: "var(--brown-mid)", marginBottom: "0.75rem", fontWeight: 600 }}>
          SKILLS &amp; EXPERTISE
        </p>
        <h1 className="fade-up fade-up-delay-1 section-title" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 500,
          color: "var(--text-primary)", marginBottom: "0.75rem",
        }}>
          {skills.pageTitle}
        </h1>
        <p className="fade-up fade-up-delay-1" style={{ color: "var(--text-muted)", fontSize: "0.93rem", marginBottom: "3.5rem" }}>
          {skills.pageSubtitle}
        </p>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginBottom: "4rem" }}>
          {skills.categories.map((cat, ci) => (
            <div key={ci} className="card fade-up" style={{ padding: "2rem", animationDelay: `${ci * 0.1}s` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "1.25rem" }}>{cat.icon}</span>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 500, color: "var(--text-primary)" }}>
                  {cat.title}
                </h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {cat.skills.map((skill, si) => (
                  <div key={si}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                      <span style={{ fontSize: "0.83rem", color: "var(--text-secondary)" }}>{skill.name}</span>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{skill.level}%</span>
                    </div>
                    <SkillBar level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="fade-up">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 500, color: "var(--text-primary)", marginBottom: "1.25rem" }}>
            {skills.techTagsTitle}
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {skills.techTags.map(tag => (
              <span key={tag} style={{
                padding: "0.4rem 1rem",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
                cursor: "default",
                transition: "border-color 0.2s, color 0.2s, background 0.2s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--brown-mid)";
                el.style.color = "var(--brown)";
                el.style.background = "var(--brown-glow)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text-secondary)";
                el.style.background = "var(--bg-card)";
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
