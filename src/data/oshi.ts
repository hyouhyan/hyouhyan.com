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
    name: 'ヒメヒナ',
    category: 'VTuber',
    img: 'https://himehina.jp/resource/1079/71a02931-1c64-4674-ac76-a3c47817b48b.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2hpbWVoaW5hLmpwXC9yZXNvdXJjZVwvMTA3OVwvNzFhMDI5MzEtMWM2NC00Njc0LWFjNzYtYTNjNDc4MTdiNDhiLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc4MzE0NjUxMn19fV19&Signature=dytGpcoEgqtvs0UQJhyJVFGGA9uoKCVbjeIQDS06QhiqX8xRnhFdgLvs-4j3nSN~UXYZE433jvmTgA2BNtZGk7OIiHKS7fToWHQAt7ivqhXy3kjtvwcrAqA5vXGOANz1OBOa2T3jBEmgT3sz~iiT-6vNqj8SM4jtgbx~5wlXJ5BwjeNyQHRy4ktxVMOVnqKyU1tTIKv9bgKKOVIaaI5tydd147w7JZ4rj2xZ~tPNhpr7PwrMPOoNewADQ1pd7s5yTymAkIX1Dqib~J0UOyQRjLoPdCQK8vQCoyzGigwUwhvBzis0FRzANyVnTHlEflQOnrO-3~ce7vpU9XhcU6q9bw__&Key-Pair-Id=K1WUY38TKRJ192'
  },
  {
    name: 'ミライアカリ',
    category: 'VTuber',
    img: 'https://pbs.twimg.com/profile_images/1509789168167055363/Sz-6PgAd_400x400.jpg'
  },
  {
    name: '大蔦エル',
    category: 'VTuber',
    img: 'https://pbs.twimg.com/profile_images/1576148710311940096/6p_BW5nw_400x400.jpg',
  },
];
