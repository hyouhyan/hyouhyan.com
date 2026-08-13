// 論文・学会発表のデータ。発表したらここに1件ずつ追加する。
// Work セクション内の h2「Publications」サブセクションに表示される。
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
  /** 種別タグ（例: '国際会議' / '国内研究会' / 'ジャーナル'）（任意） */
  type?: string;
  /** 受賞など（例: '学生奨励賞'）（任意） */
  award?: string;
}

export const publications: Publication[] = [
  {
    type: '国際会議',
    title: 'CYPHONIC v3: A Stateless Cloud Architecture for Scalable P2P Overlay Networking',
    venue: '2026 IEEE 15th Global Conference on Consumer Electronics (GCCE) - RMC',
    date: '2026, Oct',
  },
  {
    type: '国際会議',
    title: 'Design and Implementation of a Multi-Tenant Management Framework for CYPHONIC',
    venue: '2026 IEEE 15th Global Conference on Consumer Electronics (GCCE) - RHN',
    date: '2026, Oct',
  },
  {
    type: '国際会議',
    title: 'Efficient and Stable End-Node Packet Processing for CYPHONIC Using GSO/GRO',
    venue: '2026 IEEE 15th Global Conference on Consumer Electronics (GCCE) - RMC',
    date: '2026, Oct',
  },
  {
    type: '国際会議',
    title: 'CYPHONIC Bridge: Transparent Layer-2 Connectivity Across Heterogeneous Networks',
    venue: '2026 IEEE 15th Global Conference on Consumer Electronics (GCCE) - RMC',
    date: '2026, Oct',
  },
];
