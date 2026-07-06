import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import AnimatedSection from "../components/AnimatedSection";

export const metadata = {
  title: "CONTACT",
  description: "MaPへのお問い合わせ。企業協働・学校連携・学生団体連携のご相談はこちら。",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header - gradient */}
        <section
          className="pt-32 pb-16 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #E84040, #FF7043)" }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-white/70 mb-3 block">
                CONTACT
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                私たちと共創しませんか？
              </h1>
              <p className="text-white/85 text-lg">
                企業・学生団体・学校の方、お気軽にご連絡ください
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Form section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Form */}
              <div className="lg:col-span-3">
                <AnimatedSection>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    お問い合わせフォーム
                  </h2>
                  <ContactForm />
                </AnimatedSection>
              </div>

              {/* Contact info */}
              <div className="lg:col-span-2">
                <AnimatedSection delay={100}>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                        連絡先情報
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-xl mt-0.5">✉️</span>
                          <div>
                            <p className="text-xs text-gray-400 mb-0.5">メールアドレス</p>
                            <a
                              href="mailto:contact@make-a-pulse.org"
                              className="text-sm text-[#E84040] hover:underline"
                            >
                              contact@make-a-pulse.org
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-xl mt-0.5">📍</span>
                          <div>
                            <p className="text-xs text-gray-400 mb-0.5">活動拠点</p>
                            <p className="text-sm text-gray-700">大阪・京都</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                        SNS
                      </h3>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          aria-label="Instagram"
                          className="w-11 h-11 rounded-full bg-[#FEF0EE] border border-[#F5C4B3] flex items-center justify-center text-lg hover:scale-110 transition-transform"
                        >
                          📸
                        </a>
                        <a
                          href="#"
                          aria-label="X (Twitter)"
                          className="w-11 h-11 rounded-full bg-[#FEF0EE] border border-[#F5C4B3] flex items-center justify-center font-bold text-[#E84040] hover:scale-110 transition-transform"
                        >
                          𝕏
                        </a>
                      </div>
                    </div>

                    <div
                      className="rounded-2xl p-6 border border-[#F5C4B3]"
                      style={{ backgroundColor: "#FEF0EE" }}
                    >
                      <h3 className="text-sm font-bold text-gray-900 mb-3">
                        こんな方はぜひご連絡を
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="text-[#E84040]">✓</span>
                          授業やプログラムを一緒に作りたい企業
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[#E84040]">✓</span>
                          出前授業を受け入れたい学校
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[#E84040]">✓</span>
                          共創に興味のある学生団体
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[#E84040]">✓</span>
                          活動を支援したい個人・団体
                        </li>
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
