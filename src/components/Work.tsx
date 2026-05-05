import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const workFlexRef = useRef<HTMLDivElement | null>(null);
  const workSectionRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    if (isMobile || !workFlexRef.current || !workSectionRef.current) return;

    const workSection = workSectionRef.current;
    const workFlex = workFlexRef.current;

    const workBoxes = workFlex.querySelectorAll(".work-box");
    let totalWidth = 0;

    workBoxes.forEach((box: Element) => {
      totalWidth += (box as HTMLElement).getBoundingClientRect().width;
    });

    const scrollDistance = totalWidth - window.innerWidth;

    gsap.to(workFlex, {
      x: -1 * scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: workSection,
        start: "top top",
        end: () => `+=${scrollDistance + 320}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  // Scroll translation for mobile
  useEffect(() => {
    if (!isMobile || !workFlexRef.current) return;

    const container = workFlexRef.current;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => container.removeEventListener("wheel", handleWheel);
  }, [isMobile]);

  const projects = [
    {
      id: "01",
      name: "Sambhav",
      category: "Agentic AI Predictive Vehicle Maintenance System",
      description: [
        "Built a system that keeps track of a vehicle's health using 7 agents working together, all managed by a master agent which runs on a local machine via Ollama and connects to the phone through ngrok which also replans strategy up to three times if the customer declines service.  ",
        "The system uses ML and RAG to predict how much life is left in different parts of a vehicle, so issues can be caught before they turn into bigger problems. It pulls insights from live sensor data and old service records.",
        "Also built a dashboard, APIs, and a Flutter mobile app so users can easily see alerts, maintenance tips, and real-time stats on their phone and also  handles customer negotiation.",
      ],
      tools: "Llama 3 (Ollama), RAG, Python, Flutter, PostgreSQL",
      images: ["/images/sambhav_img.jpeg"],
      github: "https://github.com/Manav241105/SevaMeds",
    },
    {
      id: "02",
      name: "ARVista",
      category: "AR-based Tour Guide",
      description: [
        "Built an app that acts like a smart tour guide point your phone at a landmark and it recognizes using YOLOv8 and instantly shows you information about it in AR, right on your screen.",
        "Added voice interaction and a knowledge retrieval system so users can ask questions and get personalized trip recommendations based on what they're looking at.",
      ],
      tools: "AR, Flutter, YOLOv8, RAG",
      images: ["/images/ar_vista_img.jpeg"],
      github: "https://github.com/Manav241105/CyclePro",
    },
    {
      id: "03",
      name: "SevaMeds",
      category: "Flutter NGO App",
      description: [
        "Built an app that connects NGOs with patients to streamline medicine donations and healthcare access.",
        "Uses YOLO + OpenCV to scan and verify medicine labels, expiry, and authenticity in real time.",
        "Firebase backend handles auth, real-time inventory tracking, and push notifications.",
      ],
      tools: "Flutter, Firebase, YOLO, OpenCV, Python Flask",
      images: ["/images/project1.jpeg"],
      github: "https://github.com/Manav241105/SevaMeds",
    },
  ];

  return (
    <div className="work-section" id="work" ref={workSectionRef}>
      <div className="work-container section-container">
        <h1>
          My <span>Work</span>
        </h1>
        <div
          className={`work-flex ${isMobile ? "mobile-scroll" : ""}`}
          ref={workFlexRef}
        >
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                {project.description && (
                  <ul className="work-desc">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
                <div className="work-tools">
                  <h4>Tools</h4>
                  <p>{project.tools}</p>
                </div>
              </div>
              <div className="work-images">
                {project.images.map((img, index) => (
                  <WorkImage key={index} image={img} alt={`${project.name} ${index + 1}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
