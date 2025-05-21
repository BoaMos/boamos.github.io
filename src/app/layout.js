import "./globals.css";
export const metadata = {
  title: "Boago Mosidila - Cybersecurity & IT Professional",
  description:
    "Boago Mosidila is a passionate IT professional specializing in cybersecurity, cloud computing, and IT operations. Explore my portfolio to learn more about my expertise, projects, and certifications.",
  author: "Boago Mosidila",
  location: "Francistown, Botswana",
  contact: "+267 76476746 | bmosidila@gmail.com",
  linkedin: "https://www.linkedin.com/in/boagomosidila",
  keywords: [
    "Boago Mosidila",
    "Cybersecurity",
    "Cloud Computing",
    "IT Professional",
    "Network Security",
    "Microsoft Azure",
    "AWS",
    "Fortinet",
    "Cisco",
    "React.js Portfolio",
  ],
  openGraph: {
    title: "Boago Mosidila - Cybersecurity & IT Professional",
    description:
      "Explore Boago Mosidila's portfolio showcasing expertise in cybersecurity, cloud computing, and IT operations.",
    url: "https://boamos.github.io/",
    type: "website",
    image: "https://avatars.githubusercontent.com/u/61083317?v=4", 
  },
  twitter: {
    card: "summary_large_image",
    site: "@boago_mos",
    title: "Boago Mosidila - Cybersecurity & IT Professional",
    description:
      "Explore Boago Mosidila's portfolio showcasing expertise in cybersecurity, cloud computing, and IT operations.",
    image: "https://boagomosidila.com/twitter-image.jpg", 
  },
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
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="  antialiased font-mono">{children}</body>
    </html>
  );
}
