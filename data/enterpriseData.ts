import type { EnterprisePageData } from "@/types/enterprise";

export const enterpriseData: EnterprisePageData = {
  navItems: [
    { id: "home", label: "Home" },
    { id: "stats", label: "Stats" },
    { id: "clients", label: "Clients" },
    { id: "edge", label: "Accredian Edge" },
    { id: "cat", label: "CAT" },
    { id: "how-it-works", label: "How It Works" },
    { id: "faqs", label: "FAQs" },
    { id: "testimonials", label: "Testimonials" }
  ],
  stats: [
    { value: "10K+", label: "Professionals trained for exceptional career success" },
    { value: "200+", label: "Sessions delivered with unmatched learning excellence" },
    { value: "5K+", label: "Active learners engaged in dynamic courses" }
  ],
  clients: ["client", "client", "client", "client", "client", "client"],
  domains: [
    "Product & Innovation Hub",
    "Gen-AI Mastery",
    "Leadership Elevation",
    "Tech & Data Insights",
    "Operations Excellence",
    "Digital Enterprise",
    "Fintech Innovation Lab"
  ],
  courseBuckets: [
    {
      title: "Program Specific",
      subtitle: "Program Specific",
      detail: "Certificate, Executive, Post Graduate Certificate"
    },
    {
      title: "Industry Specific",
      subtitle: "Industry Specific",
      detail: "IT, Healthcare, Retail, Finance, Education, Manufacturing"
    },
    {
      title: "Topic Specific",
      subtitle: "Topic Specific",
      detail: "Machine Learning, Design, Analytics, Cybersecurity, Cloud"
    },
    {
      title: "Level Specific",
      subtitle: "Level Specific",
      detail: "Senior Leadership, Mid-Career Professionals, Freshers"
    }
  ],
  personas: [
    {
      title: "Tech Professionals",
      description: "Enhance expertise, embrace tech, drive innovation."
    },
    {
      title: "Non-Tech Professionals",
      description: "Adapt digitally, collaborate in tech environments."
    },
    {
      title: "Emerging Professionals",
      description: "Develop powerful skills for rapid career growth."
    },
    {
      title: "Senior Professionals",
      description: "Strengthen leadership, enhance strategic decisions."
    }
  ],
  steps: [
    {
      title: "Skill Gap Analysis",
      description: "Assess team skill gaps and developmental needs."
    },
    {
      title: "Customized Training Plan",
      description: "Create a tailored roadmap addressing organizational goals."
    },
    {
      title: "Flexible Program Delivery",
      description: "Deliver adaptable programs aligned with industry and organizational needs."
    }
  ],
  faqs: [
    {
      category: "About the Course",
      questions: []
    },
    {
      category: "About Delivery",
      questions: []
    },
    {
      category: "Miscellaneous",
      questions: []
    }
  ],
  testimonials: [
    {
      company: "ADP",
      quote:
        '"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."'
    },
    {
      company: "Bayer",
      quote:
        "\"Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.\""
    },
    {
      company: "Reliance",
      quote:
        "\"Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.\""
    }
  ]
};
