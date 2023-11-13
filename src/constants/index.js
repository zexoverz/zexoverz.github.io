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
  moralis,
  geolancer,
  ayocas,
  fury,
  youtubeclone,
  zcommerce,
  gameon
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
    id: "tech",
    title: "Skills",
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
    name: "Geolancer App",
    description:
      "Geolancer is the world's first mobile application that rewards you with cryptocurrency and NFTs for mapping your city. As the full stack web3 developer, I was responsible for creating the API Backend for the Geolancer app using Node.js. My role included managing the entire NFT feature within Geolancer, including the implementation of a lottery system, NFT Grid, and reward distribution.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "Blockchain",
        color: "pink-text-gradient",
      },
      {
        name: "DynamoDb",
        color: "green-text-gradient",
      },
      {
        name: "NFT",
        color: "pink-text-gradient",
      },
      {
        name: "Material UI",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "Web3",
        color: "pink-text-gradient",
      },
    ],
    image: geolancer,
    source_code_link: "https://play.google.com/store/apps/details?id=com.sheelafoam.quadrant&hl=en&gl=US",
    demo_link: "https://play.google.com/store/apps/details?id=com.sheelafoam.quadrant&hl=en&gl=US"
  },
  {
    name: "Ayocas App",
    description:
      "Ayocas is the reliable, easy way to charge your EV. It allows users to find EV charging stations, see real-time charger details, reserve charging sessions, and initiate charging. As the Backend Developer for Ayocas, I was responsible for developing the entire backend infrastructure. I integrated the app with EV charging hardware through the OCPP (Open Charge Point Protocol) and managed the dashboard API using Node.js.",
    tags: [
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "OCPP",
        color: "pink-text-gradient",
      },
      {
        name: "PrismaJs",
        color: "pink-text-gradient",
      },
    ],
    image: ayocas,
    source_code_link: "https://play.google.com/store/apps/details?id=id.novatech.ev&hl=id-ID",
    demo_link: "https://play.google.com/store/apps/details?id=id.novatech.ev&hl=id-ID"
  },
  {
    name: "Furry Wallet",
    description:
      "We believe that account abstraction is the key to unlocking mass adoption. By simplifying the user experience and providing intuitive tools for managing web3 wallets, we can empower everyone to seamlessly navigate the DeFi landscape. Furry wallet is one of my project winning hackathon in Eth SG 2023, we win 2nd place UX Tracks. also this project participated on big event Solana HyperDrive.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "BiconomySdk",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "ERC-4337",
        color: "pink-text-gradient",
      },
      {
        name: "Web3Js",
        color: "pink-text-gradient",
      },
      {
        name: "Defi App",
        color: "pink-text-gradient",
      },
      {
        name: "Polygon",
        color: "blue-text-gradient",
      },
      {
        name: "Solana",
        color: "green-text-gradient",
      },
      
    ],
    image: fury,
    source_code_link: "https://github.com/zihanlim/0xfury_Hyperdrive_SOL",
    demo_link: "https://www.youtube.com/watch?v=jaaLMZQyZJM"
  },
  {
    name: "Youtube Web3 Clone",
    description:
      "The YouTube Web3 Decentralized Clone is my personal project.This is an innovative web application that reimagines the traditional video-sharing platform, such as YouTube, by leveraging Web3 technologies to create a decentralized and censorship-resistant environment for content creators and viewers.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "Hardhat",
        color: "pink-text-gradient",
      },
      {
        name: "IPFS",
        color: "pink-text-gradient",
      },
      {
        name: "The Graph",
        color: "pink-text-gradient",
      },
      {
        name: "Livepeer",
        color: "pink-text-gradient",
      },
      {
        name: "Polygon",
        color: "pink-text-gradient",
      },
      {
        name: "EthersJs",
        color: "pink-text-gradient",
      },
      
    ],
    image: youtubeclone,
    source_code_link: "https://github.com/zexoverz/web3-youtube",
    demo_link: "https://web3-youtube-mu.vercel.app/"
  },
  {
    name: "Z-ecommerce",
    description:
      "Z ecommerce is my personal project, Build and Deploy a fully responsive Modern Full Stack Ecommerce application with Payments functionality. With Modern design, animations, the ability to add and edit products on the go using a CMS, all advanced cart functionalities, and most importantly the complete integration with Stripe so that you can cover REAL payments.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity Io",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe Payment",
        color: "green-text-gradient",
      },
      
    ],
    image: zcommerce,
    source_code_link: "https://github.com/zexoverz/z-ecommerce",
    demo_link: "https://z-ecommerce.vercel.app/"
  },
  {
    name: "Game On Stacking Dapp",
    description:
      "One of my favorite personal project, I Build web3 Dapp Token Stacking, in which we can provide users to stack their ERC20 token and earn reward, we can also provide multiple token stacking contract. I have my own ERC20 named ZexoToken The contract interacts with an ERC-20 token contract ZexoToken allowing users to stake and claim rewards using these tokens. includes functionality for transferring tokens, checking balances, and storing information about token holders.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Hardhat",
        color: "pink-text-gradient",
      },
      {
        name: "Web3js",
        color: "pink-text-gradient",
      },
      {
        name: "Ethereum",
        color: "pink-text-gradient",
      },
      
    ],
    image: gameon,
    source_code_link: "https://github.com/zexoverz/game-on-dapp",
    demo_link: "https://game-on-dapp.vercel.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };
