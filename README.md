# SFTech Docs

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## セットアップ

リポジトリをローカルマシンにクローン

```bash
git clone git@github.com:connect0459/sftech-docs.git
```

パッケージのインストール

```bash
cd sftech-docs && npm install
```

## 🚀 プロジェクト構成

Astro + Starlightプロジェクトの中には、次のようなフォルダとファイルが存在します。

```txt
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlightは、`src/content/docs/`ディレクトリ内の`.md`または`.mdx`ファイルを探します。各ファイルは、そのファイル名に基づいてルートとして公開されます。

画像は`src/assets/`に追加でき、マークダウン内で相対リンクを使って埋め込むことができます。

フェイビコンなどの静的アセットは、`public/`ディレクトリに配置できます。

## 🧞 コマンド

すべてのコマンドは、プロジェクトのルートからターミナルで実行します。

| コマンド                   | アクション                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 依存関係をインストールします                            |
| `npm run dev`             | ローカル開発サーバーを `localhost:4321` で起動します      |
| `npm run build`           | 本番サイトを `./dist/` にビルドします          |
| `npm run preview`         | デプロイ前にビルドをローカルでプレビューします     |
| `npm run astro ...`       | `astro add`、`astro check` などのCLIコマンドを実行します |
| `npm run astro -- --help` | Astro CLIの使用方法を確認します                     |

## 著者

[connect0459](https://github.com/connect0459)
