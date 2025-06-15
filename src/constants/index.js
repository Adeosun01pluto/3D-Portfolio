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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  handyride,
  wanderwise,
  quicktax,
  jhay,
  fleettracker,
  propsure
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
    title: "Web Development",
    icon: web,
  },
  {
    title: "App Development",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Engineer (Contract)",
    company_name: "HandyRide.ng",
    icon: null,
    iconBg: "#383E56",
    date: "Apr 2025 - Jun 2025",
    points: [
      "Developed and maintained the **HandyRide.ng** logistics and food delivery platform for seamless order processing and real-time tracking.",
      "Implemented real-time features and intuitive user flows using React.js and Firebase.",
      "Used Tailwind CSS to create a clean, mobile-responsive UI optimized for users on the go.",
    ],
  },
  {
    title: "Frontend Developer (Freelance)",
    company_name: "", // You can use "Self-Employed" if needed
    icon: starbucks,
    iconBg: "#383E56",
    date: "2024 - 2025",
    points: [
      "Collaborated closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.",
      "Leveraged expertise in JavaScript, TypeScript, React, and Tailwind CSS to deliver high-quality web applications.",
      "Focused on building responsive user interfaces and engaging web experiences.",
    ],
  },
  {
    title: "Frontend Development Instructor",
    company_name: "Alpha Tech School & Hub",
    icon: null,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Apr 2024",
    points: [
      "Taught React.js, Next.js, and Tailwind CSS to aspiring developers through hands-on projects and live sessions.",
      "Conducted code reviews and provided constructive feedback to enhance students' code quality and understanding of best practices.",
      "Guided learners in debugging, performance optimization, and building responsive user interfaces.",
    ],
  },
  {
    title: "Frontend Engineer (Contract)",
    company_name: "Jhay (P2P Transaction Platform)",
    icon: null,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Mar 2023",
    points: [
      "Built a secure peer-to-peer transaction platform called **Jhay**, enabling users to buy and sell locally with ease.",
      "Implemented real-time chat and transaction status updates using Firebase.",
      "Designed and built responsive frontend components using React.js and Tailwind CSS for a smooth user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working on HandyRide with Adeosun was fantastic. The real-time updates and seamless user experience highlight strong React and Firebase skills.",
    name: "Handy Tech",
    designation: "Operations Manager",
    company: "HandyRide Innovations",
    image: "https://placehold.co/100x100/DDA0DD/000000?text=HT", // Placeholder image
  },
  {
    testimonial:
      "Adeosun's expertise with React and Tailwind CSS brought our Prop-Sure platform to life. The intuitive UI and seamless responsiveness exceeded our expectations.",
    name: "Nnonso Zamani",
    designation: "Project Lead",
    company: "Prop Solutions Inc.",
    image: "https://placehold.co/100x100/F5F5DC/000000?text=NZ", // Placeholder image
  },
  {
    testimonial:
      "For Quick-Tax, Adeosun's deep understanding of JavaScript and TypeScript ensured a robust and highly efficient tax application. We were impressed by the clean code and performance.",
    name: "John Carter",
    designation: "Head of Finance",
    company: "Rapid Tax Services",
    image: "https://placehold.co/100x100/ADD8E6/000000?text=JC", // Placeholder image
  },
];

const projects = [
  {
    name: "Prop-Sure",
    description:
      "A robust web platform designed for secure property management, enabling users to browse listings, view detailed property information, and streamline rental or purchase processes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: propsure, // Reusing existing image variable
    source_code_link: "https://propsure.vercel.app", // Assuming this is the live link
  },
  {
    name: "HandyRide",
    description:
      "A real-time ride-sharing web application enabling users to request rides, track drivers, and manage bookings. Designed for efficiency and a convenient user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient", // Using Node to imply backend for real-time aspects
      },
    ],
    image: handyride, // Reusing existing image variable
    source_code_link: "https://handyride.vercel.app", // Assuming this is the live link
  },
  {
    name: "Wander-Wise",
    description:
      "An intelligent travel planning platform providing users with personalized recommendations, itinerary creation, and seamless booking integrations for a guided and efficient travel experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wanderwise, // Reusing existing image variable
    source_code_link: "https://wanderwisee.vercel.app/",
  },
    {
    name: "Quick-Tax",
    description:
      "An intuitive web application designed to simplify tax preparation, allowing users to input financial data, calculate taxes, and generate reports with ease, built with a focus on user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: quicktax, // Reusing existing image variable
    source_code_link: "https://quicktaxx.vercel.app", // Assuming this is the live link
  },
  {
    name: "Jhay",
    description:
      "A local peer-to-peer platform facilitating direct connections between users for sharing resources or services within their community, promoting local collaboration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "firebase", // Suggests backend for P2P communication
        color: "pink-text-gradient",
      },
    ],
    image: jhay, // Reusing existing image variable
    source_code_link: "https://jhayexchange.netlify.app/",
  },
  {
    name: "FleetTrackr",
    description:
      "A comprehensive fleet management dashboard providing real-time tracking, analytics, and operational insights for efficient vehicle and resource management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: fleettracker, // Reusing existing image variable
    source_code_link: "https://fleetfix.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
