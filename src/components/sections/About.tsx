"use client";
import React from "react";
import portfolioData from "@/content/data.json";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="flex flex-col w-full scroll-mt-24">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col md:flex-row gap-8 items-stretch"
      >
        {/* POLAROID PHOTO PLACEHOLDER */}
        <motion.div 
          className="w-full md:w-1/3 shrink-0 cursor-pointer"
          whileHover={{ scale: 1.05, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="brutalist-card p-3 rotate-[-2deg] bg-white relative group h-full hover:rotate-0 transition-transform duration-300 hover:shadow-[8px_8px_0px_0px_#111111]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-yellow-200/50 rotate-[-5deg] border border-yellow-400/20 z-10" />
            <div className="w-full aspect-[3/4] bg-neutral-200 border-2 border-black overflow-hidden relative">
              {portfolioData.profileImage ? (
                <img 
                  src={portfolioData.profileImage} 
                  alt="Profile Photo" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-neutral-500 uppercase tracking-widest text-center px-4 group-hover:scale-110 transition-transform duration-500">
                  [ Place Photo Here ]
                </div>
              )}
            </div>
            <p className="font-mono text-[10px] uppercase font-bold text-center mt-3 tracking-widest group-hover:text-yellow-600 transition-colors">FILE: ID-001</p>
          </div>
        </motion.div>

        {/* OVERVIEW CONTENT */}
        <div className="w-full md:w-2/3 brutalist-card p-8 bg-[#FAFAFA] relative flex flex-col justify-center min-h-[400px]">
          <div className="absolute top-4 left-4 flex gap-2">
             <span className="w-3 h-3 rounded-full border-2 border-black bg-red-400" />
             <span className="w-3 h-3 rounded-full border-2 border-black bg-yellow-400" />
             <span className="w-3 h-3 rounded-full border-2 border-black bg-green-400" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight uppercase text-foreground mb-6 mt-4 font-serif border-b-2 border-black pb-4">
            Overview / About
          </h2>
          
          <div className="text-foreground/90 font-mono text-base md:text-lg leading-relaxed space-y-6">
            <p>
              Mahasiswa semester {portfolioData.semester} di {portfolioData.university}, dengan ketertarikan mendalam pada persimpangan <b>Web Development</b> dan <b className="bg-yellow-200 px-1">Cybersecurity</b>.
            </p>
            <p>
              Fokus utama pada <b>Penetration Testing</b> dan <b>Mitigasi Kerentanan</b>. Terbiasa mengaudit aplikasi web, mencari celah keamanan, dan menambalnya dengan arsitektur kode yang solid.
            </p>
            <p className="border-l-4 border-black pl-4 italic opacity-80">
              "Masalah adalah laboratorium yang sebenarnya."
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}