export const portfolioData = {
  personal: {
    name: "Hafis Mohamed",
    role: "MCA Student | Full Stack & App Developer",
    location: "Trivandrum, Kerala, India",
    college: "College of Engineering Trivandrum (CET)",
    bio: "I am an MCA student at College of Engineering Trivandrum (CET) passionate about building practical systems, web apps, and mobile solutions. Eager to explore new technologies, learn continuously, and apply creative problem-solving to real-world software engineering challenges.",
    email: "hafismohamedofficial@gmail.com",
    resumeUrl: "https://drive.google.com/file/d/1L_CFvGmWoyzA_3uClQAUd7qJQrJDnzQb/view?usp=drivesdk",
    githubUrl: "https://github.com/Hafis-Mohamed",
    linkedinUrl: "https://www.linkedin.com/in/hafis-mohamed-31baa0254/",
  },
  about: {
    title: "About Me",
    description: "I am currently pursuing my Master of Computer Applications (MCA) at the prestigious College of Engineering Trivandrum (CET). My journey in software development is driven by a deep curiosity, a desire to build systems that automate operations, and a strong readiness to learn new technologies and continuously improve my problem-solving skills.",
    highlights: [
      {
        title: "Full Stack Development",
        description: "Designing end-to-end web applications with modern architectures like Next.js, Django, and database integrations.",
        icon: "Layout"
      },
      {
        title: "Mobile App Development",
        description: "Building native-quality, high-performance cross-platform apps using Flutter and Firebase.",
        icon: "Smartphone"
      },
      {
        title: "Problem Solving",
        description: "Solid foundation in Data Structures, Algorithms, and Object-Oriented Programming (OOP) concepts.",
        icon: "Terminal"
      },
      {
        title: "Real-world Systems",
        description: "Focused on developing utility-driven systems like hostel and business management systems.",
        icon: "Cpu"
      }
    ]
  },
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Python", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Java", level: 75 },
        { name: "JavaScript", level: 68 },
        { name: "Dart", level: 65 }
      ]
    },
    {
      category: "Web & App Development",
      items: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "Django", level: 80 },
        { name: "Tailwind CSS", level: 70 },
        { name: "Flutter", level: 68 },
        { name: "Next.js", level: 60 }
      ]
    },
    {
      category: "Backend & Database & Cloud",
      items: [
        { name: "MySQL", level: 80 },
        { name: "SQLite", level: 80 },
        { name: "Firebase", level: 70 },
        { name: "REST APIs", level: 60 }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "VS Code", level: 85 },
        { name: "Git & GitHub", level: 80 },
        { name: "Android Studio", level: 70 }
      ]
    },
    {
      category: "Core CS",
      items: [
        { name: "DBMS", level: 75 },
        { name: "OOPs Concepts", level: 75 },
        { name: "Data Structures", level: 75 },
        { name: "Algorithms", level: 70 }
      ]
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Team Collaboration", level: 85 },
        { name: "Communication Skills", level: 80 },
        { name: "Analytical Thinking", level: 80 },
        { name: "Problem Solving", level: 75 },
        { name: "Decision Making", level: 75 }
      ]
    }
  ],
  experience: [
    {
      role: "Python Django Intern",
      company: "GrapesGenix Thrissur",
      duration: "3 Months (2023)",
      description: "Completed an intensive internship focusing on developing robust web backends, integrating databases, and building full-stack applications.",
      bullets: [
        "Developed REST API endpoints and integrated SQLite/MySQL database systems.",
        "Built secure user authentication and session management systems using Django.",
        "Gained hands-on experience in full-stack architecture, combining Django templates with CSS/Tailwind layouts."
      ]
    }
  ],
  projects: [
    {
      title: "Asmabees Hostel Management System",
      description: "A hostel management web application designed to streamline room allocation, student records, attendance, hostel fee processing, and administrative tasks. Tailored specifically for MES Asmabi College, it was built to improve efficiency and reduce manual work in hostel operations.",
      tech: ["Python", "Django", "HTML", "CSS", "SQLite"],
      github: "https://github.com/Hafis-Mohamed/Hostel-Management-System-CLG-project-",
      demo: "#",
      imageText: "Hostel Management"
    },
    {
      title: "Small Business Management System",
      description: "A business/mobile management application developed to help small businesses manage daily operations such as sales, expenses, transactions, authentication, and workflow management in a more organized and efficient way.",
      tech: ["Flutter", "Firebase"],
      github: "https://github.com/project2026in/Bussiness_Management_System",
      demo: "#",
      imageText: "Business Management"
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "College of Engineering Trivandrum (CET)",
      duration: "2024 - 2026",
      status: "Ongoing",
      details: "Acquiring deep knowledge in advanced computer science concepts, database management systems, network protocols, and software design patterns."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "MES Asmabi College Kodungallur",
      duration: "2021 - 2024",
      status: "Completed",
      details: "Studied core software development, database design, computer networks, and programming fundamentals."
    },
    {
      degree: "Python Django Certificate",
      institution: "GrapesGenix Thrissur",
      duration: "2023",
      status: "Completed",
      details: "Comprehensive hands-on training covering Django framework architecture, custom admin panel integrations, user authentication protocols, and database schema migrations."
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "GHSS Karupadanna, Thrissur",
      duration: "March 2022",
      status: "Completed",
      details: "Kerala Syllabus. Secured 92.5% with 4 A+ and 2 A grades."
    },
    {
      degree: "SSLC (10th)",
      institution: "St. Antonys HSS Mala, Thrissur",
      duration: "March 2020",
      status: "Completed",
      details: "Kerala State Board. Secured 90% with 9 A+ and 1 A grades."
    }
  ],
  githubProfile: {
    username: "hafis-mohamed", // Put placeholder for recruiter
    pinnedRepos: [
      { name: "hostel-management", stars: 5, forks: 2, lang: "Python" },
      { name: "business-manager", stars: 4, forks: 1, lang: "Dart" },
      { name: "nextjs-portfolio", stars: 8, forks: 0, lang: "JavaScript" }
    ]
  }
};
