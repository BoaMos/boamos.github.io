import React, { useState } from "react";

const Introduction = ({ isLightMode }) => {
  const [showMore, setShowMore] = useState(false);

  const firstPart =
    "A highly analytical and results-driven IT professional with a BSc in Computing and Finance degree, specializing in network troubleshooting, system maintenance, and technical support. I possess extensive knowledge in cybersecurity, cloud security,and IT operations, with hands-on expertise in network administration, system security, in addition to ensuring optimal ICT infrastructure performance. Proficient in diagnosing complex technical issues and delivering effective solutions for both hardware and software environments, I am adept at ensuring minimal downtime, optimizing system performance, and enhancing user experience through proactive troubleshooting and precise issue resolution.";
  const secondPart =
    "My skill set includes utilizing IT service management (ITSM) tools such as Ivanti Heat, ServiceNow, and Jira to streamline support processes and ensure efficient incident resolution. With a certification in Network Support and Security and extensive experience using Fortinet technologies, Cisco networking tools, and Wireshark, I specialize in secure network management and network optimization, ensuring robust, high-performance systems through proactive monitoring, troubleshooting, and the implementation of best practices in network security. Furthermore, I am highly skilled in configuring VPNs, managing firewalls, and leveraging cloud platforms such as Microsoft Azure and AWS to enhance system security and optimize performance.";

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
          Introduction
        </h2>
        <p className={isLightMode ? "text-black" : "text-green-300"}>
          {firstPart}
        </p>
        {showMore && (
          <p
            className={`pt-4 shadow-2xs ${
              isLightMode ? "text-black" : "text-green-300"
            }`}
          >
            {secondPart}
          </p>
        )}
        <button
          className={`mt-4 underline cursor-pointer ${
            isLightMode ? "text-blue-500" : "text-green-400"
          }`}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
};

export default Introduction;

