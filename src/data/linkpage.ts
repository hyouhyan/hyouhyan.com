// /link ページ（bento.me の代替リンク集）のデータ。
// リンクの追加・削除・並べ替えはこのファイルだけを編集すればよい。
// - グループ（見出し）ごとに items を並べる。配列の順番がそのまま表示順。
// - icon は Font Awesome 6 のクラス名（https://fontawesome.com/search?ic=brands）。
//   省略するとリンクアイコンになる。img を指定すると画像アイコンを優先する。
// - 空になったグループは自動で非表示。

export interface LinkPageItem {
  label: string;
  url: string;
  /** ハンドル名や短い説明（任意） */
  sub?: string;
  /** Font Awesome のクラス（例: 'fa-brands fa-github'） */
  icon?: string;
  /** 画像アイコンのパス（Font Awesome に無いサービス用。例: '/img/Bluesky_Logo.svg'） */
  img?: string;
}

export interface LinkPageGroup {
  title: string;
  items: LinkPageItem[];
}

export const profile = {
  name: 'ひょうひゃん',
  nameEn: 'Hyouhyan',
  icon: '/img/hy_icon/hyouhyan-500.webp',
  bio: 'エンジニアだったり、オタクだったり。',
};

export const linkGroups: LinkPageGroup[] = [
  {
    title: 'SNS',
    items: [
      { label: 'X (Work)', sub: '@yaa_oredayo', url: 'https://x.com/yaa_oredayo', icon: 'fa-brands fa-x-twitter' },
      { label: 'X (Hobby)', sub: '@hyouhyan', url: 'https://x.com/hyouhyan', icon: 'fa-brands fa-x-twitter' },
      { label: 'Instagram', sub: '@hyouhyan', url: 'https://www.instagram.com/hyouhyan', icon: 'fa-brands fa-instagram' },
      { label: 'Bluesky', sub: '@hyouhyan.com', url: 'https://bsky.app/profile/hyouhyan.com', icon: 'fa-brands fa-bluesky' },
      { label: 'GitHub', sub: '@hyouhyan', url: 'https://github.com/hyouhyan', icon: 'fa-brands fa-github' },
    ],
  },
  {
    title: 'Stream',
    items: [
      { label: 'Twitch', sub: 'hyouhyan', url: 'https://www.twitch.tv/hyouhyan', icon: 'fa-brands fa-twitch' },
      { label: 'DJ HYOO', sub: 'YouTube', url: 'https://www.youtube.com/@djhyoo', icon: 'fa-brands fa-youtube' },
    ],
  },
  {
    title: 'Article',
    items: [
      { label: 'Zenn', sub: '技術記事', url: 'https://zenn.dev/hyouhyan', icon: 'fa-solid fa-pen-nib' },
      { label: 'Scrapbox', sub: 'Hyouhyan Public', url: 'https://scrapbox.io/hyouhyan', icon: 'fa-solid fa-note-sticky' },
    ],
  },
  {
    title: 'Other',
    items: [
      { label: 'hyouhyan.com', sub: 'ホームページ', url: '/', icon: 'fa-solid fa-house' },
      { label: 'オタクプロフィール', sub: 'hh.hyouhyan.com', url: 'https://hh.hyouhyan.com', icon: 'fa-solid fa-heart' },
      { label: '欲しいものリスト', sub: 'Amazon', url: '/wishlist', icon: 'fa-brands fa-amazon' },
      { label: 'Buy Me a Coffee', sub: 'Web投げ銭', url: 'https://www.buymeacoffee.com/hyouhyan', icon: 'fa-solid fa-mug-hot' },
      { label: 'Email', sub: 'hyouhyan@hyouhyan.com', url: 'mailto:hyouhyan@hyouhyan.com', icon: 'fa-regular fa-envelope' },
    ],
  },
];
