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
        these datasets here in the near future. Here is the{' '}
        <a href="https://pages.cs.wisc.edu/~anhai/data5/sparkly-datasets/sparkly-datasets.zip">
          datasets
        </a>{' '}
        used in the Sparkly VLDB-2023 paper.
      </p>
    </article>
  </Main>
);

export default Data;
