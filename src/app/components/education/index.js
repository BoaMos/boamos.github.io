import React from "react";

const Education = ({ isLightMode }) => {
  const education = [
    {
      degree: "BSc in Computing with Finance",
      institution: "University of Botswana",
      year: "2023",
    },
  ];

  const certifications = [
    { title: "ICASA IGNITE Cyber Security Course", provider: "Scratch and Script Limited", year: "2024" },
    { title: "Cisco Network Support and Security", provider: "Cisco", year: "2024" },
    { title: "Cybersecurity Fundamentals", provider: "IBM", year: "2024" },
    { title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals", provider: "Microsoft", year: "2023" },
    { title: "Microsoft Certified: Azure Fundamentals", provider: "Microsoft", year: "2023" },
  ];

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
          Education
        </h2>
        <div className="mb-6">
          <h3
            className={`text-lg font-semibold ${
              isLightMode ? "text-black" : "text-green-300"
            }`}
          >
            Academic Qualification
          </h3>
          <p className={isLightMode ? "text-black" : "text-green-200"}>
            {education[0].degree} | {education[0].institution} |{" "}
            {education[0].year}
          </p>
        </div>
        <div>
          <h3
            className={`text-lg font-semibold ${
              isLightMode ? "text-black" : "text-green-300"
            }`}
          >
            Certifications
          </h3>
          <ul
            className={`mt-2 list-disc list-inside ${
              isLightMode ? "text-black" : "text-green-200"
            }`}
          >
            {certifications.map((certification, index) => (
              <li key={index}>
                {certification.title} | {certification.provider} |{" "}
                {certification.year}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;