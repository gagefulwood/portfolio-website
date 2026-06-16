"use client";

import { useEffect } from "react";

const SCROLL_DURATION_MS = 760;
const NAV_SCROLL_DURATION_MS = 680;
const SETTLE_MS = 140;
const SECTION_GAP_PX = 24;
const WHEEL_THRESHOLD = 72;
const WHEEL_RESET_MS = 180;
const INTERACTIVE_SELECTOR =
  "input, textarea, select, button, a, [role='button'], [contenteditable='true'], [data-no-magnetic-scroll], [data-carousel]";

function isInteractiveTarget(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest(INTERACTIVE_SELECTOR));
}

function getNavHeight() {
  return document.querySelector(".site-nav")?.getBoundingClientRect().height ?? 0;
}

function getSectionTargetY(section: HTMLElement) {
  if (section.id === "hero") {
    return 0;
  }

  const heading = section.querySelector<HTMLElement>(".section-heading");
  const target = heading ?? section;
  const targetTop = target.getBoundingClientRect().top + window.scrollY;

  return Math.max(0, targetTop - getNavHeight() - SECTION_GAP_PX);
}

function getClosestSectionIndex(sections: HTMLElement[]) {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  if (window.scrollY >= maxScroll - 4) {
    return sections.length - 1;
  }

  const viewportReference = window.scrollY;
  let closestIndex = 0;
  let closestDistance = Infinity;

  sections.forEach((section, index) => {
    const distance = Math.abs(getSectionTargetY(section) - viewportReference);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}

function easeInOutCubic(progress: number) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function isNearSection(section: HTMLElement) {
  return Math.abs(window.scrollY - getSectionTargetY(section)) < 8;
}

export default function MagneticScrollController() {
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 900px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let sections: HTMLElement[] = [];
    let currentIndex = 0;
    let isAnimating = false;
    let accumulatedDelta = 0;
    let wheelResetTimer: number | undefined;
    let unlockTimer: number | undefined;
    let animationFrame: number | undefined;
    let cancelled = false;

    const shouldUseMagneticScroll = () =>
      desktopQuery.matches && !reducedMotionQuery.matches && sections.length > 1;

    const refreshSections = () => {
      sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-scroll-section]"),
      );
      currentIndex = sections.length > 0 ? getClosestSectionIndex(sections) : 0;
    };

    const clearAnimationFrame = () => {
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = undefined;
      }
    };

    const finishAnimation = () => {
      window.clearTimeout(unlockTimer);
      unlockTimer = window.setTimeout(() => {
        isAnimating = false;
        accumulatedDelta = 0;
        delete document.documentElement.dataset.magneticScrolling;
        currentIndex = sections.length > 0 ? getClosestSectionIndex(sections) : 0;
      }, SETTLE_MS);
    };

    const animateScrollTo = (targetY: number, duration = SCROLL_DURATION_MS) =>
      new Promise<void>((resolve) => {
        clearAnimationFrame();

        const startY = window.scrollY;
        const distance = targetY - startY;
        const startTime = performance.now();

        const step = (now: number) => {
          if (cancelled) {
            resolve();
            return;
          }

          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const nextY = startY + distance * easeInOutCubic(progress);

          window.scrollTo(0, nextY);

          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(step);
            return;
          }

          window.scrollTo(0, targetY);
          animationFrame = undefined;
          resolve();
        };

        animationFrame = window.requestAnimationFrame(step);
      });

    const scrollToSection = async (
      index: number,
      options: { anchor?: boolean; updateHash?: boolean } = {},
    ) => {
      if (!shouldUseMagneticScroll() && !options.anchor) return false;

      const nextIndex = Math.max(0, Math.min(index, sections.length - 1));
      const target = sections[nextIndex];

      if (
        !target ||
        (!options.anchor && nextIndex === currentIndex && isNearSection(target))
      ) {
        return false;
      }

      isAnimating = true;
      currentIndex = nextIndex;
      document.documentElement.dataset.magneticScrolling = "true";

      const targetY = getSectionTargetY(target);

      if (options.updateHash && target.id) {
        window.history.pushState(null, "", `#${target.id}`);
      }

      if (reducedMotionQuery.matches) {
        window.scrollTo(0, targetY);
      } else {
        await animateScrollTo(
          targetY,
          options.anchor ? NAV_SCROLL_DURATION_MS : SCROLL_DURATION_MS,
        );
      }

      if (cancelled) return false;

      window.scrollTo(0, targetY);
      currentIndex = getClosestSectionIndex(sections);
      finishAnimation();
      return true;
    };

    const resetAccumulatedWheel = () => {
      window.clearTimeout(wheelResetTimer);
      wheelResetTimer = window.setTimeout(() => {
        accumulatedDelta = 0;
      }, WHEEL_RESET_MS);
    };

    const onWheel = (event: WheelEvent) => {
      if (!shouldUseMagneticScroll() || isInteractiveTarget(event.target)) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      event.preventDefault();

      if (isAnimating) {
        return;
      }

      accumulatedDelta += event.deltaY;
      resetAccumulatedWheel();

      if (Math.abs(accumulatedDelta) < WHEEL_THRESHOLD) return;

      currentIndex = getClosestSectionIndex(sections);
      const direction = accumulatedDelta > 0 ? 1 : -1;
      const nextIndex = currentIndex + direction;
      accumulatedDelta = 0;

      if (nextIndex < 0 || nextIndex >= sections.length) return;
      void scrollToSection(nextIndex);
    };

    const navigateToSectionId = (sectionId: string, updateHash: boolean) => {
      if (sections.length === 0) {
        refreshSections();
      }

      const nextIndex = sections.findIndex((section) => section.id === sectionId);
      if (nextIndex === -1) return;

      void scrollToSection(nextIndex, { anchor: true, updateHash });
    };

    const onNavigateSection = (event: Event) => {
      const sectionId = (event as CustomEvent<{ sectionId?: string }>).detail
        ?.sectionId;
      if (!sectionId) return;

      navigateToSectionId(sectionId, true);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!shouldUseMagneticScroll() || isInteractiveTarget(event.target)) return;
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

      const nextKeys = new Set(["ArrowDown", "PageDown", " "]);
      const previousKeys = new Set(["ArrowUp", "PageUp"]);
      let nextIndex: number | null = null;

      currentIndex = getClosestSectionIndex(sections);

      if (nextKeys.has(event.key)) {
        nextIndex = currentIndex + 1;
      } else if (previousKeys.has(event.key)) {
        nextIndex = currentIndex - 1;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = sections.length - 1;
      }

      if (nextIndex === null || nextIndex < 0 || nextIndex >= sections.length) return;

      event.preventDefault();
      void scrollToSection(nextIndex);
    };

    const syncCurrentSection = () => {
      if (sections.length > 0 && !isAnimating) {
        currentIndex = getClosestSectionIndex(sections);
      }
    };

    const onHashChange = () => {
      const sectionId = window.location.hash.replace("#", "");

      if (sectionId) {
        navigateToSectionId(sectionId, false);
        return;
      }

      syncCurrentSection();
    };

    refreshSections();

    const initialHash = window.location.hash.replace("#", "");
    if (initialHash) {
      window.setTimeout(() => navigateToSectionId(initialHash, false), 80);
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("portfolio:navigate-section", onNavigateSection);
    window.addEventListener("resize", refreshSections);
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("scroll", syncCurrentSection, { passive: true });
    desktopQuery.addEventListener("change", refreshSections);
    reducedMotionQuery.addEventListener("change", refreshSections);

    return () => {
      cancelled = true;
      clearAnimationFrame();
      window.clearTimeout(wheelResetTimer);
      window.clearTimeout(unlockTimer);
      delete document.documentElement.dataset.magneticScrolling;
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("portfolio:navigate-section", onNavigateSection);
      window.removeEventListener("resize", refreshSections);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("scroll", syncCurrentSection);
      desktopQuery.removeEventListener("change", refreshSections);
      reducedMotionQuery.removeEventListener("change", refreshSections);
    };
  }, []);

  return null;
}
