import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Activity from "../components/Activity";
import CoCreation from "../components/CoCreation";
import AnimatedSection from "../components/AnimatedSection";
import ContactCTA from "../components/ContactCTA";

export const metadata = {
  title: "PROJECT",
  description: "MaPの活動内容。企業・学生団体と協働した月1回の出前授業プロジェクト。",
};

export default function ProjectPage() {
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
                PROJECT
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                活動内容
              </h1>
              <p className="text-gray-500 text-lg">
                企業・学生団体と協働し、月1回の出前授業を届ける
              </p>
            </AnimatedSection>
          </div>
        </section>

        <Activity />
        <CoCreation />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
