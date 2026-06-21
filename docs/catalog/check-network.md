---
title: ネットワークを確認する
description: 回線状態、疎通、証明書、権限の切り分け
---

# ネットワークを確認する

デバイス、SORACOM、AWSのどこで詰まっているかを切り分けるためのページです。

## この目的で使うページ

| ページ | 使う場面 |
|---|---|
| [SORACOM Air](../soracom/air.md) | SIM状態、セッション、通信量を確認したい |
| [ネットワーク](../troubleshooting/network.md) | DNS、ルート、疎通を切り分けたい |
| [証明書](../troubleshooting/certificates.md) | TLSや証明書まわりのエラーを確認したい |
| [AWS権限](../troubleshooting/aws-permissions.md) | AWS側のIAM権限不足を切り分けたい |

## 始める前に確認すること

- どの区間まで疎通しているかを分けて確認する
- 実値のSIM ID、IMSI、秘密鍵、アクセスキーを記録に残さない
- エラー文、時刻、送信先、対象リソースを控える

## 関連する目的

- デバイス側から見直す場合は[デバイスを準備する](./prepare-device.md)
- 作成済みリソースを整理する場合は[後片付け・課金確認](./cleanup-cost.md)
