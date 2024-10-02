import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import { Container } from "@mui/material";

import Grid from "@mui/material/Grid";

import HomepageVideo from '@site/src/components/HomepageVideo';
import IframeResizer from 'iframe-resizer-react';

import docsearch from '@docsearch/js';
import '@docsearch/css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import styles from './index.module.css';

import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  return (
      <header className={clsx('container', styles.heroBanner)}>
          <div className="row padding-horiz--md">
              <div className="col col--7">
                  <div className={clsx(styles.relative, 'row')}>
                      <div className="col">
                          <h1 className={styles.tagline}>
                              Aprende Seguridad<br /> 
                              EN la Nube y protege<br /> 
                              el Ciberespacio
                          </h1>
                          <h1 className={styles.tagline}>
                              Aprende <span>Seguridad</span><br /> 
                              <span>EN la Nube</span> y protege<br /> 
                              el <span>Ciberespacio</span>
                          </h1>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col">
                          <h2>Desde principiante hasta avanzado.</h2>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col">
                          <div className={styles.heroButtons}>
                              <Link to="docs/bienvenida/ruta-de-aprendizaje" className={styles.getStarted}>Empezar</Link>
                              <iframe src="https://ghbtns.com/github-btn.html?user=gerardokaztro&repo=cloudsec-ninja&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={clsx(styles.relative, 'col', 'col--5')}>
                  <div className={styles.logoBlur}>
                      <img src={require('../../static/img/portada_readme.png').default} className={clsx(styles.hideSmall)} />
                  </div>
                  {/* <div className={styles.codeBlock}>
                      <CodeBlock className="language-bash">
                          npx crawlee create my-crawler
                      </CodeBlock>
                  </div> */}
              </div>
          </div>
      </header>
  );
}

function TestimonialSection() {
  return (
    <section className={clsx('hero', styles.section)}>
      <div className="container">
        <h2 className={clsx('margin-bottom--lg', 'text--center')}>
          <a href='docs/wall-of-love'>Gracias por compartir 🙌</a>
        </h2>
        <div className="row items-center">

          <IframeResizer
            // height="800px"
            //id='testimonialto-cloudsecurity-ninja-tag-all-dark-animated'
            src="https://embed-v2.testimonial.to/w/cloudsecurity-ninja?theme=light&card=small&loadMore=on&initialCount=8&randomize=on&tag=all"
            //frameborder="0" scrolling="no"
            style={{ width: "1px", minWidth: "100%" }}
          />

        </div>
        <Analytics />
      </div >
    </section >
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={``}
      description="Desarrolla habilidades en Seguridad en la Nube desde principiante a avanzado y aprende cómo gestionar e implementar seguridad a tus cargas de trabajo en la nube usando los principales servicios de seguridad de Amazon Web Services.<head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
        <TestimonialSection />
    </Layout>
  );
}