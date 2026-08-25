import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mqttHandsonSidebar: [
    {
      type: 'link',
      label: '← クラウド連携一覧へ戻る',
      href: '/docs/catalog/cloud-integration',
    },
    'README',
    {
      type: 'category',
      label: '受講者向け',
      collapsed: false,
      items: [
        'chapters/overview',
        'chapters/architecture',
        'chapters/mqtt-basics-and-layers',
        'chapters/prerequisites',
        'chapters/napter-ssh',
        'chapters/direct-aws-iot',
        'chapters/remove-certificates',
        'chapters/soracom-beam',
        'chapters/comparison',
        'chapters/troubleshooting-cleanup',
      ],
    },
    {
      type: 'category',
      label: '講師向け',
      items: [
        'instructor/appendix-a-aws-preparation',
        'instructor/appendix-b-acceptance-test',
      ],
    },
    'references',
  ],
};

export default sidebars;
