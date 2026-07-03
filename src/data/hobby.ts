// 趣味セクションのデータ。中身は後でユーザが記入するプレースホルダー。
export interface HobbyItem {
  /** 趣味の名前 */
  title: string;
  /** 説明文（任意。なければ表示されない） */
  description?: string;
}

export const hobbies: HobbyItem[] = [
  {
    title: 'ダーツ',
  },
  {
    title: '自宅サーバ運用',
  },
];
