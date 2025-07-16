import { Experience } from "@/core/models/experience.interface";

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Responsive Web Certification",
    company: "FreeCodeCamp",
    duration: "July 2025 - Present"
  },
  {
    id: 2,
    title: "Hackathon – Invoice & Stock Management App",
    company: "Center Philips",
    duration: "48 hours - Team Project",
    description: `Built a complete system for managing invoices and stock in a competitive setting.\n    Technologies: React.js, Laravel, MySQL.\n    Modules: product, category, client, PDF invoice generation.\n    Collaboration via GitHub, presented final demo to a professional jury.`
  },
  {
    id: 3,
    title: "Internship – E-commerce Platform",
    company: "Linkana",
    duration: "July 2025 (1 month)",
    description: `Developed a multi-product e-commerce website during an internship.\n    Handled UI, database integration, and shopping functionality using HTML, CSS, JS, PHP & MySQL.`
  },
  {
    id: 4,
    title: "Personal Project – Event Planning Platform",
    company: "Personal",
    duration: "2025 - Present",
    description: `Designed and developed a platform for event planning. \n    Users can search for services (DJ, caterer, rentals), and providers can list offers.\n    Used React.js for frontend and Laravel for backend.`
  }
];
