---
title: 証明書
description: TLS証明書と秘密鍵に関するエラー
---

# 証明書

## 症状

- TLS handshake failed
- certificate verify failed
- private key not found

## 確認順序

1. デバイスの時刻が正しいか確認する
2. 証明書ファイルのパスを確認する
3. 秘密鍵の権限を確認する
4. CA証明書の指定を確認する
5. AWS IoT Coreの証明書状態を確認する

:::warning
秘密鍵の中身をIssue、Pull Request、チャット、スクリーンショットに含めないでください。
:::

## コマンド例

```bash
date
ls -l ./certs
openssl x509 -in ./certs/device-cert.pem -noout -subject -dates
```
