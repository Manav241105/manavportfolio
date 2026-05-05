import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Information Technology</h4>
                <h5>Shri Bhagubhai Mafatlal Polytechnic</h5>
              </div>
              <h3>  2021–2024</h3>
            </div>
            <p>
              Completed coursework in software development, databases, and web technologies, forming a strong foundation for
              full-stack engineering and real-world applications.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Dcyber Techlab</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed responsive and reusable React.js components, enhancing UI consistency and cross-device compatibility
              across the platform.
            </p>
          </div>



          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science with Data Science</h4>
                <h5>Dwarkadas J. Sanghvi College of Engineering</h5>
              </div>
              <h3>2024-2027</h3>
            </div>
            <p>
              Pursuing in-depth knowledge in data science and core computer science subjects with a focus on machine learning,
              system design, and software engineering practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
