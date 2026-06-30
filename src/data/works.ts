// 元サイトの WORK をデータ化。画像は public/img/project/ に配置済み。
export interface Work {
  url: string;
  img: string;
  description: string;
}

export const works: Work[] = [
  {
    url: 'https://himehina.hyouhyan.com',
    img: '/img/project/himehina_lyric_lab.png',
    description: 'HIMEHINAの非公式歌詞まとめサイト',
  },
  {
    url: 'https://aitplus.hyouhyan.com',
    img: '/img/project/aitplus.webp',
    description: '愛知工業大学の学生向け、大学ポータルと連携した、大学生活を豊かにするアプリケーション',
  },
  {
    url: 'https://prest.hyouhyan.com',
    img: '/img/project/prest.webp',
    description: 'カメラ経由で手を認識し、PCのジェスチャ操作を可能にするプレゼンテーション特化型ソフトウェア',
  },
];
