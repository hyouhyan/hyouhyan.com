export interface Work {
  url: string;
  img: string;
  title: string;
  description: string;
}

export const works: Work[] = [
  {
    url: 'https://himehina.hyouhyan.com',
    img: '/img/project/himehina_lyric_lab.png',
    title: 'Himehina Lyric Lab',
    description: 'HIMEHINAの非公式歌詞まとめサイト',
  },
  {
    url: 'https://aitplus.hyouhyan.com',
    img: '/img/project/aitplus.webp',
    title: 'AIT Plus',
    description: '愛知工業大学の学生向け、大学ポータルと連携した、大学生活を豊かにするアプリケーション',
  },
  {
    url: 'https://prest.hyouhyan.com',
    img: '/img/project/prest.webp',
    title: 'PREST',
    description: 'カメラ経由で手を認識し、PCのジェスチャ操作を可能にするプレゼンテーション特化型ソフトウェア',
  },
];
