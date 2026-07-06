import Link from "next/link";
import Image from "next/image";
import { CONTENT } from "@/data/content";

const QUICK_LINKS = [
  { href: "/vision",       icon: "✦", label: "ビジョン",    desc: "使命と哲学" },
  { href: "/career",       icon: "◈", label: "キャリア",    desc: "経歴とタイムライン" },
  { href: "/skills",       icon: "◉", label: "スキル",      desc: "技術と強み" },
  { href: "/products",     icon: "◎", label: "プロダクト",  desc: "制作物" },
  { href: "/achievements", icon: "◆", label: "実績",        desc: "成果と数字" },
  { href: "/contact",      icon: "◇", label: "コンタクト",  desc: "連絡はこちらへ" },
];

export default function HomePage() {
  const { meta, home } = CONTENT;
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>

      {/* Hero */}
      <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/images/hero-bg.jpg" alt="" fill style={{ objectFit: "cover" }} priority />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(253,250,246,0.55) 0%, rgba(253,250,246,0.85) 60%, var(--bg) 100%)" }} />
        </div>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "6rem 1.5rem 4rem", textAlign: "center" }}>
          <p className="fade-up" style={{ fontSize: "0.72rem", letterSpacing: "0.2em", color: "var(--brown-mid)", marginBottom: "1.5rem", fontWeight: 600 }}>
            PORTFOLIO — YOSHIDA SOMA
          </p>

          <h1 className="fade-up fade-up-delay-1" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3rem, 9vw, 6.5rem)",
            fontWeight: 500, lineHeight: 1.05,
            color: "var(--text-primary)", marginBottom: "0.4rem",
          }}>
            {meta.nameEn}
          </h1>

          <p className="fade-up fade-up-delay-1" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.4rem, 4vw, 2rem)",
            fontWeight: 300, fontStyle: "italic",
            color: "var(--text-secondary)", marginBottom: "2.5rem",
          }}>
            {meta.name}
          </p>

          {/* Mission card */}
          <div className="fade-up fade-up-delay-2" style={{
            maxWidth: 540, margin: "0 auto 2rem",
            padding: "1.75rem 2.25rem",
            background: "rgba(255,255,255,0.85)",
            border: "1px solid var(--border)",
            borderRadius: 16, backdropFilter: "blur(12px)",
            boxShadow: "var(--shadow-lg)",
          }}>
            <p style={{ fontSize: "clamp(1.05rem, 3vw, 1.35rem)", fontFamily: "'Cormorant Garamond', serif", color: "var(--brown)", marginBottom: "0.6rem", fontWeight: 600 }}>
              {home.heroTagline}
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.85 }}>
              {home.heroDescription}
            </p>
          </div>

          {/* Role tags */}
          <div className="fade-up fade-up-delay-2" style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2.5rem" }}>
            {["東京電機大学 情報メディア学科", "AIコミュニティ代表", "Web Developer", "Builder"].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {/* CTAs */}
          <div className="fade-up fade-up-delay-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/vision" className="btn-primary">ビジョンを読む →</Link>
            <Link href="/contact" className="btn-outline">連絡する</Link>
          </div>

          <p style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.14em" }}>
            SCROLL ↓
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section style={{ padding: "5rem 1.5rem 6rem", maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: "0.72rem", letterSpacing: "0.16em", color: "var(--text-muted)", marginBottom: "2.5rem", fontWeight: 500 }}>
          PAGES
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
          {QUICK_LINKS.map(link => (
            <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
              <div className="card" style={{ padding: "1.4rem 1.75rem", display: "flex", alignItems: "center", gap: "1.1rem" }}>
                <span style={{ fontSize: "0.95rem", color: "var(--brown-mid)", flexShrink: 0 }}>{link.icon}</span>
                <div>
                  <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.15rem" }}>{link.label}</p>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{link.desc}</p>
                </div>
                <span style={{ marginLeft: "auto", color: "var(--border-dark)", fontSize: "0.9rem" }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer quote */}
      <div style={{ textAlign: "center", padding: "2rem 1.5rem 4rem", borderTop: "1px solid var(--border)" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1rem, 2.5vw, 1.3rem)", fontStyle: "italic", color: "var(--text-muted)", maxWidth: 560, margin: "0 auto" }}>
          &ldquo;{home.backgroundQuote}&rdquo;
        </p>
      </div>
    </div>
  );
}
