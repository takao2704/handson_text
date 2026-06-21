# IoTハンズオン教材サイト

IoTデバイス、SORACOM、AWSを利用したハンズオン教材を公開するためのDocusaurusサイトです。

## 必要ツール

- Node.js 20以上
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
