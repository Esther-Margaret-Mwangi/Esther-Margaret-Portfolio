import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center gradient-subtle relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="fade-up animate">
            <h1 className="heading-primary mb-6">
              Esther Margaret Wairimu Mwangi
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-4">
              Software Developer & UI/UX Designer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Passionate about building innovative solutions and exceptional
              user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="btn-primary">
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" className="btn-secondary">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                </a>
              </Button>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card shadow-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-muted-foreground hover:text-primary"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card shadow-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-muted-foreground hover:text-primary"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:esther.mwangi@example.com"
                className="p-3 rounded-full bg-card shadow-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-muted-foreground hover:text-primary"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right side - Profile picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant border-4 border-primary/20">
                <img
                  src="/me smile.jpg"
                  alt="Esther Margaret"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full ring-4 ring-primary/10 ring-offset-4 ring-offset-background"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about">
          <ChevronDown size={32} className="text-primary" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
