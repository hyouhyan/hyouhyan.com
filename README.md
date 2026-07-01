# hyouhyan.com — Astro 忠実移行版（classic）

**見た目は今の hyouhyan.com と同一**のまま、中身だけ Astro の構造に置き換えたバージョンです。
「フレームワークに載せ替えたら何が変わって、何が変わらないのか」を確かめるためのものです。

## 何が変わって、何が変わらないか

**変わらない（＝見た目・挙動）**

- CSS は当時のものをそのまま使用（`public/css/` に丸ごとコピー）
- 画像・favicon もそのまま（`public/img/`, `public/favicon.ico`）
- フォント（Adobe Typekit のロゴ書体・明朝、Noto Sans JP）、Font Awesome アイコンもそのまま
- ハンバーガーメニュー・スムーススクロール・ナビ点灯・フッター挿入の JS（jQuery）もそのまま
- → ブラウザで見た時の体験は**現行サイトと区別がつきません**

**変わる（＝ソースコードの構造だけ）**

- 1枚の `index.html`（約400行）が、レイアウト + 部品 + データに分解された
  - `src/layouts/Base.astro` … `<head>` と共通スクリプト
  - `src/components/` … Header / Home / About / Skills / Works / Links
  - `src/data/` … スキル・作品・リンクの**中身を配列で管理**
- これまで SKILL を1つ足すには HTML を10行コピペしていたのが、
  `src/data/skills.ts` に**1行追加するだけ**になった（移行の一番のうまみ）

つまり「ただ Astro に移行しただけ」だと、**画面は1ミリも変わらず、編集だけが楽になる**——これが答えです。

## セットアップ

```bash
pnpm install
pnpm run dev      # http://localhost:4321
pnpm run build    # dist/ に出力
```

## 構成

```
public/                  # 当時の静的アセットをそのまま
├─ css/                  #   元サイトのCSS一式（PC/モバイル）
├─ img/                  #   ロゴ・スキル・作品の画像
├─ js/                   #   script.js(ハンバーガー等), footer.js ほか
├─ favicon.ico
└─ CNAME                 #   hyouhyan.com
src/
├─ data/                 # ★ 中身を編集する場所
│  ├─ skills.ts
│  ├─ works.ts
│  └─ links.ts
├─ components/           # 各セクションの部品
├─ layouts/Base.astro    # head・フォント・スクリプト
└─ pages/index.astro     # 部品を並べているだけ
```

## 注意 / TODO

- **`/tools` と `/wishlist`**: LINK のリンク先は当時のまま `/tools` `/wishlist` を指しています。
  これらは元リポジトリでは別フォルダの独立ページで、この移行版には**含まれていません**。
  apex を置き換えるなら、`public/tools/` 等にコピーするか別途用意してください。
- **footer.js**: フッターは `public/js/footer.txt` を読んで末尾に差し込む当時の方式のまま。
  Astro 流にするなら Footer コンポーネントとして静的に書き出すのが綺麗です（任意）。
- **Typekit / Font Awesome のキットID**は hyouhyan さん本人のものをそのまま使っています。
- **`meishi_redirect.js`** は移行版では読み込んでいません（必要なら head に戻せます）。
- CSS を component-scoped に整理し直したり、jQuery を素の JS に置き換えたりは、
  移行後に少しずつやれます（今は「まず同じ見た目で載せ替える」を優先）。
