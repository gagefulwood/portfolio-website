export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectEvidence = {
  label: string;
  value: string;
  accent: "teal" | "blue" | "purple" | "amber";
};

export type ProjectStatus = {
  label: string;
  value: string;
  detail: string;
  accent: "amber";
};

export type ProjectNextStep = {
  label: string;
  value: string;
  detail: string;
  accent: "teal";
};

export type ProjectProofPoint = {
  lead: string;
  detail: string;
};

export type Project = {
  title: string;
  category: string;
  status: ProjectStatus;
  stack: string[];
  summary: string;
  proofPoints: ProjectProofPoint[];
  evidence: ProjectEvidence[];
  nextStep: ProjectNextStep;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Social Journal",
    category: "Full-stack web application",
    status: {
      label: "Status",
      value: "In progress",
      detail: "Backend tested · frontend partially complete",
      accent: "amber",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Django REST Framework",
      "PostgreSQL",
    ],
    summary:
      "A private-first relationship journaling app for contacts, events, journal entries, media, and relationship activity signals.",
    proofPoints: [
      {
        lead: "Modeled connected data",
        detail:
          "contacts, facts, observations, events, journal entries, media, lookup data, and dashboard summaries as connected resources.",
      },
      {
        lead: "Built full-stack product workflows",
        detail:
          "typed frontend API clients, hooks, protected routes, forms, filters, cards, and dashboard views.",
      },
      {
        lead: "Test-backed backend foundations",
        detail:
          "added backend test coverage across main resource domains, with 181 passing Django tests reported during audit.",
      },
    ],
    evidence: [
      {
        label: "Frontend",
        value: "Next.js routes, forms, API clients",
        accent: "teal",
      },
      {
        label: "Backend",
        value: "DRF resources and validation",
        accent: "blue",
      },
      {
        label: "Data",
        value: "PostgreSQL relational models",
        accent: "purple",
      },
      {
        label: "Testing",
        value: "181 Django tests",
        accent: "amber",
      },
    ],
    nextStep: {
      label: "Next step",
      value: "Deployment planned",
      detail: "Private build · public deployment planned",
      accent: "teal",
    },
    links: [],
  },
  {
    title: "Mock Server Manager API",
    category: "Take-home backend assignment",
    status: {
      label: "Status",
      value: "Completed locally",
      detail: "Interview assignment · not production deployed",
      accent: "amber",
    },
    stack: ["Python", "Django", "DRF", "PostgreSQL", "Docker", "Gunicorn"],
    summary:
      "A Dockerized Django REST Framework mock server manager API built for the Homerun desktop interview process, covering devices, servers, generated subdomains, and server status transitions.",
    proofPoints: [
      {
        lead: "Modeled server/device behavior",
        detail:
          "implemented Device and Server models with a relationship between servers and assigned devices.",
      },
      {
        lead: "Built validation-heavy API workflows",
        detail:
          "created DRF endpoints for registration, listing, retrieval, status updates, and transition rules.",
      },
      {
        lead: "Covered assignment logic with tests",
        detail:
          "created tests covering endpoints, validation, transitions, subdomain behavior, and device assignment.",
      },
    ],
    evidence: [
      { label: "API", value: "DRF model viewsets", accent: "teal" },
      { label: "Data", value: "Device/server relations", accent: "purple" },
      { label: "Infra", value: "Docker Compose + Gunicorn", accent: "blue" },
      { label: "Tests", value: "23 backend tests", accent: "amber" },
    ],
    nextStep: {
      label: "Next step",
      value: "Repo confirmation pending",
      detail: "Local build · public sharing pending confirmation",
      accent: "teal",
    },
    links: [],
  },
];
