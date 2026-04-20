import AnimatedSection from "./AnimatedSection";

const past = [
  { date: "11/27", event: "富野小学校 学習発表会" },
  { date: "12/3", event: "安井小学校 出前授業" },
  { date: "12/6", event: "仲良しクリスマス会" },
  { date: "1/8", event: "イマクリ引継ぎ" },
  { date: "2/25", event: "富野小学校 出前授業 1回目" },
  { date: "3/11", event: "富野小学校 出前授業 2回目" },
];

const future = [
  { date: "年度始め", event: "富野小学校に授業の日程調整（今池小とも協議中）" },
  { date: "5月", event: "育徳園（学童）出前授業" },
  { date: "8月", event: "プログラミング出前授業（at 培良中学校）" },
  { date: "10/10", event: "NEXt US 2026 出場予定", highlight: true },
  { date: "将来", event: "南城陽中学校への出前授業" },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#E84040] mb-3 block">
            Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            これまでの活動・これからの活動
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Past */}
          <AnimatedSection>
            <h3 className="text-lg font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <span
                className="px-3 py-1 rounded-full text-white text-xs font-semibold"
                style={{ background: "linear-gradient(135deg, #E84040, #FF7043)" }}
              >
                実績
              </span>
              これまでの活動
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#E84040] to-[#FF7043] opacity-30" />

              <div className="space-y-6">
                {past.map((item, i) => (
                  <AnimatedSection key={i} delay={i * 80}>
                    <div className="flex gap-5 items-start">
                      <div
                        className="w-3.5 h-3.5 rounded-full mt-1.5 shrink-0 border-2 border-white shadow"
                        style={{ background: "linear-gradient(135deg, #E84040, #FF7043)" }}
                      />
                      <div>
                        <span className="text-xs font-semibold text-[#E84040] tracking-wide">
                          {item.date}
                        </span>
                        <p className="text-sm font-medium text-gray-800 mt-0.5">{item.event}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Future */}
          <AnimatedSection delay={100}>
            <h3 className="text-lg font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[#E84040] text-xs font-semibold border border-[#F5C4B3] bg-[#FEF0EE]">
                予定
              </span>
              これからの活動
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-[7px] top-2 bottom-2 w-0.5 opacity-30"
                style={{ background: "linear-gradient(to bottom, #FF7043, #E84040)" }}
              />

              <div className="space-y-6">
                {future.map((item, i) => (
                  <AnimatedSection key={i} delay={i * 80 + 100}>
                    <div className="flex gap-5 items-start">
                      <div
                        className="w-3.5 h-3.5 rounded-full mt-1.5 shrink-0 border-2 border-white shadow"
                        style={{
                          background: item.highlight
                            ? "linear-gradient(135deg, #E84040, #FF7043)"
                            : "#F5C4B3",
                        }}
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[#FF7043] tracking-wide">
                            {item.date}
                          </span>
                          {item.highlight && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white bg-[#E84040]">
                              注目
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-medium text-gray-800 mt-0.5">{item.event}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
