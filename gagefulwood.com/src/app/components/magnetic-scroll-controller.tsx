"use client";

import { useEffect } from "react";

const SCROLL_LOCK_MS = 850;
const WHEEL_THRESHOLD = 28;
const INTERACTIVE_SELECTOR =
  "input, textarea, select, button, a, [role='button'], [contenteditable='true'], [data-carousel]";

function isInteractiveTarget(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest(INTERACTIVE_SELECTOR));
}

function getNavHeight() {
  return document.querySelector(".site-nav")?.getBoundingClientRect().height ?? 0;
}

function getClosestSectionIndex(sections: HTMLElement[]) {
  const viewportTop = window.scrollY + getNavHeight();
  let closestIndex = 0;
  let closestDistance = Infinity;

  sections.forEach((section, index) => {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const distance = Math.abs(sectionTop - viewportTop);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}

function getSectionTop(section: HTMLElement) {
  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  return Math.max(0, sectionTop - getNavHeight());
}

export default function MagneticScrollController() {
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 900px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let sections: HTMLElement[] = [];
    let currentIndex = 0;
    let isAnimating = false;
    let lockTimer: number | undefined;

    const shouldUseMagneticScroll = () =>
      desktopQuery.matches && !reducedMotionQuery.matches && sections.length > 1;

    const refreshSections = () => {
      sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-scroll-section]"),
      );
      currentIndex = sections.length > 0 ? getClosestSectionIndex(sections) : 0;
    };

    const unlockAfterAnimation = () => {
      window.clearTimeout(lockTimer);
      lockTimer = window.setTimeout(() => {
        isAnimating = false;
        currentIndex = sections.length > 0 ? getClosestSectionIndex(sections) : 0;
      }, SCROLL_LOCK_MS);
    };

    const scrollToSection = (index: number) => {
      if (!shouldUseMagneticScroll()) return false;

      const nextIndex = Math.max(0, Math.min(index, sections.length - 1));

      if (nextIndex === currentIndex) {
        return false;
      }

      const target = sections[nextIndex];
      if (!target) return false;

      isAnimating = true;
      currentIndex = nextIndex;

      window.scrollTo({
        top: getSectionTop(target),
        behavior: "smooth",
      });

      unlockAfterAnimation();
      return true;
    };

    const onWheel = (event: WheelEvent) => {
      if (!shouldUseMagneticScroll() || isInteractiveTarget(event.target)) return;
      if (Math.abs(event.deltaY) < WHEEL_THRESHOLD) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      if (isAnimating) {
        event.preventDefault();
        return;
      }

      currentIndex = getClosestSectionIndex(sections);
      const nextIndex = event.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex < 0 || nextIndex >= sections.length) return;

      event.preventDefault();
      scrollToSection(nextIndex);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!shouldUseMagneticScroll() || isInteractiveTarget(event.target)) return;
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

      const nextKeys = new Set(["ArrowDown", "PageDown", " "]);
      const previousKeys = new Set(["ArrowUp", "PageUp"]);

      if (!nextKeys.has(event.key) && !previousKeys.has(event.key)) return;

      currentIndex = getClosestSectionIndex(sections);
      const nextIndex = nextKeys.has(event.key) ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex < 0 || nextIndex >= sections.length) return;

      event.preventDefault();
      scrollToSection(nextIndex);
    };

    const syncCurrentSection = () => {
      if (sections.length > 0 && !isAnimating) {
        currentIndex = getClosestSectionIndex(sections);
      }
    };

    refreshSections();

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", refreshSections);
    window.addEventListener("hashchange", syncCurrentSection);
    window.addEventListener("scroll", syncCurrentSection, { passive: true });
    desktopQuery.addEventListener("change", refreshSections);
    reducedMotionQuery.addEventListener("change", refreshSections);

    return () => {
      window.clearTimeout(lockTimer);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", refreshSections);
      window.removeEventListener("hashchange", syncCurrentSection);
      window.removeEventListener("scroll", syncCurrentSection);
      desktopQuery.removeEventListener("change", refreshSections);
      reducedMotionQuery.removeEventListener("change", refreshSections);
    };
  }, []);

  return null;
}
