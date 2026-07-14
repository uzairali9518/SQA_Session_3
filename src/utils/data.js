export const personalInfo = {
  name: 'Uzair Ali',
  titles: [
    'Software Engineer',
    'Full Stack Django Developer',
    'Machine Learning Engineer',
    'QA Engineer',
  ],
  tagline:
    'Building Scalable Web Applications, Intelligent Machine Learning Solutions & High Quality Software.',
  location: 'Lahore, Pakistan',
  email: 'u617845@gmail.com',
  phone: '03108054313',
  github: 'https://github.com/uzairali9518',
  linkedin: 'https://linkedin.com/in/uzair-ali-538163358',
  university: 'Lahore Garrison University',
  cgpa: 3.51,
};

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const stats = [
  { label: 'CGPA', value: 3.51, suffix: '', decimals: 2 },
  { label: 'Projects', value: 4, suffix: '+', decimals: 0 },
  { label: 'ML Model ROC AUC', value: 0.91, suffix: '', decimals: 2 },
  { label: 'Beta Users', value: 20, suffix: '+', decimals: 0 },
];

export const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 88 },
      { name: 'JavaScript', level: 85 },
      { name: 'Bootstrap', level: 82 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    title: 'Backend',
    color: 'from-violet-500 to-purple-400',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'Django', level: 90 },
      { name: 'Django REST Framework', level: 88 },
      { name: 'Flask', level: 80 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  {
    title: 'Machine Learning',
    color: 'from-cyan-500 to-teal-400',
    skills: [
      { name: 'Scikit Learn', level: 85 },
      { name: 'Pandas', level: 88 },
      { name: 'NumPy', level: 85 },
      { name: 'Matplotlib', level: 80 },
      { name: 'LightGBM', level: 82 },
    ],
  },
  {
    title: 'QA',
    color: 'from-emerald-500 to-green-400',
    skills: [
      { name: 'Manual Testing', level: 85 },
      { name: 'Automation Testing', level: 80 },
      { name: 'Selenium', level: 78 },
      { name: 'Test Case Design', level: 85 },
    ],
  },
  {
    title: 'Database',
    color: 'from-amber-500 to-orange-400',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'SQLite', level: 88 },
    ],
  },
  {
    title: 'Tools',
    color: 'from-pink-500 to-rose-400',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 92 },
      { name: 'Jupyter Notebook', level: 85 },
      { name: 'Jira', level: 75 },
      { name: 'Trello', level: 78 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Super Store POS System',
    description:
      'A comprehensive point-of-sale system with billing, inventory management, expense tracking, and role-based access control for retail operations.',
    tech: ['Django', 'MySQL', 'Bootstrap'],
    features: [
      'Billing',
      'Inventory',
      'Expense Tracking',
      'Role Based Access',
      'Sales Reports',
      'LAN Deployment',
    ],
    github: null,
    live: null,
    gradient: 'from-blue-600/30 to-violet-600/30',
    icon: '🏪',
  },
  {
    id: 2,
    title: 'Heart Disease Prediction',
    description:
      'Machine learning model achieving ROC AUC of 0.91 with multiple ML algorithms and an interactive prediction dashboard.',
    tech: ['Python', 'LightGBM', 'Scikit Learn', 'Pandas'],
    features: [
      'ROC AUC 0.91',
      'Multiple ML Models',
      'Prediction Dashboard',
    ],
    github: 'https://github.com/uzairali9518/Heart-Disease-Prediction.git',
    live: null,
    gradient: 'from-red-600/30 to-pink-600/30',
    icon: '❤️',
    featured: true,
  },
  {
    id: 3,
    title: 'Web Based Python Compiler',
    description:
      'Browser-based IDE with sandbox execution, syntax highlighting, and real-time output serving 20+ beta users.',
    tech: ['Django', 'Flask', 'JavaScript'],
    features: [
      'Browser IDE',
      'Sandbox Execution',
      'Syntax Highlighting',
      'Real Time Output',
      '20+ Beta Users',
    ],
    github: null,
    live: 'https://huggingface.co/spaces/Uzair3542/Python_Compiler',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    icon: '💻',
  },
  {
    id: 4,
    title: 'Responsive E-Commerce Website',
    description:
      'Modern e-commerce frontend with shopping cart, checkout flow, and advanced product filtering capabilities.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Shopping Cart',
      'Checkout',
      'Product Filtering',
      'Responsive Design',
    ],
    github: 'https://github.com/uzairali9518/ecommerce-frontend-design.git',
    live: null,
    gradient: 'from-emerald-600/30 to-teal-600/30',
    icon: '🛒',
  },
];

