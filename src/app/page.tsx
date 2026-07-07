"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import InteractiveBackground from "@/components/InteractiveBackground";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-yellow-300">
      <LoadingScreen />

      <InteractiveBackground />
      <Navbar />

      <main className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-24 relative z-10 flex flex-col gap-40">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>

    </div>
  );
}