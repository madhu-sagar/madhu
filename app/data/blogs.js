import webBrowserInternals from './blogs/the-web-browser-internals.md';
import moonshotSimpleCode from './blogs/moonshot-simple-code.md';
import humansAreNpMachines from './blogs/humans-are-np-machines.md';

const data = [
  {
    slug: 'the-web-browser-internals',
    title: 'The Web Browser Internals',
    date: '2021-09-22',
    description: 'A guide to understanding how JavaScript runs in the browser and how browsers work internally.',
    markdown: webBrowserInternals,
  },
  {
    slug: 'moonshot-simple-code',
    title: 'Moonshot and A Simple Codebase',
    date: '2021-09-03',
    description: 'How a tiny codebase serving billions of requests proves it doesn\'t take a lot to make a dent in the universe.',
    markdown: moonshotSimpleCode,
  },
  {
    slug: 'humans-are-np-machines',
    title: 'Humans are Non Polynomial(NP) Machines',
    date: '2019-06-10',
    description: 'The idea that humans can verify but not always solve — we are NP machines.',
    markdown: humansAreNpMachines,
  },
];

export default data;
