import AnimatedSection from "./AnimatedSection";

const cards = [
  {
    label: "MISSION",
    title: "使命",
    icon: "🎯",
    text: "プログラムを通して、児童の「頼る力」を育む。",
  },
  {
    label: "VISION",
    title: "展望",
    icon: "🌏",
    text: "立場の異なる主体が協力する「共創」で社会問題を解決できる社会を実現する。",
  },
  {
    label: "VALUE",
    title: "価値観",
    icon: "💡",
    text: "もっと大きな挑戦をしてほしい。もっとできると思ってほしい。もっと自己効力感を高めたい。この3つの思いを、大学生ならではの身近さで届ける。",
  },
];

export default function MissionVisionValue() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#E84040] mb-3 block">
            OUR PURPOSE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            私たちの存在意義
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <AnimatedSection key={card.label} delay={i * 120}>
              <div
                className="rounded-2xl p-8 h-full border border-[#F5C4B3] shadow-sm hover:shadow-md transition-shadow"
                style={{ backgroundColor: "#FEF0EE" }}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold tracking-[0.1em] uppercase text-[#E84040]">
                    {card.label}
                  </span>
                  <span className="text-xs text-gray-500">/ {card.title}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">{card.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
