---
title: Node.jsのセットアップ
description: Node.jsのセットアップ
sidebar:
  label: Node.js
  order: 4
---

ここから、WSL内に環境を構築していきます。以下は、WSL内にNode.jsをセットアップする手順です。nvmを使用して、Node.jsのLTS版をインストールします。

## 前提条件

- WSL2とUbuntuがセットアップ済みであること。

## 手順

### 1. nvmのインストール

1. WSLのUbuntuを起動します。
2. 以下のコマンドを実行して、nvmのインストールスクリプトをダウンロードして実行します。

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    ```

3. インストールが完了したら、以下のコマンドを実行して、nvmを有効化します。

    ```bash
    source ~/.bashrc
    ```

4. 以下のコマンドを実行して、nvmが正常にインストールされたことを確認します。

    ```bash
    nvm --version
    ```

### 2. Node.jsのLTS版のインストール

1. 以下のコマンドを実行して、Node.jsのLTS版をインストールします。

     ```bash
     nvm install --lts
     ```

2. インストールが完了したら、以下のコマンドを実行して、インストールされたNode.jsのバージョンを確認します。

     ```bash
     node --version
     ```

     バージョンを変更したい場合は、以下のようにして直接バージョンを指定しましょう。

     ```bash
     nvm use v18.13.0
     ```

### 3. デフォルトのNode.jsバージョンの設定

1. 以下のコマンドを実行して、インストールしたNode.jsのLTS版をデフォルトのバージョンとして設定します。

     ```bash
     nvm alias default node
     ```

2. 以下のコマンドを実行して、デフォルトのNode.jsバージョンが正しく設定されたことを確認します。

     ```bash
     node --version
     ```

これで、WSL内にNode.jsがセットアップされました。nvmを使用することで、複数のNode.jsバージョンを管理し、切り替えることができます。

## 追加のヒント

- `nvm ls`コマンドを使用して、インストール済みのNode.jsバージョンを一覧表示できます。
- `nvm use <version>`コマンドを使用して、特定のバージョンのNode.jsに切り替えることができます。
- グローバルにインストールしたnpmパッケージは、Node.jsのバージョンごとに独立して管理されます。

参考リンク：

- [nvm - GitHub](https://github.com/nvm-sh/nvm)
- [Node.js - 公式サイト](https://nodejs.org/)

以上が、WSL内へのNode.jsのセットアップ手順です。nvmを使用することで、Node.jsのバージョン管理がより柔軟になります。
