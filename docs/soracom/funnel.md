---
title: SORACOM Funnel
description: SORACOM Funnelによるクラウドサービス連携
---

# SORACOM Funnel

## このページで確認するもの

SORACOM Funnelを使ってAWS IoT Coreなどのクラウドサービスへデータを送るための設定観点を整理します。

## 手順

### 1. 連携先を決める

AWS IoT Core、Amazon Kinesisなど、イベントで利用する連携先を決めます。

### 2. 認証情報を設定する

必要な認証情報をSORACOMの認証情報ストアに登録します。

### 3. Funnel設定を作成する

デバイスが所属するSIMグループにFunnel設定を追加します。

:::warning
AWSアクセスキーやSORACOM認証情報は、スクリーンショットや教材本文に実値を含めないでください。
:::

## 関連ページ

- 連携先にAWS IoT Coreを使う場合は[AWS IoT Core](../aws/iot-core.md)を参照します。
- ハンズオン形式で試す場合は[SORACOMからAWSへ連携](../labs/02-soracom-to-aws.md)を参照します。
