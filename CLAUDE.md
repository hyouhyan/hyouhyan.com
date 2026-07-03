# CLAUDE.md

このリポジトリで Claude Code が作業するときの前提メモ。
ユーザからの指示がある度、この仕様書は随時書き足し・更新を行う。
**作業完了後は必ずこのファイルを最新状態に更新すること。**

## プロジェクト概要

- ひょうひゃん（Hyouhyan）の個人サイト。公開URLは https://hyouhyan.com
- **Astro** 製の**完全な静的サイト**。GitHub Pages（カスタムドメイン）でホスティングする。
- サーバ・DB・APIは無し。ビルド成果物（`dist/`）をそのまま配信する。
- ユーザは https://kamitsubaki.jp/ のデザインを気に入っており、デザインや雰囲気の選定時に参考にすること。

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
    Base.astro        ← <head>・OGP メタ・Font Awesome
  components/
    Header.astro      ← 固定左縦型ナビ（スクロール連動）。スコープCSS＋バニラJS内蔵
    Home.astro        ← フルスクリーンヒーロー（ロゴ画像＋スクロールダウン矢印）
    About.astro       ← 2カラム（丸アイコン＋名前・本文・SNSリンク）
    Career.astro      ← タイムライン。データは src/data/career.ts
    Skills.astro      ← カテゴリ別スキルグリッド。データは src/data/skills.ts
    Works.astro       ← ホバーオーバーレイカード。データは src/data/works.ts
    Hobby.astro       ← 趣味セクション。趣味はテキスト主体のコンパクトカード（画像なし）＋ h2「推し」サブセクションは小さめカードの横スクロール（画像あり）。データは src/data/hobby.ts / src/data/oshi.ts
    Links.astro       ← 黒枠ホバー反転ボタン。データは src/data/links.ts
    Footer.astro      ← フッター（著作権表示）
  data/
    career.ts         ← CareerItem[]。実データ記入済み（2022/4 大学入学 〜 2028/3 大学院修士課程 修了予定。研究室配属・JOJIハウス等）
    skills.ts         ← Skill[]（計63件）。表示順 skillCategories = Infra / OS → Languages → Database → Embedded → Dev Tools → Creative（インフラエンジニアなのでインフラ系を先頭）。一部カテゴリは subcategory（h3見出し）でさらに細分（Frameworks / Tools・Web / Frontend・Web / Backend）。img は原則 skillicon()（skillicons.dev）、無いものは simpleIcon()（cdn.simpleicons.org）か public/img/skill のローカル画像（Tailscale は正式ロゴ未用意で network.jpg を仮画像に流用中、要差し替え）
    works.ts          ← Work[]（url / img / description）
    hobby.ts          ← HobbyItem[]（title / description?）。description は任意（なければ非表示）。画像・アイコンは持たない（画像は推し欄だけ）。現状: ダーツ・自宅サーバ運用・遠征・カラオケ・日本酒
    oshi.ts           ← OshiItem[]（name / description? / category? / img? / url?）。description は任意（なければ非表示）。Hobby.astro の h2「推し」サブセクションで小さめカードを**自動送り＋ホイール/タッチで手動左右スクロール**（Hobby.astro 内バニラJS。操作/ホバー中は自動停止、スクロールバー非表示、端フェード、シームレスループのためカードをJSで複製、prefers-reduced-motion で自動送りOFF）で表示。**img 未指定＆url 指定なら、ビルド時に url の og:image を取得して img に補完**（下記 lib/og.ts）。img も url も無ければハートアイコン。url があればカード全体がリンク化。現状: VTuber 7組（ヒメヒナ・花譜・明透・KMNZ・V.W.P・ミライアカリ・大蔦エル。いずれも url→og:image で画像解決）
    links.ts          ← LinkItem[]（url / label）
  lib/
    og.ts             ← ビルド時ユーティリティ。fetchOgImage(url)=ページの og:image（無ければ twitter:image）取得、resolveOshi(items)=推しの img 未指定分を og:image で補完。取得失敗時は undefined 返しでビルドは壊さない＋dev 用にモジュールキャッシュあり
  pages/
    index.astro       ← 全コンポーネントを並べるだけ
