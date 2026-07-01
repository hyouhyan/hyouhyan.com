export type SkillCategory = 'Web' | 'App / Backend' | 'Infra / OS' | 'Creative';

export interface Skill {
  img: string;
  alt: string;
  name: string;
  tags: string[];
  category: SkillCategory;
}

const devicon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

export const skills: Skill[] = [
  // Web
  { img: devicon('html5'), alt: 'HTMLのロゴ', name: 'HTML', tags: ['Web Design'], category: 'Web' },
  { img: devicon('css3'), alt: 'CSSのロゴ', name: 'CSS', tags: ['Web Design'], category: 'Web' },
  { img: devicon('javascript'), alt: 'JavaScriptのロゴ', name: 'JavaScript', tags: ['WebApp', 'Dynamic Web'], category: 'Web' },
  { img: devicon('vuejs'), alt: 'Vue.jsのロゴ', name: 'Vue.js', tags: ['WebApp'], category: 'Web' },
  { img: devicon('nodejs'), alt: 'Node.jsのロゴ', name: 'Node.js', tags: ['WebService'], category: 'Web' },
  { img: devicon('php'), alt: 'PHPのロゴ', name: 'PHP', tags: ['Backend'], category: 'Web' },

  // App / Backend
  { img: devicon('python'), alt: 'Pythonのロゴ', name: 'Python', tags: ['Discord Bot', 'Deep Learning'], category: 'App / Backend' },
  { img: devicon('flask'), alt: 'Flaskのロゴ', name: 'Flask', tags: ['Web App'], category: 'App / Backend' },
  { img: devicon('opencv'), alt: 'OpenCVのロゴ', name: 'OpenCV', tags: ['Camera App'], category: 'App / Backend' },
  { img: '/img/skill/kivy.webp', alt: 'Kivyのロゴ', name: 'Kivy', tags: ['GUI App'], category: 'App / Backend' },
  { img: devicon('java'), alt: 'Javaのロゴ', name: 'Java', tags: ['Object Oriented'], category: 'App / Backend' },
  { img: devicon('c'), alt: 'C言語のロゴ', name: 'C Lang', tags: ['C is ART'], category: 'App / Backend' },
  { img: devicon('bash'), alt: 'Shell Scriptのロゴ', name: 'Shell Script', tags: ['bash', 'sh'], category: 'App / Backend' },
  { img: devicon('matlab'), alt: 'MATLABのロゴ', name: 'MATLAB', tags: ['数値計算'], category: 'App / Backend' },
  { img: '/img/skill/gas.webp', alt: 'Google Apps Scriptのロゴ', name: 'Google Apps Script', tags: ['Automation'], category: 'App / Backend' },

  // Infra / OS
  { img: devicon('linux'), alt: 'Linuxのロゴ', name: 'Linux', tags: ['Ubuntu', 'Arch', 'Debian'], category: 'Infra / OS' },
  { img: devicon('ubuntu'), alt: 'Ubuntuのロゴ', name: 'Ubuntu', tags: ['Ubuntu Server'], category: 'Infra / OS' },
  { img: devicon('debian'), alt: 'Debianのロゴ', name: 'Debian', tags: ['Server'], category: 'Infra / OS' },
  { img: devicon('proxmox'), alt: 'Proxmoxのロゴ', name: 'Proxmox', tags: ['LinuxServer'], category: 'Infra / OS' },
  { img: devicon('nginx'), alt: 'Nginxのロゴ', name: 'Nginx', tags: ['WebServer', 'Reverse Proxy'], category: 'Infra / OS' },
  { img: devicon('apache'), alt: 'Apacheのロゴ', name: 'Apache', tags: ['WebServer'], category: 'Infra / OS' },
  { img: devicon('github'), alt: 'GitHubのロゴ', name: 'GitHub', tags: ['Team Develop'], category: 'Infra / OS' },
  { img: '/img/skill/network.jpg', alt: 'Networkのイメージ', name: 'Network', tags: ['Cloud', 'Server'], category: 'Infra / OS' },

  // Creative
  { img: devicon('unity'), alt: 'Unityのロゴ', name: 'Unity', tags: ['3D CG', 'C#', 'Tokyo Game Show'], category: 'Creative' },
  { img: devicon('illustrator'), alt: 'Adobe Illustratorのロゴ', name: 'Adobe Illustrator', tags: ['Design', 'Poster'], category: 'Creative' },
  { img: devicon('photoshop'), alt: 'Adobe Photoshopのロゴ', name: 'Adobe Photoshop', tags: ['Design'], category: 'Creative' },
  { img: devicon('premierepro'), alt: 'Adobe Premiereのロゴ', name: 'Adobe Premiere', tags: ['Movie'], category: 'Creative' },
  { img: devicon('aftereffects'), alt: 'Adobe After Effectsのロゴ', name: 'Adobe After Effects', tags: ['Movie', 'Animation'], category: 'Creative' },
  { img: '/img/skill/dj.webp', alt: 'DJのアイコン', name: 'DJ', tags: ['Music', 'HipHop', 'Future Bass'], category: 'Creative' },
];

export const skillCategories: SkillCategory[] = ['Web', 'App / Backend', 'Infra / OS', 'Creative'];
