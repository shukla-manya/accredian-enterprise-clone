export type NavItem = {
  id: string;
  label: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type CourseBucket = {
  title: string;
  subtitle: string;
  detail: string;
};

export type Persona = {
  title: string;
  description: string;
};

export type Step = {
  title: string;
  description: string;
};

export type FaqGroup = {
  category: string;
  questions: string[];
};

export type Testimonial = {
  company: string;
  quote: string;
};

export type EnterprisePageData = {
  navItems: NavItem[];
  stats: Stat[];
  clients: string[];
  domains: string[];
  courseBuckets: CourseBucket[];
  personas: Persona[];
  steps: Step[];
  faqs: FaqGroup[];
  testimonials: Testimonial[];
};
