/*export const myProjects = [
  {
    id: 1,
    title: "Netflix-Replica",
    description:
      "Tried to create NETFLIX REPLICA website from scartch.",
    subDescription: [
      "Built a scalable application with Vite.",,
      "Designed a responsive frontend with CSS, enhancing user experience.",
    ],
    href: "",
    logo: "",
    image: "../assets/Projects/Netflix.png",
    tags: [
      {
        id: 1,
        name: "CSS",
        path: "../assets/logos/css3.svg",
      },
      {
        id: 2,
        name: "Vite",
        path: "/src/assets/logos/vitejs.svg",
      },
      {
        id: 3,
        name: "git",
        path: "../assets/logos/git.svg",
      },
    ],
  },]

  export const mySocials = [
  {
    name: "Linkedin",
    href: "www.linkedin.com/in/soumi-paul-b94a5324a",
    icon: "",
  },
  
];

export const experiences = [
  {
    title: "Web Developer",
    job: "Intern",
    date: "November 2023 - January 2024",
    contents: [
      "Gained hands-on experience working on basic projects using HTML, CSS, JavaScript, React.js, and Node.js.",
      "Explored Django installation and integration.",
      "Managed website content and maintenance.",
      "Used ChatGPT to understand and resolve code errors during project development."
    ],
  }
];
*/

import netflixImg from '../assets/Projects/Netflix.png';
import css from '../assets/logos/css3.svg';
import vite from '../assets/logos/vitejs.svg';
import Git from '../assets/logos/git.svg';
import linkedin from '../assets/Social/linkedIn.svg'
import resturant from '../assets/Projects/Resturant.png'

export const myProjects = [
  {
    id: 1,
    title: "Netflix-Replica",
    description: "Tried to create a Netflix replica website from scratch.",
    subDescription: [
      "Built a scalable application with Vite.",
      "Designed a responsive frontend with CSS, enhancing user experience.",
      "Used Git for the first time to store the code in the cloud.",
    ],
    href: "https://github.com/Soumipaul08/netflix",
    logo: "",
    image: netflixImg,
    tags: [
      {
        id: 1,
        name: "CSS",
        path: css,
      },
      {
        id: 2,
        name: "Vite",
        path: vite,
      },
      {
        id: 3,
        name: "Git",
        path: Git,
      },
    ],
  },
  {
    id: 2,
    title: "Little Shanghai Restaurant",
    description:
      "A small HTML and CSS project for beginners. ",
    subDescription: [
      "My first internship project based on HTML and CSS.",
      "Where I, learnt how to hook CSS with HTML document .",
      "Came to know about grids, coloums and rows also many more.",
    ],
    href: "https://codepen.io/soumi-Paul/pen/wvNqgKY",
    logo: "",
    image: resturant,
    tags: [
      {
        id: 1,
        name: "CSS",
        path: css,
      },
    ],
  },
];


export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/soumi-paul-b94a5324a/",
    icon: linkedin,
  },
];

export const experiences = [
  {
    title: "Web Developer",
    job: "Intern",
    date: "November 2023 - January 2024",
    contents: [
      "Gained hands-on experience working on basic projects using HTML, CSS, JavaScript, React.js, and Node.js.",
      "Explored Django installation and integration.",
      "Managed website content and maintenance.",
      "Used ChatGPT to understand and resolve code errors during project development.",
    ],
  },
];

