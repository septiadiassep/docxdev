import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/enjoy-coding">
            Enjoy Coding
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/tricks--tutorial">
            Tricks & Tutorial
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/docx-development-system">
            Development
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/docx-methodology">
            Methodology
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/docx-bug-fixing-code">
            Bug Fix
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hi Devs!`}
      description="Documentation process of development a software, insights, ideas and sharing about knowladge">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
