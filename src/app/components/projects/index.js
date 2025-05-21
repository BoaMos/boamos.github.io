import React, { useState } from "react";

const Projects = ({ isLightMode }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projects = [
    {
      title: "Cybersecurity Challenges and Simulations",
      program: "ICASA IGNITE Cybersecurity Program | 2024",
      achievements: [
        "Analyzed and managed SIEM logs, detecting and mitigating security threats through real-time monitoring.",
        "Conducted network forensics and performed vulnerability assessments using Metasploitable and Linux-based security tools.",
        "Solved Capture The Flag (CTF) challenges, enhancing penetration testing, incident response, and cybersecurity problem-solving skills.",
      ],
    },
    {
      title: "Health App for Cardiomegaly Detection",
      program: "UNESCO India Africa Hackathon | 2022",
      achievements: [
        "Developed the frontend of a React.js-based health application, enabling accurate detection of cardiomegaly from X-ray images.",
        "Designed and prototyped intuitive user interfaces in Figma, ensuring a seamless and user-friendly experience.",
        "Managed version control and streamlined collaboration using GitHub, improving development efficiency and workflow synchronization.",
        "Secured 2nd Runner-Up position among 50+ international teams, recognized for innovation and technical execution.",
      ],
    },
  ];

  const toggleAchievements = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      className={`py-6 px-8 shadow-md ${
        isLightMode ? "bg-white" : "bg-black"
      }`}
    >
      <div className="container mx-auto">
        <h2
          className={`text-2xl font-bold mb-4 ${
            isLightMode ? "text-black" : "text-green-400"
          }`}
        >
          Projects
        </h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`mb-6 p-4 rounded shadow-sm border ${
              isLightMode
                ? "bg-gray-100 border-gray-300 text-black  hover:bg-gray-200 hover:shadow-lg hover:bg-opacity-2xl"
                : "bg-black border-green-400 text-green-300 glow hover:bg-green-800 hover:shadow-2xl hover:bg-opacity-2xl"
            }`}
          >
            <h3
              className={`text-xl font-semibold ${
                isLightMode ? "text-black" : "text-green-400"
              }`}
            >
              {project.title}
            </h3>
            <p className={isLightMode ? "text-black" : "text-green-300"}>
              {project.program}
            </p>
            <button
              className={`mt-2 underline cursor-pointer ${
                isLightMode
                  ? "text-blue-500 hover:text-blue-600"
                  : "text-green-400 hover:text-green-500"
              }`}
              onClick={() => toggleAchievements(index)}
            >
              {expandedIndex === index
                ? "Hide Achievements"
                : "Show Achievements"}
            </button>
            {expandedIndex === index && (
              <ul
                className={`mt-2 list-disc list-inside ${
                  isLightMode ? "text-black" : "text-green-300"
                }`}
              >
                {project.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;