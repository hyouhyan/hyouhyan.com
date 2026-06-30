# CLAUDE.md

このリポジトリで Claude Code が作業するときの前提メモ。

## プロジェクト概要

- ひょうひゃん（Hyouhyan）の個人サイト。公開URLは https://hyouhyan.com
- **Astro** 製の**完全な静的サイト**。GitHub Pages（カスタムドメイン）でホスティングする。
- サーバ・DB・APIは無し。ビルド成果物（`dist/`）をそのまま配信する。

## コマンド

- `npm install` … 依存インストール
- `npm run dev` … 開発サーバ（http://localhost:4321）
- `npm run build` … `dist/` に静的出力
- `npm run preview` … ビルド結果をローカル確認

## ディレクトリの考え方

- `src/data/*.ts` … **サイトの中身（プロフィール / スキル / 作品 / リンク等）はここに集約**。
  文言やスキルの増減は基本ここを編集する。コンポーネント側のマークアップは原則いじらない。
- `src/components/*.astro` … セクションごとの見た目の部品。
- `src/layouts/Base.astro` … `<head>`・フォント・共通スクリプト。
- `src/pages/index.astro` … 部品を import して並べているだけ。
- `public/` … そのまま配信される静的ファイル（画像・CSS・`CNAME` など）。

## 規約・お願い

- 文章・コンテンツは**日本語**。フォーマルな文章は箇条書きより**温かみのある段落**を好む。
- 静的サイトの制約を守る: ブラウザの localStorage 等に依存する作りや、実行時サーバAPIを前提にした実装は入れない。
- 色やフォントを変えるときは、各コンポーネントに直書きせず CSS 変数（`src/styles/global.css` の `:root`）を起点にする。
- 変更後は必ず `npm run build` が通ることを確認する。

## 触るとき注意（落とし穴）

- **`public/CNAME`**（中身: `hyouhyan.com`）は消さない。消すとカスタムドメインが外れる。
- **`/tools` と `/wishlist`** は旧サイトの独立ページ。apex を置き換える場合、これらを消さないよう
  `public/tools/` 等に残すか別途用意する。LINK のリンク先がここを指している。
- `astro.config.mjs` の `site` は本番URL。カスタムドメインなので `base` は設定しない。

## やりたいこと（任意・順次）

- まず現状の構成に慣れる → その後 About を厚くする / Now（研究）・Career セクションを追加していく。
- ブログを足すなら Astro の Content Collections（Markdown 管理）を検討。
