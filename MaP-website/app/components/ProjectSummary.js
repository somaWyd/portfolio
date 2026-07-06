import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const strengths = [
  { num: "01", icon: "🎓", title: "大学生による活動", desc: "身近な「頼り先」として、こどもたちに寄り添う。" },
  { num: "02", icon: "🤝", title: "頼る力へのフォーカス", desc: "「共創」の一段階前にある「頼る力」に特化。" },
  { num: "03", icon: "📅", title: "長期的なプログラム", desc: "単発ではなく1学期〜1年間の継続的な関わり。" },
  { num: "04", icon: "📊", title: "効果の可視化", desc: "自己効力感の尺度を大学の先生と共同開発。" },
];

export default function ProjectSummary() {
  return (
    <section className="py-24 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#E84040] mb-3 block">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            企業・学生団体と協働し、
            <br className="hidden sm:block" />
            月1回の出前授業を届ける
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {strengths.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 80}>
              <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="text-xs font-bold text-[#E84040] mb-1 tracking-wide">{s.num}</div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">{s.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Link
            href="/project"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#E84040] hover:gap-2 transition-all duration-200"
          >
            プロジェクト詳細 <span>→</span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
