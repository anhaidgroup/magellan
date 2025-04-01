import React from "react";
import "./Data.css";

const Data = () => {
  return (
    <div>
      <section id="top" className="intro-section">
        <h1>Data</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tristique feugiat convallis. Suspendisse elementum lorem nunc, in
          fermentum massa ultricies sed. Aenean libero lectus, finibus ac
          iaculis a, molestie et nibh. Nullam lobortis, lorem vitae tempus
          tristique, diam nisi aliquam libero, quis bibendum tortor neque in
          leo.
        </p>
      </section>

      <div className="data-layout">
        <aside className="sidebar">
          <a href="#">↑ Back to Top</a>
          <a href="#em-datasets">
            <strong>All EM Datasets</strong>
          </a>
          <a href="#biggoat">
            <strong>BigGoat Benchmark</strong>
          </a>
        </aside>

        <main className="main-content">
          <section id="em-datasets" className="dataset-section">
            <h2>All EM Datasets</h2>
            <p>
              A collection of our datasets used for testing our entity mathcing solutions.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="dataset-link"
            >
             Download Dataset
            </a>
          </section>

          <section id="biggoat" className="dataset-section">
            <h2>BigGoat Benchmark</h2>
            <p>
              A benchmark dataset we have developed to compare entity matching solutions.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="dataset-link"
            >
              View & Download Dataset
            </a>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Data;
