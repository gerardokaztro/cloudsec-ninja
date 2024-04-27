import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Grid from "@mui/material/Grid";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: 'Te tenemos cubierto',
    Svg: require('@site/static/img/covered.svg').default,
    description: (
      <>
        No necesitas experiencia o conocimiento previo, preparamos todo para nivel usuario en adelante.
      </>
    ),
  },
  {
    title: 'Código abierto',
    Svg: require('@site/static/img/opensource.svg').default,
    description: (
      <>
        Con espíritu colaborativo, esta plataforma de aprendizaje es y será gratis siempre.
      </>
    ),
  },
  {
    title: 'Aprende haciendo',
    Svg: require('@site/static/img/learn.svg').default,
    description: (
      <>
        Incluiremos material para que tu aprendizaje sea didáctico y ganes experiencia.
      </>
    ),
  },
  {
    title: 'Construye habilidades',
    Svg: require('@site/static/img/build.svg').default,
    description: (
      <>
        Sea que quieras cambiarte a Ciberseguridad o no, es importante expandir nuestro horizonte.
      </>
    ),
  },
  {
    title: 'Contribuye y sé parte',
    Svg: require('@site/static/img/contributor.svg').default,
    description: (
      <>
        No te quedes con las ganas, agrega tu conocimiento para ayudar a mas personas.
      </>
    ),
  },
  {
    title: 'Siempre actualizado',
    Svg: require('@site/static/img/update.svg').default,
    description: (
      <>
        Mantendremos nuestro contenido vigente para que puedas emplearlo en el mundo real.
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
        <h2 className={clsx('margin-bottom--lg', 'text--center')}>Con ❤️ para la comunidad</h2>

        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
