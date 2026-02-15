"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) elem.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-fit">
      <nav className="flex items-center gap-6 px-6 py-3 rounded-full 
        /* LIGHT MODE: Putih transparan & teks gelap */
        bg-white/70 text-zinc-900 border-black/5 
        /* DARK MODE: Gelap transparan & teks putih */
        dark:bg-zinc-900/40 dark:text-white dark:border-white/10 
        backdrop-blur-2xl shadow-lg transition-all duration-300 border">
        
        {/* LOGO */}
        <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="font-bold text-lg tracking-tighter mr-2">
          FRW.
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* TOGGLE THEME & MOBILE ICON */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button className="md:hidden opacity-70" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-black/5 dark:border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-lg font-medium">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}