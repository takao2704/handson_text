---
title: SORACOM Harvest
description: SORACOM Harvest Dataでデバイスデータを確認する
---

# SORACOM Harvest

## このページで確認するもの

SORACOM Harvest Dataにデバイスから送信したデータが表示されることを確認します。

## 手順

### 1. Harvest Dataを有効化する

SIMグループでHarvest Dataを有効化します。

### 2. データを送信する

デバイスからJSON形式などのサンプルデータを送信します。

### 3. 表示を確認する

ユーザーコンソールで時系列データ、受信時刻、値を確認します。

```json
{
  "temperature": 24.8,
  "humidity": 52.1
}
```

## 成功条件

Harvest Dataに最新のデータ点が表示されること。

## 関連ページ

- Harvest Dataだけで確認する場合はこのページで完結します。
- AWSへデータを渡す場合は[SORACOMからAWSへ連携](../labs/02-soracom-to-aws.md)を参照します。
