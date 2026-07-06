import Image from "next/image";
import { CONTENT } from "@/data/content";

export const metadata = { title: "キャリア | Yoshida Soma" };

const CAT_COLOR: Record<string, string> = {
  "学歴":      "#6B8FA8",
  "インターン": "#C8924A",
  "学生団体":  "#8BA86B",
  "コミュニティ":"#A878C8",
  "個人事業":  "#C87868",
  "仕事":      "#C8924A",
  "学生活動":  "#6BA88B",
};

export default function CareerPage() {
  const { career } = CONTENT;
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>

      {/* Header image */}
      <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
        <Image src="/images/career-bg.jpg" alt="Career" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(253,250,246,0.25) 0%, var(--bg) 100%)" }} />
      </div>

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1.5rem 6rem" }}>
        <p className="fade-up" style={{ fontSize: "0.72rem", letterSpacing: "0.18em", color: "var(--brown-mid)", marginBottom: "0.75rem", fontWeight: 600 }}>
          CAREER TIMELINE
        </p>
        <h1 className="fade-up fade-up-delay-1 section-title" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 500,
          color: "var(--text-primary)", marginBottom: "0.75rem", lineHeight: 1.2,
        }}>
          {career.pageTitle}
        </h1>
        <p className="fade-up fade-up-delay-1" style={{ color: "var(--text-muted)", fontSize: "0.93rem", marginBottom: "3.5rem" }}>
          {career.pageSubtitle}
        </p>

        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 1,
            background: "linear-gradient(to bottom, transparent, var(--border-dark) 10%, var(--border-dark) 90%, transparent)",
          }} />

          {career.timeline.map((item, i) => (
            <div key={i} className="fade-up" style={{ position: "relative", marginBottom: "2rem", animationDelay: `${i * 0.05}s` }}>
              {/* Dot */}
              <div style={{
                position: "absolute", left: "-2rem", top: "1.5rem",
                width: 10, height: 10, borderRadius: "50%",
                background: CAT_COLOR[item.category] || "var(--brown-mid)",
                border: "2px solid var(--bg)",
                transform: "translateX(-4px)",
                boxShadow: `0 0 0 3px ${CAT_COLOR[item.category] || "var(--brown-mid)"}30`,
              }} />

              <div className="card" style={{ padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <span style={{
                    fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.06em",
                    color: CAT_COLOR[item.category] || "var(--brown-mid)",
                    background: `${CAT_COLOR[item.category] || "var(--brown-mid)"}15`,
                    border: `1px solid ${CAT_COLOR[item.category] || "var(--brown-mid)"}30`,
                    padding: "2px 10px", borderRadius: 999,
                  }}>{item.category}</span>
                  <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.04em" }}>{item.period}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 500, color: "var(--text-primary)", marginBottom: "0.2rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "var(--brown-mid)", marginBottom: "0.75rem", fontWeight: 500 }}>{item.organization}</p>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "1rem" }}>{item.description}</p>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  {item.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
