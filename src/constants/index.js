const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Apps", imgPath: "/images/devices.png" },
  { text: "Solutions", imgPath: "/images/star.png" },
  { text: "Innovation", imgPath: "/images/gold-star.png" },
  { text: "Excellence", imgPath: "/images/fav.png" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 12, suffix: "+", label: "Technologies Mastered" },
  { value: 80, suffix: "%", label: "Client Satisfaction" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/react.png",
  },
  {
    imgPath: "/images/logos/python.svg",
  },
  {
    imgPath: "/images/logos/node.png",
  },
  {
    imgPath: "/images/logos/three.png",
  },
  {
    imgPath: "/images/logos/git.svg",
  },
  {
    imgPath: "/images/logos/java.png",
  },
  {
    imgPath: "/images/logos/flutter.png",
  },
  {
    imgPath: "/images/logos/android.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Full-Stack Development",
    desc: "Expert in both frontend and backend development with modern technologies and best practices.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Mobile App Development",
    desc: "Skilled in Flutter, Android Studio, and cross-platform mobile development solutions.",
  },
  {
    imgPath: "/images/time.png",
    title: "Cloud & Database",
    desc: "Experience with Microsoft Azure, Firebase, MySQL, PostgreSQL, and modern cloud solutions.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Mobile Developer",
    imgPath: "/images/logos/flutter.png",
  },
  {
    name: "Full Stack Developer",
    imgPath: "/images/logos/git.svg" },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Mobile Developer",
    modelPath: "/models/computer-optimized-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Full Stack Developer",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Malcom demonstrated exceptional technical skills and problem-solving abilities during his internship. His contributions to our UPS system monitoring and database maintenance were invaluable.",
    imgPath: "", // No longer using profile pictures
    logoPath: "/images/vector.jpeg",
    title: "IT Intern",
    company: "Vector International, Nairobi",
    date: "July 2023 - September 2023",
    responsibilities: [
      "Supported the IT team in troubleshooting and resolving hardware and software issues.",
      "Gained practical experience in online monitoring of UPS systems.",
      "Conducted routine IT maintenance tasks and provided technical support to staff.",
      "Collaborated with senior developers in various projects pertaining to UPS system maintenance and monitoring for databases.",
    ],
  },
  {
    review: "Malcom showed great adaptability and technical proficiency while working with Labware 7 software. His collaborative approach and attention to detail were commendable.",
    imgPath: "", // No longer using profile pictures
    logoPath: "/images/labware.jpg",
    title: "Intern",
    company: "Labware East Africa",
    date: "June 2021 - August 2021",
    responsibilities: [
      "Gained practical experience in the utilization of the Labware 7 software and its implementation.",
      "Conducted routine IT maintenance tasks and provided technical support to staff.",
      "Collaborated with senior developers on various projects, enhancing skills in Labware 7 software.",
      "Supported the IT team in troubleshooting and resolving hardware and software issues.",
    ],
  },
];

const expLogos = [
  {
    name: "vector",
    imgPath: "/images/vector.jpeg",
  },
  {
    name: "labware",
    imgPath: "/images/labware.jpg",
  },
];

const projects = [
  {
    title: "Emergency Response Application",
    description: "A comprehensive emergency response application that facilitates linking individuals in distress with viable emergency response centers using Firebase, Google Maps API, Flutter, and Android Studio.",
    features: [
      "Real-time authentication and user management",
      "Geolocation services with Google Maps integration",
      "Live streaming capabilities for emergency responders",
      "SMS notifications to emergency contacts",
      "Cloud storage and real-time database using Firebase",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps API", "Android Studio"],
    imgPath: "/images/emergency-app-new.jpg",
    githubLink: "#",
    liveLink: "#",
    category: "Mobile App",
  },
  {
    title: "Online Resource Sharing Center",
    description: "A comprehensive platform for sharing and discovering resources, built with modern web technologies and a focus on user experience and community building.",
    features: [
      "Resource library with categorization",
      "User management and authentication",
      "Upload and sharing functionality",
      "Search and discovery features",
      "Community engagement tools",
    ],
    technologies: ["HTML", "PHP", "CSS", "MySQL", "JavaScript"],
    imgPath: "/images/resource-sharing.jpg",
    githubLink: "#",
    liveLink: "#",
    category: "Web Application",
  },
  {
    title: "Property Management System",
    description: "A comprehensive property management solution for landlords and property managers, featuring tenant management, payment tracking, and automated reminders.",
    features: [
      "Tenant management and apartment tracking",
      "Payment processing and tracking",
      "Automated reminder system",
      "Dashboard with key metrics",
      "Mobile-responsive design",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    imgPath: "/images/property-management-new.png",
    githubLink: "#",
    liveLink: "#",
    category: "Mobile App",
  },
];

const testimonials = [
  {
    name: "Vector International Team",
    mentions: "@vector_international",
    review:
      "Malcom's technical skills and problem-solving abilities were exceptional during his internship. He quickly adapted to our systems and contributed significantly to our UPS monitoring projects.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Labware East Africa",
    mentions: "@labware_ea",
    review:
      "Working with Malcom was a great experience. His attention to detail and collaborative approach made him an invaluable team member during his internship period.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Emergency Response Team",
    mentions: "@emergency_response",
    review:
      "The emergency response application Malcom developed has been instrumental in improving our response times and coordination. The integration with Google Maps and real-time features is outstanding.",
    imgPath: "/images/client2.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/git.svg",
    link: "https://github.com/malcomchiaji",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://linkedin.com/in/malcomchiaji",
  },
  {
    name: "email",
    imgPath: "/images/chat.png",
    link: "mailto:Malcom.Chiaji@gmail.com",
  },
  {
    name: "phone",
    imgPath: "/images/time.png",
    link: "tel:+254702831865",
  },
];

const skills = [
  {
    category: "Programming Languages",
    items: ["PHP", "Python", "HTML", "CSS", "Java", "C#", "C++", "React", "JavaScript", "Dart", "Kotlin"],
  },
  {
    category: "Web Development",
    items: ["HTML5", "CSS3", "JavaScript", "PHP", "React", "Tailwind CSS", "Node.js"],
  },
  {
    category: "App Development",
    items: ["Android Studio", "Flutter", "Dart", "Kotlin", "React Native"],
  },
  {
    category: "Software Development",
    items: ["Java", "C#", "C++", "Object-Oriented Programming", "Software Architecture"],
  },
  {
    category: "Cloud & Databases",
    items: ["Microsoft Azure", "Firebase", "MySQL", "PostgreSQL", "Cloud Computing"],
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "Visual Studio Code", "Eclipse", "Google Maps API", "GPT", "Docker"],
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
  skills,
};
