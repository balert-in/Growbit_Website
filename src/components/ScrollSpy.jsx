import { useLayoutEffect } from "react";

export const ScrollSpy = ({ handleScroll, containerSelector = ".overflow-y-auto" }) => {
  useLayoutEffect(() => {
    const scrollables = document.querySelectorAll("[data-scrollspy]");
    const scrollContainer = containerSelector
      ? document.querySelector(containerSelector)
      : null;
    if (scrollables.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntries = entries.filter(entry => entry.isIntersecting);

        if (intersectingEntries.length === 0) return;

        const topMostEntry = intersectingEntries.reduce((closest, entry) => {
          const entryTop = entry.boundingClientRect.top;
          const closestTop = closest.boundingClientRect.top;
          return Math.abs(entryTop) < Math.abs(closestTop) ? entry : closest;
        });

        if (topMostEntry && handleScroll) {
          handleScroll(topMostEntry);
        }
      },
      {
        root: scrollContainer,
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1.0]
      }
    );

    scrollables.forEach(scrollable => observer.observe(scrollable));

    return () => {
      observer.disconnect();
    };
  }, [handleScroll, containerSelector]);

  return null;
};