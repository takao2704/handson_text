---
title: クラウドへ連携する
description: SORACOMからAWSへデータを連携するハンズオン
---

# クラウドへ連携する

SORACOMで受け取ったデータをAWS IoT Core、Lambda、S3、Timestreamなどへ渡すためのハンズオンです。

## この目的で使うページ

| ページ | 使う場面 |
|---|---|
| [SORACOM Napter・AWS IoT Core・SORACOM Beamで学ぶMQTTハンズオン](https://github.com/takao2704/aws-iot-soracom-mqtt-handson) | Raspberry PiからAWS IoT Coreへ直接接続したあと、証明書をSORACOM側へ移してBeam経由へ切り替える約3時間のハンズオンを実施したい |
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
