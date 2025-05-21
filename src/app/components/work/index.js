import React, { useState } from "react";

const WorkExperience = ({ isLightMode }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    {
      company: "Choppies Distribution Center",
      location: "Francistown",
      role: "Graduate Trainee Manager",
      duration: "April 2024 - March 2025",
      responsibilities: [
        "Ensure full compliance with company policies, operational procedures, and industry regulations, optimizing efficiency and minimizing risk.",
        "Oversee daily retail operations, streamlining workflows and enhancing customer service to improve overall store performance.",
        "Support the store manager in planning and executing high-impact promotional campaigns, increasing customer engagement and driving revenue growth.",
        "Analyze inventory trends and coordinate timely stock replenishment, reducing shortages and ensuring optimal product availability.",
      ],
    },
    {
      company: "Botswana Power Corporation",
      location: "Francistown",
      role: "Desktop Support Intern",
      duration: "December 2023 - April 2024",
      responsibilities: [
        "Diagnosed and resolved 95% of IT support tickets within SLA targets, ensuring seamless hardware, software, and network functionality.",
        "Configured and maintained VPNs and secure Wi-Fi networks, enhancing remote connectivity and data security for employees.",
        "Managed IT assets, ensuring accurate tracking, compliance with audit requirements, and efficient resource allocation.",
        "Strengthened network security by assisting with firewall management, monitoring traffic, and mitigating potential threats.",
        "Optimized incident management processes using Ivanti Heat, improving resolution accuracy and response times.",
      ],
    },
    {
      company: "Debswana Diamond Company",
      location: "Gaborone",
      role: "Information Management Attaché",
      duration: "June 2023 - August 2023",
      responsibilities: [
        "Provided first-line IT support and service desk management, reducing system downtime and enhancing user productivity.",
        "Monitored network performance using SolarWinds, identifying and resolving bottlenecks to optimize system efficiency.",
        "Configured subnetting and implemented network security protocols, enhancing data protection and minimizing vulnerabilities.",
        "Assisted with system upgrades and configurations, improving overall performance by 20% through optimized infrastructure.",
      ],
    },
  ];

  const toggleResponsibilities = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      className={`py-6 px-8 shadow-md ${
        isLightMode ? "bg-white " : "bg-black"
      }`}
    >
      <div className="container mx-auto">
        <h2
          className={`text-2xl font-bold mb-4 ${
            isLightMode ? "text-black " : "text-green-400"
          }`}
        >
          Work Experience
        </h2>
        {experiences.map((experience, index) => (
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
              {experience.role} | {experience.company}
            </h3>
            <p className={isLightMode ? "text-black" : "text-green-300"}>
              {experience.duration}
            </p>
            <p className={isLightMode ? "text-black" : "text-green-300"}>
              {experience.location}
            </p>
            <button
              className={`mt-2 underline cursor-pointer ${
                isLightMode
                  ? "text-blue-500 hover:text-blue-600"
                  : "text-green-400 hover:text-green-500"
              }`}
              onClick={() => toggleResponsibilities(index)}
            >
              {expandedIndex === index
                ? "Hide Responsibilities"
                : "Show Responsibilities"}
            </button>
            {expandedIndex === index && (
              <ul
                className={`mt-2 list-disc list-inside ${
                  isLightMode ? "text-black" : "text-green-300"
                }`}
              >
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;