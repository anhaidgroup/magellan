import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const students = [
  {
    name: "Student 1",
    bio: "start-end",
    linkedin: "#",
    github: "#",
    email: "student@example.com",
  },
  {
    name: "Student 2",
    bio: "start-end",
    linkedin: "#",
    github: "#",
    email: "student@example.com",
  },
  {
    name: "Student 3",
    bio: "start-end",
    linkedin: "#",
    github: "#",
    email: "student@example.com",
  },
  {
    name: "Student 4",
    bio: "start-end",
    linkedin: "#",
    github: "#",
    email: "student@example.com",
  },
  {
    name: "Student 5",
    bio: "start-end",
    linkedin: "#",
    github: "#",
    email: "student@example.com",
  },
];

const About = () => {
  return (
    <div className="about-page">
      <section id="top" className="intro-section">
        <h1>About</h1>
        <p>
          This project has existed for x years. Here is some information about
          the people who have contributed to this project over time.
        </p>
      </section>
      <div className="students-grid">
        {students.map((student, index) => (
          <div key={index} className="student-card">
            <div className="image-container">
              <img src="/placeholder_image.png" alt={student.name} />
              <div className="hover-overlay">
                <a
                  href={student.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href={student.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href={`mailto:${student.email}`} aria-label="Email">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
            <div className="student-info">
              <h4>{student.name}</h4>
              <p>{student.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
