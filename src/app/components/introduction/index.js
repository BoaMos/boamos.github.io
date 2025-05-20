import React, { useState, useEffect } from "react";

const Introduction = () => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const fullText =
    "A highly analytical and results-driven IT professional with a BSc in Computing and Finance degree, specializing in network troubleshooting, system maintenance, and technical support. I possess extensive knowledge in cybersecurity, cloud security, and IT operations, with hands-on expertise in network administration, system security, in addition to ensuring optimal ICT infrastructure performance.Proficient in diagnosing complex technical issues and delivering effective solutions for both hardware and software environments, I am adept at ensuring minimal downtime, optimizing system performance, and enhancing user experience through proactive troubleshooting and precise issue resolution.";

  useEffect(() => {
    // Set the full text directly without typing effect
    setText(fullText);
    setText2(fullText); // If text2 is meant to be the same as text1
  }, []);

  return (
    <section className="bg-black py-6 px-8 shadow-md glow">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Introduction</h2>
        <p className="text-green-300">{text}</p>
        <p className="text-green-300">{text2}</p>
      </div>
    </section>
  );
};

export default Introduction;

