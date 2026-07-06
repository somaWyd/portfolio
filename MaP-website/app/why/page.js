import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Why from "../components/Why";
import AnimatedSection from "../components/AnimatedSection";
import ContactCTA from "../components/ContactCTA";

export const metadata = {
  title: "WHY",
  description: "なぜMaPが「頼る力」を重視するのか。社会問題の複雑化と共創の必要性。",
};

export default function WhyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section
          className="pt-32 pb-16"
          style={{ backgroundColor: "#FEF0EE" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#E84040] mb-3 block">
                WHY WE FOCUS
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                なぜ"頼る力"を重視するのか？
              </h1>
              <p className="text-gray-500 text-lg">
                社会問題解決の糸口となる、一つの問い
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Problem Structure */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                現代の社会問題の構図
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                現代の社会問題は、単一分野で切り分けられるものではなく、複数の要素が相互に影響し合う
                <strong className="text-gray-900">「複雑化・複合化」</strong>した構造を持っている。
              </p>
            </AnimatedSection>

            {/* Diagram: 少子化問題 */}
            <AnimatedSection delay={100}>
              <div className="max-w-2xl mx-auto">
                <div className="relative bg-[#F7F7F5] rounded-3xl p-10">
                  {/* Center */}
                  <div className="flex justify-center mb-8">
                    <div
                      className="w-36 h-36 rounded-full flex items-center justify-center text-white font-bold text-lg text-center leading-snug shadow-lg"
                      style={{ background: "linear-gradient(135deg, #E84040, #FF7043)" }}
                    >
                      少子化<br />問題
                    </div>
                  </div>

                  {/* 4 factors grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: "💰", label: "【経済】", desc: "育児費用の増加" },
                      { icon: "👔", label: "【労働】", desc: "共働き世帯の増加" },
                      { icon: "💭", label: "【価値観】", desc: "結婚・出産意識の変化" },
                      { icon: "🏫", label: "【子育て】", desc: "保育園の待機児童増加" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="bg-white rounded-2xl p-4 border border-[#F5C4B3] shadow-sm text-center"
                      >
                        <div className="text-2xl mb-1">{item.icon}</div>
                        <p className="text-xs font-bold text-[#E84040] mb-0.5">{item.label}</p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Arrows annotation */}
                  <p className="text-center text-xs text-gray-400 mt-6">
                    ↑ 各要素が相互に影響し合い、単一の解決策では対処できない
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Solution: 頼る力 */}
        <section className="py-24 bg-[#F7F7F5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">💡</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  社会問題解決の糸口は「頼る力」
                </h2>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  例えば少子化問題では、個人の意識改革だけでも経済支援だけでも解決することはできない。
                  少子化問題以外の社会問題においても、個人だけ、企業だけ、行政だけで解決することはできない。
                </p>
                <div
                  className="rounded-2xl p-6 border-l-4 border-[#E84040]"
                  style={{ backgroundColor: "#FEF0EE" }}
                >
                  <p className="font-semibold text-gray-900 text-lg">
                    立場の異なる主体が協力する「共創」が不可欠である。
                  </p>
                </div>
                <p>
                  共創には、各主体が自らの限界を認識し、他者の力を借りながら行動することが重要である。
                  このときに求められるのが、<strong className="text-[#E84040]">「頼る力」</strong>である。
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why section (3 wishes) */}
        <Why />

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
