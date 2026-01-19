import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import Cell from '../components/Code/Cell';
import data from '../data/code';

const Software = () => (
  <Main title="Software" description="Explore MagellanTech’s matching libraries and tools.">
    <article className="post" id="software">
      <header>
        <div className="title">
          <h2>Software</h2>
        </div>
      </header>

      <h3>SparkMatcher (2023 - Present)</h3>
      <p>
        SparkMatcher is our latest and most advanced EM platform. It provides blocking and matching
        tools that scale to hundreds of millions of tuples using Spark and AI.{' '}
      </p>
      <p>
        SparkMatcher consists of four open-source packages designed to support end-to-end EM
        workflows at scale.
      </p>
      <p>
        The following packages support the <b>blocking</b> step:
      </p>
      <ul>
        <li>
          <a href="https://github.com/anhaidgroup/sparkly">Sparkly</a>: Uses TF/IDF–based similarity
          to block, and has been shown to outperform many state-of-the-art blocking approaches in
          accuracy.
        </li>
        <li>
          <a href="https://github.com/anhaidgroup/delex">Delex</a>: Allows users to combine multiple
          blocking strategies within a single workflow. It provides a declarative language for
          specifying blocking rules. Delex is currently in beta testing, and we are actively seeking
          users interested in trying it with support from our team.
        </li>
      </ul>
      <p>
        The following packages support the <b>matching</b> step:
      </p>
      <ul>
        <li>
          <a href="https://github.com/MadMatcher/MadLib">MadLib</a>: A library for experimenting
          with a wide range of EM workflows across different runtime environments. It provides
          modular components that can be composed into flexible matching pipelines, with a primary
          focus on the matching step. Support for blocking workflows is planned for future releases.
          MadLib is hosted at <a href="https://madmatcher.ai">MadMatcher</a>, a recent EM startup.
        </li>
        <li>
          <a href="https://github.com/anhaidgroup/active_matcher">ActiveMatcher</a>: Uses active
          learning to train high-accuracy matchers with minimal manual labeling. It automatically
          selects informative tuple pairs for labeling and scales to very large candidate sets
          produced by blocking, often containing hundreds of millions of pairs. ActiveMatcher is
          currently in beta testing.
        </li>
      </ul>

      <h3>PyMatcher (2015 - 2025)</h3>
      <p>
        PyMatcher is an EM platform built on Python data science libraries (e.g., pandas, sklearn)
        and designed to run on a single machine. It targets small to medium-sized tables—typically
        up to a few million tuples per table. PyMatcher provides tools for sampling data, using
        those samples to design accurate EM pipelines, and then applying the pipelines to match the
        full tables.
      </p>
      <p>PyMatcher consists of three open-source Python packages</p>
      <ul>
        <li>
          <a href="https://sites.google.com/site/anhaidgroup/current-projects/magellan/py_stringmatching?authuser=0">
            py_stringmatching
          </a>
          : Implements a wide range of string tokenizers and string similarity functions.
        </li>
        <li>
          <a href="https://sites.google.com/site/anhaidgroup/current-projects/magellan/py_stringsimjoin?authuser=0">
            py_strsimjoin
          </a>
          : Efficiently finds all matching string pairs between two large sets of strings, using
          py_stringmatching.
        </li>
        <li>
          <a href="https://sites.google.com/site/anhaidgroup/current-projects/magellan/py_entitymatching?authuser=0">
            py_entitymatching
          </a>
          : Performs entity matching between two tables by identifying all matching tuple pairs,
          building on the above two packages.
        </li>
      </ul>

      <h3>Other Software</h3>
      <p>
        CloudMatcher (2017-2019) is a cloud-based EM software. It was acquired by Informatica in
        2020.
      </p>
      <p>
        <a href="https://github.com/anhaidgroup/deepmatcher">DeepMatcher</a> (2018) is an EM
        software that uses deep learning. It is designed primarily for researchers to run EM
        experiments, and is no longer maintained. If interested in deep learning based EM, you can
        consider <a href="https://github.com/megagonlabs/ditto">Ditto</a>, developed by the Megagon
        Labs.
      </p>
    </article>
  </Main>
);

export default Software;
