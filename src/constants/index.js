import {web,backend,ui,meta,shopify,tesla,starbucks,html,javascript,nodejs,tailwind,threejs,reactjs,redux,mongodb,figma,css,git,workoutappui,Looked,others} from '../assets'

export const navLinks =[
    {
        id:'about',
        title:'About'
    },
    {
        id:'work',
        title:'Work'
    },
    {
        id:'contact',
        title:'Contact'
    }
]

const services = [
    {
        title:"Web Developer",
        icon:web
    },
    {
        title:"Backend Developer",
        icon:backend
    },
    {
        title:"UI/UX",
        icon:ui
    }
]

const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
  ];
  
  const projects = [
    {
      name: "Workout with Bodhi",
      description:
        "Web-based platform for working out",
      tags: [
        {
          name: "react",
          color: "text-white",
        },
        {
          name: "css",
          color: "text-white",
        },
      ],
      image: workoutappui,
      source_code_link: "https://github.com/",
    },
    {
      name: "Looked",
      description:
        "Mern Stack Social Media app",
      tags: [
        {
          name: "react",
          color: "text-white",
        },
        {
          name: "MongoDb",
          color: "text-white",
        },
        {
          name: "Nodejs",
          color: "text-white",
        },
        {
          name: "TailwindCss",
          color: "text-white",
        },
      ],
      image: Looked,
      source_code_link: "https://github.com/",
    },
    {
      name: "Other Projects",
      description:
        "Other Projects",
      tags: [
        {
          name: "Reactjs",
          color: "text-white",
        },
        {
          name: "Javascript",
          color: "text-white",
        },
        {
          name: "css",
          color: "text-white",
        },
        {
          name: "bootstrap",
          color: "text-white",
        },
        {
          name: "tailwind",
          color: "text-white",
        },
        {
          name: "Nodejs",
          color: "text-white",
        },
        
      ],
      image: others,
      source_code_link: "https://github.com/",
    },
  ];

export {services,experiences,technologies,projects}