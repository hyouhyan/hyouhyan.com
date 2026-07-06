// 論文・学会発表のデータ。発表したらここに1件ずつ追加する。
// Career セクション内の h2「Publications」サブセクションに表示される。
// publications が空の間はサブセクションごと非表示。
export interface Publication {
  /** 論文タイトル */
  title: string;
  /** 著者（例: 'ひょうひゃん, 内藤 ほか'）。自分の表示名は自動で太字になる */
  authors: string;
  /** 会議 / 研究会 / ジャーナル名 */
  venue: string;
  /** 発表年（例: '2026'） */
  year: string;
  /** DOI / 論文ページ / PDF へのリンク（任意） */
  url?: string;
  /** 種別タグ（例: '国際会議' / '国内研究会' / 'ジャーナル'）（任意） */
  type?: string;
  /** 受賞など（例: '学生奨励賞'）（任意） */
  award?: string;
}

export const publications: Publication[] = [
  // まだ無し。発表したら下記の形式で追加する:
  // {
  //   type: '国内研究会',
  //   title: 'NAPT越えを実現するオーバーレイネットワークの設計と実装',
  //   authors: 'ひょうひゃん, 内藤 ほか',
  //   venue: '情報処理学会 DPS研究会',
  //   year: '2026',
  //   url: 'https://example.com/paper',
  //   award: '学生奨励賞',
  // },
];
