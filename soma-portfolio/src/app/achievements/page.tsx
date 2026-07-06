import Image from "next/image";
import { CONTENT } from "@/data/content";

export const metadata = { title: "実績 | Yoshida Soma" };

const CAT_COLOR: Record<string, string> = {
  "イベント": "#C8924A",
  "インターン": "#8B9A6B",
  "研究":     "#6B8BA8",
  "カテゴリ": "#9A8B6B",
};

export default function AchievementsPage() {
  const { achievements } = CONTENT;
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
        <Image src="/images/achievements-bg.jpg" alt="Achievements" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(253,250,246,0.4) 0%, var(--bg) 100%)" }} />
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1.5rem 6rem" }}>
        <p className="fade-up" style={{ fontSize: "0.72rem", letterSpacing: "0.18em", color: "var(--brown-mid)", marginBottom: "0.75rem", fontWeight: 600 }}>
          ACHIEVEMENTS
        </p>
        <h1 className="fade-up fade-up-delay-1 section-title" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 500,
          color: "var(--text-primary)", marginBottom: "0.75rem",
        }}>
          {achievements.pageTitle}
        </h1>
        <p className="fade-up fade-up-delay-1" style={{ color: "var(--text-muted)", fontSize: "0.93rem", marginBottom: "3.5rem" }}>
          {achievements.pageSubtitle}
        </p>

        {/* Stat highlights */}
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", marginBottom: "4rem" }}>
          {achievements.highlights.map((h, i) => (
            <div key={i} className="card fade-up" style={{ padding: "2rem 1.5rem", textAlign: "center", animationDelay: `${i * 0.1}s` }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{h.icon}</div>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.2rem", marginBottom: "0.35rem" }}>
                <span className="stat-number">{h.number}</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", color: "var(--brown-mid)", fontWeight: 500 }}>{h.unit}</span>
              </div>
              <p style={{ fontSize: "0.83rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.35rem" }}>{h.label}</p>
              <p style={{ fontSize: "0.74rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{h.description}</p>
            </div>
          ))}
        </div>

        {/* List */}
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 500, color: "var(--text-primary)", marginBottom: "1.25rem" }}>
          すべての実績
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {achievements.items.map((item, i) => {
            const cc = CAT_COLOR[item.category] || "var(--brown-mid)";
            return (
              <div key={i} className="card fade-up" style={{ padding: "1.5rem 1.75rem", display: "flex", gap: "1.5rem", alignItems: "flex-start", animationDelay: `${i * 0.05}s` }}>
                <div style={{ flexShrink: 0, minWidth: 50, textAlign: "right" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.92rem", color: "var(--text-muted)" }}>{item.year}</span>
                </div>
                <div style={{ width: 1, alignSelf: "stretch", background: "var(--border)", flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 500, color: "var(--text-primary)" }}>
                      {item.title}
                    </h3>
                    <span style={{
                      fontSize: "0.66rem", fontWeight: 600, letterSpacing: "0.06em",
                      padding: "2px 8px", borderRadius: 999,
                      background: `${cc}15`, color: cc, border: `1px solid ${cc}30`,
                    }}>
                      {item.category}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.86rem", color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "0.75rem" }}>{item.description}</p>
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                    {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
