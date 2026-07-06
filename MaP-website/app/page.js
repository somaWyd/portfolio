import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MissionVisionValue from "./components/MissionVisionValue";
import AboutSummary from "./components/AboutSummary";
import WhySummary from "./components/WhySummary";
import ProjectSummary from "./components/ProjectSummary";
import ContactCTA from "./components/ContactCTA";

export const metadata = {
  title: {
    absolute: "MaP - Make a Pulse | 共創チャレンジユース団体",
  },
  description:
    "小学生に「頼る力」を育むワークショップを提供する共創チャレンジユース団体。大阪・関西万博TEAMEXPOのCo-Lab-Gearsから誕生。",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MissionVisionValue />
        <AboutSummary />
        <WhySummary />
        <ProjectSummary />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
