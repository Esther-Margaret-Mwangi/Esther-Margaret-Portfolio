import { ExternalLink, Github } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import fraudshield from "../assets/fraudshield2.png";
import creditcard from "../assets/creditcard.jpeg";
import collably from "../assets/Collably.png";
import eatzy from "../assets/Eatzy.png";
import cremah from "../assets/Cremah1.png";
import farm from "../assets/Farm smart dashboard.jpg";
import mavuno from "../assets/Mavuno Website.png";
import sandton from "../assets/Sandton.png";
import shamba from "../assets/Shambah Solutions.png";
import trendify from "../assets/Trendify.png";
import laundry from "../assets/Laundry.jpeg";
import ownverse from "../assets/ownverse.jpeg";
import evently from "../assets/Evently.jpeg";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  image: string;
}

const ProjectsSection = () => {
  const websiteProjects: Project[] = [
    {
      title: "Micro-ownership platform (Production)",
      description:
        "A production-ready web platform enabling fractional asset ownership and listing. The system empowers users to co-own assets, track their investments, and securely manage ownership records. With an intuitive design and scalable architecture, it offers transparency, accessibility, and efficiency for modern asset management.",
      technologies: ["React.js", "Tailwind CSS"],
      liveUrl: "https://ownverse.vercel.app/",
      githubUrl: "",
      image: ownverse,
    },
    {
      title: "Laundry Room Website.",
      description:
        "An end-to-end management system tailored for laundry businesses, streamlining operations such as order tracking, service scheduling, customer management, and billing. The platform enhances efficiency by automating routine tasks, providing real-time order status updates, and supporting digital payment integration. Designed with scalability in mind, it offers a user-friendly interface for both customers and administrators.",
      technologies: ["React.js", "Tailwind CSS", "Node.js"],
      liveUrl: "https://thelaundryroomrongai.vercel.app/",
      githubUrl: "",
      image: laundry,
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
      liveUrl:
        "https://github.com/Esther-Margaret-Mwangi/Credit-Card-Fraud-Detection-System",
      githubUrl:
        "https://github.com/Esther-Margaret-Mwangi/Credit-Card-Fraud-Detection-System",
      image: creditcard,
    },
  ];

  const webDesignProjects: Project[] = [
    {
      title: "Collably Influencer-Brand Collaboration Platform",
      description:
        "Collably is a collaboration platform connecting brands with influencers efficiently. Brands can post campaign details, while influencers browse, apply, and showcase their profiles. The platform lets brands review applications, communicate, and select the best fit. With responsive design, in-app messaging, and real-time tracking, Collably brings structure and transparency to influencer marketing, inspired by freelance platforms like Upwork.",
      technologies: [
        "Figma",
        "UI/UX Design",
        "Wireframing",
        "User Research",
        "User Personas",
        "Interactive Prototyping",
      ],
      liveUrl:
        "https://www.figma.com/proto/dOSFTGRQ7OvGEPbLMBE9fc/Collably?page-id=0%3A1&node-id=2-2&viewport=198%2C122%2C0.05&t=ssplSLhWRVg5GQ3z-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2",
      image: collably,
    },
    {
      title: "Eatzy Home Delivery Website",
      description:
        "Eatzy is a home delivery platform that brings food, groceries, pharmacy, and supermarket items to users’ doorsteps. Its clean, responsive design features category navigation, smart search, real-time order tracking, personalized suggestions, and a smooth checkout. Optimized for desktop and mobile, Eatzy emphasizes speed, reliability, and a user-centered experience to simplify shopping and delivery.",
      technologies: [
        "Figma",
        "UI/UX Design",
        "Wireframing",
        "User Research",
        "User Personas",
        "Interactive Prototyping",
      ],
      liveUrl:
        "https://www.figma.com/proto/fKYCVTwiaQnkzydf9holWs/Eatzy-website?page-id=0%3A1&node-id=2-11&viewport=291%2C294%2C0.05&t=XqLQj4OYUxRCOBUQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A11",
      image: eatzy,
    },
    {
      title: "FraudShield Credit Card Protection",
      description:
        "A modern and secure credit card fraud detection website designed in Figma. FraudShield offers real-time protection through AI-driven analysis, alert systems, and customizable rule configurations to protect both individuals and businesses from suspicious financial activity. The design emphasizes trust, professionalism, and clarity, with a strong visual hierarchy and user-centered layout.",
      technologies: [
        "Figma",
        "UI/UX Design",
        "Wireframing",
        "User Research",
        "User Personas",
        "Interactive Prototyping",
      ],
      liveUrl: "#",
      image: fraudshield,
    },
  ];

  const appDesignProjects: Project[] = [
    {
      title: "Trendify E-commerce App",
      description:
        "Trendify is a global e-commerce app offering products from electronics to fashion, home appliances, and beauty. It provides intuitive shopping with advanced filtering, personalized recommendations, add-to-cart and wishlist features, international shipping, and smooth checkout. Available on Android and iOS, Trendify’s clean, scalable design focuses on accessibility, performance, and user trust.",
      technologies: ["Figma", "Mobile Design", "Prototyping", "User Testing"],
      liveUrl:
        "https://www.figma.com/proto/4qX97Vtwp98044ThMAJ6GI/Trendify-Ecommerce-App?page-id=0%3A1&node-id=1-331&viewport=384%2C202%2C0.07&t=0wMcI2S2OXn3ESLt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
      image: trendify,
    },
    {
      title: "Evently App",
      description:
        "Evently is an all-in-one event management app designed to help teams plan, manage, and track every aspect of an event in one place. The app provides a clear overview of event details, assigned tasks, production sessions, and logistics, including transport and travel coordination. Users can easily add, edit, and monitor tasks, routes, and schedules through an intuitive, mobile-optimized interface. With real-time updates, structured navigation, and role-based task visibility, Evently streamlines collaboration and ensures smooth event execution from planning to completion.",
      technologies: ["Figma", "Mobile UI", "UX Design", "Interaction Design"],
      liveUrl:
        "https://www.figma.com/proto/e5fnW2Gn5v552rrkGlQLCD/Stawi-App?page-id=0%3A1&node-id=9-623&viewport=711%2C145%2C0.66&t=CDiKjLIFA3IbGiy4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A623",
      image: evently,
    },
    {
      title: "Shambah Solutions (Agri-tech) App",
      description:
        "A smart agriculture app empowering smallholder farmers with AI-driven tools for crop management. It offers plant disease diagnosis, soil testing, and fertilizer recommendations through a clean, intuitive interface. Features include user authentication, photo-based diagnosis, form-based soil tests, and instant tailored results. The app bridges modern agritech and traditional farming, enabling informed, convenient decision-making.",
      technologies: ["Figma", "Mobile UI", "UX Design", "Interaction Design"],
      liveUrl: "#",
      image: shamba,
    },
  ];

  const ProjectCard = ({
    project,
    showGithub = true,
  }: {
    project: Project;
    showGithub?: boolean;
  }) => (
    <div className="card-gradient hover-lift overflow-hidden">
      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <h3 className="heading-tertiary mb-3">{project.title}</h3>
      <p className="text-body text-sm mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <Button variant="outline" size="sm" className="btn-secondary" asChild>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        </Button>
        {showGithub && project.githubUrl && (
          <Button variant="ghost" size="sm" className="btn-ghost" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={14} />
              Code
            </a>
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-body text-lg mt-6 max-w-2xl mx-auto">
            A showcase of my work in web development, machine learning, and
            UI/UX design
          </p>
        </div>

        <Tabs defaultValue="websites" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-10 bg-secondary/50 p-1 rounded-full">
            <TabsTrigger
              value="websites"
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
            >
              Websites
            </TabsTrigger>
            <TabsTrigger
              value="web-design"
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
            >
              Web Design
            </TabsTrigger>
            <TabsTrigger
              value="app-design"
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
            >
              App Design
            </TabsTrigger>
          </TabsList>

          <TabsContent value="websites">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websiteProjects.map((project, index) => (
                <ProjectCard key={index} project={project} showGithub={true} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Button className="btn-primary" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All Projects on GitHub
                </a>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="web-design">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webDesignProjects.map((project, index) => (
                <ProjectCard key={index} project={project} showGithub={false} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Button className="btn-primary" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View All Web Design Projects
                </a>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="app-design">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appDesignProjects.map((project, index) => (
                <ProjectCard key={index} project={project} showGithub={false} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Button className="btn-primary" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View All App Design Projects
                </a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
