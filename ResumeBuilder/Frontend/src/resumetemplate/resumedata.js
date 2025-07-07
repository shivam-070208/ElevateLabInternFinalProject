const resumeData = {
  name: "Vishu Kumar",
  role: "Full Stack Developer",
  photo: "https://media.istockphoto.com/id/1372065700/photo/portrait-of-a-confident-young-businessman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=oPRp9aiGEb_00Y0Q_eR40MiOisM2eFfeP7lDf0IqJDw=", // 🔁 Use your own image path

  contact: {
    phone: "+91 9876543210",
    email: "vishu@example.com",
    linkedin: "https://linkedin.com/in/vishukumar",
    twitter: "https://twitter.com/vishucodes"
  },

  summary:
    "Passionate Full Stack Developer with a knack for building visually appealing and highly performant web applications. Experienced in React, Node.js, MongoDB, and 3D integrations using Three.js.",

  experience: [
    {
      date: "Mar 2024 – Present",
      role: "3D Intern (Blender Artist)",
      company: "Astomverse",
      achievements: [
        "Created optimized 3D assets for WebGL-based apps",
        "Collaborated with devs to integrate Blender models in real-time",
        "Worked closely on metaverse prototypes with interactive elements"
      ]
    },
    {
      date: "Jan 2024 – Mar 2024",
      role: "Web Developer Intern",
      company: "Oasis Infobyte",
      achievements: [
        "Built responsive UI components using React and Tailwind",
        "Integrated APIs and improved accessibility for dashboards",
        "Contributed to a multi-user authentication module"
      ]
    }
  ],

  education: {
    date: "2021 – Present",
    degree: "B.Tech in Computer Science",
    institution: "NIT Patna",
    details: [
      "CGPA: 8.5/10",
      "Core coursework: DSA, Web Dev, Computer Networks",
      "Participated in multiple hackathons and club activities"
    ]
  },

  skills: [
    {
      name: "React",
      logo: "/logos/react.svg",
      description: "SPA architecture, hooks, context, routing"
    },
    {
      name: "Tailwind CSS",
      logo: "/logos/tailwindcss.svg",
      description: "Utility-first CSS, responsive UI design"
    },
    {
      name: "Node.js",
      logo: "/logos/nodejs.svg",
      description: "REST API, authentication, real-time backend"
    },
    {
      name: "Three.js",
      logo: "/logos/threejs.svg",
      description: "3D rendering, camera controls, WebGL"
    },
    {
      name: "MongoDB",
      logo: "/logos/mongodb.svg",
      description: "Schema design, aggregation, indexing"
    }
  ],

  software: [
    {
      name: "Figma",
      rating: 4.5,
      level: "Advanced"
    },
    {
      name: "Photoshop",
      rating: 4,
      level: "Intermediate"
    },
    {
      name: "VS Code",
      rating: 5,
      level: "Expert"
    }
  ],

  certifications: [
    {
      date: "Dec 2023",
      title: "Full Stack Web Development",
      organization: "freeCodeCamp"
    },
    {
      date: "Nov 2023",
      title: "Responsive Web Design",
      organization: "Coursera"
    }
  ],

  projects: [
    {
      title: "3D Developer Portfolio",
      tech: ["React", "Three.js", "Framer Motion", "Tailwind"],
      description:
        "An animated portfolio site that showcases projects in 3D with scroll-based interactions using GSAP and Framer Motion.",
      link: "https://vishu-portfolio.vercel.app"
    },
    {
      title: "Google Meet Clone",
      tech: ["React", "WebRTC", "Socket.IO"],
      description:
        "Built a Google Meet-inspired video chat app with real-time streaming and multi-user rooms using WebRTC and socket connections.",
      link: "https://meet-clone-demo.vercel.app"
    },
    {
      title: "Fitness App with Pose Detection",
      tech: ["Mediapipe", "Three.js", "React"],
      description:
        "A browser-based fitness app that tracks squats and push-ups using AI pose estimation and 3D visualization.",
      link: "https://fit-ai.vercel.app"
    }
  ]
};

export default resumeData;
