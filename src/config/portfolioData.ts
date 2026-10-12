export interface StatItem {
  label: string;
  value: string;
  subtext: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface InternshipItem {
  company: string;
  role: string;
  description: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  keyFeatures: string[];
  lessonsLearned: string;
  gradient: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  category: string;
  badgeColor: string;
}

export interface AchievementItem {
  title: string;
  category: string;
  description: string;
  iconName: string;
}

export interface LanguageItem {
  name: string;
  nativeScript?: string;
  note?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Abinaya G",
    shortName: "Abinaya",
    initials: "AG",
    role: "Aspiring Full Stack Developer",
    degree: "B.Tech Information Technology",
    education: "B.Tech Information Technology Student",
    college: "SNS College of Technology, Coimbatore",
    tagline: "Building modern web applications, solving real-world problems, and engineering delightful user experiences.",
    heroIntro:
      "Motivated and detail-oriented B.Tech Information Technology student with hands-on web development experience. Skilled in Python, HTML, CSS, JavaScript, and SQL, with a strong interest in building practical software solutions.",
    typingTitles: [
      "Web Developer",
      "Software Engineer",
      "Problem Solver",
      "Full Stack Enthusiast",
    ],
    profilePhoto: "/profile-transparent.png",
    profileFallback: "/profile.jpg",
    resumePdf: "/resume.pdf",
    location: "Coimbatore, Tamil Nadu, India",
    email: "abinayakrishnan63@gmail.com",
    phone: "+91 6381285917",
    linkedin: "https://linkedin.com/in/abinaya-krishnan",
    github: "https://github.com/Abinaya-krish-2006",
  },

  journey: {
    heading: "My Journey",
    subtitle: "Driven by Curiosity, Shaped by Practice",
    paragraphs: [
      "My passion for technology began with a strong interest in how modern web applications transform real-world problems into intuitive, responsive digital experiences. As a B.Tech Information Technology student at SNS College of Technology, Coimbatore, I actively cultivate a continuous-learning mindset across software engineering and web development.",
      "Through hands-on internships at Nxtlogic Software Solutions and Litz Tech, I developed practical proficiency building structured, responsive user interfaces, mastering JavaScript fundamentals, DOM-based interactions, form validation, and collaborative version control using Git and GitHub.",
      "Beyond core frontend development, I work with Python, SQL, DBMS, and modern web architectures. Seeking a Software Engineer / Web Developer role to apply problem-solving abilities and a continuous-learning mindset in a professional engineering team.",
    ],
    stats: [
      {
        label: "Degree",
        value: "B.Tech IT",
        subtext: "SNS College of Technology",
      },
      {
        label: "Projects",
        value: "2+",
        subtext: "Practical Web Applications",
      },
      {
        label: "Internships",
        value: "2",
        subtext: "Web Development Roles",
      },
      {
        label: "Certifications",
        value: "4",
        subtext: "Python, AI & Web Tech",
      },
      {
        label: "Continuous Learning",
        value: "Daily",
        subtext: "Hands-on Development",
      },
    ] as StatItem[],
  },

  skills: [
    {
      title: "Programming",
      iconName: "code",
      skills: ["Python", "JavaScript", "SQL"],
    },
    {
      title: "Web Technologies",
      iconName: "layout",
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive UI"],
    },
    {
      title: "Database & Storage",
      iconName: "database",
      skills: ["SQL", "DBMS", "Relational Database Design"],
    },
    {
      title: "Tools & Platforms",
      iconName: "wrench",
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      title: "Core IT Knowledge",
      iconName: "cpu",
      skills: [
        "Responsive Web Design",
        "Web Development",
        "DOM Manipulation",
        "Client-side Form Validation",
      ],
    },
    {
      title: "Soft Skills & Mindset",
      iconName: "heart",
      skills: [
        "Problem Solving",
        "Teamwork & Collaboration",
        "Quick Learning",
        "Adaptability",
        "Communication",
        "Time Management",
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      company: "Nxtlogic Software Solutions",
      role: "Web Development Intern",
      description: [
        "Built structured, responsive web pages adhering strictly to semantic HTML5, CSS, and Bootstrap standards.",
        "Learned JavaScript fundamentals and implemented dynamic DOM-based interaction.",
        "Practiced dynamic form creation, client-side input validation, responsive layouts, and user-friendly navigation.",
        "Used Git and GitHub for version control, project management, and collaborative software workflows.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git", "GitHub"],
    },
    {
      company: "Litz Tech",
      role: "Web Development Intern",
      description: [
        "Gained hands-on exposure to web development concepts, frontend implementation standards, and architecture.",
        "Created structured, semantic web pages using HTML and CSS optimized for clarity and cross-device responsiveness.",
        "Developed deep understanding of responsive design best practices, UI hierarchy, and user interface development.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI Development"],
    },
  ] as InternshipItem[],

  projects: [
    {
      id: "digital-safety",
      title: "Digital Safety",
      category: "Interactive Web Application",
      description:
        "Developed a web application focused on digital safety awareness and online security best practices, aimed at helping users recognize online threats and protect their personal information.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
      keyFeatures: [
        "Interactive web application focused on digital safety awareness and security best practices",
        "Implemented interactive features using JavaScript for a responsive, user-friendly experience",
        "Aimed at helping users recognize online threats and safeguard personal sensitive information",
      ],
      lessonsLearned:
        "Deepened understanding of client-side DOM manipulation, event-driven interactions, and creating engaging, intuitive educational interfaces.",
      gradient: "from-[#EEF6FF] via-[#F5F3FF] to-white",
    },
    {
      id: "resume-builder",
      title: "Resume Builder – Web Application",
      category: "Productivity Web Application",
      description:
        "Developed a web application for creating professional resumes using customizable templates, featuring dynamic form inputs and synchronous real-time document preview.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
      keyFeatures: [
        "Developed a web application for creating professional resumes using customizable templates",
        "Implemented dynamic form inputs with instant real-time live preview",
        "Built with HTML, CSS, and JavaScript for a responsive, clean, user-friendly interface",
      ],
      lessonsLearned:
        "Mastered responsive layout constraints, print stylesheets, and writing clean, reactive vanilla JavaScript state update loops.",
      gradient: "from-[#F5F3FF] via-[#EEF6FF] to-white",
    },
  ] as ProjectItem[],

  // Strictly Abinaya's verified certifications from resume (No Oracle, No IBM, No Archana details)
  certificates: [
    {
      title: "AI for Beginners",
      issuer: "Professional Learning Initiative",
      category: "Artificial Intelligence Foundations",
      badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
    },
    {
      title: "Python Full Stack Development – 20-Day Training",
      issuer: "Technical Training Academy",
      category: "Full Stack Web Engineering & Python",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      title: "NPTEL – Marketing / Product-related Learning",
      issuer: "NPTEL",
      category: "Product & Market Foundations",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      title: "Technical Workshops & Skill-Development Sessions",
      issuer: "Technical Forums",
      category: "Hands-on Web Engineering",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
  ] as CertificateItem[],

  // Strictly Abinaya's achievements (No Youth Red Cross, No Archana details)
  achievements: [
    {
      title: "Technical Workshops Participation",
      category: "Hands-on Engineering Growth",
      description:
        "Actively participated in technical workshops and skill-development sessions covering Python programming, web technologies, and software engineering.",
      iconName: "award",
    },
    {
      title: "Hackathons Participation",
      category: "Collaborative Prototyping",
      description:
        "Participated in competitive hackathons, collaborating under deadlines to ideate and build practical web-based solutions.",
      iconName: "zap",
    },
    {
      title: "Web Development Project Deliveries",
      category: "Practical Application Engineering",
      description:
        "Engineered and shipped interactive web applications including Digital Safety and Resume Builder with responsive, dynamic JavaScript interfaces.",
      iconName: "terminal",
    },
    {
      title: "Continuous Learning & Problem Solving",
      category: "Technical Dedication",
      description:
        "Maintaining a disciplined learning mindset, continually mastering emerging web technologies, algorithms, and practical software development.",
      iconName: "code",
    },
  ] as AchievementItem[],

  // Strictly Tamil and English (No Hindi, No German)
  languages: [
    {
      name: "Tamil",
      nativeScript: "தமிழ்",
    },
    {
      name: "English",
      nativeScript: "English",
    },
  ] as LanguageItem[],
};
