const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Madhu Sagar',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Madhu Sagar',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Madhu Sagar',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Madhu Sagar',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Madhu Sagar',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
