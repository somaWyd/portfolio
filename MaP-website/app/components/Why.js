import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    num: "01",
    title: "複雑化・複合化する社会問題",
    desc: "現代の社会問題は単一分野で切り分けられるものではなく、複数の要素が相互に影響し合う構造を持っています。（例：少子化＝経済・労働・価値観・子育てが絡み合う）",
  },
  {
    num: "02",
    title: "解決には「共創」が必要",
    desc: "個人だけ、企業だけ、行政だけで解決することはできません。立場の異なる主体が協力する「共創」が不可欠です。",
  },
  {
    num: "03",
    title: "共創の前提となる「頼る力」",
    desc: "共創には、各主体が自らの限界を認識し、他者の力を借りながら行動することが重要です。その核となるのが「頼る力」です。",
  },
];

const wishes = [
  {
    icon: "🚀",
    text: "もっと大きな挑戦をしてほしい！",
    desc: "自分の可能性を信じ、高い目標に向かって挑戦する力を",
  },
  {
    icon: "💪",
    text: "もっとできると思ってほしい！",
    desc: "「自分にはできる」という自己信頼を幼いうちから育てる",
  },
  {
    icon: "✨",
    text: "もっと自己効力感を高めたい！",
    desc: "大阪公立大学の先生と共同開発した尺度で効果を可視化",
  },
];

export default function Why() {
  return (
    <section id="why" className="py-24 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#E84040] mb-3 block">
            Why We Focus
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            社会問題解決の糸口は
            <span
              style={{
                background: "linear-gradient(135deg, #E84040, #FF7043)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              "頼る力"
            </span>
          </h2>
        </AnimatedSection>

        {/* 3-step flow */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 relative">
          {/* Connecting arrow line on desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(33%-20px)] right-[calc(33%-20px)] h-0.5 bg-gradient-to-r from-[#E84040] to-[#FF7043] opacity-30" />

          {steps.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 120}>
              <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4"
                  style={{ background: "linear-gradient(135deg, #E84040, #FF7043)" }}
                >
                  {s.num}
                </div>
                {/* Arrow on mobile */}
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 text-[#E84040] text-xl">
                    ↓
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-10 w-8 h-8 items-center justify-center text-[#E84040] text-lg z-10">
                    →
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Three wishes */}
        <AnimatedSection className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-gray-900">私たちの3つの思い</h3>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {wishes.map((w, i) => (
            <AnimatedSection key={w.text} delay={i * 100}>
              <div
                className="rounded-2xl p-8 text-center border border-[#F5C4B3]"
                style={{ backgroundColor: "#FEF0EE" }}
              >
                <div className="text-4xl mb-4">{w.icon}</div>
                <p className="text-lg font-semibold text-gray-900 mb-3 leading-snug">{w.text}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{w.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
