import ContactSection from "../components/contact-section";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="page-offset">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
