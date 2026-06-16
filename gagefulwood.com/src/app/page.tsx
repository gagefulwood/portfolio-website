import ContactSection from "./components/contact-section";
import FocusSection from "./components/focus-section";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import ProjectsSection from "./components/projects-section";
import SkillsSection from "./components/skills-section";

export default function Home() {
  return (
    <main className="page-shell">
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
