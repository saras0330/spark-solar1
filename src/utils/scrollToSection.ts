export function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

