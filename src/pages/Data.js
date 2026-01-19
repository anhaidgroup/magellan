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
          <h2>Data</h2>
        </div>
      </header>
      <p>
        Since the project’s inception, we have collected a large number of datasets for evaluating
        EM software. This includes BigGoat, our latest benchmark for scaling EM. We plan to list
        these datasets here in the near future.
      </p>
    </article>
  </Main>
);

export default Data;
