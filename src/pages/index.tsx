import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

const zennUrl = 'https://zenn.dev/takao2704';

const handsonCards = [
  {
    title: 'データを送る',
    meta: 'Device / SORACOM',
    description: 'デバイスやサンプル送信スクリプトからSORACOMへデータを送ります。',
    to: '/docs/catalog/send-data',
  },
  {
    title: 'データを見る',
    meta: 'Harvest / S3 / Timestream',
    description: '届いたデータをSORACOMやAWSで確認、保存、可視化します。',
    to: '/docs/catalog/view-data',
  },
  {
    title: 'クラウドへ連携する',
    meta: 'Beam / Funnel / AWS',
    description: 'SORACOMからAWS IoT CoreやLambdaへデータを渡します。',
    to: '/docs/catalog/cloud-integration',
  },
  {
    title: 'デバイスを準備する',
    meta: 'Raspberry Pi / ESP32 / LTE',
    description: 'ハンズオンで使うデバイス、SIM、通信モジュールを確認します。',
    to: '/docs/catalog/prepare-device',
  },
  {
    title: 'ネットワークを確認する',
    meta: 'Air / DNS / TLS / IAM',
    description: '回線状態、疎通、証明書、権限の問題を切り分けます。',
    to: '/docs/catalog/check-network',
  },
  {
    title: '後片付け・課金確認',
    meta: 'Cleanup / Cost',
    description: '作成したSORACOMとAWSリソースを整理し、課金対象を確認します。',
    to: '/docs/catalog/cleanup-cost',
  },
];

const guideItems = [
  '必要なアカウントは各ハンズオンで確認',
  '機材と通信方式はページごとに選択',
  '課金ポイントと後片付けを個別に確認',
  '秘密情報はサンプル値に置き換えて扱う',
];

function HomeHero() {
  const architectureImage = useBaseUrl('/img/architecture/device-soracom-aws.svg');

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <Heading as="h1">IoTハンズオン集</Heading>
          <p>
            IoTデバイス、SORACOM、AWSを題材にした小さな実践手順を、
            必要なものから選んで使えるカタログとして整理しています。
          </p>
          <div className={styles.heroActions}>
            <Link className="button button--primary button--lg" to="/docs/labs">
              目的から探す
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/prerequisites">
              準備メモを見る
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual} aria-label="デバイス、SORACOM、AWSを使う代表構成">
          <img src={architectureImage} alt="" />
        </div>
      </div>
    </section>
  );
}

function HandsonCatalog() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <Heading as="h2">目的別カタログ</Heading>
        <p>サービス名ではなく、読者がやりたいことから必要なページへ移動できるようにします。</p>
      </div>
      <div className={styles.pathGrid}>
        {handsonCards.map((path) => (
          <Link className={styles.pathCard} to={path.to} key={path.to}>
            <span className={styles.pathMeta}>{path.meta}</span>
            <Heading as="h3">{path.title}</Heading>
            <p>{path.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function PreparationNotes() {
  return (
    <section className={styles.band}>
      <div className={styles.bandContent}>
        <div>
          <Heading as="h2">共通の準備メモ</Heading>
          <p>
            このサイト全体で同じ前提を強制しません。共通して気をつける観点だけをまとめ、
            実際に必要なものは各ハンズオンの冒頭で確認します。
          </p>
        </div>
        <ul className={styles.requirementList}>
          {guideItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function LatestUpdates() {
  return (
    <section className={styles.section}>
      <div className={styles.updatePanel}>
        <div>
          <Heading as="h2">Blog on Zenn</Heading>
          <p>関連する技術メモや補足記事はZennのtakao2704ページに集約します。</p>
        </div>
        <Link className="button button--outline button--primary" href={zennUrl}>
          Zennを開く
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="IoTハンズオン集"
      description="IoTデバイス、SORACOM、AWSを題材にした独立型ハンズオンのカタログ">
      <main>
        <HomeHero />
        <HandsonCatalog />
        <PreparationNotes />
        <LatestUpdates />
      </main>
    </Layout>
  );
}
