import { 
  Experience, 
  Project, 
  Certification, 
  Education, 
  Testimonial, 
  BlogPost, 
  Publication, 
  Achievement,
  SkillCategory
} from "./types";

export const BIO = {
  fullName: "Alex Chen",
  title: "IT Auditor & Systems/Database Administrator",
  tagline: "Bridging the gap between software systems and corporate risk governance.",
  headline: "Transforming Data, Systems, and Security into Business Value",
  subheading: "Computer Science Professional specializing in IT Audit, Database Administration, Systems Administration, Data Analytics, and Digital Transformation.",
  aboutText: "As a dual Computer Science and Cybersecurity practitioner, I align technical infrastructures with rigorous operational compliance frameworks. My experience spans full-scope IT general controls (ITGC) auditing, relational database tuning, enterprise Linux/Windows automation, and research into privacy-preserving AI models. I help organizations mitigate critical security gaps, secure transactions, and translate deep data architectures into actionable compliance and executive intelligence.",
  mission: "To fortify corporate technology stacks from the bedrock hardware layers to cloud-hosted databases, guaranteeing that complex information assets remain highly available, resilient to breaches, and completely aligned with regulatory standards.",
  values: [
    { title: "Technical Precision", desc: "Approaching operational configuration, auditing checklists, and database architectures with mathematical certainty." },
    { title: "Risk Mitigation First", desc: "Understanding that every unoptimized database port or automated patch cycle is a key vector in the company's risk profile." },
    { title: "Empirical Excellence", desc: "Transforming vague operational telemetry into hardened, validated audit reports and interactive command pipelines." }
  ],
  stats: [
    { value: "24+", label: "ITGC Audits Completed" },
    { value: "99.99%", label: "SysOps Server Uptime" },
    { value: "45%", label: "DB Latency Reduction" },
    { value: "12+", label: "Professional Certs" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "IT Audit & Cybersecurity",
    skills: [
      { name: "IT General Controls (ITGC)", level: 95, certAligned: "CISA Prep / Academic Path" },
      { name: "SOX 404 & COBIT Framework", level: 90, certAligned: "Governance & Risk Audit" },
      { name: "Vulnerability Auditing & Penetration Tests", level: 85, certAligned: "Cyber Practitioner" },
      { name: "Application Controls & Change Mgmt", level: 95, certAligned: "Audit Methodology" }
    ]
  },
  {
    name: "Database & Cloud Administration",
    skills: [
      { name: "Database Administration (SQL / Postgres / SQL Server)", level: 95, certAligned: "Database Certified Professional" },
      { name: "Database Schema Optimization", level: 92, certAligned: "Advanced ETL Certification" },
      { name: "AWS Cloud Architecture & Security", level: 88, certAligned: "AWS Certified Practitioner" },
      { name: "Backup, Replication & Threat Recovery", level: 90, certAligned: "Disaster Recovery Certificate" }
    ]
  },
  {
    name: "Systems & Network Administration",
    skills: [
      { name: "Linux System Administration (RHEL/Ubuntu)", level: 95, certAligned: "CompTIA Linux+" },
      { name: "Windows Server & Active Directory", level: 90, certAligned: "Microsoft Server Certified" },
      { name: "Automation (Bash, PowerShell, Python)", level: 92, certAligned: "Scripting Certification" },
      { name: "Enterprise Networking (VPC, DNS, Subnets)", level: 85, certAligned: "CCNA Alignment" }
    ]
  },
  {
    name: "Data Analytics & Research",
    skills: [
      { name: "Power BI & Business Intelligence Dashboards", level: 95, certAligned: "Power Platform Certificate" },
      { name: "Python (Pandas, NumPy, Scikit-Learn)", level: 90, certAligned: "Advanced Python Cert" },
      { name: "Machine Learning (Supervised/Unsupervised)", level: 85, certAligned: "ML Engineering" },
      { name: "Academic Research & GCP Auditing", level: 98, certAligned: "Good Clinical Practice Certified" }
    ]
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    position: "Senior Systems Engineer & IT Audit Analyst",
    organization: "Apex Enterprise Solutions",
    location: "Chicago, IL",
    duration: "2024 - Present",
    achievements: [
      "Led comprehensive IT Audits (ITGCs) for 15+ concurrent corporate clients, diagnosing multi-vector security loopholes and compliance vulnerabilities.",
      "Redesigned the disaster recovery failover and SQL database replication models, ensuring near-instant failover.",
      "Automated infrastructure patch scheduling across 12 enterprise servers using integrated Python and Bash environments."
    ],
    technologies: ["SQL Server", "Linux Administration", "PowerShell", "COBIT 5", "Vulnerability Scanning", "AWS Security"],
    measurableOutcomes: [
      "Reduced regulatory non-compliance findings by 40% during annual external SOX evaluations.",
      "Improved enterprise system high-availability score to 99.993% average uptime.",
      "Reduced server maintenance downtime by 70% using fully tested automation playbooks."
    ]
  },
  {
    position: "Database Administrator & Data Analyst",
    organization: "Innova Tech Laboratories",
    location: "Minneapolis, MN",
    duration: "2022 - 2024",
    achievements: [
      "Designed and deployed enterprise-wide interactive BI dashboards to display system telemetry, database status, and operational risk metrics in real-time.",
      "Analyzed structural queries and executed precise indexing updates on deep relational datasets.",
      "Supervised continuous audit trail data pipelines, guaranteeing absolute tamper-resistance for operational records in accordance with GDPR guidelines."
    ],
    technologies: ["PostgreSQL", "Power BI", "Python (Pandas)", "Docker", "Git", "Advanced PL/SQL"],
    measurableOutcomes: [
      "Reduced SQL transaction latency by 45%, eliminating daily peak load bottlenecks.",
      "Empowered executive management to identify and adjust 15 critical resource inefficiencies using custom dashboards.",
      "Ensured zero data-loss incidents over a 24-month high-throughput transactional period."
    ]
  },
  {
    position: "Associate Academic Researcher & Systems Administrator",
    organization: "University Science Data Center",
    location: "Ames, IA",
    duration: "2020 - 2022",
    achievements: [
      "Provisioned, configured, and hardened sandboxed virtualization node clusters used for intensive clinical and computational machine learning experiments.",
      "Enforced rigorous clinical trial auditing policies conforming meticulously with Good Clinical Practice (GCP) and HIPAA standards.",
      "Co-authored technical blueprints and data-collection guidelines for distributed cybersecurity threat testing."
    ],
    technologies: ["Ubuntu Server", "Python (ML)", "Good Clinical Practice (GCP)", "Active Directory", "Nginx", "KVM Virtualization"],
    measurableOutcomes: [
      "Hardened 8 core research nodes to achieve a 100% compliance audit score from local institutional review boards.",
      "Successfully processed and cataloged 5TB of sensitive experimental research data with zero safety breaches.",
      "Facilitated 14 publications by keeping compute platform performance optimized and stable."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Enterprise ITGC Compliance & Incident Audit Engine",
    category: "IT Audit Projects",
    problem: "Corporate compliance checklists were tracked manually in static spreadsheets, leading to outdated vulnerability logging, missing security evidence, and laggy SOX response times.",
    solution: "Created an automated continuous-compliance dashboard mapping operational server logins, firewall configurations, and database backlogs directly against COBIT-5 control targets.",
    results: "Enabled real-time security postures monitoring, shrinking external auditor site visits from 12 business days down to 2 fully collaborative hours.",
    technologies: ["React", "Express backend", "SQL Database Auditing", "COBIT-5", "Docker"],
    githubLink: "https://github.com/alexchen-dev/compliance-audit-engine",
    liveDemoLink: "#demo"
  },
  {
    id: "proj-2",
    title: "High-Availability Relational Database Sharding & Sync Platform",
    category: "Database Projects",
    problem: "Peak transaction traffic was overwhelming a centralized system database, creating severe queue blocking and posing a single-point-of-failure risk.",
    solution: "Architected a synchronized cluster of database nodes with robust primary-replica synchronization, custom automated read/write partitioning, and integrated disaster recovery routines.",
    results: "Database latency decreased by 45% under max write loads, with failover triggering in under 1.5 seconds during simulated server drop tests.",
    technologies: ["PostgreSQL", "Replication Engine", "PowerShell Automation", "Disaster Recovery", "SQL Tuning"],
    githubLink: "https://github.com/alexchen-dev/ha-database-sync",
    liveDemoLink: "#demo"
  },
  {
    id: "proj-3",
    title: "Automated Enterprise Systems Patch & Configuration Manager",
    category: "Systems Administration Projects",
    problem: "System administrators were individually managing configurations across a heterogeneous cluster of 12 Linux and Windows instances, leading to human configuration drift.",
    solution: "Coded a suite of modular Bash and PowerShell scripts managed by central Git state, allowing one-click software updates and vulnerability scans.",
    results: "Reduced system administration configuration drifts to zero and completed security updates 70% faster than older processes.",
    technologies: ["Bash", "PowerShell", "Linux/Windows Server", "Ansible Basics", "Cron Scheduling"],
    githubLink: "https://github.com/alexchen-dev/systems-patch-manager",
    liveDemoLink: "#demo"
  },
  {
    id: "proj-4",
    title: "Corporate Security Ingestion Dashboard & BI Reporter",
    category: "Power BI Dashboards",
    problem: "Executive management lacked high-level visibility into daily active directory security alerts, login logs, and data processing throughput.",
    solution: "Engineered a Python processing ETL pipeline pushing aggregated network and user state information to a multi-screen visual Power BI report dashboard.",
    results: "Enhanced direct visibility into unauthorized resource access attempts, dropping system threat response times to under 5 minutes.",
    technologies: ["Power BI", "Python (Pandas)", "Active Directory Export", "ETL Data Flows", "Power Query"],
    githubLink: "https://github.com/alexchen-dev/security-bi-reporting",
    liveDemoLink: "#demo"
  },
  {
    id: "proj-5",
    title: "Privacy-Preserving Federated ML Auditing Framework",
    category: "Machine Learning Projects",
    problem: "Deep learning models trained on medical imaging data had to operate under strict privacy constraints (HIPAA/GDPR), making direct dataset pooling impossible.",
    solution: "Programmed a localized training system where model weight gradients are shared securely and verified by an automated cryptographic auditor without original assets ever leaving the node.",
    results: "Maintained a high model accuracy of 93% on diagnostic classifications while securing complete patient record anonymity.",
    technologies: ["Python", "PyTorch", "Federated Learning", "Secure Multi-Party Computation", "GCP Compliance"],
    githubLink: "https://github.com/alexchen-dev/federated-ml-auditing",
    liveDemoLink: "#demo"
  },
  {
    id: "proj-6",
    title: "Automated Clinical Study Audit System",
    category: "Research Projects",
    problem: "Clinical researchers wasted dozens of hours manually verifying study logs and audit trails, preventing rapid submission to regulatory bodies.",
    solution: "Engineered a cryptographically signed electronic data capture auditor that parses research logs and flags anomalies.",
    results: "Completed data curation review 85% faster, guaranteeing zero Human Subjects policy infringements and absolute data fidelity.",
    technologies: ["Node.js", "JSON-Schema Validation", "GCP Guidelines Audits", "HIPAA Safeguards"],
    githubLink: "https://github.com/alexchen-dev/clinical-trial-audit",
    liveDemoLink: "#demo"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Good Clinical Practice (GCP)",
    organization: "CITI Program",
    date: "Aug 2024",
    verificationLink: "https://www.citiprogram.org/verify?id=citi-gcp-92042",
    category: "GCP"
  },
  {
    title: "Human Subjects Protection Certificate",
    organization: "CITI Program",
    date: "Sep 2024",
    verificationLink: "https://www.citiprogram.org/verify?id=citi-hsp-10332",
    category: "Human Subjects Protection"
  },
  {
    title: "Oracle Certified Associate: Database Administration",
    organization: "Oracle Academy",
    date: "Dec 2023",
    verificationLink: "https://certification.oracle.com/verify?id=ora-db-3294",
    category: "Database"
  },
  {
    title: "CompTIA Security+ Blueprint alignment & Security Specialist",
    organization: "CompTIA & Academic Alliance",
    date: "Jan 2024",
    verificationLink: "#verify",
    category: "Cybersecurity"
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    organization: "Microsoft",
    date: "Feb 2024",
    verificationLink: "https://learn.microsoft.com/credentials",
    category: "Cloud"
  },
  {
    title: "IT Auditing Fundamentals & COBIT Foundations",
    organization: "ISACA Academic Chapter",
    date: "Mar 2024",
    verificationLink: "#verify",
    category: "Professional Development"
  }
];

export const EDUCATION_TIMELINE: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Illinois at Chicago",
    duration: "2020 - 2024",
    gpa: "3.92 / 4.00 (Summa Cum Laude)",
    coursework: [
      "Database Management Systems",
      "Network Security & Cryptography",
      "Operating Systems & Systems Programming",
      "IT Project Management",
      "AI & Machine Learning Paradigms",
      "Information Systems Governance"
    ],
    academicAchievements: [
      "Dean's List (All semesters)",
      "Recipient of the Cyber Security Merit Academic Scholarship ($15,000)",
      "Graduated in top 3% of the Computer Science cohort"
    ],
    researchActivities: [
      "Affiliated Researcher at the Distributed Cryptographic Systems Lab",
      "Thesis: 'Continuous Audit Trail Generation in Non-Trusting Cloud Database Environments'"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Alex has a rare and powerful combination of deep software engineering skills and methodical, compliance-driven auditing precision. He didn't just point out vulnerabilities in our database clusters—he physically optimized the schemas. He is a stellar addition to any cybersecurity or Systems/DBA team.",
    author: "Elena Rostov, PhD",
    roleType: "Supervisor",
    relationship: "Director of Enterprise Systems at Apex Solutions",
    rating: 5
  },
  {
    quote: "When implementing Good Clinical Practice and auditing trial workflows, Alex was flawless. His attention to absolute data integrity and HIPAA requirements ensured our compute nodes maintained a pristine security posture. Highly recommend for any digital transformation or audit leadership roles.",
    author: "Dr. Marcus Vance",
    roleType: "Academic",
    relationship: "Principal Investigator, Clinical Informatics Lab",
    rating: 5
  },
  {
    quote: "Alex automated our server patch deployments and secured our PostgreSQL backup pipelines. What used to take our sysops team half a day now takes 10 minutes. His interactive Power BI dashboards gave our executive team true operational sanity.",
    author: "Devon Miller",
    roleType: "Colleague",
    relationship: "Lead DevOps Specialist, Innova Tech",
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Hardening Enterprise SQL Databases: An Auditor's Perspective",
    category: "Database Administration",
    date: "April 2025",
    readTime: "6 min read",
    excerpt: "Most security breaches occur not from sophisticated exploits, but due to poor configuration audits. Learn to secure your DB ports and optimize indexes.",
    content: "Enterprise database security requires moving beyond typical firewall configurations. As an IT Auditor, I look for explicit privilege separation, parameterized storage rules, encrypted tablespaces, and automatic audit logging. In this guide, we dive deep into how Postgres and SQL Server handle continuous session auditing, the performance costs of real-time SSL, and how to configure read-replicas safely to prevent side-channel exploits."
  },
  {
    id: "blog-2",
    title: "Automating ITGC Audits with Python & PowerShell",
    category: "IT Audit",
    date: "May 2025",
    readTime: "8 min read",
    excerpt: "Auditing does not have to be manual. See how PowerShell pipelines can continuously monitor Active Directory drift and generate certified compliance reports.",
    content: "The manual collection of proof for SOX 404 audits represents a huge operational sink. By using modular scripts tied to system chronologies, we can continuously query domain group membership, enforce file integrity monitors, and build direct verification assets in Power BI. We provide complete code snippets for scheduling automated domain control checks safely."
  },
  {
    id: "blog-3",
    title: "AI & Privacy: Federating Clinical ML Models Safely",
    category: "AI & Machine Learning",
    date: "June 2025",
    readTime: "10 min read",
    excerpt: "An overview of how Federated Learning allows machine learning models to train across distributed, highly sensitive clinical datasets without violating GCP policies.",
    content: "Siloed data represents one of the biggest bottlenecks in deep learning diagnostics. Federated learning allows models to benefit from diverse patient telemetry without centralizing the data. We review local encryption protocols, validation of gradient proofs, and the role of clinical auditors in certifying privacy during active training phases."
  }
];

export const RESEARCH_PUBLICATIONS: Publication[] = [
  {
    title: "Trustless Auditing: Continuous Compliance Blueprints for Cloud Database Nodes",
    venue: "IEEE International Conference on Cloud Security & Compliance (ICCSC)",
    date: "May 2024",
    authors: "Alex Chen, Dr. Marcus Vance",
    abstract: "Modern continuous integration pipelines require rigorous check cycles that exceed classic point-in-time auditing. This paper introduces an open-source, non-invasive log parsing daemon that validates file configuration compliance on virtual machine layers, outputting cryptographically verified audit records. Experimental runs on distributed environments showed sub-second auditing latency with zero impact on database querying capacity.",
    doiLink: "https://doi.org/10.1109/ICCSC.2024.10394",
    tags: ["Continuous Auditing", "Cloud Compliance", "ITGC Automation", "Database Security"]
  },
  {
    title: "Privacy-Preserving Federated Algorithms on HIPAA Sandboxed Server Nodes",
    venue: "Journal of Medical System Security & Data Privacy",
    date: "Oct 2023",
    authors: "Alex Chen, Elena Rostov",
    abstract: "Distributed machine learning algorithms on sensitive health records must operate under strict non-disclosure controls. We architect a virtualized environment utilizing KVM hypervisors, automated firewall restrictions, and cryptographically signed gradient sharing networks. Our compliance model successfully conforms with Good Clinical Practice requirements while preserving full ML train characteristics.",
    doiLink: "https://doi.org/10.1016/j.jmssd.2023.10095",
    tags: ["HIPAA Auditing", "Federated Learning", "Machine Learning Security", "Ubuntu Hardening"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Academic Excellence Leadership Medal",
    category: "Awards",
    organization: "University Computer Science Department",
    year: "2024",
    description: "Awarded annually to the graduating senior who demonstrated the most outstanding contribution to systems security research, continuous scholastic performance, and peer training."
  },
  {
    title: "Cyber Security Merit Academic Scholarship",
    category: "Scholarships",
    organization: "Global Information Assurance Alliance",
    year: "2020 - 2024",
    description: "Full-tuition scholarship awarded to candidates committing to enterprise risk analysis, systems auditing, and digital transformation research."
  },
  {
    title: "Director of Technical Systems (Volunteer Role)",
    category: "Leadership",
    organization: "ISACA Student Chapter - Academic Chapter",
    year: "2022 - 2024",
    description: "Organized mock CISA training laboratories, set up physical firewalls for collegiate security competitions, and trained 120+ students on IT Audit preparation courses."
  },
  {
    title: "Underprivileged Community Tech Re-builder",
    category: "Community Impact",
    organization: "Urban Tech Solutions Non-Profit",
    year: "2021 - Present",
    description: "Re-certified and optimized 50+ discarded enterprise desktop servers, transforming them into operational school computing modules for youth digital literacy."
  }
];
