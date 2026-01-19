import React from 'react';

import Main from '../layouts/Main';

const Users = () => (
  <Main title="Users" description="Users of Magellan's software and services.">
    <article className="post" id="users">
      <header>
        <div className="title">
          <h2>Users</h2>
        </div>
      </header>

      <p>
        Since the early days of the Magellan project, we have worked closely with a wide range of
        users and learned extensively from these collaborations. This page highlights several
        notable use cases.
      </p>

      <h3>Domain Science Users</h3>
      <p>
        Our domain science users include teams in applied economics, geography, biomedicine, and
        environmental sciences. Notable examples include:
      </p>
      <ul>
        <li>
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/umetrics-edbt19.pdf">This paper</a>{' '}
          describes the use of PyMatcher to match grant records by applied economists at UW–Madison.
        </li>
        <li>
          Appendix B of{' '}
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/magellan-sigmod19.pdf">this paper</a>{' '}
          describes the use of PyMatcher to match cattle ranches as part of a project aimed at
          reducing deforestation in the Amazon in Brazil.
        </li>
        <li>
          We have also worked extensively with environmental scientists, particularly at the
          Limnology Center at UW–Madison. A description of this work will be added in the future.
        </li>
      </ul>

      <h3>Industrial Users</h3>
      <p>
        Our industrial users include Walmart, Megagon Labs, Johnson Controls, Marshfield Clinic, UW
        Health, and American Family Insurance. Notable examples include:
      </p>
      <ul>
        <li>
          <a href="https://medium.com/amfam/in-data-science-the-insurance-industry-reaches-for-the-sky-74aa78ac6904">
            This article
          </a>{' '}
          describes the use of CloudMatcher at American Family Insurance.
        </li>
        <li>
          The paper "Entity Matching Using Magellan: Matching Drug Reference Tables, Eric R. LaRose,
          Jonathan C. Badger, Pradap Konda, AnHai Doan, Peggy L. Peissig, CRI-2017" describes
          describes the use of PyMatcher at Marshfield Clinic.
        </li>
      </ul>

      <h3>GreenBay and Informatica</h3>
      <p>
        Through our work at the startup GreenBay Tech and later at Informatica, we collaborated with
        tens of industrial users across the United States, France, and Japan, and discussed entity
        matching needs with hundreds more. We summarize key lessons learned from these engagements
        on <a href="./lessonslearned">this page</a>.
      </p>
    </article>
  </Main>
);

export default Users;
