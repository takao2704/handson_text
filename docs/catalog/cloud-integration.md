---
title: クラウドへ連携する
description: SORACOMからAWSへデータを連携するハンズオン
---

# クラウドへ連携する

SORACOMで受け取ったデータをAWS IoT Core、Lambda、S3、Timestreamなどへ渡すためのハンズオンです。

## この目的で使うページ

| ページ | 使う場面 |
|---|---|
| [SORACOMからAWSへ連携](../labs/02-soracom-to-aws.md) | SORACOM BeamまたはFunnelからAWSへ送る流れを試したい |
| [SORACOM Beam](../soracom/beam.md) | HTTP、MQTT、TCPなどを転送したい |
| [SORACOM Funnel](../soracom/funnel.md) | AWS IoT Coreなどへ直接連携したい |
| [AWS IoT Core](../aws/iot-core.md) | MQTTトピックやルールを確認したい |
| [Lambda](../aws/lambda.md) | 受信データを加工、保存したい |

## 始める前に確認すること

- SORACOMへデータを送信できる
- 連携先のAWSリージョンが決まっている
- 作成するAWSリソースとIAM権限が決まっている

## 関連する目的

- デバイス側の送信を確認する場合は[データを送る](./send-data.md)
- 保存後の確認は[データを見る](./view-data.md)
