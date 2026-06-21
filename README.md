# IoTハンズオン集

IoTデバイス、SORACOM、AWSを利用した独立型ハンズオンを公開するためのDocusaurusサイトです。

## 必要ツール

- Node.js 22.13以上
- pnpm 11系
- Git

## ローカル開発

```bash
pnpm install
pnpm start
```

ブラウザで `http://localhost:3000/` を開きます。

## ビルド確認

```bash
pnpm build
```

## GitHub Pages

`main` ブランチへpushすると `.github/workflows/deploy.yml` がDocusaurusをビルドし、GitHub Pagesへ公開します。

GitHubリポジトリ側では以下を設定してください。

```text
Settings > Pages > Build and deployment > Source > GitHub Actions
```

カスタムドメインを使う場合は、GitHub Actionsの環境変数 `DOCUSAURUS_URL` と `DOCUSAURUS_BASE_URL` を調整します。

## ライセンス

Copyright © 2026 Takao Ide.

- 教材本文、学習コンテンツ、オリジナル図版: [CC BY 4.0](./LICENSE-DOCS.md)
- サイト実装、設定ファイル、サンプルコード: [MIT License](./LICENSE)
- 製品名、サービス名、ロゴ、商標、第三者素材: 各権利者に帰属します
