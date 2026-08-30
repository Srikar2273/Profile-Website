export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

export const profile = {
  name: 'Bhava Narayana Srikar Kotipalli',
  shortName: 'Srikar',
  title: 'Software Engineer',
  tagline: '.NET | React | Angular | Azure | Microservices | Micro-frontends',
  location: 'Hyderabad, India',
  phone: '+91-9618182273',
  email: 'kbnsrikar2273@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kbn-srikar/',
  summary:
    'Full Stack Software Engineer with 4+ years of experience building web applications and SaaS platforms using .NET Core, React and Angular. Hands-on experience across REST APIs, microservices, micro-frontends, Azure/AWS, CI/CD and performance optimization. Experienced in building reusable frontend modules, optimizing high-volume data retrieval, developing scalable backend services, and collaborating with clients and cross-functional teams across the application lifecycle.'
};

export const assets = {
  profileImage: '/assets/images/Bhava_Narayana_Srikar_Kotipalli_Photo.jpg',
  resumePdf: '/assets/resume/Bhava_Narayana_Srikar_Kotipalli_Resume.pdf',
  resumeFileName: 'Bhava-Narayana-Srikar-Kotipalli-Resume.pdf'
};

export const highlights = [
  {
    title: 'Reusable Frontend Architecture',
    value: '70% reduction in redundant UI code',
    detail: 'Improved maintainability and release speed through modular component design.'
  },
  {
    title: 'Query Optimization',
    value: '25% faster data retrieval',
    detail: 'Optimized access patterns and indexing strategies for large operational datasets.'
  },
  {
    title: 'Performance Engineering',
    value: '75% faster application load',
    detail: 'Combined caching strategies with optimized fetching in enterprise workflows.'
  }
];

export const skills = [
  {
    category: 'Languages',
    items: ['C#', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    category: 'Frontend',
    items: ['React', 'Redux', 'Redux Toolkit', 'RTK Query', 'Angular', 'HTML5', 'CSS3']
  },
  {
    category: 'Backend',
    items: ['.NET 8', 'ASP.NET Core', 'REST APIs', 'Entity Framework Core']
  },
  {
    category: 'Architecture',
    items: ['Microservices', 'Micro-frontends', 'Reusable Packages']
  },
  {
    category: 'Cloud & DevOps',
    items: ['Azure', 'AWS', 'Azure DevOps', 'AWS Amplify', 'GitHub', 'CI/CD']
  }
];

export const experience = [
  {
    company: 'ValGenesis Pvt Ltd',
    role: 'Software Engineer',
    duration: 'Mar 2026 - Present',
    stack: ['React', 'Redux Toolkit', '.NET 8', 'Azure', 'GitHub', 'Microservices'],
    points: [
      'Developed features for a workflow and custom-forms platform in a microservice-based architecture.',
      'Built field-level chat with expandable interactions to improve custom-form UX.',
      'Published reusable custom-form functionality as a package used by multiple product modules.',
      'Optimized task-transfer workflows, improving retrieval performance and reliability at scale.'
    ]
  },
  {
    company: 'Psiog Pvt Ltd',
    role: 'Software Engineer',
    duration: 'Jul 2022 - Mar 2026',
    stack: ['React', 'Angular', '.NET Core', 'MySQL', 'AWS', 'Azure DevOps'],
    points: [
      'Built responsive business workflows and improved frontend reusability by around 70%.',
      'Optimized query and API data-access patterns for around 25% better performance.',
      'Implemented CI/CD pipelines and delivered production support across cloud migrations.',
      'Reduced load times by around 75% using caching and optimized data-fetching workflows.'
    ]
  }
];

export const projects = [
  {
    name: 'Workflow & Custom-Forms Platform',
    description:
      'Delivered complex platform capabilities including reusable package-driven modules and collaborative field-level interactions.',
    tech: ['React', 'Redux Toolkit', 'RTK Query', '.NET 8', 'Azure', 'Microservices']
  },
  {
    name: 'Client & Vendor Management System',
    description:
      'Developed and scaled business workflows with robust API integrations, code reuse strategy, and performance optimization.',
    tech: ['React', '.NET Core', 'MySQL', 'AWS Amplify', 'GitHub']
  },
  {
    name: 'Asset Management System',
    description:
      'Optimized load performance and large data workflows with IndexedDB and scheduled backend processing.',
    tech: ['Angular', 'TypeScript', '.NET Core', 'Quartz.NET', 'Azure DevOps']
  }
];

export const education = {
  school: 'Vellore Institute of Technology, Vellore',
  degree: 'Integrated M.Tech - Software Engineering',
  duration: 'Jul 2017 - Apr 2022',
  score: 'CGPA: 8.28'
};

export const certifications = ['The Complete React JS & Redux Course - Udemy'];
