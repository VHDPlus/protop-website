const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Protop Solutions',
  tagline: 'Professional Technology for Ordinary People',
  url: 'https://protop-solutions.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'VHDPlus', // Usually your GitHub org/user name.
  projectName: 'protop-website', // Usually your repo name.
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.json"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/VHDPlus/protop-website/edit/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/VHDPlus/protop-website/edit/master/website/blog/',
        },
        theme: {
          customCss: [require.resolve('bootstrap/dist/css/bootstrap.min.css'), require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: false,
        title: 'Protop Solutions',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Protop-Logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'contact',
            position: 'right',
            label: 'Contact',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [    
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/vhdp"
              },
              {
                label: "Discord",
                href:
                  "https://discord.gg/NCN9VAh"
              },
              {
                label: "GitHub",
                href: "https://github.com/search?utf8=%E2%9C%93&q=vhdplus"
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UC7qiOvlaBSiWyAb7R1xTaEw"
              }
            ]
          },
          {
            title: "Social",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/vhdplus"
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/vhdplus/"
              }
            ]
          },
          {
            title: "Legal",
            items: [
              {
                label: "Contact",
                to: "docs/contact"
              },
              {
                label: "Privacy Policy",
                to: "docs/privacy"
              }
            ]
          }
        ],
        logo: {
          alt: "VHDPlus Logo",
          src: "img/ProtopLogo.png",
          href: "https://protop-solutions.com"
        },
        copyright: `Copyright © ${new Date().getFullYear()} Protop Solutions UG`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
