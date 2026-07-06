import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function ContactCTA() {
  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #E84040, #FF7043)" }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            私たちと共創しませんか？
          </h2>
          <p className="text-white/85 text-lg leading-relaxed mb-10">
            企業・学生団体・学校の方、お気軽にご連絡ください
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-[#E84040] font-semibold text-base shadow-lg hover:scale-[1.03] transition-transform duration-200"
          >
            お問い合わせ <span>→</span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
