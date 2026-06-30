# CLAUDE.md

このリポジトリで Claude Code が作業するときの前提メモ。
ユーザからの指示がある度、この仕様書は随時書き足し・更新を行う。
**作業完了後は必ずこのファイルを最新状態に更新すること。**

## プロジェクト概要

- ひょうひゃん（Hyouhyan）の個人サイト。公開URLは https://hyouhyan.com
- **Astro** 製の**完全な静的サイト**。GitHub Pages（カスタムドメイン）でホスティングする。
- サーバ・DB・APIは無し。ビルド成果物（`dist/`）をそのまま配信する。

## コマンド

- `pnpm install` … 依存インストール
- `pnpm run dev` … 開発サーバ（http://localhost:4321）
- `pnpm run build` … `dist/` に静的出力
- `pnpm run preview` … ビルド結果をローカル確認

## ディレクトリの考え方

```
src/
  styles/
    global.css        ← CSS変数・リセット・フォント・共通スタイル（ここが唯一の設定起点）
  layouts/
    Base.astro        ← <head>・Adobe Typekit・Font Awesome
  components/
    Header.astro      ← 固定左縦型ナビ＋右SNSパネル（スクロール連動）。スコープCSS＋バニラJS内蔵
    Home.astro        ← フルスクリーンヒーロー（ロゴ画像＋スクロールダウン矢印）
    About.astro       ← 2カラム（丸アイコン＋名前・本文・SNSリンク）
    Career.astro      ← タイムライン。データは src/data/career.ts
    Skills.astro      ← カテゴリ別スキルグリッド。データは src/data/skills.ts
    Works.astro       ← ホバーオーバーレイカード。データは src/data/works.ts
    Links.astro       ← 黒枠ホバー反転ボタン。データは src/data/links.ts
    Footer.astro      ← フッター（著作権表示）
  data/
    career.ts         ← CareerItem[] プレースホルダー。中身はユーザが後で記入
    skills.ts         ← Skill[]（カテゴリ付き: Web / App・Backend / Infra・OS / Creative）
    works.ts          ← Work[]（url / img / description）
    links.ts          ← LinkItem[]（url / label）
  pages/
    index.astro       ← 全コンポーネントを並べるだけ
public/               ← 静的ファイル。削除要注意（旧サイト・別サイトとの依存あり）
```

- **コンテンツ変更は `src/data/*.ts` のみ編集**。コンポーネント側のマークアップは原則いじらない。
- 色・フォント・スペーシングを変えるときは `src/styles/global.css` の `:root` 変数を起点にする。

## 現在のページ構成（セクション順）

1. **Home** `#home` … フルスクリーンヒーロー（ロゴ画像）
2. **About** `#about` … 自己紹介。プレースホルダーテキスト入り
3. **Career** `#career` … タイムライン。**中身はプレースホルダー（Lorem ipsum / 準備中）**
4. **Skill** `#skill` … スキル一覧（カテゴリ4分類、計29アイテム）
5. **Work** `#work` … 制作物カード（3件）
6. **Link** `#link` … 外部リンクボタン（4件）

## ヘッダーの挙動（重要・変更禁止）

ユーザが特に気に入っている部分。以下の挙動を壊さないこと：

- **PC（768px以上）**: 左縦型ナビ。ナビ項目にホバー／アクティブで黒塗りアニメーション
- スクロールで `#about` 以降 → 右SNSパネルがフェードアウト
- スクロールで `#skill` 以降 → `header.style.width` が `auto` に切り替わる（ヘッダーが収縮）
- **モバイル（767px以下）**: 上部バー＋ハンバーガーでフルスクリーンオーバーレイ

## 技術スタック（現状）

- **Astro v5** 静的サイト出力
- CSS: Astro スコープスタイル（各コンポーネント内 `<style>`）＋ `src/styles/global.css`
- JS: バニラJS（Astro `<script>` タグ、defer モジュール）。jQuery は廃止済み
- フォント: Noto Sans JP（Google Fonts）＋ Adobe Typekit（ロゴ書体）
- アイコン: Font Awesome（SNS アイコン）

## 規約・お願い

- 文章・コンテンツは**日本語**。フォーマルな文章は箇条書きより**温かみのある段落**を好む。
- 静的サイトの制約を守る: localStorage 等への依存、実行時サーバAPI を前提にした実装は入れない。
- `pnpm run build`が通ることを必ず確認する。

## 触るとき注意（落とし穴）

- **`public/CNAME`**（中身: `hyouhyan.com`）は消さない。消すとカスタムドメインが外れる。
- **`public/*`**の削除は要注意。旧サイトや別サイトとの依存関係があるため、追加は良いが削除は慎重に。
- `astro.config.mjs` の `site` は本番URL。カスタムドメインなので `base` は設定しない。
- ヘッダーのスクロール挙動 JS は `Header.astro` の `<script>` に内蔵。`public/js/script.js` は廃止済み（削除禁止・旧サイト参照の可能性あり）。

## やりたいこと（任意・順次）

- **Career セクションの中身を記入**（`src/data/career.ts` にユーザが実績を入力）
- **About セクションの拡充**（文章・写真の追加）
- Now（研究）セクションの追加を検討
- ブログを足すなら Astro の Content Collections（Markdown 管理）を検討
