const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-body text-lg">
              I'm a passionate Software Developer and UI/UX Designer with
              expertise spanning both frontend and backend development. My
              technical foundation includes proficiency in{" "}
              <span className="text-primary font-semibold">
                React.js, Tailwind CSS, and GraphQL
              </span>{" "}
              for creating engaging user interfaces.
            </p>

            <p className="text-body text-lg">
              On the backend, I leverage{" "}
              <span className="text-primary font-semibold">
                Node.js and Nest.js
              </span>{" "}
              to build robust APIs and server-side solutions. I'm also exploring
              the exciting world of AI and Machine Learning using{" "}
              <span className="text-primary font-semibold">
                Python and TensorFlow
              </span>
              , with hands-on experience in data analysis and predictive
              modeling.
            </p>

            <p className="text-body text-lg">
              My networking background adds another dimension to my skill set,
              enabling me to understand and troubleshoot complex system
              architectures. I believe in the power of combining{" "}
              <span className="text-primary font-semibold">
                exceptional user experience with technical excellence
              </span>
              to create solutions that truly make a difference.
            </p>
          </div>

          <div className="card-gradient p-8">
            <h3 className="heading-tertiary mb-6 text-center">
              What Drives Me
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-body">
                  Building innovative solutions that solve real-world problems
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-body">
                  Creating intuitive and accessible user experiences
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-body">
                  Continuous learning and staying current with technology trends
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-body">
                  Collaborating with teams to deliver exceptional results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
