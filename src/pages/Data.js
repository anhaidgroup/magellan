import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import Cell from '../components/Data/Cell';
import datasets from '../data/datasets';

const Data = () => (
  <Main title="Data" description="Explore datasets used for entity matching research.">
    <article className="post" id="data">
      <header>
        <div className="title">
          <h2>
            <Link to="/data">Data</Link>
          </h2>
          <p>Benchmarks and datasets powering the MagellanTech entity matching solutions.</p>
        </div>
      </header>
      {datasets.map((item) => (
        <Cell key={item.title} data={item} />
      ))}
    </article>
  </Main>
);

export default Data;
