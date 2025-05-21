import React, { useState } from "react";

const CoreStrengths = ({ isLightMode }) => {
  const strengths = [
    "Network Security (Fortinet, Cisco, Wireshark)",
    "VPN Configuration (OpenVPN, Cisco AnyConnect)",
    "Firewall Management (FortiGate, Cisco ASA)",
    "Cloud Platforms (Microsoft Azure, AWS)",
    "SIEM Systems (IBM QRadar, Splunk)",
    "Incident Management",
    "Remote Desktop Support and Management",
    "Backup and Recovery",
    "Customer Service Excellence",
    "IT Support Ticket Resolution",
    "SLA Management",
    "Technical Documentation and Reporting",
    "Stress Management and Resilience",
    "Cisco Network Support",
    "Networking Protocols (TCP/IP, DNS, DHCP, Routing, Subnetting)",
    "System Administration (Windows Server, Active Directory)",
    "Help Desk and ITSM Platforms",
    "Collaboration Tools",
    "Operational Efficiency and Process Optimization",
    "Team Leadership and Cross-functional Collaboration",
    "Network Performance Monitoring (SolarWinds, Spiceworks)",
    "Promotional and Sales Support",
    "Analytical Thinking and Problem-Solving",
    "Effective Communication",
    "Customer Service Orientation",
    "Incident Management and Troubleshooting",
    "Compliance and IT Audits",
  ];

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedStrengths = showAll ? strengths : strengths.slice(0, 6); // Show only the first 6 initially

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
          Core Strengths
        </h2>
        <ul
          className={`grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-3 gap-4 ${
            isLightMode ? "text-black" : "text-green-300"
          }`}
        >
          {displayedStrengths.map((strength, index) => (
            <li
              key={index}
              className={`p-2  rounded shadow-sm border ${
                isLightMode
                  ? "bg-gray-100 border-gray-300 text-black hover:bg-gray-200 hover:shadow-lg hover:bg-opacity-2xl"  
                  : "bg-black border-green-400 text-green-300 glow hover:bg-green-800 hover:shadow-2xl hover:bg-opacity-2xl"
              }`}
            >
              {strength}
            </li>
          ))}
        </ul>
        <div className="text-center mt-4">
          <button
            onClick={toggleShowAll}
            className={`underline transition-colors duration-300 ${
              isLightMode
                ? "text-blue-500 hover:text-blue-600"
                : "text-green-400 hover:text-green-500"
            }`}
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoreStrengths;