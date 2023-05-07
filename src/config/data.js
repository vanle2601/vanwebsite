import projImg1 from "../assets/img/gymbunno.png";
import projImg2 from "../assets/img/fonseka.png";
import projImg3 from "../assets/img/vanportfolio.png";
import projImg4 from "../assets/img/fakeflix.png";
import projImg5 from "../assets/img/linetech.png";

import icon1 from "../assets/img/HTML5_Logo.svg";
import icon2 from "../assets/img/CSS3_logo.svg";
import icon3 from "../assets/img/React-icon.svg";
import icon4 from "../assets/img/Bootstrap_logo.svg";
import icon5 from "../assets/img/javascript_logo.svg";
import icon6 from "../assets/img/materialui_logo.svg";
import icon7 from "../assets/img/Node_logo.svg";
import icon8 from "../assets/img/npm_logo.svg";
import icon9 from "../assets/img/rapidapi-logo.svg";
import icon10 from "../assets/img/github.svg";
import icon11 from "../assets/img/axios-icon.svg";
import icon12 from "../assets/img/redux.svg";

export const buildingProjects = [
  {
    id: 1,
    title: "Streaming Platform",
    description: "API-based",
    imgUrl: projImg4,
    link: "https://fakeflix-clone.netlify.app/",
    subCategory: [icon3, icon5, icon2, icon11],
    feature: [
      "I had a fun time working on this project, and it's always exciting to experiment with new technologies and databases. Shout out to all of my online and very supportive mentors/ communities who have added incredibly values, especially when it comes to fixing bugs and solving problems that arose during development.",
      "It's impressive that I was able to create a streaming site using such large database, variety of programming scrips even if the end result appears to be so simple.",
      "I am continuously working to add new features and functionality to enhance the user experience and make the site even more impressive. I'm sure your commitment to finishing the site will pay off in the end. Stay tuned!",
    ],
  },
  {
    id: 2,
    title: "E-Commerce Site",
    description: "Trading",
    imgUrl: projImg5,
    link: "https://linetech.onrender.com/",
    subCategory: [icon3, icon5, icon2, icon11, icon12],
    feature: [
      "An almost completing first MERN project I've made. I have learned a lot from this experience, despite the challenges and bugs that I encountered along the way. Working with web services can be complex, but by learning how to pull data from a web service, I've gained a valuable skill that will be useful in many future projects.",
      "As it's coming to the end to project launch, hope you stay tuned for it!",
    ],
  },
];

export const projects = [
  {
    id: 3,
    title: "Exercises Search Engine",
    description: "API-based",
    imgUrl: projImg1,
    link: "https://gymbunny.netlify.app/",
    subCategory: [icon3, icon5, icon2, icon9, icon6],
    feature: [
      "The website is a comprehensive exercise resource that allows users to tailor their workout routines to their specific needs",
      "Upon landing on the homepage, users are presented with a selection of exercise categories to choose from, as well as a list of muscle groups to target.",
    ],
  },
  {
    id: 4,
    title: "Landing Page",
    description: "Design & Development",
    imgUrl: projImg2,
    link: "https://helplab.com.au/",
    subCategory: [icon1, icon2],
    feature: [
      "This was the very first landing page I made over my internship at Fonseka. It's important to prioritise efficiency and user-friendliness when developing projects, especially in a fast-paced tech company where multiple projects are being worked on simultaneously.",
      "Recycling plug-ins and tools can definitely save time and make the development process more streamlined.",
    ],
  },
  {
    id: 5,
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
    link: "https://vvnle.com",
    subCategory: [icon3, icon5, icon2],
    feature: [
      "It's evident that this project is my pride and joy, and it's one that I continue to work on and improve over time.",
      "My desire to constantly improve it will undoubtedly lead to even greater success in the future. Keep coming back for more!",
    ],
  },
];

export const languages = [
  {
    title: "HTML5",
    imgUrl: icon1,
  },
  {
    title: "CSS3",
    imgUrl: icon2,
  },
  {
    title: "React.js",
    imgUrl: icon3,
  },

  {
    title: "JavaScript",
    imgUrl: icon5,
  },

  {
    title: "Node.js",
    imgUrl: icon7,
  },
];

export const libraries = [
  {
    title: "Bootstrap",
    imgUrl: icon4,
  },
  {
    title: "Material UI",
    imgUrl: icon6,
  },
  {
    title: "npm",
    imgUrl: icon8,
  },
  {
    title: "Rapid API",
    imgUrl: icon9,
  },
  {
    title: "Git",
    imgUrl: icon10,
  },
  {
    title: "Axios",
    imgUrl: icon11,
  },
  {
    title: "Redux",
    imgUrl: icon12,
  },
];
