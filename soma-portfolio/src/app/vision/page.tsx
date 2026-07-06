import Image from "next/image";
import { CONTENT } from "@/data/content";

export const metadata = { title: "ビジョン | Yoshida Soma" };

export default function VisionPage() {
  const { vision } = CONTENT;
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>

      {/* Hero strip with image */}
      <div style={{ position: "relative", height: 280, overflow: "hidden" }}>
        <Image src="/images/vision-bg.jpg" alt="Vision" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(253,250,246,0.3) 0%, var(--bg) 100%)" }} />
      </div>

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1.5rem 6rem" }}>

        <p className="fade-up" style={{ fontSize: "0.72rem", letterSpacing: "0.18em", color: "var(--brown-mid)", marginBottom: "0.75rem", fontWeight: 600 }}>
          VISION &amp; MISSION
        </p>
        <h1 className="fade-up fade-up-delay-1 section-title" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 500,
          color: "var(--text-primary)", marginBottom: "3rem", lineHeight: 1.2,
        }}>
          ビジョン
        </h1>

        {/* Mission */}
        <div className="fade-up fade-up-delay-1" style={{
          padding: "2.25rem 2.5rem", background: "var(--bg-card)",
          border: "1px solid var(--border)", borderLeft: "4px solid var(--brown)",
          borderRadius: 14, marginBottom: "1.5rem", boxShadow: "var(--shadow)",
        }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--brown-mid)", marginBottom: "0.75rem", fontWeight: 600 }}>
            {vision.missionTitle}
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.4, marginBottom: "1.25rem" }}>
            {vision.mission}
          </p>
          <p style={{ fontSize: "0.93rem", color: "var(--text-secondary)", lineHeight: 1.95 }}>
            {vision.missionDetail}
          </p>
        </div>

        {/* Vision */}
        <div className="fade-up fade-up-delay-2" style={{
          padding: "1.75rem 2.5rem", background: "var(--bg-sub)",
          border: "1px solid var(--border)", borderRadius: 14, marginBottom: "2.5rem",
        }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "0.75rem", fontWeight: 600 }}>
            {vision.visionTitle}
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontStyle: "italic", color: "var(--brown)", lineHeight: 1.65 }}>
            {vision.vision}
          </p>
        </div>

        {/* Values */}
        <div className="fade-up fade-up-delay-2" style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 500, color: "var(--text-primary)", marginBottom: "1.25rem" }}>
            {vision.valuesTitle}
          </h2>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {vision.values.map((v, i) => (
              <div key={i} className="card" style={{ padding: "1.75rem" }}>
                <span style={{ fontSize: "1.6rem", display: "block", marginBottom: "0.75rem" }}>{v.icon}</span>
                <p style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.5rem", fontSize: "0.95rem" }}>{v.title}</p>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.85 }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="fade-up fade-up-delay-3" style={{
          padding: "2rem 2.5rem", background: "var(--bg-card)",
          border: "1px solid var(--border)", borderRadius: 14, boxShadow: "var(--shadow)",
        }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "0.75rem", fontWeight: 600 }}>
            {vision.philosophyTitle}
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", fontStyle: "italic", color: "var(--text-secondary)", lineHeight: 2 }}>
            &ldquo;{vision.philosophy}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
