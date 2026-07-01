# hyouhyan.com

ひょうひゃん（Hyouhyan）の個人サイトです。公開先は <https://hyouhyan.com> 。

**Astro** 製の完全な静的サイトで、GitHub Pages（カスタムドメイン）でホスティングしています。
サーバ・DB・API は持たず、ビルド成果物（`dist/`）をそのまま配信するだけのシンプルな構成です。

## セットアップ

```bash
pnpm install
pnpm run dev      # 開発サーバ http://localhost:4321
pnpm run build    # dist/ に静的出力
pnpm run preview  # ビルド結果をローカル確認
```

## ページ構成

トップページ（`src/pages/index.astro`）は、以下のセクションを縦に並べただけのものです。

1. **Home** … フルスクリーンのヒーロー（ロゴ画像＋スクロールダウン矢印）
2. **About** … 丸アイコンと自己紹介・SNS リンク
3. **Career** … タイムライン
4. **Skill** … カテゴリ別のスキルグリッド
5. **Work** … ホバーで説明が出る制作物カード
6. **Link** … 外部リンクボタン

このほかに、エラーページ（`401` / `404` / `418`）を Astro で用意しています。

## ディレクトリ構成

```
public/               # 静的アセット（旧サイト・別サイトの資産も同居。削除は慎重に）
├─ css/ img/ js/ ...
├─ favicon.ico
└─ CNAME              #   hyouhyan.com（消すとカスタムドメインが外れる）
src/
├─ data/              # ★ コンテンツの中身はここを編集する
│  ├─ career.ts
│  ├─ skills.ts
│  ├─ works.ts
│  └─ links.ts
├─ components/        # 各セクションの部品（Header / Home / About / Career /
│  │                  #   Skills / Works / Links / Footer / ErrorPage）
├─ layouts/
│  └─ Base.astro      #   <head>・OGP・Font Awesome
├─ styles/
│  └─ global.css      #   CSS 変数・リセット・共通スタイル（設定の起点）
└─ pages/
   ├─ index.astro     #   各セクションを並べるだけ
   └─ 401 / 404 / 418 #   エラーページ
```

## 編集するときの勘所

- **コンテンツを足す・直すときは `src/data/*.ts` を編集**します。スキルを1つ増やすのも配列に1行追加するだけで、コンポーネント側のマークアップは基本的に触りません。
- **色・フォント・スペーシング**を変えるときは `src/styles/global.css` の `:root` 変数を起点にします。

## 技術スタック

- **Astro v5** による静的サイト出力
- スタイル: `src/styles/global.css` ＋ 各コンポーネントの Astro スコープドスタイル
- スクリプト: バニラ JS（Astro の `<script>` タグ）。jQuery は廃止済み
- フォント: Noto Sans JP（Google Fonts）。ロゴは画像なので、以前使っていた Adobe Typekit は削除済み
- アイコン: Font Awesome（SNS）、Skillicon（スキル）

## 触るときの注意

- `public/CNAME`（中身は `hyouhyan.com`）は消さない。消すとカスタムドメインが外れます。
- `public/*` の削除は要注意。旧サイトや別サイトと依存関係があるため、追加は自由でも削除は慎重に。
- `astro.config.mjs` の `site` は本番 URL。カスタムドメインなので `base` は設定しません。
- ヘッダーのスクロール連動挙動は `Header.astro` の `<script>` に内蔵しています。
