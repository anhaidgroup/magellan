import React from "react";
import "./Code.css";
import { FaGithub } from "react-icons/fa";

const Code = () => {
  return (
    <div>
      <section id="top" className="intro-section">
        <h1>Code</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tristique feugiat convallis. Suspendisse elementum lorem nunc, in
          fermentum massa ultricies sed. Aenean libero lectus, finibus ac
          iaculis a, molestie et nibh. Nullam lobortis, lorem vitae tempus
          tristique, diam nisi aliquam libero, quis bibendum tortor neque in
          leo.
        </p>
      </section>

      <div className="code-layout">
        <aside className="sidebar">
          <a href="#">↑ Back to Top</a>
          <a href="#pymatcher">
            <strong>PyMatcher</strong>
          </a>
          <a href="#sparkmatcher">
            <strong>SparkMatcher</strong>
          </a>
          <a href="#cloudmatcher">
            <strong>CloudMatcher</strong>
          </a>
        </aside>

        <main className="main-content">
          <section id="pymatcher" className="section-content">
            <h2>PyMatcher</h2>
            <p>A package for string matching in Python</p>
            <ul className="subitem-list">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  py-str <FaGithub />
                </a>
              </li>
              
            </ul>
          </section>

          <section id="sparkmatcher" className="section-content">
            <h2>SparkMatcher</h2>
            <p>Packages for Entitiy Matching using a Spark Cluster.</p>
            <ul className="subitem-list">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sparkly <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Delex <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ActiveMatcher <FaGithub />
                </a>
              </li>
            </ul>
          </section>

          <section id="cloudmatcher" className="section-content">
            <h2>CloudMatcher</h2>
            <p>
              A solution for entity matching using cloud. Acquired by Informatica. 
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Code;
