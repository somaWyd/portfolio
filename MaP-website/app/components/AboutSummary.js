import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function AboutSummary() {
  return (
    <section className="py-24 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#E84040] mb-3 block">
              ABOUT US
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              大阪・関西万博から生まれた、
              <br className="hidden sm:block" />
              共創チャレンジユース団体
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              MaPは、大阪・関西万博TEAMEXPO次世代共創リーダー育成プロジェクト
              <strong className="text-gray-800">Co-Lab-Gears</strong>
              で誕生した共創チャレンジユース団体です。
              大阪公立大学・同志社大学・佛教大学の学生4名が、企業と共創しながら
              小学生に「頼る力」を育むワークショップを届けています。
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#E84040] hover:gap-2 transition-all duration-200"
            >
              詳しく見る <span>→</span>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
