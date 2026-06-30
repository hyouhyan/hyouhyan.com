export type SkillCategory = 'Web' | 'App / Backend' | 'Infra / OS' | 'Creative';

export interface Skill {
  img: string;
  alt: string;
  name: string;
  tags: string[];
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Web
  { img: '/img/skill/html.webp', alt: 'HTMLのロゴ', name: 'HTML', tags: ['Web Design'], category: 'Web' },
  { img: '/img/skill/css.webp', alt: 'CSSのロゴ', name: 'CSS', tags: ['Web Design'], category: 'Web' },
  { img: '/img/skill/javascript.svg', alt: 'JavaScriptのロゴ', name: 'JavaScript', tags: ['WebApp', 'Dynamic Web'], category: 'Web' },
  { img: '/img/skill/vue.webp', alt: 'Vue.jsのロゴ', name: 'Vue.js', tags: ['WebApp'], category: 'Web' },
  { img: '/img/skill/nodejs.webp', alt: 'Node.jsのロゴ', name: 'Node.js', tags: ['WebService'], category: 'Web' },
  { img: '/img/skill/php.webp', alt: 'PHPのロゴ', name: 'PHP', tags: ['Backend'], category: 'Web' },

  // App / Backend
  { img: '/img/skill/python.webp', alt: 'Pythonのロゴ', name: 'Python', tags: ['Discord Bot', 'Deep Learning'], category: 'App / Backend' },
  { img: '/img/skill/flask.svg', alt: 'Flaskのロゴ', name: 'Flask', tags: ['Web App'], category: 'App / Backend' },
  { img: '/img/skill/opencv.svg', alt: 'OpenCVのロゴ', name: 'OpenCV', tags: ['Camera App'], category: 'App / Backend' },
  { img: '/img/skill/kivy.webp', alt: 'Kivyのロゴ', name: 'Kivy', tags: ['GUI App'], category: 'App / Backend' },
  { img: '/img/skill/java.webp', alt: 'Javaのロゴ', name: 'Java', tags: ['Object Oriented'], category: 'App / Backend' },
  { img: '/img/skill/clang.webp', alt: 'C言語のロゴ', name: 'C Lang', tags: ['C is ART'], category: 'App / Backend' },
  { img: '/img/skill/bash.webp', alt: 'Shell Scriptのロゴ', name: 'Shell Script', tags: ['bash', 'sh'], category: 'App / Backend' },
  { img: '/img/skill/matlab.svg', alt: 'MATLABのロゴ', name: 'MATLAB', tags: ['数値計算'], category: 'App / Backend' },
  { img: '/img/skill/gas.webp', alt: 'Google Apps Scriptのロゴ', name: 'Google Apps Script', tags: ['Automation'], category: 'App / Backend' },

  // Infra / OS
  { img: '/img/skill/linux.webp', alt: 'Linuxのロゴ', name: 'Linux', tags: ['Ubuntu', 'Arch', 'Debian'], category: 'Infra / OS' },
  { img: '/img/skill/ubuntu.svg', alt: 'Ubuntuのロゴ', name: 'Ubuntu', tags: ['Ubuntu Server'], category: 'Infra / OS' },
  { img: '/img/skill/debian.svg', alt: 'Debianのロゴ', name: 'Debian', tags: ['Server'], category: 'Infra / OS' },
  { img: '/img/skill/proxmox.webp', alt: 'Proxmoxのロゴ', name: 'Proxmox', tags: ['LinuxServer'], category: 'Infra / OS' },
  { img: '/img/skill/nginx.webp', alt: 'Nginxのロゴ', name: 'Nginx', tags: ['WebServer', 'Reverse Proxy'], category: 'Infra / OS' },
  { img: '/img/skill/apache.webp', alt: 'Apacheのロゴ', name: 'Apache', tags: ['WebServer'], category: 'Infra / OS' },
  { img: '/img/skill/github.webp', alt: 'GitHubのロゴ', name: 'GitHub', tags: ['Team Develop'], category: 'Infra / OS' },
  { img: '/img/skill/network.jpg', alt: 'Networkのイメージ', name: 'Network', tags: ['Cloud', 'Server'], category: 'Infra / OS' },

  // Creative
  { img: '/img/skill/unity.webp', alt: 'Unityのロゴ', name: 'Unity', tags: ['3D CG', 'C#', 'Tokyo Game Show'], category: 'Creative' },
  { img: '/img/skill/Adobe-Illustrator.svg', alt: 'Adobe Illustratorのロゴ', name: 'Adobe Illustrator', tags: ['Design', 'Poster'], category: 'Creative' },
  { img: '/img/skill/Adobe-Photoshop.svg', alt: 'Adobe Photoshopのロゴ', name: 'Adobe Photoshop', tags: ['Design'], category: 'Creative' },
  { img: '/img/skill/Adobe-Premiere.svg', alt: 'Adobe Premiereのロゴ', name: 'Adobe Premiere', tags: ['Movie'], category: 'Creative' },
  { img: '/img/skill/Adobe-AfterEffects.svg', alt: 'Adobe After Effectsのロゴ', name: 'Adobe After Effects', tags: ['Movie', 'Animation'], category: 'Creative' },
  { img: '/img/skill/dj.webp', alt: 'DJのアイコン', name: 'DJ', tags: ['Music', 'HipHop', 'Future Bass'], category: 'Creative' },
];

export const skillCategories: SkillCategory[] = ['Web', 'App / Backend', 'Infra / OS', 'Creative'];
