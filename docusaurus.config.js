var path = require('path');
const rootDir = path.dirname(require.resolve('./package.json'));
const manifestsDir = `${rootDir}/..`;

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const remarkCodeTerminal = require('./src/remark/code-terminal');
const remarkIncludeCode = require('./src/remark/include-code');

// Inserta emoji Twitter
const TwitterSvg =
  '<svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

/** @type {import('@docusaurus/types').Config} **/
const config = {
  title: 'CloudSecurity Ninja',
  tagline: 'Desarrolla habilidades en Seguridad en la Nube desde principiante a avanzado.',
  favicon: 'img/favicon.ico',
  url: 'https://acloudsecurity.ninja',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeConfigs: {
      es: {
        label: 'Spanish',
        direction: 'ltr',
        htmlLang: 'es',
        calendar: 'gregory',
        path: 'es',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: 'G-LWTRTR89ZG',
          anonymizeIP: false,
        },
        gtag: {
          trackingID: 'G-LWTRTR89ZG',
          anonymizeIP: false,
        },
        googleTagManager: {
          containerId: 'GTM-T53L8KND',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },

        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,

          remarkPlugins: [
            remarkCodeTerminal,
          ],
          beforeDefaultRemarkPlugins: [
            [remarkIncludeCode, { manifestsDir }],
          ],
          
          editUrl: 'https://github.com/gerardokaztro/cloudsec-ninja/tree/main/',

          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
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

      metadata: [{ name: 'keywords', content: 'AWS, Amazon Web Services, Cloud Computing, Security, Containers, Cybersecurity, DevSecOps, security ninja, ruta de aprendizaje ciberseguridad, cloud security'}],

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
          respectPrefersColorScheme: false,
      },

      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `Apoya el contenido de esta plataforma con una 🌟 en <a target="_blank" href="https://github.com/gerardokaztro/cloudsec-ninja">Github</a> + un post en <a target="_blank" href="https://twitter.com/intent/tweet/?text=%23CloudSecurityNinja%20una%20plataforma%20de%20aprendizaje%20GRATUITA%20para%20desarrollar%20habilidades%20en%20%23CloudSecurity%20usando%20%40aws_cloud%20creada%20por%20%40gerardokaztro%20y%20soportada%20por%20varios%20co-autores%20de%20hispanoamérica.%20Aprende,%20diviértete%20y%20comparte%20%F0%9F%91%8A%20&url=https://acloudsecurity.ninja">Twitter</a> ${TwitterSvg}`,
      },
      navbar: {
        //title: '',

        logo: {
          alt: 'Logo de Cloud Security Ninja',
          src: 'img/logo_nav.svg',
        },

        items: [
          // {
          //   type: "localeDropdown",
          //   position: "right",
          // },
          {
            to: '/docs',
            position: 'left',
            label: 'Documentación',
          },
          {
            className: 'navbar__coffee',
            "aria-label": "Buy a coffee",
            to: 'https://buymeacoffee.com/gerardokaztro',
            position: 'right',
          },
          {
            className: 'header-github-link',
            "aria-label": "GitHub repository",
            to: 'https://github.com/gerardokaztro/cloudsec-ninja',
            position: 'right',
            //label: '🌟 GitHub',
          },
          {
            className: "navbar__twitter",
            "aria-label": "Tweet",
            to: 'https://twitter.com/intent/tweet/?text=%23CloudSecurityNinja%20una%20plataforma%20de%20aprendizaje%20GRATUITA%20para%20desarrollar%20habilidades%20en%20%23CloudSecurity%20usando%20%40aws_cloud%20creada%20por%20%40gerardokaztro%20y%20soportada%20por%20varios%20co-autores%20de%20hispanoamérica.%20Aprende,%20diviértete%20y%20comparte%20%F0%9F%91%8A%20&url=https://acloudsecurity.ninja', 
            position: 'right',
          },
          { 
            className: "navbar__slack",
            "aria-label": "Slack channel",
            position: 'right',
            to: 'https://join.slack.com/t/awssecuritycommunity/shared_invite/zt-1cekzassk-48CNafIjBFiPWkGdIDzfeA',
          },
          {
            className: "navbar__youtube navbar__icon",
            "aria-label": "YouTube channel",
            position: "right",
            to: "https://www.youtube.com/@AWSSecurityLATAM",
          },
        ],
      },

      algolia: {
        apiKey: '6eadf34239e60f3e091f6e882a9b1066',
        indexName: 'acloudsecurity',
        appId: 'ZLMIOZBCWU',
  
        // Optional: see doc section bellow
        contextualSearch: true,
        insights: true,
  
        //... other Algolia params
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
                label: 'Github',
                to: 'https://github.com/gerardokaztro/cloudsec-ninja',
              },
              {
                label: 'Slack',
                to: 'https://join.slack.com/t/awssecuritycommunity/shared_invite/zt-1cekzassk-48CNafIjBFiPWkGdIDzfeA',
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
        darkTheme: darkCodeTheme,
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: "theme-code-block-highlighted-line",
            line: "highlight-next-line",
            block: { start: "highlight-start", end: "highlight-end" },
          },
          {
            className: "code-block-highlight",
            line: "HIGHLIGHT",
          },
        ],
      },
    }),
    
    plugins: [
      require.resolve('docusaurus-plugin-sass'),
      require.resolve('docusaurus-lunr-search'),
      require.resolve("docusaurus-plugin-image-zoom"),
      
      [
        '@docusaurus/plugin-pwa',
        {
          debug: false,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],
          pwaHead: [
            {
              tagName: 'link',
              rel: 'icon',
              href: '/img/portada_pwa.png',
            },
            {
              tagName: 'link',
              rel: 'manifest',
              href: '/manifest.json', // your PWA manifest
            },
            {
              tagName: 'meta',
              name: 'theme-color',
              content: 'rgb(37, 194, 160)',
            },
          ],
        },
      ],

      [
        "docusaurus-plugin-dotenv",
        {
          path: process.env.ENV !== 'localhost' ? "./.env.local" : undefined,
          systemvars: true,
        },
      ],
    ],
};

module.exports = config;