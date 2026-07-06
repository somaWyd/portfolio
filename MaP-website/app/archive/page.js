import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import AnimatedSection from "../components/AnimatedSection";

export const metadata = {
  title: "ARCHIVE",
  description: "MaPのこれまでの活動記録とこれからの予定。",
};

export default function ArchivePage() {
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
                ARCHIVE
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                活動の記録
              </h1>
              <p className="text-gray-500 text-lg">
                これまでの活動・これからの活動
              </p>
            </AnimatedSection>
          </div>
        </section>

        <Timeline />
      </main>
      <Footer />
    </>
  );
}
