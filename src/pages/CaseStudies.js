import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import caseData from '../data/caseStudies';
import Case from '../components/CaseStudies/Case';

const CaseStudies = () => (
  <Main title="Case Studies" description="Real-world examples of MagellanTech deployments.">
    <article className="post" id="case-studies">
      <header>
        <div className="title">
          <h2>
            <Link to="/case-studies">Case Studies</Link>
          </h2>
          <p>
            Real-world performance of PyMatcher, CloudMatcher, and other EM tools on large-scale
            data challenges.
          </p>
        </div>
      </header>

      {caseData.map((caseItem) => (
        <Case key={caseItem.id} data={caseItem} />
      ))}
    </article>
  </Main>
);

export default CaseStudies;
