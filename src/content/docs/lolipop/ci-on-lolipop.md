---
title: LOLIPOP!上でCI/CD
description: CI/CDの解説
sidebar:
  label: CI/CD
  order: 3
---

LOLIPOP!レンタルサーバーでCI/CDを設定する手順です。

## サーバー上での作業

### 1. SSH接続でログインする

```bash
ssh lolipop
```

### 2. サーバー上で鍵を作成

```bash
ssh-keygen -t ed25519 -f ~/.ssh/github/<リポジトリ名> -C "<リポジトリ名>"
```

パスフレーズは何も入力せずに作成してください。

### 3. 設定を追記

`~/.ssh/config`に以下の設定を追記してください。リポジトリ一つずつに設定が必要です。

```vim
# GitHub
Host github
  HostName github.com
  Port 22
  User git
  ForwardAgent yes

# リポジトリごとのDeploy Keysの設定
Host github.com#<リポジトリ名>
  Hostname github.com
  IdentityFile=~/.ssh/github/<リポジトリ名>/id_ed25519
```

### 4. GitHubに公開鍵を登録

1. GitHub.com で、リポジトリのメイン ページへ移動します。

2. リポジトリ名の下にある  [設定] をクリックします。 [設定] タブが表示されない場合は、 [] ドロップダウン メニューを選び、 [設定] をクリックします。

3. タブを示すリポジトリ ヘッダーのスクリーンショット。 [設定] タブが濃いオレンジ色の枠線で強調表示されています。
サイドバーにある [Deploy Keys] (キーのデプロイ) をクリックします。

4. [Add deploy key] (デプロイ キーの追加) をクリックします。

   - [タイトル] フィールドにタイトルを入力します。

   - [キー] フィールドに公開キーを貼り付けます。

   - このキーにリポジトリへの書き込みアクセス権を付与する場合は、 [書き込みアクセスを許可する] を選択します。 書き込みアクセス権を持つデプロイキーを使うと、リポジトリにデプロイメントのプッシュができるようになります。

5. [キーの追加] をクリックします。

### 5. リポジトリのクローン

CI/CDを設定するリポジトリをサーバー上にクローンします。Organization内のリポジトリの場合は、以下のように指定することでクローンが可能です。

```bash
git clone github.com#<リポジトリ名>:<OWNER>/<リポジトリ名>.git
```

## GitHub Actions

### 1. ワークフローファイルの作成

リポジトリのルートディレクトリに`.github/workflows`ディレクトリを作成し、その中に`deploy.yml`ファイルを作成します。以下の内容を`deploy.yml`に記述します。

```yaml
name: Deploy to LOLIPOP!

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy to LOLIPOP!
      env:
        SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
      run: |
        mkdir -p ~/.ssh
        echo "$SSH_PRIVATE_KEY" > ~/.ssh/id_ed25519
        chmod 600 ~/.ssh/id_ed25519
        ssh -o StrictHostKeyChecking=no <your-lolipop-user>@<your-lolipop-host> "
          cd /path/to/your/project
          git pull origin main
          # その他のデプロイコマンド（ビルド、テストなど）
        "
```

### 2. シークレットの設定

GitHub リポジトリの「Settings」→「Secrets」から、以下のシークレットを設定します。

- `SSH_PRIVATE_KEY`: サーバーで生成した`~/.ssh/github/<リポジトリ名>/id_ed25519`の内容

### 3. デプロイの実行

`main`ブランチにプッシュすると、GitHub Actionsが自動的にデプロイを実行します。デプロイの進捗はリポジトリの「Actions」タブから確認できます。

以上で、LOLIPOP!レンタルサーバー上でCI/CDの設定が完了しました。GitHubへのプッシュをトリガーに、自動的にサーバーへのデプロイが行われるようになります。
