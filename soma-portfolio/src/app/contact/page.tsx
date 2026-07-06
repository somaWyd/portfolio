"use client";

import { useState } from "react";
import Image from "next/image";
import { CONTENT } from "@/data/content";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  in: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  gh: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  x:  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
};

export default function ContactPage() {
  const { contact } = CONTENT;
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <Image src="/images/contact-bg.jpg" alt="Contact" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(253,250,246,0.4) 0%, var(--bg) 100%)" }} />
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1.5rem 6rem" }}>
        <p className="fade-up" style={{ fontSize: "0.72rem", letterSpacing: "0.18em", color: "var(--brown-mid)", marginBottom: "0.75rem", fontWeight: 600 }}>
          GET IN TOUCH
        </p>
        <h1 className="fade-up fade-up-delay-1 section-title" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 500,
          color: "var(--text-primary)", marginBottom: "0.75rem",
        }}>
          {contact.pageTitle}
        </h1>
        <p className="fade-up fade-up-delay-1" style={{ color: "var(--text-muted)", fontSize: "0.93rem", marginBottom: "0.75rem" }}>{contact.pageSubtitle}</p>
        <p className="fade-up fade-up-delay-1" style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.85, marginBottom: "3rem", maxWidth: 500 }}>{contact.description}</p>

        <div style={{ display: "grid", gap: "2.5rem", gridTemplateColumns: "1fr 1.4fr" }}>
          {/* Info */}
          <div className="fade-up">
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2.5rem" }}>
              {[
                { label: "Email",    value: contact.email,    href: `mailto:${contact.email}` },
                { label: "Phone",    value: contact.phone,    href: `tel:${contact.phone}` },
                { label: "Location", value: contact.location, href: undefined },
              ].map(info => (
                <div key={info.label} className="card" style={{ padding: "1.1rem 1.4rem" }}>
                  <p style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "var(--text-muted)", marginBottom: "0.25rem", fontWeight: 600 }}>{info.label}</p>
                  {info.href
                    ? <a href={info.href} style={{ fontSize: "0.88rem", color: "var(--brown)", textDecoration: "none", fontWeight: 500 }}>{info.value}</a>
                    : <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>{info.value}</p>
                  }
                </div>
              ))}
            </div>

            <p style={{ fontSize: "0.68rem", letterSpacing: "0.12em", color: "var(--text-muted)", marginBottom: "0.85rem", fontWeight: 600 }}>SOCIALS</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {contact.socials.map(s => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "0.75rem",
                    padding: "0.875rem 1.25rem",
                    background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10,
                    textDecoration: "none", color: "var(--text-secondary)",
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border-dark)"; el.style.color = "var(--brown)"; el.style.background = "var(--bg-sub)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.color = "var(--text-secondary)"; el.style.background = "var(--bg-card)"; }}>
                  <span style={{ color: "var(--brown-mid)" }}>{SOCIAL_ICONS[s.icon]}</span>
                  <div>
                    <p style={{ fontSize: "0.85rem", fontWeight: 500, marginBottom: "0.1rem" }}>{s.name}</p>
                    <p style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>{s.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="fade-up fade-up-delay-1">
            {sent ? (
              <div className="card" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem", textAlign: "center", padding: "2.5rem" }}>
                <span style={{ fontSize: "2.5rem" }}>✓</span>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", color: "var(--text-primary)" }}>送信しました</p>
                <p style={{ fontSize: "0.86rem", color: "var(--text-muted)" }}>できるだけ早くご返信します。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                {[
                  { key: "name", label: "NAME", type: "text", ph: contact.formPlaceholderName },
                  { key: "email", label: "EMAIL", type: "email", ph: contact.formPlaceholderEmail },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ fontSize: "0.68rem", letterSpacing: "0.12em", color: "var(--text-muted)", display: "block", marginBottom: "0.4rem", fontWeight: 600 }}>{f.label}</label>
                    <input type={f.type} className="input-field" placeholder={f.ph}
                      value={(form as Record<string, string>)[f.key]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })} required />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: "0.68rem", letterSpacing: "0.12em", color: "var(--text-muted)", display: "block", marginBottom: "0.4rem", fontWeight: 600 }}>MESSAGE</label>
                  <textarea className="input-field" placeholder={contact.formPlaceholderMessage} rows={5}
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  {contact.formSubmitLabel} →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
