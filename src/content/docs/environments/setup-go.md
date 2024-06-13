---
title: Goのセットアップ
description: Goのセットアップ
sidebar:
  label: Go
  order: 6
---

以下は、WSL内にGo言語をセットアップする手順です。提供されたコマンドを使用して、Go言語をインストールします。

## 前提条件

- WSL2とUbuntuがセットアップ済みであること。

## 手順

### Go言語のインストール

1. WSLのUbuntuで以下のコマンドを実行して、Go言語のPPAリポジトリを追加します。

     ```bash
     sudo add-apt-repository ppa:longsleep/golang-backports
     ```

2. 以下のコマンドを実行して、パッケージリストを更新します。

     ```bash
     sudo apt update
     ```

3. 以下のコマンドを実行して、Go言語をインストールします。

     ```bash
     sudo apt install golang-go
     ```

4. インストールが完了したら、以下のコマンドを実行して、Go言語のバージョンを確認します。

     ```bash
     go version
     ```

## 追加のヒント

- `go env`コマンドでGoにかかわる環境変数を取得できます。
  - インターネットやChatGPTは`GOPATH`や`GOROOT`の設定を勧めてきますが、Go1.11に登場したGo modulesの仕組み上、基本的に設定不要です。
- Go言語のプログラムを実行するには、`go run <file.go>`コマンドを使用します。
- Go言語のプログラムをビルドするには、`go build <file.go>`コマンドを使用します。

参考リンク：

- [Go言語 - 公式サイト](https://golang.org/)
- [Go言語 - インストール手順](https://golang.org/doc/install)

以上が、WSL内へのGo言語のセットアップ手順です。これにより、WSL内でGo言語の開発環境が整います。
