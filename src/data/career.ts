export interface CareerItem {
  year: string;
  month?: string;
  title: string;
  description: string;
}

export const career: CareerItem[] = [
  {
    year: '2022 4月',
    title: '愛知工業大学 入学',
    description: '情報科学部 コンピュータシステム専攻',
  },
  {
    year: '2024 5月',
    title: 'モバイルコンピューティング研究室(内藤研究室) 配属',
    description: 'NAPT越えを実現してセキュアなP2P通信を提供する、オーバーレイネットワークの研究を行う。',
  },
  {
    year: '2025 5月',
    title: '姫雛ガジェット研究所 所属 / JOJIハウスにて活動開始',
    description: 'JOJIハウスCTOに就任。サーバ・ネットワーク管理等、主に情シスとして活動。',
  },
  {
    year: '2026 4月',
    title: '愛知工業大学 大学院 入学',
    description: '経営情報科学研究科',
  },
];
