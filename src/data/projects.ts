// Projects data from Nikhila's portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category:  "web" | "devops" ;
}

export const projects: Project[] = [
   {
    id: "portfolio",
    title: "Portfolio | Personal Description",
    description: "A personal portfolio website to showcase projects, skills, and experience.",
    longDescription: "This portfolio highlights my work, projects, and achievements in a visually appealing and structured way. It serves as a professional platform to present my skills and connect with potential employers, collaborators, and recruiters.",
    technologies: ["Docker","K8s" , "React.js", "Node.js", "Vite", "JavaScript", "Tailwind CSS",],
    features: [
      "Clean and modern UI design",
      "Built and deployed following DevOps principles",
      "Showcases projects, achievements, and skills",
      "Responsive, fast, and user-friendly",
      
      
    ],
    image: "/images/projects/portfolio/portfolio.png",
    githubUrl: "https://github.com/Yash-1001/GenPix-AI",
    demoUrl: "https://genpix-ai-frontend.onrender.com/",
    category: "devops"
  },
  {
    id: "imagegenerator",
    title: "GenPix | AI Image Generator",
    description: "GenPix AI is a creative web app that generates unique, AI-powered images instantly from simple text descriptions.",
    longDescription: "Bring your ideas to life with GenPix AI, a web app that converts text descriptions into vivid, high-quality images. Perfect for creators, designers, and storytellers, it makes image generation effortless and instant.",
    technologies: [ "React.js", "Node.js", " Mongo DB", "Express.js",  "JavaScript", "RESTful APIs", "Payment Gateway"],
    features: [      "Text-to-image generation in seconds",
      "High-quality, customizable AI outputs",
      "Secure login & signup system",
      "Subscription plans for premium access",
      "User-friendly and responsive interface",
      "Ideal for artists, designers, and content creators"
    ],
    image: "/images/projects/imagegenerator/imagegenerator.png",
    githubUrl: "https://github.com/Yash-1001/GenPix-AI",
    demoUrl: "https://genpix-ai-frontend.onrender.com/",
    category: "web"
  },
  {
    id: "ytspeed",
    title: "Speed Controller | Browser Extension for YouTube",
    description: "A simple Chrome extension to control YouTube playback speed with a hotkey and quick dropdown.",
    longDescription: "Pressing Alt + S on any YouTube video reveals an elegant speed-selection dropdown that instantly applies your chosen playback rate and persists it across navigation. Built using JavaScript, Tailwind CSS, LocalStorage, and MutationObserver, this extension offers both style and functionality with zero hassle.",
    technologies: ["MutationObserver", "JavaScript", "Tailwind CSS", "LocalStorage"],
    features: [
      "Hotkey (Alt+S) to open speed controls",
      "Instant playback speed adjustment",
      "Auto-save speed with LocalStorage",
      "Works seamlessly across YouTube pages",
      "Dropdown auto-closes after selection",
    ],
    image: "/images/projects/ytspeed/ytspeed.jpg",    
    githubUrl: "https://github.com/Yash-1001/YouTube-Speed-Controller-Chrome-Extension",
    category: "web"
  },
 {
    id: "chatapp",
    title: "Chat Application | Basic web app using websockets",
    description: "A real-time chat app built with PHP, WebSockets, and MySQL for fast multi-user messaging.",
    longDescription: "This real-time chat app, built with PHP and WebSockets, delivers fast and responsive messaging across multiple users, backed by MySQL for data storage. Designed with Bootstrap-responsive UI.",
    technologies: ["PHP", "PostgreSql", "Tailwind CSS", "Websockets", "Javascript"],
    features: [
      "Real-time messaging",
      "Multi-user support",
      "Responsive UI",
      "User authentication",
      "Chat history storage",
    ],
    image: "/images/projects/chatapp/chatapp.png",    
    githubUrl: "https://github.com/Yash-1001/chat_application",
    category: "web"
  },
];