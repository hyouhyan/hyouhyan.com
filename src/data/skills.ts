export type SkillCategory = 'Web' | 'App / Backend' | 'Infra / OS' | 'Creative';

export interface Skill {
  img: string;
  alt: string;
  name: string;
  tags: string[];
  category: SkillCategory;
}

// https://skillicons.dev の短縮コード一覧: https://github.com/tandpfun/skill-icons#icons&theme=light
const skillicon = (name: string) => `https://skillicons.dev/icons?i=${name}&theme=light`;

export const skills: Skill[] = [
  // Web
  { img: skillicon('html'), alt: 'HTMLのロゴ', name: 'HTML', tags: ['Web Design'], category: 'Web' },
  { img: skillicon('css'), alt: 'CSSのロゴ', name: 'CSS', tags: ['Web Design'], category: 'Web' },
  { img: skillicon('javascript'), alt: 'JavaScriptのロゴ', name: 'JavaScript', tags: ['WebApp', 'Dynamic Web'], category: 'Web' },
  { img: skillicon('vuejs'), alt: 'Vue.jsのロゴ', name: 'Vue.js', tags: ['WebApp'], category: 'Web' },
  { img: skillicon('nodejs'), alt: 'Node.jsのロゴ', name: 'Node.js', tags: ['WebService'], category: 'Web' },
  { img: skillicon('php'), alt: 'PHPのロゴ', name: 'PHP', tags: ['Backend'], category: 'Web' },

  // App / Backend
  { img: skillicon('python'), alt: 'Pythonのロゴ', name: 'Python', tags: ['Discord Bot', 'Deep Learning'], category: 'App / Backend' },
  { img: skillicon('flask'), alt: 'Flaskのロゴ', name: 'Flask', tags: ['Web App'], category: 'App / Backend' },
  { img: skillicon('opencv'), alt: 'OpenCVのロゴ', name: 'OpenCV', tags: ['Camera App'], category: 'App / Backend' },
  { img: '/img/skill/kivy.webp', alt: 'Kivyのロゴ', name: 'Kivy', tags: ['GUI App'], category: 'App / Backend' },
  { img: skillicon('java'), alt: 'Javaのロゴ', name: 'Java', tags: ['Object Oriented'], category: 'App / Backend' },
  { img: skillicon('c'), alt: 'C言語のロゴ', name: 'C Lang', tags: ['C is ART'], category: 'App / Backend' },
  { img: skillicon('bash'), alt: 'Shell Scriptのロゴ', name: 'Shell Script', tags: ['bash', 'sh'], category: 'App / Backend' },
  { img: skillicon('matlab'), alt: 'MATLABのロゴ', name: 'MATLAB', tags: ['数値計算'], category: 'App / Backend' },
  { img: '/img/skill/gas.webp', alt: 'Google Apps Scriptのロゴ', name: 'Google Apps Script', tags: ['Automation'], category: 'App / Backend' },

  // Infra / OS
  { img: skillicon('linux'), alt: 'Linuxのロゴ', name: 'Linux', tags: ['Ubuntu', 'Arch', 'Debian'], category: 'Infra / OS' },
  { img: skillicon('ubuntu'), alt: 'Ubuntuのロゴ', name: 'Ubuntu', tags: ['Ubuntu Server'], category: 'Infra / OS' },
  { img: skillicon('debian'), alt: 'Debianのロゴ', name: 'Debian', tags: ['Server'], category: 'Infra / OS' },
  { img: '/img/skill/proxmox.webp', alt: 'Proxmoxのロゴ', name: 'Proxmox', tags: ['LinuxServer'], category: 'Infra / OS' },
  { img: skillicon('nginx'), alt: 'Nginxのロゴ', name: 'Nginx', tags: ['WebServer', 'Reverse Proxy'], category: 'Infra / OS' },
  { img: '/img/skill/apache.webp', alt: 'Apacheのロゴ', name: 'Apache', tags: ['WebServer'], category: 'Infra / OS' },
  { img: skillicon('github'), alt: 'GitHubのロゴ', name: 'GitHub', tags: ['Team Develop'], category: 'Infra / OS' },
  { img: '/img/skill/network.jpg', alt: 'Networkのイメージ', name: 'Network', tags: ['Cloud', 'Server'], category: 'Infra / OS' },

  // Creative
  { img: skillicon('unity'), alt: 'Unityのロゴ', name: 'Unity', tags: ['3D CG', 'C#', 'Tokyo Game Show'], category: 'Creative' },
  { img: skillicon('illustrator'), alt: 'Adobe Illustratorのロゴ', name: 'Adobe Illustrator', tags: ['Design', 'Poster'], category: 'Creative' },
  { img: skillicon('photoshop'), alt: 'Adobe Photoshopのロゴ', name: 'Adobe Photoshop', tags: ['Design'], category: 'Creative' },
  { img: skillicon('pr'), alt: 'Adobe Premiereのロゴ', name: 'Adobe Premiere', tags: ['Movie'], category: 'Creative' },
  { img: skillicon('aftereffects'), alt: 'Adobe After Effectsのロゴ', name: 'Adobe After Effects', tags: ['Movie', 'Animation'], category: 'Creative' },
  { img: '/img/skill/dj.webp', alt: 'DJのアイコン', name: 'DJ', tags: ['Music', 'HipHop', 'Future Bass'], category: 'Creative' },
];

export const skillCategories: SkillCategory[] = ['Web', 'App / Backend', 'Infra / OS', 'Creative'];