export const education = [
  {
    degree: 'BS Computer Science',
    institution: 'Lahore Garrison University',
    period: '2023 – Present',
    cgpa: '3.51',
    courses: [
      'Machine Learning',
      'Database Systems',
      'Web Development',
      'Software Engineering',
      'Data Structures',
    ],
  },
  {
    degree: 'HSC Computer Science',
    institution: 'Intermediate Education',
    period: '2021 – 2022',
    score: '92%',
    courses: [],
  },
];

export const certifications = [
  {
    title: 'Python for Everybody Specialization',
    issuer: 'University of Michigan',
    platform: 'Coursera',
    year: '2024',
  },
];

export const journey = [
  {
    year: '2021',
    title: 'Student',
    description: 'Completed HSC in Computer Science with 92% marks, building foundation in programming.',
  },
  {
    year: '2023',
    title: 'Web Developer',
    description: 'Started BS Computer Science and began building full-stack Django web applications.',
  },
  {
    year: '2024',
    title: 'Machine Learning Engineer',
    description: 'Developed ML models including Heart Disease Prediction with ROC AUC 0.91.',
  },
  {
    year: '2024',
    title: 'QA Learner',
    description: 'Expanded skills in manual and automation testing with Selenium and test case design.',
  },
  {
    year: '2025',
    title: 'Future Software Engineer',
    description: 'Pursuing production-ready applications and continuous learning in software engineering.',
  },
];

export const services = [
  {
    title: 'Web Development',
    description: 'Full-stack Django applications with clean architecture and scalable design patterns.',
    icon: 'Globe',
  },
  {
    title: 'REST API Development',
    description: 'Robust RESTful APIs using Django REST Framework with authentication and documentation.',
    icon: 'Server',
  },
  {
    title: 'Machine Learning Solutions',
    description: 'End-to-end ML pipelines from data preprocessing to model deployment and evaluation.',
    icon: 'Brain',
  },
  {
    title: 'QA Automation',
    description: 'Comprehensive test strategies with manual and automated testing using Selenium.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Responsive Websites',
    description: 'Pixel-perfect responsive interfaces that work flawlessly across all device sizes.',
    icon: 'Smartphone',
  },
  {
    title: 'UI Development',
    description: 'Modern, accessible user interfaces with smooth animations and premium aesthetics.',
    icon: 'Palette',
  },
];

export const techStack = [
  { name: 'Python', icon: 'SiPython' },
  { name: 'Django', icon: 'SiDjango' },
  { name: 'React', icon: 'SiReact' },
  { name: 'JavaScript', icon: 'SiJavascript' },
  { name: 'Machine Learning', icon: 'SiTensorflow' },
  { name: 'Git', icon: 'SiGit' },
  { name: 'Docker', icon: 'SiDocker' },
  { name: 'MySQL', icon: 'SiMysql' },
];

export const faqs = [
  {
    question: 'What type of projects do you specialize in?',
    answer:
      'I specialize in full-stack Django web applications, machine learning solutions, REST API development, and QA automation. I enjoy building production-ready software that solves real-world problems.',
  },
  {
    question: 'Are you available for freelance work?',
    answer:
      'Yes, I am open to freelance opportunities, internships, and collaborative projects. Feel free to reach out through the contact form or email me directly.',
  },
  {
    question: 'What is your tech stack preference?',
    answer:
      'My primary stack is Python/Django for backend, with React and modern CSS for frontend. For ML projects, I use Scikit-learn, Pandas, and LightGBM. I am always eager to learn new technologies.',
  },
  {
    question: 'How can I view your work?',
    answer:
      'Check out my Projects section for detailed case studies, visit my GitHub for source code, or try the live demo of my Python Compiler on Hugging Face.',
  },
];

export const githubStats = {
  username: 'uzairali9518',
  repos: 15,
  followers: 5,
  contributions: 200,
  topLanguages: [
    { name: 'Python', percentage: 45, color: '#3572A5' },
    { name: 'JavaScript', percentage: 25, color: '#f1e05a' },
    { name: 'HTML', percentage: 15, color: '#e34c26' },
    { name: 'CSS', percentage: 10, color: '#563d7c' },
    { name: 'Other', percentage: 5, color: '#8b5cf6' },
  ],
};
