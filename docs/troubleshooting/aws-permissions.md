---
title: AWS権限
description: AWS IAM権限不足の切り分け
---

# AWS権限

## 症状

- AccessDenied
- Not authorized to perform
- IoTルールやLambda関数を作成できない

## 確認順序

1. 利用中のAWSアカウントとリージョンを確認する
2. IAMユーザーまたはロールの権限を確認する
3. AWS IoT Core、Lambda、S3、Timestreamの必要権限を確認する
4. CloudWatch Logsに詳細エラーが出ていないか確認する

## 記録する情報

- 実行した操作
- エラーメッセージ
- 利用リージョン
- 作成しようとしたリソース種別

:::info
AWSアカウントIDやARNを共有する場合は、公開範囲とマスキング方針を確認してください。
:::
