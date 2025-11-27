// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Specification-Driven Development Fundamentals',
  tagline: 'Master AI-Driven Development with Clear Specifications',
  favicon: 'img/favicon.ico',

  url: 'https://tiktokmanagerhere889-coder.github.io',
  baseUrl: '/specification-driven-development-fundamentals/',

  organizationName: 'tiktokmanagerhere889-coder',
  projectName: 'specification-driven-development-fundamentals',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SDD Fundamentals',
        logo: {
          alt: 'Logo',
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
        copyright: `Copyright © ${new Date().getFullYear()} SDD Fundamentals`,
      },
    }),
};

module.exports = config;
