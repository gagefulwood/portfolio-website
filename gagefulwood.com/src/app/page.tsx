import ContactSection from "./components/contact-section";
import FocusSection from "./components/focus-section";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import MagneticScrollController from "./components/magnetic-scroll-controller";
import Navbar from "./components/navbar";
import ProjectsSection from "./components/projects-section";
import SkillsSection from "./components/skills-section";

export default function Home() {
  return (
    <main className="page-shell">
      <MagneticScrollController />
      <Navbar />
      <HeroSection />
      <FocusSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
