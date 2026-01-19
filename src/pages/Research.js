import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Research = () => (
  <Main title="Research" description="The research projects under Magellan's umbrella.">
    <article className="post" id="research">
      <header>
        <div className="title">
          <h2>Research</h2>
        </div>
      </header>

      <p>
        This page describes the research projects that fall under the Magellan umbrella. If you have
        worked on one of these projects and your name is not listed, please accept our apologies and
        let us know.
      </p>

      <h3>SparkMatcher (2023 - Present)</h3>
      <p>
        This is our latest and most advanced EM platform. It provides blocking and matching tools
        that scale to hundreds of millions of tuples using Spark and AI.
      </p>
      <p>Papers</p>
      <ul>
        <li>
          Sparkly: A Simple yet Surprisingly Strong TF/IDF Blocker for Entity Matching, D. Paulsen,
          Y. Govind, A. Doan. VLDB-23.
        </li>
      </ul>
      <p>Software</p>
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

      <p>Users</p>
      <ul>
        <li>
          A variant of Sparkly has been integrated into widely used industrial EM software and is
          currently used by hundreds of customers.
        </li>
        <li>
          MadLib has been used to build matchers for the{' '}
          <a href="https://edirepository.org/">Environmental Data Initiative (EDI)</a>, a major data
          lake serving environmental scientists.
        </li>
      </ul>

      <p>Data</p>
      <ul>
        <li> BigGoat: A benchmark for evaluating the scalability of blocking methods.</li>
      </ul>

      <p>Startup</p>
      <ul>
        <li>
          <a href="https://madmatcher.ai">MadMatcher</a>: Founded by Dev Ahluwalia (2025 - Present)
        </li>
      </ul>

      <p>Team </p>
      <ul>
        <li>Dev Ahluwalia, Derek Paulsen, Yash Govind, Anson Doan</li>
      </ul>

      <h3>CloudMatcher (2017-2019)</h3>
      <p>
        CloudMatcher is a hands-off, self-service, cloud-based EM platform. Users upload two tables
        to be matched and label a small number of tuple pairs as match or no-match. The system then
        automatically performs blocking and matching using the labeled data and outputs the
        resulting matches. This design enables business users to perform EM with minimal technical
        expertise. CloudMatcher was acquired by Informatica in 2020.
      </p>

      <p>Papers</p>
      <ul>
        <li>
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/cloudmatcher-demo-vldb18.pdf">
            CloudMatcher: A Hands-Off Cloud/Crowd Service for Entity Matching
          </a>
          , Y. Govind, E. Paulson, P. Nagarajan, P. Suganthan G.C., A. Doan, Y. Park, G. Fung, D.
          Conanthan, M. Carter, M. Sun. VLDB-18. Demo paper.
        </li>
        <li>
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/cloudmatcher-bigdas17.pdf">
            CloudMatcher: A Cloud/Crowd Service for Entity Matching
          </a>
          , Y. Govind, E. Paulson, M. Ashok, P. Suganthan G.C., A. Hitawala, A. Doan, Y. Park, P.
          Peissig, E. LaRose, J. Badger. BIGDAS Workshop @ KDD-17.{' '}
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/cloudmatcher-bigdas17.pptx">slides</a>
        </li>
      </ul>

      <p>Software</p>
      <ul>
        <li>
          CloudMatcher (no longer available,{' '}
          <a href="https://www.prnewswire.com/news-releases/informatica-acquires-greenbay-technologies-to-advance-ai-and-machine-learning-capabilities-301113629.html">
            acquired
          </a>{' '}
          by Informatica in 2020)
        </li>
      </ul>

      <p>Users</p>
      <ul>
        <li>
          CloudMatcher was used by several domain science teams, hospitals, and companies. See Table
          2 of{' '}
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/magellan-sigmod19.pdf">this paper </a>{' '}
          for details.
        </li>
        <li>
          <a href="https://medium.com/amfam/in-data-science-the-insurance-industry-reaches-for-the-sky-74aa78ac6904">
            This article
          </a>{' '}
          describes how CloudMatcher was used at American Family Insurance.
        </li>
      </ul>

      <p>Startup</p>
      <ul>
        <li>
          GreenBay Technologies: Co-founded by AnHai Doan, Yash Govind, Derek Paulsen (2019 - 2020)
        </li>
      </ul>

      <p>Team</p>
      <ul>
        <li>
          Yash Govind, Erik Paulson, Derek Paulsen, P. Nagarajan, Paul Suganthan GC, Mukilan Ashok,
          A. Hitawala
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
      <p>Papers that describe the overall vision, progress, and demos</p>
      <ul>
        <li>
          <a href="https://pages.cs.wisc.edu/~anhai/papers/magellan-vldb16.pdf">
            Magellan: Toward Building Entity Matching Management Systems
          </a>
          , P. Konda, S. Das, P. Suganthan G.C., A. Doan, A. Ardalan, J. R. Ballard, H. Li, F.
          Panahi, H. Zhang, J. Naughton, S. Prasad, G. Krishnan, R. Deep, V. Raghavendra. VLDB-16,{' '}
          <a href="https://pages.cs.wisc.edu/~anhai/papers/magellan-tr.pdf">extended version</a>,{' '}
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/magellan-vldb16.pptx">slides.</a>
        </li>
        <li>
          <a href="https://pages.cs.wisc.edu/~anhai/papers/magellan-demo-vldb16.pdf">
            Magellan: Toward Building Entity Matching Management Systems over Data Science Stacks
          </a>
          , P. Konda, S. Das, P. Suganthan G.C., A. Doan, A. Ardalan, J. R. Ballard, H. Li, F.
          Panahi, H. Zhang, J. Naughton, S. Prasad, G. Krishnan, R. Deep, V. Raghavendra. VLDB-16,
          demo paper.{' '}
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/vldb_demo.tar.gz">
            Jupyter notebook & datasets for demo
          </a>
          .
        </li>
        <li>
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/magellan-sigmodrec18.pdf">
            Magellan: Toward Building Entity Matching Management Systems
          </a>
          , P. Konda, S. Das, P. Suganthan G.C., P. Martinkus, A. Doan, A. Ardalan, J. R. Ballard,
          Y. Govind, H. Li, F. Panahi, H. Zhang, J. Naughton, S. Prasad, G. Krishnan, R. Deep, V.
          Raghavendra. SIGMOD Record, 2018
        </li>
        <li>
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/magellan-sigmod19.pdf">
            Entity Matching Meets Data Science: A Progress Report from the Magellan Project
          </a>
          , Y. Govind, P. Konda, and others. SIGMOD-19. Industrial paper.
        </li>
        <li>
          <a href="https://dl.acm.org/doi/10.1145/3405476">
            Magellan: Toward Building Ecosystems of Entity Matching Solutions
          </a>
          , AnHai Doan, Pradap Konda, Paul Suganthan G. C., Yash Govind, Derek Paulsen, Kaushik
          Chandrasekhar, Philip Martinkus, Matthew Christie, Communications of the ACM, 2020.
        </li>
      </ul>
      <p>Other papers</p>
      <ul>
        <li>
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/matchcatcher-edbt18.pdf">
            MatchCatcher: A Debugger for Blocking in Entity Matching
          </a>
          , H. Li, P. Konda, P. Suganthan G.C., A. Doan, B. Snyder, Y. Park, G. Krishnan, R. Deep,
          V. Raghavendra. EDBT-18.{' '}
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/matchcatcher-tr.pdf">
            extended version
          </a>
          , <a href="https://pages.cs.wisc.edu/~anhai/papers1/matchcatcher-edbt18.pptx">slides</a>.
        </li>
        <li>
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/umetrics-edbt19.pdf">
            Executing Entity Matching End to End: A Case Study
          </a>
          , P. Konda, S. Seshadri, E. Segarra, B. Hueth, A. Doan. EDBT-19. Industrial paper.
        </li>
      </ul>

      <p>Software</p>
      <p>PyMatcher consists of three open-source Python packages</p>
      <ul>
        <li>
          <a href="https://sites.google.com/site/anhaidgroup/current-projects/magellan?authuser=0">
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

      <p>Users</p>
      <ul>
        <li>
          PyMatcher was used by several domain science teams and companies. See Table 1 of{' '}
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/magellan-sigmod19.pdf">this paper</a>{' '}
          for details.
        </li>
        <li>
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/umetrics-edbt19.pdf">This paper</a>{' '}
          describes applying PyMatcher to match grants by economists at UW-Madison.
        </li>
        <li>
          Appendix B of{' '}
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/magellan-sigmod19.pdf">this paper</a>{' '}
          describes its use in matching cattle ranches as part of a project aimed at reducing
          deforestation in the Amazon in Brazil.
        </li>
      </ul>
      <p>Team</p>
      <ul>
        <li>
          Pradap Konda, Sanjib Das, Paul Suganthan G.C., Ardel Ardalan, Jeff Ballard, Han Li,
          Fatemah Panahi, Haojun Zhang, Shishir Prasad{' '}
        </li>
      </ul>

      <h3>Corleone and Falcon (2013-2018)</h3>
      <p>
        This project explored EM solutions that leverage crowdsourcing to enable hands-off matching
        of large tables at scale. The systems were designed to operate with minimal user
        intervention and to scale using Hadoop-based infrastructures. The ideas and techniques
        developed in this project inspired the design of CloudMatcher.
      </p>
      <p>Papers</p>
      <ul>
        <li>
          <a href="https://pages.cs.wisc.edu/~anhai/papers/falcon-sigmod17.pdf">
            Falcon: Scaling Up Hands-Off Crowdsourced Entity Matching to Build Cloud Services
          </a>
          , S. Das, P. Suganthan G.C., A. Doan, J. Naughton, G. Krishnan, R. Deep, E. Arcaute, V.
          Raghavendra, Y. Park. SIGMOD-17.{' '}
          <a href="https://pages.cs.wisc.edu/~anhai/papers/falcon-tr.pdf">extended version</a>,{' '}
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/falcon-sigmod17.pptx">slides</a>
        </li>
        <li>
          <a href="https://pages.cs.wisc.edu/~anhai/papers/corleone-sigmod14.pdf">
            Corleone: Hands-off Crowdsourcing for Entity Matching
          </a>
          , C. Gokhale, S. Das, A. Doan, J. Naughton, N. Rampalli, J. Shavlik, J. Zhu. SIGMOD-14.{' '}
          <a href="https://pages.cs.wisc.edu/~anhai/papers/corleone-tr.pdf">extended report</a>,{' '}
          <a href="https://pages.cs.wisc.edu/~anhai/papers/corleone-talk-sigmod14.pptx">slides</a>
        </li>
      </ul>

      <p>Team</p>
      <ul>
        <li>Chaitanya Gokhale, Sanjib Das, Paul Suganthan G.C.</li>
      </ul>

      <h3>Deep Learning (2017-2022)</h3>
      <p>
        This project explores using deep learning for both the blocking and matching steps of EM. It
        investigated a broad design space of neural architectures and training strategies, including
        the use of pre-trained language models, and helped establish deep learning as a viable
        approach for EM.
      </p>
      <p>Papers</p>
      <ul>
        <li>
          <a href="https://dl.acm.org/doi/10.14778/3476249.3476294">
            Deep Learning for Blocking in Entity Matching: A Design Space Exploration
          </a>
          , S. Thirumuruganathan, H. Li, N.Tang, M. Ouzzani, Y. Govind, D. Paulsen, G. Fung, A.
          Doan. VLDB-21.
        </li>
        <li>
          <a href="https://dl.acm.org/doi/10.14778/3421424.3421431">
            Deep Entity Matching with Pre-Trained Language Models
          </a>
          , Yuliang Li, Jinfeng Li, Yoshihiko Suhara, AnHai Doan, Wang-Chiew Tan, VLDB-20
        </li>
        <li>
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/deepmatcher-sigmod18.pdf">
            Deep Learning for Entity Matching: A Design Space Exploration
          </a>
          , S. Mudgal, H. Li, T. Rekatsinas, A. Doan, Y. Park, G. Krishnan, R. Deep, E. Arcaute, V.
          Raghavendra. SIGMOD-18.{' '}
          <a href="https://pages.cs.wisc.edu/~anhai/papers1/deepmatcher-tr.pdf">extended version</a>
          .
        </li>
      </ul>

      <p>Software</p>
      <ul>
        <li>
          <a href="https://github.com/anhaidgroup/deepmatcher">DeepMatcher</a>: Implements the
          solutions described in the SIGMOD-18 paper. It is no longer maintained.
        </li>
        <li>
          <a href="https://github.com/megagonlabs/ditto">Ditto</a>: Implements the solutions
          described in the VLDB-20 paper.
        </li>
      </ul>

      <h3>String Matching, Schema Matching, Ontology Matching, and Related Problems</h3>
      <p>
        Although designed for entity matching, SparkMatcher and related software from the Magellan
        project can be naturally applied to a wide range of semantic matching tasks. These include
        string matching, schema matching, ontology matching, and matching table columns to ontology
        concepts.
      </p>
      <p>Examples include</p>
      <ul>
        <li>
          <a href="https://dl.acm.org/doi/10.14778/3291264.3291272">
            Smurf: Self-Service String Matching Using Random Forests
          </a>
          . P. Suganthan G.C., A. Ardalan, A. Doan, A. Akella. VLDB-19. This paper applies Magellan
          software to the string matching problem.
        </li>
        <li>
          A variant of SparkMatcher has been incorporated into an industrial schema matching system.
        </li>
        <li>
          SparkMatcher has been used to match table columns with ontology concepts for the{' '}
          <a href="https://edirepository.org/">Environmental Data Initiative</a> (EDI), a data lake
          for environmental scientists; this solution is now in production at EDI.
        </li>
      </ul>
    </article>
  </Main>
);

export default Research;
