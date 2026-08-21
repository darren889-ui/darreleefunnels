export interface BeforeAfterCase {
  id: string;
  client: string;
  niche: string;
  headline: string;
  metric: string;
  image?: string;
  images?: string[];
  beforeImg: string;
  afterImg: string;
  beforePain: string[];
  afterGain: string[];
  details: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'saas' | 'coaching' | 'health' | 'business' | 'finance' | 'course' | 'agency';
  categoryLabel: string;
  clientName?: string;
  designerTag: string;
  thumbnail: string;
  fullImage: string;
  images?: string[];
  conversionLift: string;
  platform: string;
  colorTheme: string;
  overview: string;
  keyFeatures: string[];
  results: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number;
    badge: string;
    description: string;
  }[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface AuditFormData {
  fullName: string;
  email: string;
  websiteUrl: string;
  funnelType: string;
  primaryChallenge: string;
  budgetRange: string;
  timeline: string;
  projectNotes: string;
}
