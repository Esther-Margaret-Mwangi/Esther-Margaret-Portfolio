import esther from "../assets/esther1.jpeg";
const AboutSection = () => {
  const handleDownloadCV = () => {
    const cvUrl = "/Esther Margaret CV(2).pdf";
    window.open(cvUrl, "_blank");
  };
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-medium">~ About Me</span>
          <h2 className="heading-secondary mb-4">Who is Esther Mwangi?</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-strong">
              <img
                src={esther}
                alt="Esther Margaret Wairimu Mwangi - Software Developer & UI/UX Designer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
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

            <div className="grid grid-cols-3 gap-6 my-8">
              <div className="text-center card-gradient p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">13+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div className="text-center card-gradient p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">
                  Technologies Mastered
                </div>
              </div>
              <div className="text-center card-gradient p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">3+</div>
                <div className="text-sm text-muted-foreground">
                  Years of Experience
                </div>
              </div>
            </div>

            <div className="pt-4  text-center">
              <button
                onClick={handleDownloadCV}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Download My CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
