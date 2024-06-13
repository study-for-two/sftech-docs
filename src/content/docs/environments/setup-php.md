---
title: PHPのセットアップ
description: PHPのセットアップ
sidebar:
  label: PHP
  order: 5
---

以下は、WSL内にPHPとComposerをセットアップする手順です。指定されたPHPパッケージをインストールし、Composerを使用してPHPのパッケージ管理を行います。

## 前提条件

- WSL2とUbuntuがセットアップ済みであること。

## 手順

### 1. PHPのインストール

1. WSLのUbuntuを起動します。
2. 以下のコマンドを実行して、PHPとその他の必要なパッケージをインストールします。

     ```bash
     sudo apt update
     sudo apt install php php-zip php-curl php-sqlite3 php-opcache
     ```

3. インストールが完了したら、以下のコマンドを実行して、PHPのバージョンを確認します。

     ```bash
     php --version
     ```

### 2. Composerのインストール

1. 以下のコマンドを実行して、Composerのインストールスクリプトをダウンロードして実行します。

     ```bash
     curl -sS https://getcomposer.org/installer | php
     ```

2. 以下のコマンドを実行して、Composerをグローバルに利用可能にします。

     ```bash
     sudo mv composer.phar /usr/local/bin/composer
     ```

3. 以下のコマンドを実行して、Composerが正常にインストールされたことを確認します。

     ```bash
     composer --version
     ```

これで、WSL内にPHPとComposerがセットアップされました。ComposerをPHPプロジェクトのディレクトリ内で実行することで、必要なPHPパッケージをインストールし、依存関係を管理することができます。

## 追加のヒント

- `php.ini`ファイルを編集することで、PHPの設定を変更できます。`php.ini`ファイルの場所は、以下のコマンドで確認できます。

  ```bash
  php --ini
  ```

- Composerを使用してパッケージをインストールするには、プロジェクトのディレクトリ内で以下のコマンドを実行します。

  ```bash
  composer require <package-name>
  ```

- プロジェクトの依存関係を一括でインストールするには、`composer install`コマンドを使用します。

参考リンク：

- [PHP - 公式サイト](https://www.php.net/)
- [Composer - 公式サイト](https://getcomposer.org/)

以上が、WSL内へのPHPとComposerのセットアップ手順です。これにより、WSL内でPHPの開発環境が整います。
