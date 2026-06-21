---
title: Raspberry Pi
description: Raspberry Piをハンズオンデバイスとして利用するための確認項目
---

# Raspberry Pi

## このページで確認するもの

Raspberry PiをLTE接続またはネットワーク接続されたIoTデバイスとして利用する前に、OS、通信、時刻同期、コマンド実行環境を確認します。

## 対象者

Raspberry Piを使ってSORACOMへデータ送信する受講者、またはワークショップ運営者。

## 所要時間

20分

## このページの前提

- Raspberry Pi OSが起動している
- SSHまたはローカルコンソールでログインできる
- 利用する通信方式が決まっている

## 使用するもの

- Raspberry Pi
- microSDカード
- 電源
- LTEモジュールまたはネットワーク接続

## 手順

### 1. OSバージョンを確認する

```bash
cat /etc/os-release
uname -a
```

### 2. ネットワーク接続を確認する

```bash
ip addr
ip route
ping -c 3 soracom.io
```

### 3. 時刻同期を確認する

```bash
timedatectl status
```

## よくあるエラー

- DNSが引けない
- デフォルトルートがLTE側に向いていない
- システム時刻がずれてTLS接続に失敗する

## 関連ページ

- 回線状態を確認する場合は[SORACOM Air](../soracom/air.md)を参照します。
