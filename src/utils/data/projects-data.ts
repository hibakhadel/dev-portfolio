import crefin from '../../assets/images/crefin.png';
import travel from '../../assets/images/travel.png';
import realEstate from '../../assets/images/realEstate.png';
import ayla from '../../assets/images/ayla.png';

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
      name: "E-commerce Multi-Product Site (Done)",
      description: "Design and development of an online sales platform allowing users to purchase a variety of products. Managed user interface and database.",
      tools: ["HTML", "CSS", "JavaScript", "XAMPP", "MySQL"],
      code: "",
      demo: "",
      image: "assets/images/projects/ecommerce-site.png",
      role: "Web Developer"
    },
    {
      id: 2,
      name: "Event Planning Platform (In Progress)",
      description: "Creation of a website dedicated to event planning, allowing users to quickly find services (DJ, caterers, equipment rental, etc.). Set up a system allowing service providers to list their offers on the platform.",
      tools: ["React.js", "Laravel", "Figma (Design)"],
      code: "",
      demo: "",
      image: "assets/images/projects/event-planning.png",
      role: "Frontend Developer",
    }
  ];
  