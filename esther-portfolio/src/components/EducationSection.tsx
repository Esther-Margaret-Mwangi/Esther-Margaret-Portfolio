import { GraduationCap, Award, ExternalLink } from "lucide-react";

const EducationSection = () => {
  const achievements = [
    {
      title: 'Winner, World Bank "Data for Soil Health & Scale" Summit',
      description:
        "Recognized for innovative solutions in agricultural data analysis and soil health monitoring",
      icon: Award,
    },
    {
      title: "Google IT Professional Certificate",
      description:
        "Comprehensive training in IT fundamentals, network security, and system administration",
      icon: Award,
    },
    {
      title: "Responsive Web Design Certification",
      description:
        "FreeCodeCamp certification covering modern web development practices and responsive design",
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Education & Achievements</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-body text-lg mt-6 max-w-2xl mx-auto">
            Continuous learning and recognition for excellence in technology and
            innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="heading-tertiary mb-8 flex items-center">
              <GraduationCap className="mr-3 text-primary" size={24} />
              Education
            </h3>

            <div className="card-gradient">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    Bachelor of Science in Computer Technology
                  </h4>
                  <p className="text-primary font-medium">
                    Multimedia University of Kenya
                  </p>
                </div>
                <span className="text-muted-foreground text-sm bg-secondary px-3 py-1 rounded-full">
                  2021 – 2025
                </span>
              </div>

              <p className="text-body mb-4">
                Comprehensive program covering software development, computer
                systems, networking, and emerging technologies. Strong
                foundation in both theoretical concepts and practical
                applications.
              </p>

              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-body text-sm">
                    Software Engineering & Development
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-body text-sm">
                    Computer Networks & Systems
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-body text-sm">
                    Database Design & Management
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-body text-sm">
                    Web Technologies & Development
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="heading-tertiary mb-8 flex items-center">
              <Award className="mr-3 text-primary" size={24} />
              Achievements & Certifications
            </h3>

            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="card-gradient hover-lift">
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                        <IconComponent size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-body text-sm">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://www.linkedin.com/in/esther-margaret-wairimu-283a41245"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-medium"
              >
                View All Certifications
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
