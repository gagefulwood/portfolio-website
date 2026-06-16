"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";
import type { Project } from "../data/projects";
import ProjectCard from "./project-card";

type FeaturedProjectsCarouselProps = {
  projects: Project[];
};

export default function FeaturedProjectsCarousel({
  projects,
}: FeaturedProjectsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleProjects = projects.length > 1;
  const activeProject = projects[activeIndex];

  const keepPagePosition = (scrollTop: number) => {
    window.requestAnimationFrame(() => {
      window.scrollTo(window.scrollX, scrollTop);
      window.setTimeout(() => window.scrollTo(window.scrollX, scrollTop), 0);
    });
  };

  const goToProject = (index: number) => {
    const scrollTop = window.scrollY;
    setActiveIndex(Math.max(0, Math.min(index, projects.length - 1)));
    keepPagePosition(scrollTop);
  };

  const goToPrevious = () => {
    goToProject(activeIndex - 1);
  };

  const goToNext = () => {
    goToProject(activeIndex + 1);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!hasMultipleProjects) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }
  };

  if (projects.length === 0 || !activeProject) {
    return null;
  }

  return (
    <div
      className="projects-carousel"
      data-carousel
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured engineering project case studies"
      onKeyDown={handleKeyDown}
    >
      <div className="projects-carousel__header">
        <div className="projects-carousel__meta" aria-live="polite">
          <span>
            {activeIndex + 1} / {projects.length}
          </span>
          <strong>{activeProject.title}</strong>
        </div>

        {hasMultipleProjects && (
          <div className="projects-carousel__controls" aria-label="Project carousel controls">
            <button
              type="button"
              onClick={goToPrevious}
              disabled={activeIndex === 0}
              aria-label="Previous project"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={goToNext}
              disabled={activeIndex === projects.length - 1}
              aria-label="Next project"
            >
              Next
            </button>
          </div>
        )}
      </div>

      <div className="projects-carousel__viewport">
        <div
          className="projects-carousel__track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div
              className="projects-carousel__slide"
              key={project.title}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
            >
              <ProjectCard project={project} featured={index === activeIndex} />
            </div>
          ))}
        </div>
      </div>

      {hasMultipleProjects && (
        <div className="projects-carousel__dots" aria-label="Select project">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => goToProject(index)}
              aria-label={`View ${project.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
            >
              <span>{project.title}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
