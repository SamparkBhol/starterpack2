// Mock data for the portfolio
// This file contains all the static data used throughout the portfolio

export const personalInfo = {
  name: "Shreyas Karthigeyan",
  title: "Full-Stack Developer",
  location: "Bangalore Urban, Karnataka, India",
  email: "shreyask750@gmail.com",
  phone: "+91 7676996734",
  linkedin: "in/shreyas-k-731022286",
  github: "github.com/shreyask750",
  summary: "Enthusiastic and motivated Computer Engineering graduate with a strong passion for coding, software development, and problem-solving. Eager to contribute to a forward-thinking organization that values innovation and learning. Seeking opportunities that offer hands-on experience, professional growth, and the chance to make meaningful contributions to both the team and the industry."
};

export const experience = [
  {
    title: "SAP and ERP Functional Intern",
    company: "Hansai IT Solutions",
    period: "June 2025 - Present",
    description: [
      "Acquired hands-on experience with the SAP MM module, focusing on end-to-end procurement processes.",
      "Improved supply chain efficiency by streamlining purchase orders and inventory control workflows.",
      "Managed and maintained master data to support accurate and timely purchasing operations."
    ],
    skills: ["SAP MM", "ERP", "Supply Chain", "Procurement", "Master Data Management"]
  },
  {
    title: "DevOps and Automation Intern",
    company: "DigitalXC",
    period: "June 2024 - July 2024",
    description: [
      "Worked on AWS and Ansible under the DevOps and Automation team during the summer of 2024.",
      "Underwent training on AWS, Ansible and Terraform and performed tasks on various use-cases.",
      "Automated infrastructure provisioning and configuration management tasks using Ansible playbooks and Terraform modules to enhance deployment efficiency."
    ],
    skills: ["AWS", "Ansible", "Terraform", "DevOps", "Infrastructure Automation", "CI/CD"]
  }
];

export const projects = [
  {
    title: "Research Paper",
    description: "Published research in Elsevier journal on a novel routing algorithm for Wireless Sensor Networks (WSN).",
    details: [
      "Developed an energy-efficient algorithm capable of operating effectively in large-scale deployment areas, significantly exceeding the scale addressed in previous research.",
      "Simulated and validated the algorithm across various topologies and node densities to demonstrate scalability and energy efficiency in diverse real-world scenarios."
    ],
    technologies: ["Research", "WSN", "Algorithm Design", "Simulation", "Energy Efficiency"],
    link: "tinyurl.com/yc33cawk"
  },
  {
    title: "LeafGuard AI",
    description: "Built an AI-powered plant health diagnosis tool using computer vision to identify leaf diseases, improving agricultural awareness and early detection of plant issues.",
    details: [
      "Integrated Google Maps API to provide users with real-time locations of nearby nurseries and gardening services, enhancing user utility and actionable insights.",
      "Developed a responsive frontend with React and Tailwind, showcasing full-stack skills, API integration, and user-centric design."
    ],
    technologies: ["AI/ML", "Computer Vision", "React", "Tailwind CSS", "Google Maps API", "Full-Stack"]
  },
  {
    title: "YouTube Predictive Analysis",
    description: "Built a Neural network model to predict subscriber count based on video metadata and performance metrics.",
    details: [
      "Applied a Random Forest Regressor on a second dataset to perform predictive analysis and identify key features influencing view count.",
      "Preprocessed large datasets, tuned hyperparameters, and evaluated models using metrics like RMSE and R² to ensure robust performance."
    ],
    technologies: ["Machine Learning", "Neural Networks", "Random Forest", "Data Preprocessing", "Python", "Data Science"]
  }
];

export const education = [
  {
    title: "Bachelor of Technology in Information Technology",
    institution: "Vellore Institute of Technology",
    location: "Vellore, TN",
    year: "2026",
    score: "8.86 CGPA"
  },
  {
    title: "CBSE 12th",
    institution: "National Public School",
    location: "Bangalore, KA",
    year: "2022",
    score: "92.6%"
  },
  {
    title: "CBSE 10th",
    institution: "National Public School",
    location: "Bangalore, KA",
    year: "2020",
    score: "95.8%"
  }
];

export const skills = {
  languages: ["C", "Java", "C++", "Python", "JavaScript", "TypeScript", "PHP", "Ruby", "Go", "Rust"],
  frontend: ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "Vue.js", "Angular", "Tailwind CSS", "Bootstrap", "SASS/SCSS", "Material-UI"],
  backend: ["Node.js", "Express.js", "Django", "Flask", "Spring Boot", "Laravel", "Ruby on Rails", "ASP.NET"],
  databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "OracleSQL", "SQLite", "DynamoDB", "Cassandra"],
  cloud: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "Terraform", "Ansible"],
  aiml: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Jupyter", "Keras"]
};

export const certifications = [
  "AWS Certified Cloud Practitioner"
];

export const botQuestions = [
  {
    id: 1,
    question: "What's your email?",
    answer: "shreyask750@gmail.com",
    category: "contact"
  },
  {
    id: 2,
    question: "What's your GitHub?", 
    answer: "github.com/shreyask750",
    category: "contact"
  },
  {
    id: 3,
    question: "What is the capital of India?",
    answer: "New Delhi",
    category: "general"
  },
  {
    id: 4,
    question: "What is 2 + 2?",
    answer: "4",
    category: "general"
  },
  {
    id: 5,
    question: "Who invented the computer?",
    answer: "Charles Babbage",
    category: "general"
  },
  {
    id: 6,
    question: "What is the largest planet?",
    answer: "Jupiter",
    category: "general"
  }
];

export const quotes = [
  "Building the future, one commit at a time! 🚀",
  "Code is poetry, bugs are... abstract art? 🎨",
  "Coffee, code, repeat. Simple life formula! ☕",
  "Turning caffeine into code since 2020! ⚡",
  "Making computers do magic tricks! ✨",
  "Breaking things to make them better! 🔧",
  "Debugging: Being a detective in your own story! 🕵️",
  "Creating digital dreams with binary magic! 💫"
];