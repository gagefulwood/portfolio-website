export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectEvidence = {
  label: string;
  value: string;
  accent: "teal" | "blue" | "purple" | "amber";
};

export type ProjectProofPoint = {
  lead: string;
  detail: string;
};

export type Project = {
  title: string;
  category: string;
  status: string;
  stack: string[];
  summary: string;
  proofPoints: ProjectProofPoint[];
  evidence: ProjectEvidence[];
  note: string;
  actionLabel: string;
  takeaway: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Social Journal",
    category: "Full-stack web application",
    status: "In progress · backend tested · frontend partially complete",
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
    note:
      "Private in-progress build. social-journal.com is owned and planned, but not live yet; public case study/screenshots should be added once safe to share.",
    actionLabel: "Case study planned",
    takeaway:
      "Strongest evidence of full-stack product engineering: API design, relational modeling, frontend integration, dashboard aggregation, media handling, and test-backed backend development.",
    links: [],
  },
  {
    title: "Homerun Server Manager API",
    category: "Take-home backend assignment",
    status: "Completed local backend assignment",
    stack: ["Python", "Django", "DRF", "PostgreSQL", "Docker", "Gunicorn"],
    summary:
      "A Dockerized Django REST Framework API for managing devices, servers, generated subdomains, and server status transitions.",
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
    note:
      "Not a production system. Public repository and sharing details should be confirmed before linking.",
    actionLabel: "Repository pending confirmation",
    takeaway:
      "Demonstrates ability to read a backend spec, model stateful API behavior, implement validation-heavy endpoints, containerize services, and cover business logic with tests.",
    links: [],
  },
];
