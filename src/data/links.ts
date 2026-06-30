// 元サイトの LINK をデータ化。
export interface LinkItem {
  url: string;
  label: string;
}

export const links: LinkItem[] = [
  { url: '/tools', label: 'WebAPP' },
  { url: 'https://scrapbox.io/hyouhyan', label: 'Scrapbox' },
  { url: 'https://zenn.dev/hyouhyan', label: 'Zenn' },
  { url: '/wishlist', label: '欲しいものリスト' },
];
