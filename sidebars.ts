import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'prerequisites',
    'labs/index',
    {
      type: 'category',
      label: 'データを送る',
      link: {
        type: 'doc',
        id: 'catalog/send-data',
      },
      items: ['labs/device-to-soracom'],
    },
    {
      type: 'category',
      label: 'データを見る',
      link: {
        type: 'doc',
        id: 'catalog/view-data',
      },
      items: ['soracom/harvest', 'labs/visualize-data', 'aws/s3', 'aws/timestream'],
    },
    {
      type: 'category',
      label: 'クラウドへ連携する',
      link: {
        type: 'doc',
        id: 'catalog/cloud-integration',
      },
      items: [
        'labs/soracom-to-aws',
        'soracom/beam',
        'soracom/funnel',
        'aws/iot-core',
        'aws/lambda',
      ],
    },
    {
      type: 'category',
      label: 'デバイスを準備する',
      link: {
        type: 'doc',
        id: 'catalog/prepare-device',
      },
      items: ['device/raspberry-pi', 'device/esp32', 'device/lte-module', 'soracom/inventory'],
    },
    {
      type: 'category',
      label: 'ネットワークを確認する',
      link: {
        type: 'doc',
        id: 'catalog/check-network',
      },
      items: [
        'soracom/air',
        'troubleshooting/network',
        'troubleshooting/certificates',
        'troubleshooting/aws-permissions',
      ],
    },
    {
      type: 'category',
      label: '後片付け・課金確認',
      link: {
        type: 'doc',
        id: 'catalog/cleanup-cost',
      },
      items: ['operations/cleanup'],
    },
    {
      type: 'category',
      label: 'Appendix',
      items: ['appendix/glossary', 'appendix/references', 'appendix/license'],
    },
  ],
};

export default sidebars;
