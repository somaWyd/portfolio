"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/vision",       label: "ビジョン" },
  { href: "/career",       label: "キャリア" },
  { href: "/skills",       label: "スキル" },
  { href: "/products",     label: "プロダクト" },
  { href: "/achievements", label: "実績" },
  { href: "/contact",      label: "コンタクト" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "color-mix(in srgb, var(--bg) 85%, transparent)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "0.05em" }}>
              Soma<span style={{ color: "var(--brown-mid)" }}>.</span>
            </span>
          </Link>

          {/* Desktop */}
          <div style={{ display: "flex", gap: "0.15rem" }} className="hidden-mobile">
            {NAV_LINKS.map(link => (
              <Link key={link.href} href={link.href}
                className={`nav-link${pathname === link.href ? " active" : ""}`}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(o => !o)} className="show-mobile"
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)", padding: "0.5rem" }}
            aria-label="メニュー">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {open ? (
                <><line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>
              ) : (
                <><line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", padding: "0.75rem 1.5rem" }} className="show-mobile">
            {[{ href: "/", label: "Home" }, ...NAV_LINKS].map(link => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                style={{ display: "block", padding: "0.6rem 0", fontSize: "0.9rem", textDecoration: "none",
                  color: pathname === link.href ? "var(--brown)" : "var(--text-secondary)",
                  borderBottom: "1px solid var(--border)" }}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}
