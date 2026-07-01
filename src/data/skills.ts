export type SkillCategory = 'Infra / OS' | 'Database' | 'Embedded' | 'Dev Tools' | 'Languages' | 'Frameworks / Tools' | 'Web' | 'Creative';

export interface Skill {
  img: string;
  alt: string;
  name: string;
  tags: string[];
  category: SkillCategory;
  // category内をさらに分けたいとき（例: Web内の Frontend / Backend）に使う。h3見出しとして表示される
  subcategory?: string;
}

// https://skillicons.dev の短縮コード一覧: https://github.com/tandpfun/skill-icons#icons&theme=light
const skillicon = (name: string) => `https://skillicons.dev/icons?i=${name}&theme=light`;

export const skills: Skill[] = [
  // Infra / OS
  { img: skillicon('linux'), alt: 'Linuxのロゴ', name: 'Linux', tags: ['Ubuntu', 'Arch', 'Debian'], category: 'Infra / OS' },
  { img: skillicon('ubuntu'), alt: 'Ubuntuのロゴ', name: 'Ubuntu', tags: ['Ubuntu Server'], category: 'Infra / OS' },
  { img: skillicon('debian'), alt: 'Debianのロゴ', name: 'Debian', tags: ['Server'], category: 'Infra / OS' },
  { img: skillicon('arch'), alt: 'Arch Linuxのロゴ', name: 'Arch Linux', tags: ['Linux Distro'], category: 'Infra / OS' },
  { img: skillicon('mint'), alt: 'Linux Mintのロゴ', name: 'Linux Mint', tags: ['Linux Distro'], category: 'Infra / OS' },
  { img: '/img/skill/proxmox.webp', alt: 'Proxmoxのロゴ', name: 'Proxmox', tags: ['LinuxServer'], category: 'Infra / OS' },
  { img: skillicon('nginx'), alt: 'Nginxのロゴ', name: 'Nginx', tags: ['WebServer', 'Reverse Proxy'], category: 'Infra / OS' },
  { img: '/img/skill/apache.webp', alt: 'Apacheのロゴ', name: 'Apache', tags: ['WebServer'], category: 'Infra / OS' },
  { img: skillicon('docker'), alt: 'Dockerのロゴ', name: 'Docker', tags: ['Container'], category: 'Infra / OS' },
  { img: skillicon('kubernetes'), alt: 'Kubernetesのロゴ', name: 'Kubernetes', tags: ['Container Orchestration'], category: 'Infra / OS' },
  { img: skillicon('ansible'), alt: 'Ansibleのロゴ', name: 'Ansible', tags: ['Automation', 'Configuration Management'], category: 'Infra / OS' },
  { img: skillicon('jenkins'), alt: 'Jenkinsのロゴ', name: 'Jenkins', tags: ['CI/CD'], category: 'Infra / OS' },
  { img: skillicon('githubactions'), alt: 'GitHub Actionsのロゴ', name: 'GitHub Actions', tags: ['CI/CD'], category: 'Infra / OS' },
  { img: skillicon('prometheus'), alt: 'Prometheusのロゴ', name: 'Prometheus', tags: ['Monitoring'], category: 'Infra / OS' },
  { img: skillicon('grafana'), alt: 'Grafanaのロゴ', name: 'Grafana', tags: ['Monitoring', 'Dashboard'], category: 'Infra / OS' },
  { img: skillicon('cloudflare'), alt: 'Cloudflareのロゴ', name: 'Cloudflare', tags: ['CDN', 'DNS'], category: 'Infra / OS' },
  // TODO: Tailscaleは skillicons.dev に無いため、正式なロゴ画像を public/img/skill に用意して差し替える
  { img: '/img/skill/network.jpg', alt: 'Tailscaleのイメージ（仮画像）', name: 'Tailscale', tags: ['VPN', 'Mesh Network'], category: 'Infra / OS' },
  { img: skillicon('github'), alt: 'GitHubのロゴ', name: 'GitHub', tags: ['Team Develop'], category: 'Infra / OS' },
  { img: '/img/skill/network.jpg', alt: 'Networkのイメージ', name: 'Network', tags: ['Cloud', 'Server'], category: 'Infra / OS' },

  // Database
  { img: skillicon('mongodb'), alt: 'MongoDBのロゴ', name: 'MongoDB', tags: ['NoSQL'], category: 'Database' },
  { img: skillicon('mysql'), alt: 'MySQLのロゴ', name: 'MySQL', tags: ['RDBMS'], category: 'Database' },
  { img: skillicon('postgres'), alt: 'PostgreSQLのロゴ', name: 'PostgreSQL', tags: ['RDBMS'], category: 'Database' },
  { img: skillicon('redis'), alt: 'Redisのロゴ', name: 'Redis', tags: ['Cache', 'KVS'], category: 'Database' },
  { img: skillicon('sqlite'), alt: 'SQLiteのロゴ', name: 'SQLite', tags: ['Embedded DB'], category: 'Database' },
  { img: skillicon('firebase'), alt: 'Firebaseのロゴ', name: 'Firebase', tags: ['BaaS'], category: 'Database' },

  // Embedded
  { img: skillicon('arduino'), alt: 'Arduinoのロゴ', name: 'Arduino', tags: ['Microcontroller'], category: 'Embedded' },
  { img: skillicon('raspberrypi'), alt: 'Raspberry Piのロゴ', name: 'Raspberry Pi', tags: ['Single Board Computer'], category: 'Embedded' },

  // Dev Tools
  { img: skillicon('git'), alt: 'Gitのロゴ', name: 'Git', tags: ['Version Control'], category: 'Dev Tools' },
  { img: skillicon('vscode'), alt: 'Visual Studio Codeのロゴ', name: 'VS Code', tags: ['Editor'], category: 'Dev Tools' },
  { img: skillicon('latex'), alt: 'LaTeXのロゴ', name: 'LaTeX', tags: ['Typesetting', '論文'], category: 'Dev Tools' },

  // Languages（特定用途に縛られない汎用言語）
  { img: skillicon('python'), alt: 'Pythonのロゴ', name: 'Python', tags: ['Discord Bot', 'Deep Learning'], category: 'Languages' },
  { img: skillicon('java'), alt: 'Javaのロゴ', name: 'Java', tags: ['Object Oriented'], category: 'Languages' },
  { img: skillicon('c'), alt: 'C言語のロゴ', name: 'C Lang', tags: ['C is ART'], category: 'Languages' },
  { img: skillicon('cpp'), alt: 'C++のロゴ', name: 'C++', tags: ['Object Oriented'], category: 'Languages' },
  { img: skillicon('cs'), alt: 'C#のロゴ', name: 'C#', tags: ['Unity', '.NET'], category: 'Languages' },
  { img: skillicon('go'), alt: 'Goのロゴ', name: 'Go', tags: ['Backend', 'CLI'], category: 'Languages' },
  { img: skillicon('lua'), alt: 'Luaのロゴ', name: 'Lua', tags: ['Scripting'], category: 'Languages' },
  { img: skillicon('bash'), alt: 'Shell Scriptのロゴ', name: 'Shell Script', tags: ['bash', 'sh'], category: 'Languages' },
  { img: skillicon('matlab'), alt: 'MATLABのロゴ', name: 'MATLAB', tags: ['数値計算'], category: 'Languages' },

  // Frameworks / Tools（特定言語・用途向けのフレームワークやツール）
  { img: skillicon('opencv'), alt: 'OpenCVのロゴ', name: 'OpenCV', tags: ['Camera App'], category: 'Frameworks / Tools' },
  { img: '/img/skill/kivy.webp', alt: 'Kivyのロゴ', name: 'Kivy', tags: ['GUI App'], category: 'Frameworks / Tools' },
  { img: '/img/skill/gas.webp', alt: 'Google Apps Scriptのロゴ', name: 'Google Apps Script', tags: ['Automation'], category: 'Frameworks / Tools' },

  // Web（明らかにWeb用途でしか使わないもの）
  { img: skillicon('html'), alt: 'HTMLのロゴ', name: 'HTML', tags: ['Web Design'], category: 'Web', subcategory: 'Frontend' },
  { img: skillicon('css'), alt: 'CSSのロゴ', name: 'CSS', tags: ['Web Design'], category: 'Web', subcategory: 'Frontend' },
  { img: skillicon('javascript'), alt: 'JavaScriptのロゴ', name: 'JavaScript', tags: ['WebApp', 'Dynamic Web'], category: 'Web', subcategory: 'Frontend' },
  { img: skillicon('vuejs'), alt: 'Vue.jsのロゴ', name: 'Vue.js', tags: ['WebApp'], category: 'Web', subcategory: 'Frontend' },
  { img: skillicon('nodejs'), alt: 'Node.jsのロゴ', name: 'Node.js', tags: ['WebService'], category: 'Web', subcategory: 'Backend' },
  { img: skillicon('php'), alt: 'PHPのロゴ', name: 'PHP', tags: ['Backend'], category: 'Web', subcategory: 'Backend' },
  { img: skillicon('flask'), alt: 'Flaskのロゴ', name: 'Flask', tags: ['Web App'], category: 'Web', subcategory: 'Backend' },

  // Creative
  { img: skillicon('unity'), alt: 'Unityのロゴ', name: 'Unity', tags: ['3D CG', 'C#', 'Tokyo Game Show'], category: 'Creative' },
  { img: skillicon('illustrator'), alt: 'Adobe Illustratorのロゴ', name: 'Adobe Illustrator', tags: ['Design', 'Poster'], category: 'Creative' },
  { img: skillicon('photoshop'), alt: 'Adobe Photoshopのロゴ', name: 'Adobe Photoshop', tags: ['Design'], category: 'Creative' },
  { img: skillicon('xd'), alt: 'Adobe XDのロゴ', name: 'Adobe XD', tags: ['UI Design'], category: 'Creative' },
  { img: skillicon('pr'), alt: 'Adobe Premiereのロゴ', name: 'Adobe Premiere', tags: ['Movie'], category: 'Creative' },
  { img: skillicon('aftereffects'), alt: 'Adobe After Effectsのロゴ', name: 'Adobe After Effects', tags: ['Movie', 'Animation'], category: 'Creative' },
  { img: skillicon('figma'), alt: 'Figmaのロゴ', name: 'Figma', tags: ['UI Design'], category: 'Creative' },
  { img: skillicon('blender'), alt: 'Blenderのロゴ', name: 'Blender', tags: ['3D CG'], category: 'Creative' },
  { img: skillicon('autocad'), alt: 'AutoCADのロゴ', name: 'AutoCAD', tags: ['CAD'], category: 'Creative' },
  { img: '/img/skill/dj.webp', alt: 'DJのアイコン', name: 'DJ', tags: ['Music', 'HipHop', 'Future Bass'], category: 'Creative' },
];

export const skillCategories: SkillCategory[] = ['Infra / OS', 'Languages', 'Frameworks / Tools', 'Web', 'Database', 'Embedded', 'Dev Tools', 'Creative'];
