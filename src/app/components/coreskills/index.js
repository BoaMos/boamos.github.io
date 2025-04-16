import React, { useState } from "react";

const CoreStrengths = () => {
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
    <section className="bg-black py-6 px-8 shadow-md glow">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Core Strengths</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedStrengths.map((strength, index) => (
            <li
              key={index}
              className="text-green-300 bg-black p-2 rounded shadow-sm border border-green-400 glow"
            >
              {strength}
            </li>
          ))}
        </ul>
        <div className="text-center mt-4">
          <button
            onClick={toggleShowAll}
            className="text-green-400 hover:text-green-500 transition-colors duration-300 underline"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoreStrengths;