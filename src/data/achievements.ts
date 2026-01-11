// Leadership and achievements data from Nikhila's resume

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  impact: string[];
  icon: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "placement-manager",
    title: "Placement Manager",
    organization: "SGSITS, Indore",
    description: "Led technical initiatives and mentored junior developers to improve their programming skills.",
    impact: [
      "Coordinated campus placement activities and recruiter interactions.",
      "Successfully brought 16+ companies to campus for recruitment",
      "Drove industry outreach and recruiter onboarding",
      "Strengthened student–recruiter engagement"
    ],
    icon: "👥"
  }
];

// Education data
export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  gpa?: string;
  logo?: string;
}

export const educationData: Education[] = [
  {
    id: "northeastern",
    institution: "Shri Govindram Seksaria Institute of Technology and Science",
    degree: "Bachelor's in Electrical Engineering",
    duration: "Sep 2023 - May 2027",
    location: "Indore, Madhya Pradesh, India",
    gpa: "7.01 / 10.00",
    logo: "/images/logos/northeastern.png"
  },
  {
    id: "srm",
    institution: "Army Public School",
    degree: "Senior Secondary School",
    duration: "May 2021 - May 2022",
    location: "Ayodhya, India",
    gpa: "9.30 / 10.00",
    logo: "/images/logos/srm.png"
  },
   {
    id: "srm",
    institution: "Army Public School",
    degree: "High School",
    duration: "May 2019 - May 2020",
    location: "Ayodhya, India",
    gpa: "9.80 / 10.00",
    logo: "/images/logos/srm.png"
  }
];