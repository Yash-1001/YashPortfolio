// Experience data from Nikhila's resume

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  type?: "internship" | "part-time" | "full-time";
}

export const experienceData: Experience[] = [
  {
    id: "tech-mahindra",
    company: "Almanet Professional Services",
    role: "Software Development Intern",
    duration: "May 2025 - Jul 2025",
    location: "Remote",
    description: "Worked on client problem analysis and developed tailored web applications to address business requirements.",
    achievements: [
      "Built a PHP web app to convert 1,000+ JSON files to CSV/Excel, cutting manual work by 70%.",
      "Developed a secure Django application using Adobe PDF Services API to automate 500+ PDF-to-Excel conversions monthly.",
      "Deployed an internal web platform with authentication, ensuring restricted access for authorized employees only."
    ],
    technologies: ["PHP", "Python", "Web Development", "Deployment"],
    logo: "/images/logos/tech-mahindra.png",
    type: "internship"
  },
  {
    id: "srm-ml-intern",
    company: "Salesqueen Software Solutions",
    role: "Software Testing Intern",
    duration: "Feb 2025 - March 2025",
    location: "Remote",
    description: "Conducted manual testing across multiple projects, identifying defects and improving overall software quality.",
    achievements: [
      "Worked on quality assurance processes, executing 50+ manual test cases, leading to a 25% reduction in post-release defects.",
      "Assisted in debugging and reporting critical bugs, contributing to a 30% faster bug resolution rate."
    ],
    technologies: ["HTML", "CSS", "Tailwind", "Git", "JavaScript"],
    logo: "/images/logos/srm-university.png",
    type: "internship"
  }
 
];