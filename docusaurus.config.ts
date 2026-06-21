import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const repositoryName = process.env.GITHUB_REPOSITORY_NAME ?? 'handson_text';
const organizationName = process.env.GITHUB_REPOSITORY_OWNER ?? 'example';

const config: Config = {
  title: 'IoTハンズオン集',
  tagline: 'IoTデバイス、SORACOM、AWSを題材にした独立型ハンズオンのカタログ',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: process.env.DOCUSAURUS_URL ?? `https://${organizationName}.github.io`,
  baseUrl: process.env.DOCUSAURUS_BASE_URL ?? '/',
  organizationName,
  projectName: repositoryName,
  trailingSlash: false,

  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: ({docPath}) =>
            `https://github.com/${organizationName}/${repositoryName}/edit/main/docs/${docPath}`,
        },
        blog: {
          showReadingTime: true,
          editUrl: ({blogPath}) =>
            `https://github.com/${organizationName}/${repositoryName}/edit/main/blog/${blogPath}`,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/architecture/device-soracom-aws.svg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'IoTハンズオン集',
      logo: {
        alt: 'IoTハンズオン集',
        src: 'img/iot-handson-logo.svg',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: `https://github.com/${organizationName}/${repositoryName}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '教材',
          items: [
            {label: 'はじめに', to: '/docs/intro'},
            {label: '準備メモ', to: '/docs/prerequisites'},
            {label: 'ハンズオン集', to: '/docs/labs'},
          ],
        },
        {
          title: '運用',
          items: [
            {label: '更新情報', to: '/blog'},
            {label: 'トラブルシューティング', to: '/docs/troubleshooting/network'},
            {label: 'ライセンス', to: '/docs/appendix/license'},
            {label: 'GitHub', href: `https://github.com/${organizationName}/${repositoryName}`},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Takao Ide. Docs: CC BY 4.0. Code: MIT.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
