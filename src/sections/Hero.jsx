import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    // Only run animations on non-mobile devices for better performance
    if (!isMobile) {
      gsap.fromTo(
        ".hero-text h1",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
      );
      
      gsap.fromTo(
        ".hero-description",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.5, ease: "power2.out" }
      );
      
      gsap.fromTo(
        ".hero-button",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power2.out" }
      );
    }
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Transforming
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="icon"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Innovative</h1>
              <h1>Digital Solutions</h1>
            </div>

            <p className="hero-description text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm <span className="text-blue-400 font-semibold">Malcom Chiaji</span>, a passionate software developer based in Nairobi, Kenya. I specialize in creating cutting-edge web and mobile applications that solve real-world problems.
            </p>

            <div className="hero-button flex justify-start">
              <Button
                text="View My Projects"
                className="md:w-1/3 md:h-16 w-2/3 h-14"
                id="counter"
                target="work"
              />
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
                         {/* Mobile fallback */}
                           <div className="md:hidden flex items-center justify-center h-full w-full">
                <div className="text-center w-full">
                  <div className="w-full h-96 mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src="/images/Screenshot 2025-08-15 145756.png" 
                      alt="Innovation" 
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
