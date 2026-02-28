import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faMedium from '@fortawesome/fontawesome-free-brands/faMedium';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

const data = [
  {
    link: 'https://github.com/madhu-sagar',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/madhusagar',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://medium.com/@madhu_sagar',
    label: 'Medium',
    icon: faMedium,
  },
  {
    link: 'https://twitter.com/madhu_sagar',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: `mailto:${atob('bWFkaHVzYWdhcg==')}@${atob('bWFkaHVzYWdhci5vcmc=')}`,
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
