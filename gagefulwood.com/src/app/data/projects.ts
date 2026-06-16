export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectEvidence = {
  label: string;
  value: string;
};

export type Project = {
  title: string;
  category: string;
  status: string;
  stack: string[];
  summary: string;
  proofPoints: string[];
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
      "Modeled contacts, facts, observations, events, journal entries, media, lookup data, and dashboard summaries as connected resources.",
      "Built typed frontend API clients, hooks, protected routes, forms, filters, cards, and dashboard views.",
      "Added backend test coverage across main resource domains, with 181 passing Django tests reported during audit.",
    ],
    evidence: [
      { label: "Frontend", value: "Next.js routes, forms, API clients" },
      { label: "Backend", value: "DRF resources and validation" },
      { label: "Data", value: "PostgreSQL relational models" },
      { label: "Testing", value: "181 Django tests" },
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
      "Implemented Device and Server models with a relationship between servers and assigned devices.",
      "Built DRF endpoints for registration, listing, retrieval, status updates, and validation-heavy workflows.",
      "Created tests covering endpoints, validation, transitions, subdomain behavior, and device assignment.",
    ],
    evidence: [
      { label: "API", value: "DRF model viewsets" },
      { label: "Data", value: "Device/server relations" },
      { label: "Infra", value: "Docker Compose + Gunicorn" },
      { label: "Tests", value: "23 backend tests" },
    ],
    note:
      "Not a production system. Public repository and sharing details should be confirmed before linking.",
    actionLabel: "Repository pending confirmation",
    takeaway:
      "Demonstrates ability to read a backend spec, model stateful API behavior, implement validation-heavy endpoints, containerize services, and cover business logic with tests.",
    links: [],
  },
];
