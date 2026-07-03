// 趣味セクションのデータ。中身は後でユーザが記入するプレースホルダー。
export interface HobbyItem {
  /** 趣味の名前 */
  title: string;
  /** 説明文 */
  description: string;
}

export const hobbies: HobbyItem[] = [
  {
    title: 'ダーツ',
    description: '（準備中）',
  },
  {
    title: '自宅サーバ運用',
    description: '（準備中）',
  },
];
