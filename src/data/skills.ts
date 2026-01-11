// Skills data categorized from Nikhila's resume

export interface Skill {
  name: string;
  level: number; // 1-100
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "JavaScript", level: 70 },
      { name: "TypeScript", level: 40 },
      { name: "Python", level: 60 },
      
      { name: "C++", level: 80 },
     
      { name: "SQL", level: 85 }
    ]
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [      { name: "React.js", level: 75 },
      
      { name: "Tailwind CSS", level: 88 },
      { name: "Bootstrap", level: 75 },
      { name: "Figma", level: 75 }
    ]
  },
  {
    title: "Backend & Databases",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 85 },
      { name: "PHP", level: 45 },
      { name: "MongoDB", level: 85 },
      
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS", level: 50 },
     
      { name: "Docker", level: 82 },
      { name: "Kubernetes", level: 75 },
      { name: "Jenkins", level: 70 },
       { name: "Prometheus", level: 10 },
      { name: "Git", level: 80 },
      { name: "CI/CD", level: 80 },
    ]
  },  
  {
    title: "Core Subjects",
    icon: "📖",
    skills: [
      { name: "Computer Network", level: 90 },
     
      { name: "System Design", level: 45 },
      { name: "OOPs", level: 75 },
      { name: "DBMS", level: 70 },
    

    ]
  }
];