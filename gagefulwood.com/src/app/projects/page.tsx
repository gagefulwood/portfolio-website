import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProjectsSection from "../components/projects-section";

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <div className="page-offset">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
