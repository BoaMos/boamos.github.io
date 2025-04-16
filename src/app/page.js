"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Introduction from "./components/introduction";
import CoreStrengths from "./components/coreskills";
import WorkExperience from "./components/work";
import Education from "./components/education";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="transition-all duration-300">


      {/* Main Content */}
      <Header />
      <main className="container mx-auto mt-8">
        <div className="text-center glow">
        <p className="mt-2 text-lg">
            <span className="cursor"></span>Technical Support Specialist | Cloud Security Engineer | System Administrator
          </p>
        </div>
        <Introduction />
        <CoreStrengths />
        <WorkExperience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}