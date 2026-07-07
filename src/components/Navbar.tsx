"use client";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Projects", href: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace('#', ''));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, navLinks]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.href ? href.replace("#", "") : href;
    const elem = document.getElementById(targetId);
    if (elem) elem.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="flex-col gap-4 mt-16 hidden lg:flex">
      {navLinks.map((link) => {
        const isActive = activeSection === link.href.replace('#', '');
        return (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={(e) => handleScrollTo(e, link.href)}
            className={`text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-4 transition-all duration-300 w-max
              ${isActive ? "text-primary" : "text-foreground/50 hover:text-foreground"}`}
          >
            <span className={`h-px transition-all duration-300 bg-current ${isActive ? "w-12" : "w-6"}`}></span>
            {link.name}
          </a>
        );
      })}
    </nav>
  );
}