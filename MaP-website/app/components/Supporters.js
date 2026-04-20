import AnimatedSection from "./AnimatedSection";

const supporters = [
  {
    name: "Co-Lab-Gears",
    nameJa: "コラボギアーズ",
    desc: "大阪・関西万博 TEAMEXPO 次世代共創リーダー育成プロジェクト",
  },
  {
    name: "エッジソン・マネジメント協会",
    nameJa: "",
    desc: "リーダーシップ開発・組織変革支援",
  },
  {
    name: "イマクリ",
    nameJa: "",
    desc: "教育系学生団体",
  },
  {
    name: "Panasonic Energy",
    nameJa: "パナソニック エナジー",
    desc: "エネルギーソリューション企業",
  },
  {
    name: "AVAD",
    nameJa: "",
    desc: "共創パートナー",
  },
];

export default function Supporters() {
  return (
    <section id="supporters" className="py-24 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#E84040] mb-3 block">
            Supported By
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            ご支援いただいている方々
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {supporters.map((s, i) => (
            <AnimatedSection key={s.name} delay={i * 80}>
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xs font-bold mb-3 shrink-0"
                  style={{ background: "linear-gradient(135deg, #E84040, #FF7043)" }}
                >
                  {s.name.charAt(0)}
                </div>
                <p className="text-sm font-semibold text-gray-900 leading-snug">{s.name}</p>
                {s.nameJa && (
                  <p className="text-xs text-gray-400 mt-0.5">{s.nameJa}</p>
                )}
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
