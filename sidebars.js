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
        title: 'Bienvenidos a Cloud Security Ninja',
        description:
          "Aprende como llegar a ser Cloud Security Engineer desde cero.",
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
        title: 'Módulo de fundamentos de tecnologías',
        description:
          "Aprende como llegar a ser Cloud Security Engineer desde cero.",
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
      customProps: {
        badges: ['new', 'green'],
        featured: true,
      },
      link: {
        slug: '/cloud',
        type: 'generated-index',
        title: 'Módulo de fundamentos de Cloud Computing',
        description:
          "Aprende como llegar a ser Cloud Security Engineer desde cero.",
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
        title: 'Módulo de Gobierno de seguridad',
        description:
          "Aprende como llegar a ser Cloud Security Engineer desde cero.",
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
