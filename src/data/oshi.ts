// 推しセクションのデータ。中身は後でユーザが記入するプレースホルダー。
export interface OshiItem {
  /** 推しの名前 */
  name: string;
  /** ひとこと・紹介文（任意。なければ表示されない） */
  description?: string;
  /** カテゴリ（例: 'VTuber' / 'アーティスト'）。任意 */
  category?: string;
  /** 画像パス（public 配下）。未設定ならハートアイコンを表示 */
  img?: string;
  /** 関連リンク（配信チャンネル等）。任意 */
  url?: string;
}

export const oshi: OshiItem[] = [
  {
    name: '（推しの名前）',
    category: 'VTuber',
  },
];
