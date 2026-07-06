import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnerLogos from "../components/PartnerLogos";
import CoLabGearsPartners from "../components/CoLabGearsPartners";
import AnimatedSection from "../components/AnimatedSection";
import ContactCTA from "../components/ContactCTA";

export const metadata = {
  title: "PARTNER",
  description: "MaPをご支援いただいているパートナー企業・Co-Lab-Gears参画企業一覧。",
};

export default function PartnerPage() {
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
                PARTNER
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                パートナー企業・支援者
              </h1>
              <p className="text-gray-500 text-lg">
                共に歩んでいただいている方々
              </p>
            </AnimatedSection>
          </div>
        </section>

        <PartnerLogos />
        <CoLabGearsPartners />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
