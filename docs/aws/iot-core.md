---
title: AWS IoT Core
description: AWS IoT Coreでデバイスデータを受け取る
---

# AWS IoT Core

## このページで確認するもの

AWS IoT Coreの受信トピック、ルール、認証設定をハンズオン向けに整理します。

## 手順

### 1. トピック設計を決める

デバイスデータを受信するMQTTトピックを決めます。

```text
handson/<YOUR_DEVICE_ID>/telemetry
```

### 2. テストクライアントで受信確認する

AWS IoT CoreのMQTTテストクライアントでトピックを購読します。

### 3. ルールを作成する

Lambda、S3、Timestreamなど後続サービスへ渡すルールを作成します。

:::warning
AWSアカウントID、ARN、証明書秘密鍵の実値を教材に含めないでください。
:::

## 次に進む

[Lambda](./lambda.md)へ進みます。
