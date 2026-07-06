export interface CareerItem {
  year: string;
  month?: string;
  title: string;
  description: string;
  url?: string;
}

export const career: CareerItem[] = [
  {
    year: '2022',
    month: '4月',
    title: '愛知工業大学 入学',
    description: '情報科学部 コンピュータシステム専攻',
  },
  {
    year: '2023',
    month: '11月',
    title: '愛知工業大学 システム工学研究会 所属',
    description: '',
    url: 'https://sysken.net/'
  },
  {
    year: '2024',
    month: '5月',
    title: '愛知工業大学 モバイルコンピューティング研究室(内藤研究室) 配属',
    description: 'NAPT越えを実現してセキュアなP2P通信を提供する、オーバーレイネットワークの研究を行う。',
    url: 'https://pluslab.org',
  },
  {
    year: '2025',
    month: '5月',
    title: '姫雛ガジェット研究所 所属 / JOJIハウスにて活動開始',
    description: 'JOJIハウスCTOに就任。サーバ・ネットワーク管理等、主に情シスとして活動。',
    url: 'https://jojilab.hyouhyan.com',
  },
  {
    year: '2026',
    month: '4月',
    title: '愛知工業大学 大学院 入学',
    description: '経営情報科学研究科 情報システム関連分野 修士課程',
  },
  {
    year: '2028',
    month: '3月',
    title: '愛知工業大学 大学院 修士課程 修了予定',
    description: '',
  },
];
