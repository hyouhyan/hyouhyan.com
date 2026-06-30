// 元サイトの SKILL 一覧をそのままデータ化。
// 画像は public/img/skill/ に配置済み。tags は黒タグとして表示される。
export interface Skill {
  img: string;
  alt: string;
  name: string;
  tags: string[];
}

export const skills: Skill[] = [
  { img: '/img/skill/html.webp', alt: 'htmlのロゴ', name: 'HTML', tags: ['Web Design'] },
  { img: '/img/skill/css.webp', alt: 'cssのロゴ', name: 'CSS', tags: ['Web Design'] },
  { img: '/img/skill/javascript.svg', alt: 'javascriptのロゴ', name: 'javaScript', tags: ['WebApp', 'Dynamic Web'] },
  { img: '/img/skill/vue.webp', alt: 'vue.jsのロゴ', name: 'Vue.js', tags: ['WebApp'] },
  { img: '/img/skill/nodejs.webp', alt: 'node.jsのロゴ', name: 'Node.js', tags: ['WebService'] },
  { img: '/img/skill/php.webp', alt: 'phpのロゴ', name: 'PHP', tags: ['Backend'] },
  { img: '/img/skill/python.webp', alt: 'pythonのロゴ', name: 'Python', tags: ['Discord Bot', 'Deep Learning'] },
  { img: '/img/skill/kivy.webp', alt: 'kivyのロゴ', name: 'Kivy', tags: ['GUI App'] },
  { img: '/img/skill/flask.svg', alt: '', name: 'Flask', tags: ['Web App'] },
  { img: '/img/skill/opencv.svg', alt: '', name: 'OpenCV', tags: ['Camera App'] },
  { img: '/img/skill/java.webp', alt: 'javaのロゴ', name: 'Java', tags: ['Object Oriented'] },
  { img: '/img/skill/clang.webp', alt: 'C言語のロゴ', name: 'C Lang', tags: ['C is ART'] },
  { img: '/img/skill/bash.webp', alt: 'shellscriptのロゴ', name: 'Shell Script', tags: ['bash', 'sh'] },
  { img: '/img/skill/matlab.svg', alt: 'matlabのロゴ', name: 'Matlab', tags: ['数値計算'] },
  { img: '/img/skill/linux.webp', alt: 'linuxのロゴ', name: 'Linux', tags: ['Ubuntu', 'Arch', 'Debian'] },
  { img: '/img/skill/ubuntu.svg', alt: '', name: 'Ubuntu', tags: ['Ubuntu Server'] },
  { img: '/img/skill/debian.svg', alt: '', name: 'Debian', tags: ['Server'] },
  { img: '/img/skill/proxmox.webp', alt: 'proxmoxのロゴ', name: 'Proxmox', tags: ['LinuxServer'] },
  { img: '/img/skill/nginx.webp', alt: 'nginxのロゴ', name: 'Nginx', tags: ['WebServer', 'Reverse Proxy'] },
  { img: '/img/skill/apache.webp', alt: 'apacheのロゴ', name: 'Apache', tags: ['WebServer'] },
  { img: '/img/skill/gas.webp', alt: 'gasのロゴ', name: 'Google Apps Script', tags: ['Automation'] },
  { img: '/img/skill/github.webp', alt: 'githubのロゴ', name: 'GitHub', tags: ['Team Develop'] },
  { img: '/img/skill/unity.webp', alt: 'unityのロゴ', name: 'Unity', tags: ['3D CG', 'C#', 'Tokyo Game Show'] },
  { img: '/img/skill/Adobe-Illustrator.svg', alt: '', name: 'Adobe Illustrator', tags: ['Design', 'Poster'] },
  { img: '/img/skill/Adobe-Photoshop.svg', alt: '', name: 'Adobe Photoshop', tags: ['Design'] },
  { img: '/img/skill/Adobe-Premiere.svg', alt: '', name: 'Adobe Premiere', tags: ['Movie'] },
  { img: '/img/skill/Adobe-AfterEffects.svg', alt: '', name: 'Adobe After Effects', tags: ['Movie', 'Animation'] },
  { img: '/img/skill/network.jpg', alt: '', name: 'Network', tags: ['Cloud', 'Server'] },
  { img: '/img/skill/dj.webp', alt: 'djhyooのアイコン', name: 'DJ', tags: ['Music', 'HipHop', 'Future bass'] },
];
