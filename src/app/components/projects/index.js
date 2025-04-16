import React from "react";

const Projects = () => {
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

  return (
    <section className="bg-black py-6 px-8 shadow-md glow">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-green-400 mb-4 glow">Projects</h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className="mb-6 p-4 bg-black rounded shadow-sm border border-green-400 glow"
          >
            <h3 className="text-xl font-semibold text-green-300 glow">
              {project.title}
            </h3>
            <p className="text-green-200">{project.program}</p>
            <ul className="mt-2 list-disc list-inside text-green-200">
              {project.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;