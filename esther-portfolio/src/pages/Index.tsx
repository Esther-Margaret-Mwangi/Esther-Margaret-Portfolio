import Navigation from "../components/Navigation.tsx";
import HeroSection from "../components/HeroSection.tsx";
import AboutSection from "../components/AboutSection.tsx";
import SkillsSection from "../components/SkillsSection.tsx";
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
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
