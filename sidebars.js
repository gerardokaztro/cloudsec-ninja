/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: '🙋‍♂️ Bienvenida',
      collapsible: false,
      link: {
        slug: '/',
        type: 'generated-index',
        title: 'Bienvenidos a ☁️🔐🥷',
        description:
          "Échale un vistazo a esta sección, encontrarás una guía útil para saber como empezar de forma fácil y rápida.",
      },
      items: [
        'bienvenida/index',
        'bienvenida/valores-y-objetivos',
        'bienvenida/autor',
        'bienvenida/roadmap',
        'bienvenida/empezando',
        'bienvenida/comunidad',
        'bienvenida/sponsors',
        'bienvenida/faq',
      ],
    },
    {
      type: 'category',
      label: '🤓 Fundamentos Tech',
      link: {
        slug: '/fundamentos',
        type: 'generated-index',
        title: 'Fundamentos de tecnologías',
        description:
          "Échale un vistazo a este módulo si crees no tener las bases necesarias en el mundo techie.",
      },
      items: [
        'fundamentos/redes',
        'fundamentos/ciberseguridad',
        'fundamentos/contenedores',
        'fundamentos/serverless',
        'fundamentos/terraform',
      ],
    },
    {
      type: 'category',
      label: '☁️ Fundamentos Cloud',
      link: {
        slug: '/cloud',
        type: 'generated-index',
        title: 'Fundamentos de computación en la nube',
        description:
          "Échale un vistazo a este módulo si crees no tener las bases sobre computación en la nube.",
      },
      items: [
        'cloud/aws',
        'cloud/seguridad-de-aws',
      ],
    },
    {
      type: 'category',
      label: '👩‍⚖️ Gobierno de Seguridad',
      link: {
        slug: '/gobierno',
        type: 'generated-index',
        title: 'Gestión y Gobierno de la Seguridad',
        description:
          "Lorem.",
      },
      items: [
        'gobierno/organizations',
        'gobierno/controltower',
        'gobierno/servicecatalog',
        'gobierno/awsram',
        'gobierno/trustedadvisor'
      ],
    },
  ]
};

module.exports = sidebars;
