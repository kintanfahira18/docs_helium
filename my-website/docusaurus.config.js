// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  staticDirectories: ['static'],
  noIndex: true,
  title: 'Helium',
  tagline: 'Simplify Security Testing',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://docs-helium.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cyberarmy', // Usually your GitHub org/user name.
  projectName: 'docs_helium', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr', // Ubah ke 'ltr'
        htmlLang: 'en',
      },
      id: {
        label: 'Indonesian',
        direction: 'ltr',
        htmlLang: 'id',
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', 
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false, // Optional: disable the blog plugin
      },
    ],
  ],

  themeConfig: {
    navbar: {
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Helium Guides',
        },
        {
          type: "localeDropdown",
          position: 'right',
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};
