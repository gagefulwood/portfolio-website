import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SkillsSection from "../components/skills-section";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="page-offset">
        <SkillsSection />
      </div>
      <Footer />
    </main>
  );
}
