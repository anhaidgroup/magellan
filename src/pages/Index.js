import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';

const Index = () => (
  <Main description="Magellan's Research Website">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>Fast and Accurate Entity Matching with AI</h2>
          <br></br>
          <br></br>
          <p>
            <i>From research to real-world scale</i>
          </p>
        </div>
      </header>

      <p>
        Started in 2015, Magellan is a major R&D project at UW–Madison focused on entity matching (EM)—a foundational challenge in data science and AI that affects
        data integration, analytics, and downstream modeling.
      </p>

      <p>
        Our mission is to advance the science and practice of entity matching by building
        software, collaborating with real users, transferring technology to industry, and publishing
        high-impact research.
      </p>

      <p>
        Over the years, Magellan has produced <b>three major EM platforms</b> and{' '}
        <b>two startups</b>:
      </p>
      <ul>
        <li>
          <b>PyMatcher</b>
          <br></br>
          An on-premise Python platform for entity matching. PyMatcher has been widely used by
          researchers, domain scientists, and companies, and parts of it have been incorporated into
          several popular open-source systems.
        </li>
        <br></br>
        <li>
          <b>CloudMatcher</b>
          <br></br>A cloud-based, hands-off entity matching platform. CloudMatcher led to the
          founding of GreenBay Tech and its acquisition by Informatica in 2020. The technology was
          incorporated into multiple Informatica products and has served thousands of enterprise
          customers.
        </li>
        <br></br>
        <li>
          <b>SparkMatcher</b>
          <br></br>A distributed, Spark-based platform for large-scale entity matching. SparkMatcher
          can efficiently match <b>hundreds of millions of tuples</b>, combining scalable data
          processing with AI-driven matching techniques.
        </li>
      </ul>

      <p>
        Publications from the Magellan project have been cited thousands of times and have received Research Highlight Awards from both SIGMOD and Communications of the ACM (CACM).
      </p>

      <p>
        In 2025, the project inspired a new startup, <b>MadMatcher</b>, founded by Dev Ahluwalia, a
        CS graduate student at UW–Madison. MadMatcher builds on and extends SparkMatcher with Generative AI–based entity matching capabilities.
      </p>

      <p>
        <b>Looking for entity matching software?</b>
      </p>
      <ul>
        <li>
          For a polished, production-ready solution, check out <a href=madmatcher.ai>MadMatcher</a>.
        </li>
        <br></br>
        <li>
          For cutting-edge research prototypes and alpha-stage software, explore Magellan (this site).
        </li>
        <br></br>
        <li>
          Or contact us at{' '}
          <a href="mailto:entitymatchinginfo@gmail.com">entitymatchinginfo@gmail.com</a> to discuss
          your use case.
        </li>
      </ul>
    </article>
  </Main>
);

export default Index;
