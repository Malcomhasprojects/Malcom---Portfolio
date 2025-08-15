import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".skill-category",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".skill-item",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
        },
      }
    );
  });

  return (
    <section id="skills" className="skills-section py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-green-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks that enable me to 
            create innovative solutions across multiple platforms and domains.
          </p>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div
              key={index}
              className="skill-category group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {category.category}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>

              <div className="space-y-3">
                {category.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item flex items-center justify-between p-3 bg-gray-700/30 rounded-lg border border-gray-600/30 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10"
                  >
                    <span className="text-gray-200 font-medium">{skill}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-400">Proficient</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Additional <span className="text-blue-400">Capabilities</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Problem Solving",
                "Team Collaboration",
                "Agile Development",
                "API Integration",
                "Database Design",
                "UI/UX Design",
                "Testing & Debugging",
                "Performance Optimization"
              ].map((capability, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-600/30 rounded-lg border border-gray-500/30 hover:border-blue-500/50 hover:bg-gray-600/50 transition-all duration-300"
                >
                  <span className="text-gray-200 text-sm font-medium">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg mb-6">
            Ready to bring your ideas to life? Let's discuss your project!
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
            Get In Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
