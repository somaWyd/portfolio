import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import AnimatedSection from "../components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "ABOUT",
  description: "MaPが生まれた背景、Co-Lab-Gearsとの関係、4人のメンバー紹介。",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section
          className="pt-32 pb-16"
          style={{ backgroundColor: "#FEF0EE" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#E84040] mb-3 block">
                ABOUT
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                私たちについて
              </h1>
              <p className="text-gray-500 text-lg">
                MaPが生まれた背景と、共創への想い
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Main About content */}
        <About />

        {/* Co-Lab-Gears Partner link */}
        <section className="py-16 bg-[#F7F7F5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <p className="text-gray-600 mb-4">
                Co-Lab-Gearsに参画する企業・支援者について詳しく見る
              </p>
              <Link
                href="/partner"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#E84040] hover:gap-2 transition-all duration-200"
              >
                パートナー一覧を見る <span>→</span>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
