import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import meSmile from "../assets/me smile.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`max-w-5xl w-full transition-all duration-300 rounded-full px-6 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-medium border border-border"
            : "bg-card/80 backdrop-blur-sm shadow-soft border border-border/50"
        }`}
      >
        <div className="flex justify-between items-center h-14">
          <a href="#" className="flex items-center">
            <img
              src={meSmile}
              alt="Esther Mwangi"
              className="w-9 h-9 rounded-full object-cover border-2 border-primary/30"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-card/95 backdrop-blur-md rounded-2xl shadow-medium border border-border overflow-hidden">
            <div className="py-4 px-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block btn-primary px-4 py-2 rounded-full text-sm font-medium transition-colors text-center mt-3"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
