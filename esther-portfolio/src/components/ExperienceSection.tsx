import { Calendar, MapPin, ChevronRight } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Ycenter Shambah Solutions",
      period: "Apr 2024 – Jun 2025",
      location: "Kenya",
      description:
        "Developed React.js farmer dashboard with AI integration, collaborated on API development, conducted usability testing, and enhanced user experience through iterative design improvements.",
      highlights: [
        "Built responsive farmer dashboard using React.js",
        "Integrated AI features for agricultural insights",
        "Collaborated with backend team on API development",
        "Conducted comprehensive usability testing",
      ],
    },
    {
      company: "GODAN (Global Open Data for Agriculture and Nutrition)",
      period: "Mar 2023 – Feb 2024",
      location: "Remote",
      description:
        "Developed Python machine learning models for fertilizer prediction, contributed to web development projects, created wireframes for user interfaces, and worked in Agile development environment.",
      highlights: [
        "Built ML models for fertilizer prediction using Python",
        "Contributed to full-stack web development",
        "Created detailed wireframes and UI mockups",
        "Participated in Agile/Scrum development processes",
      ],
    },
    {
      company: "AIC Polytechnic Naivasha",
      period: "Jun 2022 – Aug 2022",
      location: "Naivasha, Kenya",
      description:
        "Handled networking setup, maintenance, and troubleshooting for institutional infrastructure. Gained hands-on experience with network configuration and system administration.",
      highlights: [
        "Network infrastructure setup and configuration",
        "System maintenance and monitoring",
        "Technical troubleshooting and problem resolution",
        "Documentation of network protocols and procedures",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Professional Experience</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-body text-lg mt-6 max-w-2xl mx-auto">
            Building expertise through diverse roles in software development,
            AI/ML, and networking
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-soft hidden md:block"></div>

                <div className="md:ml-16">
                  <div className="card-gradient hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="heading-tertiary text-primary">
                        {exp.company}
                      </h3>
                      <div className="flex items-center text-muted-foreground text-sm mt-2 md:mt-0">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center text-muted-foreground text-sm mb-4">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>

                    <p className="text-body mb-6">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start">
                          <ChevronRight
                            size={16}
                            className="text-primary mt-1 mr-2 flex-shrink-0"
                          />
                          <span className="text-body text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
