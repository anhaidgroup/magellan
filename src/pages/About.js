import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import students from '../data/students';
import Student from '../components/About/Student';

const About = () => (
  <Main title="About" description="Who worked on this project and what we learned along the way.">
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2>
            <Link to="/about">About</Link>
          </h2>
          <p>
            This project has existed for x years. Here is some information about the people who
            contributed to it over time.
          </p>
        </div>
      </header>

      <div
        className="projects-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem',
          justifyItems: 'center',
        }}
      >
        {students.map((student) => (
          <Student key={student.name} data={student} />
        ))}
      </div>
    </article>
  </Main>
);

export default About;
