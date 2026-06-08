export interface Skill {
  name: string;
  level: number; // 0-100 indicating proficiency
  certAligned?: string; // aligned certification name
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Experience {
  position: string;
  organization: string;
  location: string;
  duration: string;
  achievements: string[];
  technologies: string[];
  measurableOutcomes: string[];
}

export interface Project {
  id: string;
  title: string;
  category: "IT Audit Projects" | "Database Projects" | "Systems Administration Projects" | "Data Analytics Projects" | "Power BI Dashboards" | "Machine Learning Projects" | "Research Projects" | "Automation Projects";
  problem: string;
  solution: string;
  results: string;
  technologies: string[];
  githubLink?: string;
  liveDemoLink?: string;
}

export interface Certification {
  title: string;
  organization: string;
  date: string;
  verificationLink?: string;
  category: "GCP" | "Human Subjects Protection" | "Database" | "Cybersecurity" | "Cloud" | "Professional Development";
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  gpa?: string;
  coursework: string[];
  researchActivities?: string[];
  academicAchievements?: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  roleType: string; // "Supervisor" | "Colleague" | "Client" | "Academic"
  relationship: string;
  rating: number; // e.g. 5
}

export interface BlogPost {
  id: string;
  title: string;
  category: "Cybersecurity" | "IT Audit" | "Database Administration" | "Data Analytics" | "AI & Machine Learning" | "Career Development" | "Research & Technology";
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export interface Publication {
  title: string;
  venue: string;
  date: string;
  authors: string;
  abstract: string;
  doiLink?: string;
  tags: string[];
}

export interface Achievement {
  title: string;
  category: "Awards" | "Scholarships" | "Leadership" | "Volunteer" | "Community Impact" | "Professional Recognition";
  organization: string;
  year: string;
  description: string;
}
