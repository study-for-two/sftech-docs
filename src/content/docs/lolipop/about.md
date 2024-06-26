---
title: LOLIPOP!レンタルサーバーとは
description: LOLIPOP!の解説
sidebar:
  label: LOLIPOP!とは
  order: 0
---

LOLIPOP!レンタルサーバーは、GMOペパボ株式会社が提供するレンタルサーバーサービスです。

## 契約

現在はスタンダードプラン(旧チカッパ優待プラン)を契約しています。ライトプランとスタンダードプランを比較した際、以下のような理由からスタンダードプランにしています。

- cronの設定数が5→10に増える
- ライトプランはSSH接続に対応していない

## 仕様

サーバーサイド言語はPHP、Perl、Ruby、Pythonに対応しています。MySQLもサポートされているので、DBを使用したアプリケーション構築も可能です。より詳細な仕様は次のページを確認してください。

## FAQ

- AWSやGCPをメインとしないのはなぜですか？
  - レンタルサーバーに比べて料金が高くなります。学生団体規模で運用するシステムでは費用対効果が悪いです。
- VPSであれば料金を抑えられそうですが？
  - 意外に高くつきます。レンタル料金のみであれば月額2000～4000円ほどで済みますが、DBサーバーをWebサーバーから分離する場合や、クラウド型WAFを導入するなどすると、その分の料金が上乗せされます。WAFについては独自設定すれば0円でできますが、専門的な知識が必要となり、継続的な引継ぎが困難と判断したため断念しています。
