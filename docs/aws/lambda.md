---
title: Lambda
description: AWS LambdaでIoTデータを処理する
---

# Lambda

## このページで確認するもの

AWS IoT Coreから渡されたデータをLambdaで加工、検証、保存するための基本構成を整理します。

## 手順

### 1. 関数を作成する

イベントで利用するランタイム、権限、環境変数を決めます。

### 2. テストイベントを用意する

```json
{
  "deviceId": "<YOUR_DEVICE_ID>",
  "temperature": 24.8,
  "humidity": 52.1
}
```

### 3. ログを確認する

CloudWatch Logsにイベント内容と処理結果が出力されることを確認します。

## 後片付け

不要になったLambda関数、ロググループ、IAMロールを削除します。

## 次に進む

[S3](./s3.md)または[Timestream](./timestream.md)へ進みます。
