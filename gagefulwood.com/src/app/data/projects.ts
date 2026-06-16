export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  type: string;
  status: string;
  stack: string[];
  summary: string;
  whatIBuilt: string[];
  technicalNotes: string[];
  limitations: string[];
  takeaway: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Social Journal",
    type: "Personal product / full-stack web application",
    status:
      "In-progress web app with a tested backend and partially complete frontend. Planned for social-journal.com after web testing and deployment; iOS port planned later.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django REST Framework",
      "PostgreSQL",
      "Zustand",
      "React Hook Form",
      "Zod",
    ],
    summary:
      "Social Journal is a private-first relationship journaling app for tracking contacts, shared events, journal entries, and relationship activity signals in a structured workspace.",
    whatIBuilt: [
      "Modeled contacts, facts, observations, events, journal entries, media, lookup data, and dashboard summaries as connected resources.",
      "Built backend APIs for contacts, events, journals, media, dashboard data, and supporting lookup tables.",
      "Implemented account-aware application flows and user-scoped data access without exposing product security details publicly.",
      "Built typed frontend API clients, hooks, state stores, protected routes, forms, filters, cards, and dashboard views.",
      "Added backend test coverage across the main resource domains, with 181 passing Django tests reported from the project audit.",
    ],
    technicalNotes: [
      "Django REST Framework backend with PostgreSQL persistence and OpenAPI documentation support.",
      "Next.js frontend uses typed API clients and resource-specific hooks to mirror backend workflows.",
      "Dashboard APIs aggregate relationship activity data such as recent events, activity summaries, heatmap-style data, and follow-up signals.",
      "Media upload support exists, with local storage by default and private object storage planned/configurable.",
    ],
    limitations: [
      "Not deployed yet; the owned social-journal.com domain is currently a planned destination only.",
      "Frontend lint currently has known issues and some routes are still under construction.",
      "No public demo or screenshots are ready yet.",
      "Not intended to be open source, so public portfolio copy should use screenshots or a case study instead of exposing implementation-sensitive details.",
    ],
    takeaway:
      "Social Journal is the strongest evidence of my full-stack product engineering: API design, relational data modeling, typed frontend integration, dashboard aggregation, media handling, and test-backed backend development.",
    links: [],
  },
  {
    title: "Homerun Server Manager API",
    type: "Take-home interview backend project",
    status: "Completed local backend assignment; public repository and sharing details still need confirmation.",
    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "Gunicorn",
      "drf-spectacular",
    ],
    summary:
      "Homerun Server Manager is a Dockerized Django REST Framework API for managing devices, servers, generated subdomains, and server status transitions.",
    whatIBuilt: [
      "Implemented Device and Server models with a relationship between servers and assigned devices.",
      "Built DRF model viewsets for device registration/listing/status updates and server create/list/retrieve/status updates.",
      "Added unique subdomain generation from server names, including duplicate handling.",
      "Implemented server status transition rules and automatic device assignment when starting servers.",
      "Created Django/DRF tests covering endpoints, validation, transitions, subdomain behavior, and device assignment.",
    ],
    technicalNotes: [
      "Assignment scope was a constrained 3-4 hour backend API project with no authentication requirement.",
      "Docker Compose runs a Django/Gunicorn service with PostgreSQL and persistent database storage.",
      "Serializers centralize validation for name length, read-only system-managed fields, and allowed transitions.",
      "The local test file contains 23 Django/DRF tests for the core API behavior.",
    ],
    limitations: [
      "Not a production system or deployed product.",
      "Authentication was explicitly out of scope for the assignment.",
      "Docker health check coverage and public repository URL should be confirmed before linking.",
    ],
    takeaway:
      "This project demonstrates my ability to read a backend spec, model stateful API behavior, implement validation-heavy DRF endpoints, containerize services, and cover business logic with tests.",
    links: [],
  },
];
