import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';

const Contact = () => (
  <Main title="Contact" description="Contact Magellan Tech via email @ example@example.com">
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email us at: </p>
        <EmailLink email="example@example.com" />
      </div>
    </article>
  </Main>
);

export default Contact;
