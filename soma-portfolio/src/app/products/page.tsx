import Link from "next/link";
import Image from "next/image";
import { CONTENT } from "@/data/content";

export const metadata = { title: "プロダクト | Yoshida Soma" };

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  "公開中": { bg: "rgba(80,160,80,0.12)",  color: "#3A8A3A" },
  "開発中": { bg: "rgba(180,120,40,0.12)", color: "#8A5A18" },
  "計画中": { bg: "rgba(70,110,170,0.12)", color: "#3A6AAA" },
};

export default function ProductsPage() {
  const { products } = CONTENT;
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "7rem 1.5rem 6rem" }}>

        <p className="fade-up" style={{ fontSize: "0.72rem", letterSpacing: "0.18em", color: "var(--brown-mid)", marginBottom: "0.75rem", fontWeight: 600 }}>
          PRODUCTS &amp; PROJECTS
        </p>
        <h1 className="fade-up fade-up-delay-1 section-title" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 500,
          color: "var(--text-primary)", marginBottom: "0.75rem",
        }}>
          {products.pageTitle}
        </h1>
        <p className="fade-up fade-up-delay-1" style={{ color: "var(--text-muted)", fontSize: "0.93rem", marginBottom: "3.5rem" }}>
          {products.pageSubtitle}
        </p>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {products.items.map((item, i) => {
            const statusStyle = STATUS_STYLE[item.status] || STATUS_STYLE["計画中"];
            return (
              <div key={item.id} className="card fade-up" style={{ overflow: "hidden", animationDelay: `${i * 0.1}s` }}>
                {/* Image */}
                <div style={{ position: "relative", height: 190, background: "var(--bg-sub)", borderBottom: "1px solid var(--border)" }}>
                  {item.image ? (
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                  ) : (
                    <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.4rem" }}>
                      <span style={{ fontSize: "1.8rem", opacity: 0.2 }}>◎</span>
                      <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>IMAGE / SCREENSHOT</p>
                      <p style={{ fontSize: "0.62rem", color: "var(--text-muted)" }}>content.ts の image フィールドで設定</p>
                    </div>
                  )}
                  <span style={{
                    position: "absolute", top: 12, right: 12,
                    fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.06em",
                    padding: "3px 10px", borderRadius: 999,
                    background: statusStyle.bg, color: statusStyle.color,
                    border: `1px solid ${statusStyle.color}30`,
                  }}>
                    {item.status}
                  </span>
                </div>

                <div style={{ padding: "1.5rem 1.75rem" }}>
                  <p style={{ fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.1em", marginBottom: "0.4rem", fontWeight: 500 }}>{item.category}</p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontWeight: 500, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.86rem", color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "1.25rem" }}>{item.description}</p>
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                    {item.techStack.map(tech => <span key={tech} className="tag">{tech}</span>)}
                  </div>
                  {item.link ? (
                    <Link href={item.link} className="btn-outline" style={{ fontSize: "0.8rem", padding: "0.5rem 1.25rem" }}>見る →</Link>
                  ) : (
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>content.ts でリンクを設定</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
