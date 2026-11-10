// Single source of truth for everything resume-related.
// Edit this file to update the site; pages read from it.

export const profile = {
  name: 'Mohamed Amine Aydoun',
  shortName: 'Amine',
  role: 'Frontend Lead',
  company: 'PVH Corp.',
  location: 'Rotterdam, Netherlands',
  email: 'mohamed.amine.aydoun@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mohamed-amine-aydoun-5799b481',
  // TODO: add your GitHub URL if you want it shown
  github: '',
  headline:
    'I build and lead frontend for large web products, with more than ten years in the JavaScript ecosystem.',
  about: [
    "I'm a frontend lead based in Rotterdam. I've been shipping web and mobile products since 2014, first as a full-stack engineer in Shenzhen and, since 2018, as a frontend specialist in the Netherlands.",
    'I like the part of the job where architecture, product and people meet: choosing the right abstractions, keeping large codebases pleasant to work in, and helping engineers around me grow.',
  ],
};

export const stats = [
  { value: '12+', label: 'years shipping software' },
  { value: '2', label: 'continents, from Shenzhen to Amsterdam' },
  { value: '6', label: 'languages spoken' },
];

export type Role = {
  company: string;
  title: string;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM, omit for current
  location: string;
  summary?: string;
  highlights?: string[];
  stack?: string[];
  clients?: { name: string; title: string; start: string; end: string }[];
};

// TODO: the LinkedIn profile has no descriptions for the four most recent roles.
// Add a summary + 2–4 highlights (ideally with outcomes/numbers) for each.
export const experience: Role[] = [
  {
    company: 'PVH Corp.',
    title: 'Front End Lead',
    start: '2022-07',
    location: 'Amsterdam, NL',
  },
  {
    company: 'Bondify',
    title: 'Senior Frontend Engineer',
    start: '2020-08',
    end: '2022-07',
    location: 'Rotterdam, NL',
  },
  {
    company: 'Frontmen',
    title: 'Senior Frontend Engineer',
    start: '2018-11',
    end: '2020-06',
    location: 'Amsterdam, NL',
    summary: 'Frontend consultancy, working embedded in client teams.',
    clients: [
      { name: 'Tele2 Nederland', title: 'Senior Frontend Engineer', start: '2019-01', end: '2019-11' },
    ],
  },
  {
    company: 'EPAM Systems',
    title: 'Full Stack JavaScript Engineer',
    start: '2017-07',
    end: '2018-11',
    location: 'Shenzhen, CN',
    highlights: [
      'Built modern frontends with React, Angular 2+, Vue, Redux and TypeScript.',
      'Designed and implemented REST APIs in Node.js (Express, hapi, restify) and Flask.',
      'Worked with AWS cloud services and wrote tests with Jest, Mocha and Karma.',
      'Acted as Scrum Master for the team.',
    ],
    stack: ['React', 'Angular', 'Vue', 'TypeScript', 'Node.js', 'AWS'],
  },
  {
    company: 'que360 (欢雀)',
    title: 'JavaScript Full Stack Programmer',
    start: '2016-08',
    end: '2017-07',
    location: 'Shenzhen, CN',
    summary: 'Cloud HR service for businesses.',
    highlights: [
      'Built the web app with React, Redux and Ant Design.',
      'Shipped the iOS and Android apps with React Native and CodePush.',
      'Implemented the REST API in Node.js and Express, documented with Swagger and backed by MongoDB.',
      'Ran the team’s Scrum process.',
    ],
    stack: ['React', 'React Native', 'Node.js', 'MongoDB'],
  },
  {
    company: 'Parrot',
    title: 'Analyst Programmer',
    start: '2015-01',
    end: '2016-07',
    location: 'Shenzhen, CN',
    highlights: [
      'Built production-monitoring web apps on a LAMP stack.',
      'Designed a secured REST API in Node.js and MongoDB for the mobile apps.',
      'Implemented the backend of a wireless product with Node.js network programming.',
    ],
    stack: ['Node.js', 'PHP', 'MongoDB'],
  },
  {
    company: 'E-techco Group',
    title: 'Mobile and Web Engineer',
    start: '2014-07',
    end: '2014-12',
    location: 'Shenzhen, CN',
    summary: 'A digital hospital platform bringing healthcare closer to patients.',
    highlights: [
      'Built the web app (Java EE, Spring, Struts, Hibernate) and the Android client.',
      'Contributed to localization, internationalization and UI/UX design.',
    ],
  },
  {
    company: 'Novoquad Group',
    title: 'Software Engineer',
    start: '2014-02',
    end: '2014-07',
    location: 'Suzhou, CN',
    summary: 'Android app connected to a wearable over Bluetooth Low Energy.',
    highlights: [
      'Built social features, accounts, file sharing and events.',
      'Added gamification (badges, levels and a dashboard) to drive engagement.',
      'Applied classification and regression models to generate health advice.',
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Redux', 'Vue', 'Angular', 'CSS', 'webpack'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'hapi', 'REST API design', 'MongoDB'] },
  { group: 'Mobile', items: ['React Native', 'Android'] },
  { group: 'Practice', items: ['Technical leadership', 'Testing (Jest, Mocha)', 'AWS', 'Scrum', 'i18n'] },
];

export const languages = [
  { name: 'Arabic', code: 'ar', level: 'Native', hello: 'مرحبا', dir: 'rtl' },
  { name: 'French', code: 'fr', level: 'Native', hello: 'Bonjour' },
  { name: 'English', code: 'en', level: 'Native', hello: 'Hello' },
  { name: 'Dutch', code: 'nl', level: 'Professional', hello: 'Hallo' },
  { name: 'Spanish', code: 'es', level: 'Professional', hello: 'Hola' },
  { name: 'Chinese', code: 'zh', level: 'Professional', hello: '你好' },
];

export const education = [
  {
    school: 'National School of Mineral Industry',
    degree: "Master's degree, Computer Science Engineering",
    years: '2010 – 2013',
  },
  {
    school: 'Moulay Youssef School',
    degree: 'Preparatory classes for engineering schools, Mathematics & Physics',
    years: '2007 – 2010',
  },
  {
    school: 'National Conservatory of Music and Dance',
    degree: 'Honor Award, Music & Piano',
    years: '2000 – 2010',
  },
];

export const certifications = [
  'React: Building Large Apps',
  'Node.js: Microservices',
  'Node.js: Testing and Code Quality',
  'DevOps Foundations',
  'Ethical Hacking: Cryptography',
];
