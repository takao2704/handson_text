import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'prerequisites',
    {
      type: 'category',
      label: 'デバイス設定',
      items: ['device/raspberry-pi', 'device/esp32', 'device/lte-module'],
    },
    {
      type: 'category',
      label: 'SORACOM',
      items: [
        'soracom/air',
        'soracom/beam',
        'soracom/funnel',
        'soracom/harvest',
        'soracom/inventory',
      ],
    },
    {
      type: 'category',
      label: 'AWS',
      items: ['aws/iot-core', 'aws/lambda', 'aws/s3', 'aws/timestream'],
    },
    {
      type: 'category',
      label: 'ハンズオン集',
      link: {
        type: 'doc',
        id: 'labs/index',
      },
      items: [
        'labs/device-to-soracom',
        'labs/soracom-to-aws',
        'labs/visualize-data',
      ],
    },
    {
      type: 'category',
      label: 'トラブルシューティング',
      items: [
        'troubleshooting/network',
        'troubleshooting/certificates',
        'troubleshooting/aws-permissions',
      ],
    },
    {
      type: 'category',
      label: 'Appendix',
      items: ['appendix/glossary', 'appendix/references', 'appendix/license'],
    },
  ],
};

export default sidebars;
