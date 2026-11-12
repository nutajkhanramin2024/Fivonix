export interface Product {
  id: string;
  name: string;
  manufacturer: string;
  category: 'solar' | 'laboratory' | 'nuclear' | 'medical' | 'nanotechnology';
  categoryLabel: string;
  shortDesc: string;
  overview: string;
  keyFeatures: string[];
  specifications: { [key: string]: string };
  applications: string[];
  image: string;
  datasheetUrl?: string;
}

export interface Manufacturer {
  id: string;
  name: string;
  category: string;
  logo: string;
  overview: string;
  productCategories: string[];
  applications: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  industry: string;
  location: string;
  description: string;
  equipment: string[];
  image: string;
  scope: string;
  status: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string[];
}

export interface Solution {
  id: string;
  title: string;
  tagline: string;
  description: string;
  services: string[];
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  startingPrice: string;
  deliveryTime: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'enterprise' | 'branding';
  client: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  year: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
}
