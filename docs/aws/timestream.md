---
title: Timestream
description: Amazon Timestreamへ時系列データを保存する
---

# Timestream

## このページで確認するもの

時系列データをAmazon Timestreamに保存し、簡単なクエリで確認する手順を整理します。

## 手順

### 1. データベースとテーブルを作成する

保持期間、メモリストア、マグネティックストアの設定を確認します。

### 2. レコードを書き込む

デバイスID、測定名、時刻、値を含むレコード形式を決めます。

### 3. クエリする

```sql
SELECT *
FROM "<DATABASE>"."<TABLE>"
ORDER BY time DESC
LIMIT 10
```

## 後片付け

作成したテーブルとデータベースを削除します。

## 次に進む

[データの可視化](../labs/03-visualize-data.md)へ進みます。
