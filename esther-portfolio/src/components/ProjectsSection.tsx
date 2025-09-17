import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "P4CDA Website.",
      description:
        "A comprehensive web platform designed to streamline course registration and student data management. The system allows administrators to efficiently manage student records, track academic progress, and simplify the registration process.",
      technologies: ["React.js", "Tailwind CSS", "Node.js"],
      liveUrl: "https://p4cda.net/course-registration/",
      githubUrl: "#",
      featured: true,
    },

    {
      title: "SmartFarm Platform",
      description:
        "React-based agricultural platform providing fertilizer recommendations and soil carbon predictions. Features real-time data visualization and farmer-friendly interface.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "API Integration",
        "Data Visualization",
      ],
      liveUrl: "https://shamba-smart-two.vercel.app",
      githubUrl:
        "https://github.com/Esther-Margaret-Mwangi/farm-smart-dashboard",
      featured: true,
    },
    {
      title: "Credit Card Fraud Detection System",
      description:
        "Advanced machine learning system for detecting fraudulent credit card transactions using Python, scikit-learn, and ensemble methods. Built with Flask/Django for web deployment.",
      technologies: [
        "Python",
        "Machine Learning",
        "Flask/Django",
        "scikit-learn",
        "Data Analysis",
      ],
      liveUrl: "#",
      githubUrl:
        "https://github.com/Esther-Margaret-Mwangi/Credit-Card-Fraud-Detection-System",
      featured: false,
    },

    {
      title: "Micro-ownership platform (Production)",
      description:
        "A production-ready web platform enabling fractional asset ownership and listing. The system empowers users to co-own assets, track their investments, and securely manage ownership records. With an intuitive design and scalable architecture, it offers transparency, accessibility, and efficiency for modern asset management.",
      technologies: ["React.js", "Tailwind CSS"],
      liveUrl: "https://ownverse.vercel.app",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Laundry Room Website.",
      description:
        "An end-to-end management system tailored for laundry businesses, streamlining operations such as order tracking, service scheduling, customer management, and billing. The platform enhances efficiency by automating routine tasks, providing real-time order status updates, and supporting digital payment integration. Designed with scalability in mind, it offers a user-friendly interface for both customers and administrators.",
      technologies: ["React.js", "Tailwind CSS", "Node.js"],
      liveUrl: "https://ownverse.vercel.app",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Jodama Management System",
      description:
        "A comprehensive system for managing Jodama apartments. It calculates rent, displays Wi-Fi information, and tracks the balance for tenants in each house.",
      technologies: ["React.js", "Tailwind CSS, Superbase"],
      liveUrl: "https://jodama-management-system.vercel.app",
      githubUrl:
        "https://github.com/Esther-Margaret-Mwangi/Jodama-Management-System",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-body text-lg mt-6 max-w-2xl mx-auto">
            A showcase of my work in web development, machine learning, and
            UI/UX design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-gradient hover-lift ${
                project.featured ? "lg:col-span-1" : ""
              }`}
            >
              {project.featured && (
                <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured Project
                </div>
              )}

              <h3 className="heading-tertiary mb-4">{project.title}</h3>
              <p className="text-body mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="btn-secondary">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Live Demo
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="btn-ghost">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-primary">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
