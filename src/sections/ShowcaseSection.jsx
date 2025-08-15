import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const propertyRef = useRef(null);
  const emergencyRef = useRef(null);
  const resourceRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [propertyRef.current, emergencyRef.current, resourceRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={propertyRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/property-management-new.png" alt="Property Management System Interface" />
            </div>
            <div className="text-content">
              <h2>
                Property Management System - Comprehensive Tenant & Payment Management Solution
              </h2>
              <p className="text-white-50 md:text-xl">
                A full-featured property management platform built with Flutter and Firebase, featuring tenant management, rent tracking, and automated payment systems.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={emergencyRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/emergency-app-new.jpg"
                  alt="Emergency Response App"
                />
              </div>
              <h2>Emergency Response Application</h2>
            </div>

            <div className="project" ref={resourceRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/resource-sharing.jpg" alt="Resource Sharing Platform" />
              </div>
              <h2>Online Resource Sharing Center</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
