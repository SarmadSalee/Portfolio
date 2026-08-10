export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  screenshots: string[];
  github: string;
  liveDemo: string;
  results: string[];
  category: string;
  logo?: string;
  image?: string;
}

export interface Skill {
  name: string;
  category: string;
  icon?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface Timeline {
  title: string;
  description: string;
  year: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
}
