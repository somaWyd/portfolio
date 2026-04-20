"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", org: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`【MaP 共創のご相談】${form.org} ${form.name} 様`);
    const body = encodeURIComponent(
      `お名前: ${form.name}\n所属: ${form.org}\nメールアドレス: ${form.email}\n\nメッセージ:\n${form.message}`
    );
    window.location.href = `mailto:contact@make-a-pulse.jp?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
      setSubmitted(false);
      setForm({ name: "", org: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <>
      <section
        id="contact"
        className="py-32 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #E84040, #FF7043)" }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              私たちと共創しませんか？
            </h2>
            <p className="text-white/85 text-lg leading-relaxed mb-10">
              企業・学生団体・学校の方、お気軽にご連絡ください
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-[#E84040] font-semibold text-base shadow-lg hover:scale-[1.03] transition-transform duration-200"
            >
              お問い合わせ
              <span>→</span>
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
        >
          <div className="bg-white rounded-2xl w-full max-w-lg p-8 shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors text-sm"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <p className="text-lg font-semibold text-gray-800">送信しました！</p>
                <p className="text-sm text-gray-500 mt-2">メールアプリが開きます</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6">お問い合わせ</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      お名前 <span className="text-[#E84040]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E84040] focus:ring-1 focus:ring-[#E84040]"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      所属（企業・団体名）
                    </label>
                    <input
                      type="text"
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E84040] focus:ring-1 focus:ring-[#E84040]"
                      placeholder="〇〇株式会社"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      メールアドレス <span className="text-[#E84040]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E84040] focus:ring-1 focus:ring-[#E84040]"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      メッセージ <span className="text-[#E84040]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E84040] focus:ring-1 focus:ring-[#E84040] resize-none"
                      placeholder="お問い合わせ内容をご記入ください..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-white font-semibold text-sm hover:scale-[1.02] transition-transform"
                    style={{ background: "linear-gradient(135deg, #E84040, #FF7043)" }}
                  >
                    送信する
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
