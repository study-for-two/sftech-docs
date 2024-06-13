---
title: Dockerのセットアップ
description: Dockerのセットアップ
sidebar:
  label: Docker
  order: 3
---

以下は、WSL上にDockerをインストールして使用するための手順です。Docker Desktopの項目が不要の方は読み飛ばしていただいて構いません。

## 前提条件

- Windows 10 バージョン2004以降、またはWindows 11を使用していること。
- WSL2とUbuntuがセットアップ済みであること。

## 手順

WSLのUbuntu上で作業を行います。

### Docker Engineのインストール

#### 1. 必要なパッケージのインストール

- 以下のコマンドを実行して、`curl`と`apt-transport-https`をインストールします。

     ```bash
     sudo apt update && sudo apt upgrade -y && sudo apt install curl apt-transport-https -y
     ```

#### 2. Docker公式GPG鍵の追加

- 以下のコマンドを実行して、Docker公式のGPG鍵を追加します。

     ```bash
     curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
     ```

#### 3. Docker安定版のレポジトリ追加

- 以下のコマンドを実行して、Docker安定版のレポジトリを追加します。

     ```bash
     echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
     ```

#### 4. Docker Engineのインストール

- 以下のコマンドを実行して、Docker Engineをインストールします。

     ```bash
     sudo apt update && sudo apt install docker-ce docker-ce-cli containerd.io -y
     ```

#### 5. Dockerデーモンの起動

- 以下のコマンドを実行して、Dockerデーモンを起動します。

     ```bash
     sudo service docker start
     ```

### Docker Desktopのインストール

#### 1. Docker Desktopのダウンロード

1. [Docker公式サイト](https://www.docker.com/products/docker-desktop)にアクセスします。
2. "Download for Windows" ボタンをクリックして、インストーラをダウンロードします。

#### 2. Docker Desktopのインストール

1. ダウンロードしたインストーラ (Docker Desktop Installer.exe) を実行します。
2. インストーラの指示に従ってインストールを進めます。
3. インストールが完了したら、Docker Desktopを起動します。

#### 3. WSL2のインテグレーションを有効化

1. Docker Desktopの設定 (歯車アイコン) を開きます。
2. 「Resources」→「WSL Integration」を選択します。
3. 「Enable integration with my default WSL distro」をオンにします。
4. 使用するWSLディストリビューション (例：Ubuntu) の横にあるトグルスイッチをオンにします。
5. 「Apply & Restart」をクリックして、Docker Desktopを再起動します。

## 注意点

- WSL2のインテグレーションを有効化する際に、Dockerが既存のコンテナやイメージを自動的に検出して移行します。
- WSL上でDockerを使用する場合、Linuxコンテナのみがサポートされます。Windowsコンテナを使用することはできません。

これで、WSL上でDockerを使用するための環境が整いました。Dockerコマンドを使って、コンテナの管理やアプリケーションの開発を行うことができます。

参考リンク：

- [Docker Desktop WSL 2 backend](https://docs.docker.com/desktop/windows/wsl/)
- [Get started with Docker remote containers on WSL 2](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers)