public/               ← 静的ファイル。削除要注意（旧サイト・別サイトとの依存あり）
```

- **コンテンツ変更は `src/data/*.ts` のみ編集**。コンポーネント側のマークアップは原則いじらない。
- 色・フォント・スペーシングを変えるときは `src/styles/global.css` の `:root` 変数を起点にする。

## 現在のページ構成（セクション順）

1. **Home** `#home` … フルスクリーンヒーロー（ロゴ画像）
2. **About** `#about` … 自己紹介（記入済み。丸アイコン＋本文＋SNSリンク）
3. **Career** `#career` … タイムライン（記入済み。2022〜2028）
4. **Skill** `#skill` … スキル一覧（6カテゴリ・計63アイテム。GitHub プロフィール README のスキル一覧と同期）
5. **Work** `#work` … 制作物カード（3件）
6. **Hobby** `#hobby` … 趣味（テキスト主体のコンパクトカード、画像なし・5件）＋ h2「推し」サブセクション（小さめカードを自動送り＋ホイール/タッチで手動スクロール、画像あり・VTuber 7組）
7. **Link** `#link` … 外部リンクボタン（4件）

- セクションを追加/並べ替えしたら、`Header.astro` のナビ `<li>` と `<script>` 内 `sectionIds` 配列、`global.css` の scroll-margin セレクタ（PC・モバイル2箇所）も合わせて更新すること。

## ヘッダーの挙動（重要・変更禁止）

ユーザが特に気に入っている部分。以下の挙動を壊さないこと：

- **PC（768px以上）**: 左縦型ナビ。ナビ項目にホバー／アクティブで黒塗りアニメーション
- スクロールで `#skill` 以降 → `header.style.width` が `auto` に切り替わる（ヘッダーが収縮）
- **モバイル（767px以下）**: 上部バー＋ハンバーガーでフルスクリーンオーバーレイ

## 技術スタック（現状）

- **Astro v5** 静的サイト出力
- CSS: Astro スコープスタイル（各コンポーネント内 `<style>`）＋ `src/styles/global.css`
- JS: バニラJS（Astro `<script>` タグ、defer モジュール）。jQuery は廃止済み
- フォント: Noto Sans JP（Google Fonts）。ロゴは画像なので Adobe Typekit は廃止済み（削除済み）
- アイコン: Font Awesome（SNS アイコン）、Skillicon
## 規約・お願い

- 文章・コンテンツは**日本語**。フォーマルな文章は箇条書きより**温かみのある段落**を好む。
- 静的サイトの制約を守る: localStorage 等への依存、実行時サーバAPI を前提にした実装は入れない。
- `pnpm run build`が通ることを必ず確認する。

## 触るとき注意（落とし穴）

- **`public/CNAME`**（中身: `hyouhyan.com`）は消さない。消すとカスタムドメインが外れる。
- **`public/*`**の削除は要注意。旧サイトや別サイトとの依存関係があるため、追加は良いが削除は慎重に。
- `astro.config.mjs` の `site` は本番URL。カスタムドメインなので `base` は設定しない。
- ヘッダーのスクロール挙動 JS は `Header.astro` の `<script>` に内蔵。`public/js/script.js` は廃止済み（削除禁止・旧サイト参照の可能性あり）。
- 推しの og:image 自動取得により**ビルド時に外部フェッチが発生する**（`lib/og.ts`）。あくまでビルド時のみで実行時APIではない。オフライン時や取得失敗時は img 未取得（ハート表示）になるだけでビルドは通る。取得した画像 URL はビルド時点のスナップショットなので、更新にはリビルドが必要。

## やりたいこと（任意・順次）

- Now（研究）セクションの追加を検討
- ブログを足すなら Astro の Content Collections（Markdown 管理）を検討
- OGP に `og:image` 等を追加（現状 `Base.astro` は og:image 未設定で、Discord 等シェア時にサムネが出ない。`twitter:card` の `summary_large_image` 化も）
- 推しの画像は url→og:image のホットリンク依存。活動終了先で将来取得に失敗しうる（フォールバック改善やガイドライン許容素材のローカル化は検討保留中）
