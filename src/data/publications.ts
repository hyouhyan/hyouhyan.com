// 論文・学会発表のデータ。発表したらここに1件ずつ追加する。
// Career セクション内の h2「Publications」サブセクションに表示される。
// publications が空の間はサブセクションごと非表示。

/**
 * 著者リスト内で太字にする自分の表示名。
 * 国内（日本語名）と国際（英語名）で表記が異なるので複数指定できる。
 * 部分一致の取りこぼしを防ぐため、長いものから順に照合される。
 */
export const selfNames: string[] = ['ひょうひゃん', 'Hyouhyan'];

export interface Publication {
  /** 論文タイトル */
  title: string;
  /**
   * 著者（任意）。
   * selfNames に含まれる表記は自動で太字になる。未指定なら著者行ごと非表示。
   */
  authors?: string;
  /** 会議 / 研究会 / ジャーナル名 */
  venue: string;
  /**
   * 発表時期。そのまま venue の後ろに出力されるので粒度は自由。
   * 例: '2026' / '2026 Jan' / '2026年1月' / '2026 Jan. 12–14'
   */
  date: string;
  /** DOI / 論文ページ / PDF へのリンク（任意） */
  url?: string;
  /**
   * タグ（任意）。種別・査読の有無などを複数付けられる。
   * 例: ['国際会議', '査読あり'] / ['国内研究会'] / ['ジャーナル']
   * 未指定や空配列ならバッジは何も表示されない。特定のタグ名を特別扱いはしない。
   */
  tags?: string[];
  /**
   * 受賞（任意）。1論文に複数付く場合もあるので配列。
   * タグと同じ行の、タグの後ろに、タグとは別色のバッジで表示される。
   * 例: ['Excellent Paper Award'] / ['Best Paper Award', 'Student Award']
   */
  awards?: string[];
}

export const publications: Publication[] = [
  {
    tags: ['国際会議', '査読あり'],
    title: 'CYPHONIC v3: A Stateless Cloud Architecture for Scalable P2P Overlay Networking',
    venue: '2026 IEEE 15th Global Conference on Consumer Electronics (GCCE) - RMC',
    date: '2026, Oct',
    awards: ['Excellent Paper Awards: Outstanding Prize'],
  },
  {
    tags: ['国際会議', '査読あり'],
    title: 'Efficient and Stable End-Node Packet Processing for CYPHONIC Using GSO/GRO',
    venue: '2026 IEEE 15th Global Conference on Consumer Electronics (GCCE) - RMC',
    date: '2026, Oct',
  },
  {
    tags: ['国際会議', '査読あり'],
    title: 'Design and Implementation of a Multi-Tenant Management Framework for CYPHONIC',
    venue: '2026 IEEE 15th Global Conference on Consumer Electronics (GCCE) - RHN',
    date: '2026, Oct',
    awards: ['Excellent Paper Awards: Bronze Prize'],
  },
  {
    tags: ['国際会議', '査読あり'],
    title: 'Unified Host and Network-Based Mobility across and NAT Boundaries in CYPHONIC',
    venue: '2026 IEEE 36th International Telecommunication Networks and Applications Conference (ITNAC) - Full papers',
    date: '2026, Nov',
  },
];
