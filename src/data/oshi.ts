// 推しセクション（Hobby.astro の h2「推し」）のデータ。category ごとにグループ化して文字のバッジで表示する。
export interface OshiItem {
  /** 推しの名前 */
  name: string;
  /** ひとこと・紹介文（任意。なければ表示されない） */
  description?: string;
  /** カテゴリ（例: 'VTuber' / 'アーティスト'）。任意。同じカテゴリでまとめて見出しを付ける（未指定は見出しなしで最後） */
  category?: string;
  /** リンク先（YouTube / X / 公式サイト等）。バッジ全体がこの URL のリンクになる。画像は使わない（著作権配慮のため文字のみ） */
  url?: string;
  /**
   * 強調カラー（CSS の色を1つ以上。例: ['#fd5f8a', '#3eb8fd']）。指定した推しだけ、太字＋2px のカラー枠（複数色は左→右のグラデ）で目立たせる。
   * 色付けのみで並び順は変えない（並びは配列順）。未指定なら通常表示
   */
  highlight?: string[];
}

export const oshi: OshiItem[] = [
  {
    name: 'ヒメヒナ',
    category: 'VTuber',
    url: 'https://www.youtube.com/@HimeHina',
    highlight: ['#fd5f8a', '#3eb8fd'],
  },
  {
    name: 'KMNZ',
    category: 'VTuber',
    url: 'https://www.youtube.com/@KMNZOFFICIAL',
    highlight: ['#f5c518'],
  },
  {
    name: 'ミライアカリ',
    category: 'VTuber',
    url: 'https://www.youtube.com/channel/UCMYtONm441rBogWK_xPH9HA',
    description: '2023年3月31日 活動終了',
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
