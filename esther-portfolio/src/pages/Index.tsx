import Navigation from "../components/Navigation.tsx";
import HeroSection from "../components/HeroSection.tsx";
import AboutSection from "../components/AboutSection.tsx";
import ServicesSection from "../components/ServicesSection.tsx";
import ExperienceSection from "../components/ExperienceSection.tsx";
import ProjectsSection from "../components/ProjectsSection.tsx";
import EducationSection from "../components/EducationSection.tsx";
import ContactSection from "../components/ContactSection.tsx";
import Footer from "../components/Footer.tsx";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
