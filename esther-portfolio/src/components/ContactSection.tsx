import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "esthermwm03@gmail.com",
      href: "mailto:esthermwm03@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Esther-Margaret-Mwangi",
      href: "https://github.com/Esther-Margaret-Mwangi",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/esther-margaret-wairimu",
      href: "https://www.linkedin.com/in/esther-margaret-wairimu-283a41245",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Let's Work Together</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-body text-lg mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="heading-tertiary text-center mb-8">Get In Touch</h3>
          <p className="text-body text-center mb-12 max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just
            want to connect, I'd love to hear from you. Feel free to reach out
            through any of the channels below.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.slice(0, 3).map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="card-gradient text-center hover-lift"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <IconComponent size={24} className="text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {item.label}
                  </h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-body hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-body">{item.value}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-foreground mb-4">
              Available for:
            </h4>
            <div className="flex flex-wrap justify-center gap-4 text-body text-sm">
              <span>• Full-time opportunities</span>
              <span>• Freelance projects</span>
              <span>• Consulting work</span>
              <span>• Open source collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
