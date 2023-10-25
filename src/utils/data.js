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
import locationLogo  from "../assets/icons/location.svg";
import mailLogo  from "../assets/icons/mail.svg";
import whatsappLogo  from "../assets/icons/whatsapp.svg";
import instagramLogo  from "../assets/icons/instagram.svg";
import linkedinLogo  from "../assets/icons/linkedin.svg";
import githubIcons  from "../assets/icons/github.svg";

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
      id: 1,
      name: "HTML",
      logo: htmlLogo
    },
    {
      id: 2,
      name: "CSS",
      logo: cssLogo
    },
    {
      id: 3,
      name: "Javascript",
      logo: javascriptLogo
    },
    {
      id: 4,
      name: "JQuery",
      logo: jqueryLogo
    },
    {
      id: 5,
      name: "PHP",
      logo: phpLogo
    },
    {
      id: 6,
      name: "Codeigniter 4",
      logo: codeigniterLogo
    },
    {
      id: 7,
      name: "React JS",
      logo: reactLogo
    },
    {
      id: 8,
      name: "Next.JS",
      logo: nextjsLogo
    },
    {
      id: 9,
      name: "Bootstrap",
      logo: bootstrapLogo
    },
    {
      id: 10,
      name: "Tailwind CSS",
      logo: tailwindLogo
    },
    {
      id: 11,
      name: "Git",
      logo: gitLogo
    },
    {
      id: 12,
      name: "GitHub",
      logo: githubLogo
    },
    {
      id: 13,
      name: "Postman",
      logo: postmanLogo
    },
  ]
}

export const getProjectsData = () => {
  return [
    {
      id: 1,
      title: "RZ-Note",
      deploy: true,
      link: "https://rznote.netlify.app/",
      desc: "Simple memo app built with React.",
      github: "https://github.com/R4Z121/RZ-Note",
      tools: ["HTML","CSS","Javascript","TailwindCSS","React","Vite.js"]
    },
    {
      id: 2,
      title: "Webshowcase",
      deploy: false,
      link: "",
      desc: "Simple app to show your web design to the world.",
      github: "https://github.com/R4Z121/webshowcase",
      tools: ["HTML","CSS","Javascript","PHP","Codeigniter 3","MySQL"]
    },
    {
      id: 3,
      title: "RZ-Folio",
      deploy: true,
      link: "https://crypt4z.netlify.app/",
      desc: "My first Portfolio Website Built with React",
      github: "https://github.com/R4Z121/RZ-Folio",
      tools: ["HTML","CSS","Javascript","TailwindCSS","React","Vite.js"]
    },
    {
      id: 4,
      title: "Rainfallz",
      deploy: false,
      link: "",
      desc: "RainfallZ is an application to predict the amount of rainfall in Banyuasin Regency, South Sumatra, Indonesia. The prediction method that used in this application are Tsukamoto Fuzzy and Combination of Tsukamoto Fuzzy and Artificial Bee Colony Algorithm.",
      github: "https://github.com/R4Z121/rainfallz",
      tools: ["HTML","CSS","Javascript","Bootstrap","Codeigniter 4","MySQL","Composer"]
    },
    {
      id: 5,
      title: "Crypt4Z",
      deploy: true,
      link: "https://crypt4z.netlify.app/",
      desc: "Crypt4Z is a web app that allows user to encrypt and decrypt message using classic cryptography methods, are Caesar Cipher, Vigenere Cipher, Rail Fence cipher, Affine Cipher, Playfair Cipher, and One Time Pad (OTP). This app also has feature that allows user insert message into image or extract the message from image.",
      github: "https://github.com/R4Z121/Crypt4Z",
      tools: ["HTML","CSS","Javascript","TailwindCSS","Webpack"]
    },
    {
      id: 6,
      title: "SongLyricZ",
      deploy: true,
      link: "https://songlyricz.vercel.app/",
      desc: "SongLyricZ is a web app to find songs lyrics. The API used in this project is \"Genius - Song Lyrics\" from Rapid API. This project built to implement some new knowledges that I've earned while learning Next.js",
      github: "https://github.com/R4Z121/songlyricz",
      tools: ["React","Next.js","TalwindCSS"]
    }
  ]
}

export const getContactData = () => {
  return [
    {
      name: "location",
      desc: [
        "Pangeran Ayin Street",
        "Palembang, Indonesia"
      ],
      link: "",
      imgSource: locationLogo
    },
    {
      name: "mail",
      desc: [
        "m.rizkyazizi@gmail.com"
      ],
      link: "mailto:m.rizkyazizi@gmail.com",
      imgSource: mailLogo
    },
    {
      name: "whatsapp",
      desc: [
        "+62 896 30375105"
      ],
      link: "https://api.whatsapp.com/send?phone=6289630375105",
      imgSource: whatsappLogo
    },
  ]
}

export const getSocialMediaData = () => {
  return [
    {
      name: "instagram",
      link: "https://www.instagram.com/rizky.azizi02/",
      imgSource: instagramLogo
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/m-rizky-azizi-637075217/",
      imgSource: linkedinLogo
    },
    {
      name: "github",
      link: "https://github.com/R4Z121",
      imgSource: githubIcons
    }
  ]
}