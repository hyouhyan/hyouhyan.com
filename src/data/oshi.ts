// 推しセクションのデータ。中身は後でユーザが記入するプレースホルダー。
export interface OshiItem {
  /** 推しの名前 */
  name: string;
  /** ひとこと・紹介文（任意。なければ表示されない） */
  description?: string;
  /** カテゴリ（例: 'VTuber' / 'アーティスト'）。任意 */
  category?: string;
  /** 画像。未指定で url があればビルド時に url の og:image を自動取得。どちらも無ければハートアイコン表示 */
  img?: string;
  /** 関連リンク（YouTube / X / 公式サイト等）。img 未指定ならここから og:image を取得し、カード全体がこの URL のリンクになる */
  url?: string;
}

export const oshi: OshiItem[] = [
  {
    name: 'ミライアカリ',
    category: 'VTuber',
    url: 'https://www.youtube.com/channel/UCMYtONm441rBogWK_xPH9HA',
    description: '2023年3月31日 活動終了',
  },
  {
    name: 'ヒメヒナ',
    category: 'VTuber',
    url: 'https://www.youtube.com/@HimeHina',
  },
  {
    name: '花譜',
    category: 'VTuber',
    url: 'https://www.youtube.com/@virtual_kaf',
  },
  {
    name: '明透',
    category: 'VTuber',
    url: 'https://www.youtube.com/@ASU_virtual',
  },
  {
    name: 'KMNZ',
    category: 'VTuber',
    url: 'https://www.youtube.com/@KMNZOFFICIAL',
  },
  {
    name: 'Monsterz Mate',
    category: 'VTuber',
    url: 'https://www.youtube.com/channel/UCDG8K9g6qo8gX4jCjsqUVzA',
  },
  {
    name: 'V.W.P',
    category: 'VTuber',
    url: 'https://www.youtube.com/channel/UCfiSo8tO3WPU-8YOgr4Ba6g',
  },
  {
    name: '敷嶋てとら',
    category: 'VTuber',
    url: 'https://www.youtube.com/@ch.1676',
  },
  {
    name: '大蔦エル',
    category: 'VTuber',
    url: 'https://x.com/otsuta_l',
    description: '2026年6月30日 活動終了',
  },
];
