
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: "Varsha Dawale",
  eyebrow: "Hello, I'm",
  title: "Computer Science & Engineering (AI/ML) Student",
  highlights: ["Python Programmer", "National Level Hackathon Winner"],
  intro:
    "I’m a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Pimpri Chinchwad University. I enjoy exploring technology across software and electronics, building practical solutions, and learning by creating.",
  location: "Pune Division, Maharashtra, India",
  email: "dawalevarsha256@gmail.com",
  phone: "",
  linkedin: "https://www.linkedin.com/in/varsha-dawale-90a0a0391/",
  github: "https://github.com/dawalevarsha256-ai",
  university: "Pimpri Chinchwad University, Pune",
  degree: "B.Tech — Computer Science Engineering (AI/ML)",
  educationDates: "August 2024 – July 2028",
  photo: asset("images/20260823_123819.jpg")
};

export const skills = [
  "Python Programming",
  "Front-End Development",
  "ESP32 Microcontrollers",
  "Electronics",
  "Artificial Intelligence",
  "Machine Learning"
];

// Certificate image previews.
// Exact course titles and completion dates can be added later.

export const certifications = [
  {
    title: "Coursera Certificate",
    organization: "Coursera",
    date: "Certificate",
    image: asset("certificates/Coursera 32DQZ3JRCBGL/Coursera 32DQZ3JRCBGL-1.png")
  },
  {
    title: "Coursera Certificate",
    organization: "Coursera",
    date: "Certificate",
    image: asset("certificates/Coursera 6YZSK46HZ7UO/Coursera 6YZSK46HZ7UO-1.png")
  },
  {
    title: "Coursera Certificate",
    organization: "Coursera",
    date: "Certificate",
    image: asset("certificates/Coursera ABD3IVIBQEKM/Coursera ABD3IVIBQEKM-1.png")
  },
  {
    title: "Coursera Certificate",
    organization: "Coursera",
    date: "Certificate",
    image: asset("certificates/Coursera AZ0EQQBX88OB/Coursera AZ0EQQBX88OB-1.png")
  },
  {
    title: "Coursera Certificate",
    organization: "Coursera",
    date: "Certificate",
    image: asset("certificates/Coursera B63AMB9XH6L7/Coursera B63AMB9XH6L7-1.png")
  },
  {
    title: "Coursera Certificate",
    organization: "Coursera",
    date: "Certificate",
    image: asset("certificates/Coursera BKNAU3CO8F9L/Coursera BKNAU3CO8F9L-1.png")
  },
  {
    title: "Coursera Certificate",
    organization: "Coursera",
    date: "Certificate",
    image: asset("certificates/Coursera CX67LY16ZISE (1)/Coursera CX67LY16ZISE (1)-1.png")
  },
  {
    title: "Coursera Certificate",
    organization: "Coursera",
    date: "Certificate",
    image: asset("certificates/Coursera CYNU1OS6DMYA/Coursera CYNU1OS6DMYA-1.png")
  },
  {
    title: "Coursera Certificate",
    organization: "Coursera",
    date: "Certificate",
    image: asset("certificates/Coursera IXGFUE3IE29R/Coursera IXGFUE3IE29R-1.png")
  },
  {
    title: "Coursera Certificate",
    organization: "Coursera",
    date: "Certificate",
    image: asset("certificates/Coursera KIXGP1WPJRTU/Coursera KIXGP1WPJRTU-1.png")
  },
  {
    title: "Coursera Certificate",
    organization: "Coursera",
    date: "Certificate",
    image: asset("certificates/Coursera LAL7MQ259S5Z/Coursera LAL7MQ259S5Z-1.png")
  },
  {
    title: "Coursera Certificate",
    organization: "Coursera",
    date: "Certificate",
    image: asset("certificates/Coursera W983QP1XB3DQ/Coursera W983QP1XB3DQ-1.png")
  }
];

export const awards = [
  {
    title: "MediConnect",
    organization: "MEDHA 2025",
    date: "2025",
    description:
      "Developed MediConnect during MEDHA 2025, a medical-device innovation event focused on addressing healthcare needs through technology. The project earned Winner recognition at the event, highlighting our team's work in developing a healthcare-focused solution.",
    image: asset("images/ForMediConnect.jpg")
  },
  {
    title: "Smart Compost Machine",
    organization: "GreenQuest — Pimpri Chinchwad University",
    date: "September 2026",
    description:
      "Won at GreenQuest, held at Pimpri Chinchwad University, for the Smart Compost Machine project. This achievement recognizes our project's participation and success in the GreenQuest competition.",
    image: asset("images/ForSmartCompost.jpg")
  }
];

export const experiences = [
  {
    title: "BETIC — Medical Device Development",
    organization: "IIT Bombay",
    date: "January 2026",
    description:
      "Attended a BETIC-related conference at IIT Bombay as part of a course on medical device development. The experience provided exposure to the medical-device innovation ecosystem and the process of developing technology-based solutions for healthcare needs. BETIC (Biomedical Engineering and Technology Innovation Centre) works on advancing medical-device innovation through collaboration between engineering and healthcare.",
    image: asset("images/BETtic IITB.JPG")
  }
];
