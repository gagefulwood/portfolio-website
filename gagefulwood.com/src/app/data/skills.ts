export type SkillGroup = {
  title: string;
  skills: string[];
  evidence: string;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Forms", "State management"],
    evidence:
      "Used in Social Journal to build typed app routes, protected screens, forms, dashboard views, API clients, hooks, and reusable UI patterns.",
  },
  {
    title: "Backend",
    skills: ["Python", "Django", "Django REST Framework", "REST APIs", "Validation", "Testing"],
    evidence:
      "Used across Social Journal and Homerun to model resources, expose API endpoints, enforce workflow rules, and verify behavior with Django tests.",
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "Relational modeling", "Django ORM", "Aggregations"],
    evidence:
      "Used for contact/event/journal relationships in Social Journal and server/device relationships in Homerun.",
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Docker Compose", "Gunicorn", "OpenAPI docs"],
    evidence:
      "Used to package local backend services, document API behavior, and keep projects runnable for review.",
  },
];
