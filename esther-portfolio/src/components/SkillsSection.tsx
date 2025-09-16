import { Code, Palette, Server, Brain, GitBranch, Network } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "PHP", "TypeScript"],
      color: "text-blue-500",
    },
    {
      icon: Palette,
      title: "Frontend Development",
      skills: ["React.js", "Tailwind CSS", "GraphQL", "HTML", "CSS"],
      color: "text-purple-500",
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Nest.js", "REST APIs"],
      color: "text-green-500",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["scikit-learn", "pandas", "TensorFlow basics"],
      color: "text-orange-500",
    },
    {
      icon: GitBranch,
      title: "Development Tools",
      skills: ["Git", "GitHub", "Agile/Scrum"],
      color: "text-red-500",
    },
    {
      icon: Network,
      title: "Networking",
      skills: ["Network Setup", "Maintenance", "Troubleshooting"],
      color: "text-cyan-500",
    },
  ];

  return (
    <section id="skills" className="py-20 gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-body text-lg mt-6 max-w-2xl mx-auto">
            A comprehensive skill set spanning frontend, backend, AI/ML, and
            networking technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="card-gradient hover-lift">
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-lg bg-primary/10 ${category.color} mr-4`}
                  >
                    <IconComponent size={24} />
                  </div>
                  <h3 className="heading-tertiary text-lg">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-body">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
