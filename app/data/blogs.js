const data = [
  {
    slug: 'why-humans-are-better-verifiers-than-generators',
    title: 'Judgement Is the Most Valuable Skill Today',
    date: '2026-03-01',
    description: 'Now that AI has made generation cheap, there is no skill more valuable than judgement — and downstream from it, using judgement to make better decisions.',
    load: () => import('./blogs/why-humans-are-better-verifiers-than-generators.md'),
  },
  {
    slug: 'the-web-browser-internals',
    title: 'The Web Browser Internals',
    date: '2021-09-22',
    description: 'A guide to understanding how JavaScript runs in the browser and how browsers work internally.',
    load: () => import('./blogs/the-web-browser-internals.md'),
  },
  {
    slug: 'moonshot-simple-code',
    title: 'Moonshot and A Simple Codebase',
    date: '2021-09-03',
    description: 'How a tiny codebase serving billions of requests proves it doesn\'t take a lot to make a dent in the universe.',
    load: () => import('./blogs/moonshot-simple-code.md'),
  },
  {
    slug: 'humans-are-np-machines',
    title: 'Humans are Non Polynomial(NP) Machines',
    date: '2019-06-10',
    description: 'The idea that humans can verify but not always solve — we are NP machines.',
    load: () => import('./blogs/humans-are-np-machines.md'),
  },
];

export default data;
