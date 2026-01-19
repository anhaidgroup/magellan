import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import lessons from '../data/lessons';
import Lesson from '../components/Lessons/Lesson';

const LessonsLearned = () => (
  <Main
    title="Lessons Learned"
    description="Insights from developing MagellanTech tools and deploying them in the real world."
  >
    <article className="post" id="lessons">
      <header>
        <div className="title">
          <h2>Lessons Learned</h2>
        </div>
      </header>
      <p>
        This page describes the main lessons learned from working with a wide variety of users, and
        how they have been driving the Magellan project.
      </p>
      <p>Scale Really Matters</p>
      <p>
        Many real users that we have worked with routinely must match tables of hundreds of millions
        of tuples, often at regular intervals (e.g., weekly or monthly). 500M tuples is not
        uncommon, and we have seen several cases of 1B+ tuples. They want blocking and matching
        tools that scale, that is, at least they can be applied to these tables and will run to
        completion. The reasoning is that if the tools cannot even complete (in a reasonable amount
        of time), then who cares about accuracy.
      </p>
    </article>
  </Main>
);

export default LessonsLearned;
