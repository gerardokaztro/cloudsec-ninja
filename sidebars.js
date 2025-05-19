/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Bienvenida',
      collapsible: false,
      link: {
        type: 'doc',
        id: 'bienvenida/index',
      },
      items: [
        'bienvenida/valores-y-objetivos',
        'bienvenida/autor',
        'bienvenida/coautores',
        'bienvenida/ruta-de-aprendizaje',
        'bienvenida/como-ser-parte',
        'bienvenida/comunidad'
      ],
    },
    {
      type: 'category',
      label: 'Fundamentos de TI',
      link: {
        slug: '/fundamentos-de-tecnologia',
        type: 'generated-index',
        title: 'Fundamentos de tecnologías',
        description:
          "Échale un vistazo a este módulo si crees no tener las bases necesarias en el mundo techie.",
      },
      items: [
        'fundamentos-de-tecnologia/redes',
        // 'fundamentos-de-tecnologia/contenedores',
        'fundamentos-de-tecnologia/serverless',
        'fundamentos-de-tecnologia/devops',
        {
          type: 'category',
          label: 'Infraestructura como Código',
          link: {
            type: 'doc',
            id: 'fundamentos-de-tecnologia/iac',
          },
          items: [
            'fundamentos-de-tecnologia/terraform',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Computación en la Nube',
      link: {
        slug: '/fundamentos-de-nube',
        type: 'generated-index',
        title: 'Fundamentos de Computación en la nube',
        description:
          "Échale un vistazo a este módulo si crees no tener las bases necesarias en el mundo cloud.",
      },
      items: [
        'fundamentos-de-nube/introduccion',
        'fundamentos-de-nube/aws',
      ],
    },
    {
      type: 'category',
      label: 'Ciberseguridad',
      link: {
        slug: '/fundamentos-de-ciberseguridad',
        type: 'generated-index',
        title: 'Fundamentos de Ciberseguridad',
        description:
          "Échale un vistazo a este módulo si crees no tener las bases necesarias en el mundo cyber.",
      },
      items: [
        'fundamentos-de-ciberseguridad/introduccion',
        'fundamentos-de-ciberseguridad/ethical-hacking',
        {
          type: 'category',
          label: 'Metodologías y Frameworks',
          link: {
            type: 'doc',
            id: 'fundamentos-de-ciberseguridad/metodologias/metodologias-y-frameworks',
          },
          items: [
            'fundamentos-de-ciberseguridad/metodologias/mitre',
            'fundamentos-de-ciberseguridad/metodologias/nist',
            'fundamentos-de-ciberseguridad/metodologias/zerotrust',
            'fundamentos-de-ciberseguridad/metodologias/principio-del-minimo-privilegio',
          ],
        },
      ],
    },
    {
      type: 'category',
      label:'Seguridad DE la Nube',
      link: {
        slug: '/fundamentos-de-seguridad-aws',
        type: 'generated-index',
        title: 'Seguridad de la nube de AWS',
        description:
          "En este modulo conocerás los aspectos de seguridad DE la nube",
      },
      items: [
        'fundamentos-de-seguridad-aws/responsabilidad-compartida',
        'fundamentos-de-seguridad-aws/programas-de-cumplimiento',
        'fundamentos-de-seguridad-aws/well-architected-sec',
      ],
    },
    {
      type: 'category',
      label: 'Estructuras Multi-Cuentas',
      link: {
        slug: '/estructuras-multi-cuenta',
        type: 'generated-index',
        title: 'Estrategias Multicuenta en AWS: Un vistazo a AWS Organizations y AWS Control Tower',
        description:
          "Habilitando la estrategia multicuenta de la mano de AWS Organization & Control Tower.",
      },
      items: [
        'estructuras-multi-cuenta/introduccion',
        'estructuras-multi-cuenta/aws-organizations',
        'estructuras-multi-cuenta/aws-control-tower',
      ],
    },
    {
      type: 'category',
      label: 'Gestión de Identidad y Accesos',
      link: {
        slug: '/gestion-de-identidad-y-accesos',
        type: 'generated-index',
        title: 'Gestión de la Identidad y Acessos en AWS',
        description:
          "Aprende a gestionar las identidades y accesos de tus cargas de trabajo a escala en AWS",
      },
      items: [
        'gestion-de-identidad-y-accesos/aws-iam',
        'gestion-de-identidad-y-accesos/aws-identity-center',
        'gestion-de-identidad-y-accesos/aws-access-analyzer',
        'gestion-de-identidad-y-accesos/aws-secret-manager',
        'gestion-de-identidad-y-accesos/amazon-cognito',
      ],
    },
    {
      type: 'category',
      label: 'Compliance Continuo',
      link: {
        slug: '/compliance-continuo',
        type: 'generated-index',
        title: 'Compliance Continuo',
        description:
          "Descripción Pendiente",
      },
      items: [
        'compliance-continuo/aws-config'
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
