import React from "react";

const Education = () => {
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
    <section className="bg-black py-6 px-8 shadow-md glow">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-green-400 mb-4 glow">Education</h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-green-300 glow">Academic Qualification</h3>
          <p className="text-green-200">
            {education[0].degree} | {education[0].institution} | {education[0].year}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-green-300 glow">Certifications</h3>
          <ul className="mt-2 list-disc list-inside text-green-200">
            {certifications.map((certification, index) => (
              <li key={index}>
                {certification.title} | {certification.provider} | {certification.year}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;