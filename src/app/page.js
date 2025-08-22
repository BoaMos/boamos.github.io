"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Introduction from "./components/introduction";
import CoreStrengths from "./components/coreskills";
import WorkExperience from "./components/work";
import Projects from "./components/projects";
import Education from "./components/education";
import Footer from "./components/footer";

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-300 ${
        isLightMode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      {/* Header */}
      <Header isLightMode={isLightMode} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="container mx-auto mt-8">
        <Introduction isLightMode={isLightMode} />
        <CoreStrengths isLightMode={isLightMode} />
        <WorkExperience isLightMode={isLightMode} />
        <Projects isLightMode={isLightMode} />
        <Education isLightMode={isLightMode} />
      </main>

      {/* Footer */}
      <Footer isLightMode={isLightMode} />

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-10 right-4 p-3 rounded-full shadow-lg ${
            isLightMode
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-green-500 text-white hover:bg-green-600"
          } transition-colors duration-300`}
          aria-label="Scroll to Top"
        >
          ↑
        </button>
      )}
    </div>
  );
}
