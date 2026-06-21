---
title: データを見る
description: SORACOMやAWSに届いたデータを確認、保存、可視化するハンズオン
---

# データを見る

SORACOMやAWSに届いたIoTデータを確認、保存、可視化するためのハンズオンです。

## この目的で使うページ

| ページ | 使う場面 |
|---|---|
| [SORACOM Harvest](../soracom/harvest.md) | SORACOM上で最新データをすぐ確認したい |
| [データの可視化](../labs/03-visualize-data.md) | AWSに保存したデータを確認、可視化したい |
| [S3](../aws/s3.md) | JSONなどのオブジェクトとして保存したい |
| [Timestream](../aws/timestream.md) | 時系列データとして保存、クエリしたい |

## 始める前に確認すること

- どこにデータが届くか決まっている
- データ形式と確認方法が決まっている
- AWSを使う場合は保存先を確認できる権限がある

## 関連する目的

- データ送信から確認する場合は[データを送る](./send-data.md)
- 後片付けする場合は[後片付け・課金確認](./cleanup-cost.md)
