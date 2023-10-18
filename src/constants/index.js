import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  mid,
  gsl,
  quadrant,
  carrent,
  jobit,
  tripguide,
  threejs,
  graphQL,
  aws,
  ethereum,
  hardhat,
  solidity,
  chainlink,
  graph,
  moralis
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: backend,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
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
    name: "TypeScript",
    icon: typescript,
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
    name: "git",
    icon: git,
  },
  {
    name: "graphQL",
    icon: graphQL,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "ethereum",
    icon: ethereum,
  },
  {
    name: "hardhat",
    icon: hardhat,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "chainlink",
    icon: chainlink,
  },
  {
    name: "graph protocol",
    icon: graph,
  },
  {
    name: "moralis",
    icon: moralis,
  },
];

const experiences = [
  {
    title: "Full Stack Web3 Developer",
    company_name: "Quadrant.io",
    icon: quadrant,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Present",
    points: [
      "Developed an advanced API for the Geolancer App, improving performance by 35% and reducing load time to under 2 seconds.",
      "Implemented a highly intuitive Frontend Admin Panel, resulting in a reduction of user errors by 50% and increasing overall user satisfaction rating by 20 points.",
      "Developed a Guardian NFT feature using ERC-1155, resulting in a 20% increase in user engagement and retention.",
      "Utilized Hard Hat, Chainlink, and Moralis, ensuring the integration of cutting-edge technologies into the development process.",
      "Improved blockchain payment system for distribute ERC-20 EQUAD reward, speed up and scale up transactions by 200%"
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company_name: "MultiIntegra Digital",
    icon: mid,
    iconBg: "#383E56",
    date: "Jan 2020 - Sept 2022",
    points: [
      "Developed a responsive vessel navigation web app with real-time data integration, resulting in a 40% decrease in time spent on manually tracking vessel movements.",
      "Implemented advanced dashboards using React.js and Node.js for real-time monitoring of system performance, leading to a 50% reduction in downtime incidents.",
      "Implemented automated testing procedures, resulting in a 90% decrease in bug detection time and an improvement of overall product quality.",
    ],
  },
  {
    title: "Part-Time Web Designer",
    company_name: "Gondola Sangkar Logam",
    icon: gsl,
    iconBg: "#E6DEDD",
    date: "Feb 2018 - Jul 2019",
    points: [
      "Developed a comprehensive WordPress website for a business company, utilizing HTML and CSS coding, resulting in a 45% increase in online traffic.",
      "Collaborated with cross-functional teams to create visually compelling design elements that effectively communicated the company's brand identity, resulting in a 25% increase in user engagement.",
      "Implemented effective SEO strategies to improve search engine rankings, resulting in an average of 500 unique visits per day and increasing conversion rates by 15%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
