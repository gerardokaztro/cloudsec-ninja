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
        'bienvenida/coautores',
        'bienvenida/ruta-de-aprendizaje',
        'bienvenida/empezando',
        'bienvenida/comunidad'
      ],
    },
    {
      type: 'category',
      label: '🤓 Fundamentos de TI',
      link: {
        slug: '/fundamentos',
        type: 'generated-index',
        title: 'Fundamentos de tecnologías',
        description:
          "Échale un vistazo a este módulo si crees no tener las bases necesarias en el mundo techie.",
      },
      items: [
        'fundamentos/redes',
        'fundamentos/contenedores',
        'fundamentos/serverless',
        'fundamentos/devops',
        {
          type: 'category',
          label: 'Infraestructura como Código',
          link: {
            type: 'doc',
            id: 'fundamentos/iac',
          },
          items: [
            'fundamentos/terraform',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '☁️ Computación en la nube',
      link: {
        type: 'doc',
        id: 'computacion-en-la-nube',
      },
      items: [
        'aws',
      ],
    },
        {
      type: 'category',
      label:'🌤️ Seguridad de la nube',
      link: {
        slug: '/seguridad-aws',
        type: 'generated-index',
        title: 'Seguridad de la nube de AWS',
        description:
          "En este modulo conocerás los aspectos de seguridad DE la nube",
      },
      items: [
        'seguridad-aws/responsabilidad-compartida',
        'seguridad-aws/programas-de-cumplimiento',
        'seguridad-aws/well-architected-sec',
      ],
    },

 
    {
      type: 'category',
      label: '🛡️ Fundamentos de Ciberseguridad',
      link: {
        slug: '/ciberseguridad',
        type: 'generated-index',
        title: 'Fundamentos de Ciberseguridad',
        description:
          "Échale un vistazo a este módulo si crees no tener las bases necesarias en el mundo techie.",
      },
      items: [
        'ciberseguridad/fundamentos',
        'ciberseguridad/ethical-hacking',
        {
          type: 'category',
          label: 'Metodologias y Frameworks',
          link: {
            type: 'doc',
            id: 'ciberseguridad/metodologias/metodologias-y-frameworks',
          },
          items: [
            'ciberseguridad/metodologias/mitre',
            'ciberseguridad/metodologias/nist',
            'ciberseguridad/metodologias/zerotrust',
            'ciberseguridad/metodologias/principio-del-minimo-privilegio',
          ],
        },
      ],
    },
      

    {
      type: 'category',
      label: '👩‍⚖️ Estructuras Multi-Cuenta',
      link: {
        slug: '/estructuras-multi-cuentas',
        type: 'generated-index',
        title: 'Estructura de múltiples cuentas en AWS',
        description:
          "Lorem.",
      },
      items: [
        'gobierno/organizations',
        'gobierno/controltower',
      ],
    },
    
    {
      type: 'doc',
      id: 'sponsors',
    },
    {
      type: 'doc',
      id: 'faq',
    },
  ]
};

module.exports = sidebars;
