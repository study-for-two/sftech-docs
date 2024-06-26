---
title: ガイドライン
description: ガイドラインを掲載しています。
sidebar:
  label: ガイドライン
  order: 1
---

情報システムチームとして活動する上で順守すべき規約を掲載しています。

:::danger[警告]
これらの規約を故意に破ることが確認された場合、活動の停止を命じることがあります。
:::

## 基本事項

- パスワードを外部に流出させないこと。
  - パスワードが外部に漏れると、不正アクセスの危険性が高まります。パスワードはセキュリティ上、極秘扱いとし、絶対に外部に公開したり、安全でない通信経路(TLS化されていないHTTP通信など)で送信したりしないでください。
- 団体の不利益になるようなサイバー攻撃を行わないこと。
  - サイバー攻撃は法的にも倫理的にも重大な違反行為です。組織のセキュリティを脅かしたり、財産や信用を損なう行為は絶対に行わないでください。組織の規定やガイドラインを常に順守し、違法または有害な活動には一切関与しないようにしましょう。
- 第三者が提供するサービスへのアクセスは、そのサービスのガイドラインやポリシーを順守すること。
  - 特にスクレイピングを行う際は、レイテンシ(単位時間当たりのアクセス回数)を意識してプログラムを作成してください。
  - DOMツリーの操作は最低でも1秒に1回の頻度に留めておくことが無難です。

## プログラムについて

- ソースコードを団体外部に持ち出さないこと。
  - ソースコードには機密情報が含まれている可能性があり、外部に漏洩すると知的財産権の侵害や機密情報の流出につながる恐れがあります。ソースコードは厳重に管理し、許可なく外部に持ち出したり、共有したりしないでください。
- `.env`や`config.json`など、シークレットキーなどが入ったファイルをGitの管理対象に含めないこと。
  - 必ず`.gitignore`で管理対象から外す。シークレットキー(APIキー、データベース認証情報など)はソースコード内に直接記述しないでください。こうした機密情報がGitリポジトリにコミットされると、外部から簡単にアクセスできてしまう恐れがあります。`.gitignore`ファイルで適切に管理し、リポジトリに含めないようにしてください。
  - 万が一GitHubにpushしてしまった場合は、そのコミット履歴を削除することを徹底してください。
- ユーザーの個人情報を扱うアプリケーションにおいては、機密保護のための対策を行う。
  - XSS(クロスサイトスクリプティング)対策としてHTMLエンコーディングやコンテンツセキュリティポリシーの適用を行う。
  - CSRF(クロスサイトリクエストフォージェリ)対策としてトークンを利用する。
  - SQLインジェクション対策としてプレースホルダやORM等を利用する。
