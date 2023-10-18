import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to use',
    Svg: require('@site/static/img/easy-use.svg').default,
    description: (
      <>
        No need to install a bunch of tools on your machine.
        You only need login and run the assessment, no hassle anymore.
      </>
    ),
  },
  {
    title: 'Continuous Security Assessment',
    Svg: require('@site/static/img/continuous.svg').default,
    description: (
      <>
        Schedule your scans and periodically evaluate your systems for the vulnerabilities.
      </>
    ),
  },
  {
    title: 'Reporting',
    Svg: require('@site/static/img/reporting.svg').default,
    description: (
      <>
        Your test results can be downloaded in the form of a report and can be replaced with your logo (White label).
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">

        </div>
      </div>
    </section>
  );
}
