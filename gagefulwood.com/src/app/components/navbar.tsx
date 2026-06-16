"use client";

import Link from "next/link";
import { MouseEvent } from "react";
import { usePathname } from "next/navigation";

const sectionLinks = [
  { href: "/#focus", id: "focus", label: "Focus" },
  { href: "/#projects", id: "projects", label: "Projects" },
  { href: "/#skills", id: "skills", label: "Skills" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const handleSectionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    if (pathname !== "/") return;

    const target = document.getElementById(sectionId);
    if (!target) return;

    event.preventDefault();
    window.dispatchEvent(
      new CustomEvent("portfolio:navigate-section", {
        detail: { sectionId },
      }),
    );
  };

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <Link className="nav-brand" href="/">
          Gage Fulwood
        </Link>
        <div className="nav-links">
          {sectionLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={(event) => handleSectionClick(event, link.id)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
