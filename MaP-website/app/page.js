import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Why from "./components/Why";
import Activity from "./components/Activity";
import Timeline from "./components/Timeline";
import CoCreation from "./components/CoCreation";
import Supporters from "./components/Supporters";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Why />
        <Activity />
        <Timeline />
        <CoCreation />
        <Supporters />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
