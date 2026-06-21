import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

const handsonCards = [
  {
    title: 'デバイスからSORACOMへ送信',
    meta: 'SORACOM / Harvest Data / 45分',
    description: 'LTE接続したデバイスからSORACOM Harvest Dataへテレメトリを送ります。',
    to: '/docs/labs/01-device-to-soracom',
  },
  {
    title: 'SORACOMからAWSへ連携',
    meta: 'Beam / Funnel / AWS / 60分',
    description: 'SORACOM Beam / Funnelを使い、AWS IoT CoreやLambdaへデータを渡します。',
    to: '/docs/labs/02-soracom-to-aws',
  },
  {
    title: 'データを可視化する',
    meta: 'S3 / Timestream / 45分',
    description: 'S3やTimestreamに蓄積したデータを確認し、後片付けまで実施します。',
    to: '/docs/labs/03-visualize-data',
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
              ハンズオンを見る
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
        <Heading as="h2">ハンズオンカタログ</Heading>
        <p>各ページは単体で開いて使えるように、必要な前提、作るもの、後片付けをページ内にまとめます。</p>
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
          <Heading as="h2">最新更新情報</Heading>
          <p>独立したハンズオンを追加、更新しやすいDocusaurus構成とGitHub Pages自動デプロイを用意しています。</p>
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
