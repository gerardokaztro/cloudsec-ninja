// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

var path = require('path');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const remarkCodeTerminal = require('./src/remark/code-terminal');
const remarkIncludeCode = require('./src/remark/include-code');

const rootDir = path.dirname(require.resolve('./package.json'));
const manifestsDir = `${rootDir}/..`;

// Inserta emoji Twitter
const TwitterSvg =
  '<svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cloud Security Ninja',
  tagline: 'Desde Genin a nivel Hokage',
  favicon: 'img/favicon.ico',
  url: 'https://acloudsecurity.ninja',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gerardokaztro', // Usually your GitHub org/user name.
  projectName: 'cloudsec-ninja', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: 'G-LWTRTR89ZG',
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-T53L8KND',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [remarkCodeTerminal],
          beforeDefaultRemarkPlugins: [            
            [remarkIncludeCode, { manifestsDir }],
          ],
          sidebarCollapsible: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gerardokaztro/cloudsec-ninja/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gerardokaztro/cloudsec-ninja/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      metadata: [{ name: 'keywords', content: 'AWS, Kubernetes, Security, Containers, Docker, Cloud, Cloud Native,Pentest, Hacking, Developers, DevOps, CNCF, k8s, vulnerable, Kubernetes Security, Container Security, Cloud Security, Cloud Native Security, Open Source, DevSecOps' }],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
          respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `🌟 Si te gusta el contenido, regálame una estrella en <a target="_blank" href="https://github.com/gerardokaztro/cloudsec-ninja">Github</a> y comparte en <a target="_blank" href="https://twitter.com/intent/tweet/?text=%23CloudSecNinja%20una%20plataforma%20de%20aprendizaje%20GRATUITA%20para%20desarrollar%20habilidades%20en%20%23CloudSecurity%20usando%20%40aws_cloud%20creada%20por%20%40gerardokaztro.%20Aprende,%20diviértete%20y%20comparte%20%F0%9F%91%8A%20&url=https://acloudsececurity.ninja">Twitter</a> ${TwitterSvg}`,
      },
      navbar: {
        //title: 'My Site',
        logo: {
          alt: 'Cloud Security Ninja Logo',
          src: 'img/logo_nav.svg',
          //srcDark: 'img/logodark_nav.svg'
        },
        items: [
          //{to: '/blog', label: '✍️ Blog', position: 'left'},
          {
            //type: 'docSidebar',
            //sidebarId: 'tutorialSidebar',
            to: '/docs',
            position: 'right',
            label: '📚 Documentación',
          },
          { to: 'https://discord.gg/cV7syyA5ae',
            position: 'right', 
            label: '💬 Discord'
          },
          //{
            //to: 'https://twitter.com/intent/tweet?text=%23CloudSecurityNinja%20una%20plataforma%20de%20aprendizaje%20GRATUITA%20para%20desarrollar%20habilidades%20en%20%23CloudSecurity%20usando%20%40aws_cloud%20creada%20por%20%40gerardokaztro.%20Aprende,%20diviértete%20y%20comparte%20%F0%9F%91%8A%20&url=https://acloudsec.ninja', 
            // position: 'right',
            // label: '🥰 Tweet'
          // },
          {
            to: 'https://github.com/gerardokaztro/cloudsec-ninja',
            className: 'header-github-link',
            label: '🌟 GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '🧠 Aprende',
            items: [
              {
                label: 'Documentación',
                to: '/docs',
              }
            ],
          },
          {
            title: '🤝 Comunidad',
            items: [
              {
                label: 'Discord',
                to: 'https://discord.gg/cV7syyA5ae',
              },
              {
                label: 'Github',
                to: 'https://github.com/gerardokaztro/cloudsec-ninja',
              }
            ],
          },
          {
            title: '🎳 Otros',
            items: [
              {
                label: 'AWS Security Maturity Model',
                to: 'https://maturitymodel.security.aws.dev/es/',
              },
              {
                label: 'AWS Security Workshops',
                to: 'https://awssecworkshops.com/',
              }
            ],
          },
          
        ],
        copyright: `© ${new Date().getFullYear()}, Cloud Security Ninja. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-highlight',
            line: 'HIGHLIGHT',
          },
        ],
      },
    }),
    plugins: [
      require.resolve('docusaurus-plugin-sass'),
      require.resolve('docusaurus-lunr-search'),
      require.resolve("docusaurus-plugin-image-zoom"),
    ],
};

module.exports = config;
