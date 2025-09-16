import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Esther Margaret Wairimu Mwangi
          </h3>
          <p className="text-background/80 mb-8 max-w-md mx-auto">
            Software Developer & UI/UX Designer passionate about creating
            innovative solutions
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-all duration-300 hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:esther.mwangi@example.com"
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="border-t border-background/20 pt-8">
            <p className="text-background/60 text-sm flex items-center justify-center">
              © {currentYear} Esther Margaret Wairimu Mwangi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
