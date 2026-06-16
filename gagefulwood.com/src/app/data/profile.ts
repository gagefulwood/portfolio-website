export const profile = {
  name: "Gage Fulwood",
  role: "Software Engineering Student / Full-Stack Developer",
  educationLine: "Software Engineering, Mississippi State University, 2026",
  summary:
    "I build full-stack web applications and backend APIs with React, Next.js, Django REST Framework, PostgreSQL, and TypeScript, with a focus on clear data models and practical product workflows.",
  availability:
    "Open to software engineering internship and entry-level opportunities.",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/gagefulwood",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  resumeNote:
    "Resume is being revised to better match current project work and employer expectations.",
};

export type TechnicalFocusItem = {
  number: string;
  title: string;
  description: string;
  showsUpIn: string[];
  accent: "teal" | "blue" | "purple" | "amber";
  icon: "product" | "database" | "interface" | "delivery";
};

export const technicalFocusItems: TechnicalFocusItem[] = [
  {
    number: "01",
    title: "Product Systems",
    description:
      "Building connected frontend and backend workflows rather than isolated UI demos.",
    showsUpIn: ["Social Journal"],
    accent: "teal",
    icon: "product",
  },
  {
    number: "02",
    title: "API + Data Modeling",
    description:
      "Designing REST APIs, relational models, validation rules, and test-backed business logic.",
    showsUpIn: ["Social Journal", "Mock Server Manager API"],
    accent: "blue",
    icon: "database",
  },
  {
    number: "03",
    title: "Interface Quality",
    description:
      "Creating typed React/Next.js screens, forms, API clients, hooks, and stateful user flows.",
    showsUpIn: ["Social Journal"],
    accent: "purple",
    icon: "interface",
  },
  {
    number: "04",
    title: "Delivery Discipline",
    description:
      "Documenting status honestly, separating finished work from rough edges, and prioritizing maintainable architecture.",
    showsUpIn: ["Mock Server Manager API", "Social Journal"],
    accent: "amber",
    icon: "delivery",
  },
];
