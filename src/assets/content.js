import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";


export const ABOUT_TEXT = `I'm Kathan Thakkar, a Computer Science and Engineering student at Ahmedabad University with a passion for Full Stack Development. My expertise spans React, Node.js, and Python, with projects ranging from DeFi applications to web apps and management systems. I'm skilled in both front-end and back-end development, database management, and cloud technologies. With a strong problem-solving background and over 450 coding challenges solved, I'm always ready to tackle new technological challenges and create innovative solutions.`;


export const PROJECTS = [
  {
    title: "Broken Bridge",
    image: project1,
    description:
      "A DeFi application facilitating the transfer of CCIP-BnM tokens between Sepolia Ethereum and BNB Smart Chain, utilizing the Chainlink CCIP protocol for decentralization.",
    technologies: ["React.js", "Ethers.js", "Solidity", "Hardhat", "Tailwind CSS"],
  },
  {
    title: "Automated Stop Detection",
    image: project2,
    description:
      "A methodology using DBSCAN to detect parked vehicles and vehicles stopped at traffic signals in autonomous drone trajectory data, contributing to advancements in vehicular trajectory analysis.",
    technologies: ["Python", "DBSCAN"],
  },
  {
    title: "Real Estate Webapp",
    image: project3,
    description:
      "A full-stack real estate web application with features including property searching, posting, and updating, utilizing Firebase for image storage and authentication.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Hospital Management System",
    image: project4,
    description:
      "A simple hospital management system that keeps records, includes CRUD operations with SQL server at the backend, and uses PL/SQL for triggers and procedures.",
    technologies: ["HTML", "Bootstrap", "Flask", "PostgreSQL", "PL/SQL"],
  },
];

export const CONTACT = {
  phoneNo: "+91-9104404599",
  email: "kathanythakkar07@gmail.com",
};
