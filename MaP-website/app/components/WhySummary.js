import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function WhySummary() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#E84040] mb-3 block">
              WHY WE FOCUS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
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
            <p className="text-gray-600 leading-relaxed mb-8">
              現代の社会問題は複数の要素が相互に影響し合う複雑な構造を持っています。
              個人・企業・行政だけでは解決できない。立場の異なる主体が協力する「共創」が不可欠であり、
              その核となるのが「頼る力」です。
            </p>
            <Link
              href="/why"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#E84040] hover:gap-2 transition-all duration-200"
            >
              なぜ頼る力なのか <span>→</span>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
