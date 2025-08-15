import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TitleHeader = ({ title, sub }) => {
  useGSAP(() => {
    gsap.fromTo(
      ".title-header-badge",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    gsap.fromTo(
      ".title-header-title",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power2.out" }
    );
  });

  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <div className="title-header-badge bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 py-3 px-6 rounded-full">
        <p className="text-blue-400 font-medium text-sm md:text-base">
          {sub}
        </p>
      </div>
      <div className="title-header-title">
        <h1 className="font-bold md:text-5xl text-3xl lg:text-6xl bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
