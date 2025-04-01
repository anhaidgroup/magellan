import React from "react";
import "./CaseStudies.css";

const CaseStudies = () => {
  return (
    <div>
      <section id="top" className="intro-section">
        <h1>Case Studies</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tristique feugiat convallis. Suspendisse elementum lorem nunc, in
          fermentum massa ultricies sed. Aenean libero lectus, finibus ac
          iaculis a, molestie et nibh. Nullam lobortis, lorem vitae tempus
          tristique, diam nisi aliquam libero, quis bibendum tortor neque in
          leo.
        </p>
      </section>

      <div className="case-studies-layout">
        <aside className="sidebar">
          <a href="#">↑ Back to Top</a>
          <a href="#case-a">
            <strong>Case Study A</strong>
          </a>
          <a href="#case-b">
            <strong>Case Study B</strong>
          </a>
        </aside>

        <main className="main-content">
          <section id="case-a" className="case-section">
            <h2>Case Study A</h2>
            <h4>Real-world deployment of PyMatcher</h4>
            <p>Insert table here</p>
          </section>

          <section id="case-b" className="case-section">
            <h2>Case Study B</h2>
            <h4>Real-world deployment of CloudMatcher</h4>
            <p>Insert table here</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CaseStudies;
