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
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src='img/logo_banner.svg' alt='' width='auto' height="auto" />
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <Link
            className="button button--secondary button--lg"
            to="docs/bienvenida/ruta-de-aprendizaje">
            <Translate>Iniciar</Translate>
          </Link>
        </div>
        <Analytics />
        <SpeedInsights />
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