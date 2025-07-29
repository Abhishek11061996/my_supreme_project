
import ContactSection from "./components/ContactSection";
import Footer from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MainSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
