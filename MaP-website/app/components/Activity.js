import AnimatedSection from "./AnimatedSection";

const strengths = [
  {
    num: "01",
    title: "大学生による活動",
    desc: "大学生によるワークショップであることで、こどもたちにとっての身近な「頼り先」になれる。",
    icon: "🎓",
  },
  {
    num: "02",
    title: "頼る力へのフォーカス",
    desc: "「共創」を目的とはせず、一段階前の「頼る力」に注目するプログラム内容。",
    icon: "🤝",
  },
  {
    num: "03",
    title: "長期的なプログラム",
    desc: "ワークショップは単発ではなく1学期〜1年間の長期であることを想定。継続的な関わりで変化を生む。",
    icon: "📅",
  },
  {
    num: "04",
    title: "効果の可視化",
    desc: "児童の「できる」を測る自己効力感の尺度を大阪公立大学の先生と共同開発。",
    icon: "📊",
  },
];

export default function Activity() {
  return (
    <section id="activity" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#E84040] mb-3 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            企業・学生団体と協働し、
            <br className="hidden sm:block" />
            月1回の出前授業を届ける
          </h2>
        </AnimatedSection>

        {/* Overview */}
        <AnimatedSection className="mb-16">
          <div className="bg-[#F7F7F5] rounded-2xl p-8 sm:p-10">
            <div className="flex flex-wrap gap-6 justify-center mb-10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[#E84040] uppercase tracking-wide">
                  ターゲット
                </span>
                <span className="text-sm font-medium text-gray-700 bg-white px-4 py-2 rounded-full border border-gray-200">
                  小学校4年生以上
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[#E84040] uppercase tracking-wide">
                  期間
                </span>
                <span className="text-sm font-medium text-gray-700 bg-white px-4 py-2 rounded-full border border-gray-200">
                  1学期間〜1年間
                </span>
              </div>
            </div>

            {/* Flow diagram */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* MaP */}
              <div className="flex flex-col items-center">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{ background: "linear-gradient(135deg, #E84040, #FF7043)" }}
                >
                  <span className="text-white font-bold text-xl">MaP</span>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">企画・コーディネート</p>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center text-[#E84040]">
                <div className="hidden sm:flex items-center gap-1">
                  <span className="text-lg">←</span>
                  <span className="text-xs font-semibold text-gray-500">協働</span>
                  <span className="text-lg">→</span>
                </div>
                <div className="sm:hidden text-2xl">↕</div>
                <span className="sm:hidden text-xs font-semibold text-gray-500">協働</span>
              </div>

              {/* Partners */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-24 rounded-2xl bg-white border-2 border-[#F5C4B3] flex items-center justify-center shadow-sm">
                  <span className="text-sm font-semibold text-gray-700 text-center leading-snug px-2">
                    企業・<br />学生団体
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">プログラム共同設計</p>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center text-[#FF7043]">
                <span className="hidden sm:block text-2xl">→</span>
                <span className="sm:hidden text-2xl">↓</span>
                <span className="text-xs font-semibold text-gray-500">授業提供</span>
              </div>

              {/* School */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm">
                  <span className="text-3xl">🏫</span>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">小学校</p>
              </div>
            </div>

            <p className="text-center text-sm text-gray-500 mt-8 leading-relaxed">
              1つのテーマを決め、月1回の授業を行う。
              <br />
              各回では違う企業/学生団体と共創してプログラムを作成し、
              多様な視点で児童が体験できることを目指す。
            </p>
          </div>
        </AnimatedSection>

        {/* 4 Strengths */}
        <AnimatedSection className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-gray-900">MaPの4つの強み</h3>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 100}>
              <div className="bg-[#F7F7F5] rounded-2xl p-6 h-full border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{s.icon}</div>
                <div className="text-xs font-semibold text-[#E84040] mb-2 tracking-wide">
                  {s.num}
                </div>
                <h4 className="text-base font-semibold text-gray-900 mb-3">{s.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
