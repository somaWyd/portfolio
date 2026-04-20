"use client";

import AnimatedSection from "./AnimatedSection";

const cards = [
  {
    icon: "🎨",
    title: "一緒に授業を作っていく",
    desc: "企業・学生団体と共同でプログラムを設計します。多様な視点を持ち寄り、子どもたちが「頼る力」を実感できる体験を共に創ります。",
    cta: "授業設計パートナーになる",
  },
  {
    icon: "📈",
    title: "効果の可視化",
    desc: "大阪公立大学の先生と共同開発した自己効力感尺度を用いて、児童の変化を数値で追います。エビデンスベースの教育を共に実践します。",
    cta: "研究・評価に参加する",
  },
  {
    icon: "🌱",
    title: "ビジネス化",
    desc: "持続可能なモデルへの発展を一緒に探求します。教育×共創の新しいビジネスモデルを社会実装するパートナーを探しています。",
    cta: "事業化を一緒に考える",
  },
];

export default function CoCreation() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cocreation" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#E84040] mb-3 block">
            Co-Creation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            一緒に社会を変えませんか？
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            企業・学生団体・学校の方、どなたでもお気軽にお声がけください。
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 120}>
              <div className="group bg-[#F7F7F5] rounded-2xl p-8 h-full flex flex-col border border-gray-100 hover:shadow-md hover:border-[#F5C4B3] transition-all duration-300">
                <div className="text-4xl mb-5">{card.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{card.desc}</p>
                <button
                  onClick={scrollToContact}
                  className="mt-6 text-sm font-semibold text-[#E84040] flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  {card.cta} <span>→</span>
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
