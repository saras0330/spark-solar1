import { useEffect, useState } from "react";

const SECTION_IDS = [
  "home",
  "about",
  "services",
  "calculator",
  "projects",
  "faq",
  "contact",
] as const;

type SectionId = (typeof SECTION_IDS)[number];

export function useActiveSection() {
  const [activeId, setActiveId] = useState<SectionId>("home");

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) {
          const next = visible[0].target.id as SectionId;
          setActiveId(next);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return { activeId };
}

