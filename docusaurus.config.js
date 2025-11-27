// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Specification-Driven Development Fundamentals',
  tagline: 'Master AI-Driven Development with Clear Specifications and Reusable Intelligence',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tiktokmanagerhere889-coder.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/specification-driven-development-fundamentals/',

  // GitHub pages deployment config.
  organizationName: 'tiktokmanagerhere889-coder',
  projectName: 'specification-driven-development-fundamentals',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/tiktokmanagerhere889-coder/specification-driven-development-fundamentals/edit/main/',
        },
        blog: false,
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
      image: 'img/social-card.jpg',
      navbar: {
        title: 'SDD Fundamentals',
        logo: {
          alt: 'SDD Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: '01-intro',
            position: 'left',
            label: 'Book',
          },
          {
            href: 'https://github.com/tiktokmanagerhere889-coder/specification-driven-development-fundamentals',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Book',
            items: [
              {
                label: 'Start Reading',
                to: '/01-intro',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/tiktokmanagerhere889-coder/specification-driven-development-fundamentals',
              },
              {
                label: 'Original Source',
                href: 'https://github.com/panaversity/ai-native-software-development',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Specification-Driven Development Fundamentals. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
