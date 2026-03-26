import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import AwardsSection from "@/components/AwardsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground scroll-smooth flex flex-col">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AwardsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
