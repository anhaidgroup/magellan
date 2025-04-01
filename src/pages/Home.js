import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section id="top" className="intro-section">
        <h1>MagellanTech</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tristique feugiat convallis. Suspendisse elementum lorem nunc, in
          fermentum massa ultricies sed. Aenean libero lectus, finibus ac
          iaculis a, molestie et nibh. Nullam lobortis, lorem vitae tempus
          tristique, diam nisi aliquam libero, quis bibendum tortor neque in
          leo.
        </p>
      </section>

      <div className="home-layout">
        <aside className="sidebar">
          <a href="#">↑ Back to Top</a>
          <a href="#whats-new">
            <strong>What's New</strong>
          </a>
          <a href="#about-project">
            <strong>About Project</strong>
          </a>
          <a href="#success-stories">
            <strong>Success Stories</strong>
          </a>
          <a href="#what-you-can-do">
            <strong>What You Can DoAbout Project</strong>
          </a>
          <a href="#contact-us">
            <strong>Contact Us</strong>
          </a>
        </aside>

        <main className="main-content">
          <section id="whats-new" className="home-section">
            <h2>What's New</h2>
            <p>
              We have recently open-sourced our SparkMatcher package. This
              package is meant for deployment on a Spark cluster. Head over to
              the "Code" section to check out the repo and give it a try!
            </p>
          </section>

          <section id="about-project" className="home-section">
            <h2>What This Project Is About</h2>
            <p>
              Entity Matching helps connect matching records from multiple
              datasets. Our project uses both research and industry principles
              to guide our design. The MagellanTech project started back in
              __________ and has continued to this day. Visit the "Lessons
              Learned" tab to learn about the evolution of this project.
            </p>
          </section>

          <section id="success-stories" className="home-section">
            <h2>Success Stories</h2>
            <p>
              Users with large datasets have tried, and seen success, with our
              solutions.
            </p>
          </section>

          <section id="what-you-can-do" className="home-section">
            <h2>What You Can Do</h2>
            <div className="audience-grid">
              <div className="audience-box">
                <h3>🧪 Researcher</h3>
                <p>
                  Understand how our solutions work internally through our
                  publications.
                </p>
              </div>
              <div className="audience-box">
                <h3>📘 Learner</h3>
                <p>
                  Check out repositories and give them a try with our example
                  datasets, or explore our case studies.
                </p>
              </div>
              <div className="audience-box">
                <h3>🏢 Customer</h3>
                <p>Check out our repositories, and contact xyz for any help.</p>
              </div>
            </div>
          </section>

          <section id="contact-us" className="home-section contact-section">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Message:
                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows="5"
                  required
                />
              </label>

              <button type="submit">Send Message</button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
