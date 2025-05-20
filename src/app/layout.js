import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Boago Mosidila",
  description: "A $10,000 hacker-themed portfolio",
  author: "Boago Mosidila",
  location: "Francistown, Botswana",
  contact: "+267 76476746 | bmosidila@gmail.com",
  linkedin: "https://www.linkedin.com/in/boagomosidila",
  expertise: [
    "Network Security (Fortinet, Cisco, Wireshark)",
    "Cloud Platforms (Microsoft Azure, AWS)",
    "Firewall Management (FortiGate, Cisco ASA)",
    "System Administration (Windows Server, Active Directory)",
    "Cybersecurity & SIEM (IBM QRadar, Splunk)",
    "Programming & Tools (React.js, GitHub, Figma)",
    "Incident Management & ITSM (Ivanti Heat, ServiceNow, Jira)",
  ],
  experience: [
    {
      role: "Graduate Trainee Manager",
      company: "Choppies Distribution Center",
      year: "2024 - 2025",
    },
    {
      role: "Desktop Support Intern",
      company: "Botswana Power Corporation",
      year: "2023 - 2024",
    },
    {
      role: "Information Management Attaché",
      company: "Debswana Diamond Company",
      year: "2022",
    },
  ],
  projects: [
    {
      title: "Cybersecurity Challenges (ICASA IGNITE)",
      year: "2024",
      highlights: [
        "Analyzed SIEM logs to detect threats",
        "Conducted network forensics using Metasploitable",
        "Solved Capture The Flag (CTF) challenges",
      ],
    },
    {
      title: "Cardiomegaly Detection App (UNESCO Hackathon)",
      year: "2022",
      highlights: [
        "Developed frontend in React.js",
        "Designed UI in Figma for improved user experience",
        "Secured 2nd Runner-Up position among 50+ teams",
      ],
    },
  ],
  education: {
    degree: "BSc in Computing with Finance",
    institution: "University of Botswana",
    year: "2023",
  },
  certifications: [
    "Cisco Network Support & Security (2024)",
    "IBM Cybersecurity Fundamentals (2024)",
    "Microsoft Certified: Security, Compliance, and Identity Fundamentals (2023)",
    "Microsoft Certified: Azure Fundamentals (2023)",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-mono">{children}</body>
    </html>
  );
}
