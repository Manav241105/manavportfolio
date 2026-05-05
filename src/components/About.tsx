import "./styles/About.css";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!aboutRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".about-me", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-section" id="about" ref={aboutRef}>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm Manav Parekh, a Computer Science student specializing in Data Science.
          I’ve built full-stack and AI-powered applications using React, Python, and Flutter.
        </p>
        <p className="para">
          With experience from internship at Dcyber Techlab,
          I enjoy creating practical tech solutions that solve real-world problems.
        </p>
      </div>
    </div>
  );
};

export default About;
