import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description="Magellan Tech's Research Website">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Magellan Tech</Link>
          </h2>
          <p>
            Entity Matching meets real-world deployment: open-source tools, success stories, and
            evolving lessons from the field.
          </p>
        </div>
      </header>

      <section>
        <h3>What is new</h3>
        <p>
          We have our SparkMatcher package for deployment on Apache Spark clusters. Check the{' '}
          <Link to="/code">Code</Link> section to explore the repository and try it out!
        </p>
      </section>

      <section>
        <h3>What This Project Is About</h3>
        <p>
          Entity Matching connects similar records across different datasets. This project blends
          research and industrial practice, originating back in <em>[insert year]</em>. Head over to
          the <Link to="/lessonslearned">Lessons Learned</Link> section to trace our journey.
        </p>
      </section>

      <section>
        <h3>Success Stories</h3>
        <p>Users with large datasets have tried, and seen success, with our solutions.</p>
      </section>

      <section>
        <h3>What You Can Do</h3>
        <ul>
          <li>
            <strong>Researcher:</strong> Understand how our solutions work internally through our
            publications.
          </li>
          <li>
            <strong>Learner:</strong> Check out repositories and give them a try with our example
            datasets, or explore our <Link to="/casestudies">case studies</Link>.
          </li>
          <li>
            <strong>Customer:</strong> Check out our <Link to="/code">repositories</Link>, and
            contact xyz for any help.
          </li>
        </ul>
      </section>

      <section>
        <h3>Contact Us</h3>
        <p>
          Have questions or want to collaborate? Visit our <Link to="/contact">Contact</Link> page
          to reach out.
        </p>
      </section>
    </article>
  </Main>
);

export default Index;
