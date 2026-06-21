import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

const learningPaths = [
  {
    title: '1. デバイスからSORACOMへ送信',
    description: 'LTE接続したデバイスからSORACOM Harvest Dataへテレメトリを送ります。',
    to: '/docs/labs/01-device-to-soracom',
  },
  {
    title: '2. SORACOMからAWSへ連携',
    description: 'SORACOM Beam / Funnelを使い、AWS IoT CoreやLambdaへデータを渡します。',
    to: '/docs/labs/02-soracom-to-aws',
  },
  {
    title: '3. データを可視化する',
    description: 'S3やTimestreamに蓄積したデータを確認し、後片付けまで実施します。',
    to: '/docs/labs/03-visualize-data',
  },
];

const accounts = [
  'SORACOMアカウント',
  'AWSアカウント',
  'GitHubアカウント',
  'Node.js / pnpmを実行できる環境',
];

function HomeHero() {
  const architectureImage = useBaseUrl('/img/architecture/device-soracom-aws.svg');

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <Heading as="h1">IoTハンズオン教材</Heading>
          <p>
            IoTデバイス、SORACOM、AWSを組み合わせた実践手順を、
            イベントや研修で再利用しやすい形に整理したドキュメントサイトです。
          </p>
          <div className={styles.heroActions}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              教材を開く
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/prerequisites">
              前提条件を見る
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual} aria-label="デバイス、SORACOM、AWSの接続構成">
          <img src={architectureImage} alt="" />
        </div>
      </div>
    </section>
  );
}

function LearningPaths() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <Heading as="h2">推奨ハンズオン導線</Heading>
        <p>初回は上から順に進めると、デバイス接続からAWS連携、可視化までを一通り確認できます。</p>
      </div>
      <div className={styles.pathGrid}>
        {learningPaths.map((path) => (
          <Link className={styles.pathCard} to={path.to} key={path.to}>
            <Heading as="h3">{path.title}</Heading>
            <p>{path.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Requirements() {
  return (
    <section className={styles.band}>
      <div className={styles.bandContent}>
        <div>
          <Heading as="h2">必要なアカウントと準備</Heading>
          <p>
            受講前にアカウント、通信環境、課金ポイント、後片付け手順を確認します。
            秘密情報は教材やIssue、Pull Requestに貼り付けない運用を前提にします。
          </p>
        </div>
        <ul className={styles.requirementList}>
          {accounts.map((item) => (
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
          <Heading as="h2">最新更新情報</Heading>
          <p>初期構築として、Docusaurusの教材構成、サイドバー、GitHub Pages自動デプロイを用意しました。</p>
        </div>
        <Link className="button button--outline button--primary" to="/blog">
          更新情報を見る
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="IoTハンズオン教材"
      description="IoTデバイス、SORACOM、AWSを利用したハンズオン教材サイト">
      <main>
        <HomeHero />
        <LearningPaths />
        <Requirements />
        <LatestUpdates />
      </main>
    </Layout>
  );
}
