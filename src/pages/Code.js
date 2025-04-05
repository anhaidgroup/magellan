import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import Cell from '../components/Code/Cell';
import data from '../data/code';

const Code = () => (
  <Main title="Code" description="Explore MagellanTech’s matching libraries and tools.">
    <article className="post" id="code">
      <header>
        <div className="title">
          <h2>
            <Link to="/code">Code</Link>
          </h2>
          <p>A collection of our open-source entity matching tools and systems.</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Code;
