import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Animate timeline cards
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    // Animate timeline height
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Animate experience text
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");

    // Animate section title
    gsap.fromTo(
      ".experience-title",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".experience-title",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="w-full h-full md:px-20 px-5">
        <div className="experience-title text-center mb-16">
          <TitleHeader
            title="Professional Journey"
            sub="🚀 My career path and professional growth"
          />
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-6">
            From internships to professional development, each experience has shaped my 
            technical skills and problem-solving approach.
          </p>
        </div>

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div className="relative group bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-3xl">🏢</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white">{card.company}</h3>
                      </div>
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img 
                          src={card.logoPath} 
                          alt="logo" 
                          className="w-16 h-16 rounded-xl shadow-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-4">
                          <h1 className="font-bold text-3xl text-white mb-2">
                            {card.title}
                          </h1>
                          <p className="text-blue-400 font-semibold text-lg mb-1">
                            {card.company}
                          </p>
                          <p className="text-gray-400 text-sm">
                            🗓️ {card.date}
                          </p>
                        </div>
                        
                        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                          <p className="text-gray-300 italic mb-3 text-sm">
                            💡 {card.review}
                          </p>
                        </div>

                        <div className="mt-6">
                          <p className="text-blue-400 font-semibold mb-3">
                            🎯 Key Responsibilities
                          </p>
                          <ul className="space-y-3">
                            {card.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="text-gray-300 text-base flex items-start gap-3">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for the Next Chapter
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always looking for new challenges and opportunities to grow. 
              Let's discuss how we can work together on your next project.
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
              Let's Connect
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
