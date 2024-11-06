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
  ovgu,
  regiocom,
  infosys,
  angular,
  postgre
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
    title: "Java Springboot Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
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
  {
    name: "Angular",
    icon: angular,
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
    name: "PostgreSQL",
    icon: postgre,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Working Student Full Stack Developer",
    company_name: "Regiocom SE",
    icon: regiocom,
    iconBg: "#383E56",
    date: "June 2022 - Current",
    points: [
      "Developed and implemented responsive websites using Java Spring Boot, Angular, and PrimeNG, r educing load times by 40% and increasing user engagement by 25% for strategic IT projects by engaging in pair programming sessions.",
      "Wrote unit tests and integration tests using mocks to ensure code functionality, security, and maintain high quality standards",
      "Emphasized clean code practices, including detailed JavaDocs and inline documentation, to improve code readability, maintainability, and facilitate team collaboration.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Otto von Guericke University",
    icon: ovgu,
    iconBg: "#E6DEDD",
    date: "October 2023 - March 2024",
    points: [
      "Developed and Dockerized a Streamlit  based interactive machine learning scenario prototype.",
      "Implemented machine learning algorithms, data visualization, and utilized Docker and Kubernetes for deployment.",
      "Integrated version control using Git to manage codebase changes and facilitate collaboration.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#383E56",
    date: "October 2019 - August 2021",
    points: [
      "Implemented and maintained responsive web interfaces for a data portal using Java Springboot, JavaScript, TypeScript, HTML, CSS.",
      "Skillfully managed database interactions through SQL and crafted robust Java REST APIs within a dynamic Agile team environment."
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
    name: "Master Thesis: Improving Robustness in Language Models for Legal Textual Entailment through Artifact-Aware Training",
    description:
      "My master thesis focused on enhancing the robustness of legal textual entailment models by detecting language artifacts and leveraging OpenAI’s API to generate adversarial instances. This work aims to improve model reliability in understanding complex legal texts, ultimately contributing to more accurate AI-driven legal solutions.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "Pytorch",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "aDogCa- A Pet Store",
    description:
      "I developed aDogCa, a comprehensive web platform for pet lovers, using Angular for the frontend and Java Spring Boot for the backend. The application features a Dockerized architecture with key functionalities, including chat support, order history tracking, and metrics to enhance customer satisfaction.",
    tags: [
      {
        name: "Python",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Medimate - Developing and Evaluating a Chatbot",
    description:
      "Medimate is a medical chatbot designed to provide users with instant healthcare information and support. Built using FastAPI for the backend and Angular for the frontend, and powered by Google Dialogflow for natural language processing, it enhances patient engagement and streamlines access to medical resources.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Google Dialogflow",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
