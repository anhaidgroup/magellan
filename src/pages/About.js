import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import examplepic from '../images/magellan_tech_about_image.png';

const About = () => (
  <Main title="About" description="About MagellanTech.">
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2>About</h2>
        </div>
      </header>

      <h3>Entity Matching</h3>
      <span className="image right">
        <img src={examplepic} alt="Diagram illustrating blocking and matching in entity matching" />
      </span>
      <p>
        Entity Matching (EM) is the problem of finding data instances that refer to the same
        real-world entity. For example, given the two tables A and B shown HERE, find all tuple
        pairs (a in A, b in B) that match, such as (Dave Smith, Madison, WI) and (David D. Smith,
        Madison, WI). We call these pairs <b>matches</b>.
      </p>
      <p>
        EM arises frequently in data science and AI. Many projects must integrate multiple datasets
        into a single clean unified dataset before analysis or model training can take place.
        Solving the entity matching problem is often a necessary step in this integration process.
      </p>
      <p>
        The EM problem is challenging for two main reasons. First, matching instances may be
        represented in different ways—using different names, formats, or levels of detail—making{' '}
        <b>high-accuracy matching</b> difficult. Second, real-world datasets are often very large:
        tables commonly contain hundreds of millions of tuples, which makes achieving{' '}
        <b>reasonable runtime and scalability</b> a major challenge.
      </p>

      <h3>Blocking and Matching</h3>
      <p>
        For large tables, considering all possible pairs between tables A and B is computationally
        infeasible. As a result, entity matching is typically performed in two stages: blocking and
        matching. (The Magellan project develops software that supports both stages.)
      </p>
      <p>
        In the <b>blocking</b> stage, inexpensive heuristics are used to quickly eliminate the vast
        majority of tuple pairs that are unlikely to match. The goal is to dramatically reduce the
        search space while retaining most true matches.
      </p>
      <p>
        In the <b>matching</b> stage, a more expensive rule-based or machine-learning–based matcher
        is applied to the remaining candidate pairs to predict whether each pair is a match or a
        non-match.
      </p>
      <p>
        For example, in the figure above, the blocking step retains only pairs that share the same
        state (which can be done efficiently using an index on the State column). The matching step
        then applies a matcher that correctly predicts pairs (a1,b1) and (a3,b2​) as matches.
      </p>

      <h3>Variations of EM and Related Problems</h3>
      <p>
        Variations of EM are known as <b>entity resolution, record linkage, deduplication,</b> and
        more. We use the term <b>entity matching</b> because it emphasizes the common structure
        shared by these tasks and aligns with a broader set of related problems whose names end with{' '}
        <i>matching</i>.
      </p>
      <p>
        Specifically, <b>string matching</b> finds strings that refer to the same real-world
        concept, such as "UW-Madison" and "Univ of Wisc Madison". <b>Schema matching</b> finds
        similar columns across tables, such as "address" and "location". <b>Ontology matching</b>{' '}
        finds similar concepts across ontologies, such as "car" and "automobile". Other related
        problems include matching between ontology concepts and table columns, matching tables, and
        more.
      </p>
      <p>
        While Magellan is designed primarily for EM, it can also be used for these related matching
        problems.
      </p>

      <h3>The Magellan Project</h3>
      <p>
        The Magellan project was launched in 2015 at the University of Wisconsin–Madison. At the
        time, despite a large body of research on entity matching, we found little{' '}
        industrial-strength software that could be readily used in practice. Our goal has therefore
        been to develop <b>open-source, production-quality entity matching software</b>, evaluate it
        through collaborations with real users, use this feedback to refine the software, and
        publish the resulting findings.
      </p>
      <p>
        A central objective of Magellan is to release EM software that achieves widespread adoption.
        While publishing research is an important part of the project, it is viewed as a consequence
        of executing this iterative software–user–refinement cycle, rather than an end in itself.
      </p>

      <h3>Team and Contact</h3>
      <p>
        Many people have contributed to the Magellan project over the years. A list of contributors
        can be found in the <a href="./research">Research</a> section of this website.
      </p>
      <p>
        For inquiries or collaboration requests, please contact us at{' '}
        <a href="mailto:entitymatchinginfo@gmail.com">entitymatchinginfo@gmail.com</a>.
      </p>
    </article>
  </Main>
);

export default About;
