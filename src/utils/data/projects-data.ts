import crefin from '../assets/image/crefin.jpg';
import travel from '../assets/image/travel.jpg';
import realEstate from '../assets/image/real-estate.jpg';
import ayla from '../assets/image/ayla.jpg';

interface Project {
  id: number;
  name: string;
  description: string;
  tools: string[];
  code: string;
  demo: string;
  image: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "E-commerce Multi-Product Site",
    description: "Designed and developed an online sales platform during an internship at Linkana. Users can browse and purchase a variety of products. Full-stack development including UI and MySQL database.",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
    code: "",
    demo: "",
    image: "assets/image/crefin.jpg",
    role: "Full Stack Developer"
  },
  {
    id: 2,
    name: "Event Planning Platform",
    description: "Created a platform for planning events, allowing users to find services (DJ, catering, rentals). Service providers can register their offers. Ongoing personal project using modern technologies.",
    tools: ["React.js", "Laravel", "Figma"],
    code: "",
    demo: "",
    image: "assets/image/travel.jpg",
    role: "Frontend Developer"
  },
  {
    id: 3,
    name: "Invoice & Stock Management App (Hackathon)",
    description: "Built in 48h during a Hackathon at KHADEL. A complete invoice and stock management system with product, category, and customer modules. Generated PDF invoices and collaborated via GitHub.",
    tools: ["React.js", "Laravel", "MySQL", "GitHub"],
    code: "",
    demo: "",
    image: "assets/image/real-estate.jpg",
    role: "Full Stack Developer"
  }
];