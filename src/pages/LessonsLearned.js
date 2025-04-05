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
          <h2>
            <Link to="/lessons-learned">Lessons Learned</Link>
          </h2>
          <p>
            Real-world development and deployment taught us a lot — here are some lessons that
            stuck.
          </p>
        </div>
      </header>

      {lessons.map((lesson) => (
        <Lesson key={lesson.id} data={lesson} />
      ))}
    </article>
  </Main>
);

export default LessonsLearned;
