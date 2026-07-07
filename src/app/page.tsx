"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        
        {/* LEFT COLUMN - STICKY */}
        <aside className="lg:w-5/12 lg:sticky lg:top-0 lg:h-screen py-12 lg:py-24 flex flex-col justify-between">
          <div>
            <Hero />
            <Navbar />
          </div>
          
          <div className="flex items-center gap-6 mt-12 lg:mt-0 text-foreground/50">
            <a href="mailto:rifqi191104vian@gmail.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/favianrifqi" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Favianrifqi" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Github size={24} />
            </a>
          </div>
        </aside>

        {/* RIGHT COLUMN - SCROLLABLE */}
        <main className="lg:w-7/12 py-12 lg:py-24 space-y-32">
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        
      </div>
    </div>
  );
}