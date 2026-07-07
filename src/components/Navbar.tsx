"use client";
import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
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
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) elem.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b-2 border-black px-6 py-4 flex items-center justify-between">
      <div className="font-mono font-bold text-sm tracking-widest uppercase">
        Favian_Rifqi
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace('#', '');
          return (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300
                ${isActive ? "text-black border-b-2 border-black" : "text-black/50 hover:text-black"}`}
            >
              {link.name}
            </a>
          );
        })}
      </div>

      <div className="flex items-center gap-4 text-black">
        <a href="mailto:rifqi191104vian@gmail.com" target="_blank" rel="noreferrer" className="hover:text-yellow-500 transition-colors">
          <Mail size={18} />
        </a>
        <a href="https://linkedin.com/in/favianrifqi" target="_blank" rel="noreferrer" className="hover:text-yellow-500 transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="https://github.com/Favianrifqi" target="_blank" rel="noreferrer" className="hover:text-yellow-500 transition-colors">
          <Github size={18} />
        </a>
      </div>
    </nav>
  );
}