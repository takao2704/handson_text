import type {ReactNode} from 'react';
import {useEffect} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Head from '@docusaurus/Head';

const zennUrl = 'https://zenn.dev/takao2704';

export default function BlogRedirect(): ReactNode {
  useEffect(() => {
    window.location.replace(zennUrl);
  }, []);

  return (
    <Layout title="Blog" description="Zennのtakao2704ブログへ移動します">
      <Head>
        <link rel="canonical" href={zennUrl} />
        <meta httpEquiv="refresh" content={`0; url=${zennUrl}`} />
      </Head>
      <main className="container margin-vert--xl">
        <Heading as="h1">Blog</Heading>
        <p>Zennのtakao2704ページへ移動します。</p>
        <p>
          自動で移動しない場合は <a href={zennUrl}>Zennのtakao2704ページ</a> を開いてください。
        </p>
      </main>
    </Layout>
  );
}
