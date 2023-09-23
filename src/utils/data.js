import htmlLogo from '../assets/img/skills/html-logo.png';
import cssLogo from '../assets/img/skills/css-logo.png';
import javascriptLogo from '../assets/img/skills/javascript-logo.png';
import jqueryLogo from '../assets/img/skills/jquery-logo.png';
import phpLogo from '../assets/img/skills/php-logo.png';
import codeigniterLogo from '../assets/img/skills/codeigniter-logo.png';
import reactLogo from '../assets/img/skills/react-logo.png';
import nextjsLogo from '../assets/img/skills/nextjs-logo.png';
import bootstrapLogo from '../assets/img/skills/bootstrap-logo.png';
import tailwindLogo from '../assets/img/skills/tailwind-logo.png';
import gitLogo from '../assets/img/skills/git-logo.png';
import githubLogo from '../assets/img/skills/github-logo.png';
import postmanLogo from '../assets/img/skills/postman-logo.png';

export const getJumboData = () => {
  return {
    jumboTitle: "Hi, I'm Z !!!",
    jumboSubtitle: "Frontend Developer",
    jumboDescription: "Medium level experience in web design and development knowledge, producing quality work."
  }
}

export const getProfileDescription = () => {
  return {
    title: "Hi, I'm M. Rizky Azizi, based in Indonesia",
    description: "Fresh graduate of informatics engineering major who has interest in front-end developer. Skilled in designing, building, and developing web based application using HTML, CSS, and Javascript. Have an entry-level experience in building website using React.js and Next.js",
    experience: 3,
    completeProjects: 5
  }
}

export const getSkillData = () => {
  return [
    {
      name: "HTML",
      logo: htmlLogo
    },
    {
      name: "CSS",
      logo: cssLogo
    },
    {
      name: "Javascript",
      logo: javascriptLogo
    },
    {
      name: "JQuery",
      logo: jqueryLogo
    },
    {
      name: "PHP",
      logo: phpLogo
    },
    {
      name: "Codeigniter 4",
      logo: codeigniterLogo
    },
    {
      name: "React JS",
      logo: reactLogo
    },
    {
      name: "Next.JS",
      logo: nextjsLogo
    },
    {
      name: "Bootstrap",
      logo: bootstrapLogo
    },
    {
      name: "Tailwind CSS",
      logo: tailwindLogo
    },
    {
      name: "Git",
      logo: gitLogo
    },
    {
      name: "GitHub",
      logo: githubLogo
    },
    {
      name: "Postman",
      logo: postmanLogo
    },
  ]
}