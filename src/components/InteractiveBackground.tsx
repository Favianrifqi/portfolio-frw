"use client";
import React from "react";

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-transparent">
      {/* 
        Heavy framer-motion blur animations were removed because they cause severe GPU lag on scroll.
        The background now relies on the clean CSS dot-grid from globals.css for optimal performance.
      */}
      <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vh] rounded-full bg-blue-400/5 blur-[120px] opacity-40" />
      <div className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vh] rounded-full bg-yellow-400/5 blur-[120px] opacity-40" />
    </div>
  );
}