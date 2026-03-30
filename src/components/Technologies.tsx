import { useState } from "react";
import { AnimatedSection, ScaleIn } from "@/components/AnimatedSection";

const tabs = ["Web", "Mobile", "Desktop", "Cloud", "Databases"];

const techData: Record<string, { backend: { name: string; letter: string; color: string }[]; frontend: { name: string; letter: string; color: string }[] }> = {
  Web: {
    backend: [
      { name: "Java", letter: "☕", color: "#ED8B00" },
      { name: "C++", letter: "C+", color: "#00599C" },
      { name: "Python", letter: "🐍", color: "#3776AB" },
      { name: "PHP", letter: "PHP", color: "#777BB4" },
      { name: ".NET", letter: "N", color: "#512BD4" },
    ],
    frontend: [
      { name: "HTML5", letter: "H5", color: "#E34F26" },
      { name: "Angular", letter: "A", color: "#DD0031" },
      { name: "React", letter: "⚛", color: "#61DAFB" },
      { name: "JavaScript", letter: "JS", color: "#F7DF1E" },
      { name: "React Native", letter: "⚛", color: "#61DAFB" },
    ],
  },
};

const Technologies = () => {
  const [active, setActive] = useState("Web");
  const data = techData[active] || techData.Web;

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Technologies <span className="text-secondary italic">We Work With</span>
          </h2>
          <p className="text-primary-foreground/70 mt-3 max-w-lg mx-auto text-sm">
            We work with a modern tech stack to deliver fast,
            secure, and scalable digital solutions.
          </p>
        </AnimatedSection>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-0 mb-10 bg-primary/50 rounded-full max-w-2xl mx-auto border border-primary/40 overflow-hidden">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-6 py-3 text-sm font-medium transition-all flex-1 ${
                active === t
                  ? "bg-secondary text-secondary-foreground rounded-full"
                  : "text-primary-foreground hover:bg-primary/30"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Backend */}
        <div className="mb-8">
          <h3 className="text-primary-foreground font-bold text-sm mb-4">Backend</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {data.backend.map((tech, i) => (
              <ScaleIn key={`b-${active}-${i}`} delay={i * 0.06}>
                <div className="bg-white rounded-xl p-4 flex items-center justify-center h-20 hover:scale-105 transition-transform duration-300 shadow-sm">
                  <span className="text-2xl font-bold" style={{ color: tech.color }}>
                    {tech.letter}
                  </span>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div>
          <h3 className="text-primary-foreground font-bold text-sm mb-4">Frontend</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {data.frontend.map((tech, i) => (
              <ScaleIn key={`f-${active}-${i}`} delay={i * 0.06}>
                <div className="bg-white rounded-xl p-4 flex items-center justify-center h-20 hover:scale-105 transition-transform duration-300 shadow-sm">
                  <span className="text-2xl font-bold" style={{ color: tech.color }}>
                    {tech.letter}
                  </span>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
