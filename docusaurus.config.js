// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const domainUrl = process.env.DOMAIN_URL;
const domainHelium = process.env.DOMAIN_URL_HELIUM;
const baseUrl = process.env.BASE_URL;
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Helium",
  tagline: "Simplify Security Testing",
  favicon: "img/favicon-helium.png",

  // Set the production url of your site here
  url: `${domainUrl}`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `${baseUrl}`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "cyberarmy", // Usually your GitHub org/user name.
  projectName: "user_guide", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr", // Ubah ke 'ltr'
        htmlLang: "en",
      },
      id: {
        label: "Indonesian",
        direction: "ltr",
        htmlLang: "id",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  clientModules: [require.resolve("./src/css/docs.css")],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/helium-social-card.jpg",
      navbar: {
        logo: {
          alt: "helium-logo",
          src: "https://helium-sec-dev.s3.ap-southeast-1.amazonaws.com/general/helium-landing.png",
          target: "_self",
          href: domainHelium,
          width: 200,
          height: 80,
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Home",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: `${domainUrl}/docs`,
            label: "API Reference",
            position: "right",
          },
        ],
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
