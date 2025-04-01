import React from "react";
import "./LessonsLearned.css";

const LessonsLearned = () => {
  return (
    <div>
      <section id="top" className="intro-section">
        <h1>Lessons Learned</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tristique feugiat convallis. Suspendisse elementum lorem nunc, in
          fermentum massa ultricies sed. Aenean libero lectus, finibus ac
          iaculis a, molestie et nibh. Nullam lobortis, lorem vitae tempus
          tristique, diam nisi aliquam libero, quis bibendum tortor neque in
          leo.
        </p>
      </section>

      <div className="lessons-layout">
        <aside className="sidebar">
          <a href="#">↑ Back to Top</a>
          <a href="#lesson-1">
            <strong>Lesson 1</strong>
          </a>
          <a href="#lesson-2">
            <strong>Lesson 2</strong>
          </a>
          <a href="#lesson-3">
            <strong>Lesson 3</strong>
          </a>
        </aside>

        <main className="main-content">
          <section id="lesson-1" className="lesson-section">
            <h2>Lesson 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tristique feugiat convallis. Suspendisse elementum lorem nunc, in
              fermentum massa ultricies sed.
            </p>
          </section>

          <section id="lesson-2" className="lesson-section">
            <h2>Lesson 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tristique feugiat convallis. Suspendisse elementum lorem nunc, in
              fermentum massa ultricies sed.
            </p>
          </section>

          <section id="lesson-3" className="lesson-section">
            <h2>Lesson 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tristique feugiat convallis. Suspendisse elementum lorem nunc, in
              fermentum massa ultricies sed.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LessonsLearned;
