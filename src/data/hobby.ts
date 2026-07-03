// 趣味セクションのデータ。中身は後でユーザが記入するプレースホルダー。
export interface HobbyItem {
  /** Font Awesome アイコンのクラス（例: 'fa-solid fa-bullseye'） */
  icon: string;
  /** 趣味の名前 */
  title: string;
  /** 説明文 */
  description: string;
}

export const hobbies: HobbyItem[] = [
  {
    icon: 'fa-solid fa-bullseye',
    title: 'ダーツ',
    description: '（準備中）',
  },
  {
    icon: 'fa-solid fa-server',
    title: '自宅サーバ運用',
    description: '（準備中）',
  },
];
