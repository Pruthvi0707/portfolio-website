// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import rstudioLogo from "./assets/tech_logo/RStudio.png";
import eclipseLogo from "./assets/tech_logo/eclipse.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import anacondaLogo from "./assets/tech_logo/anaconda.png";
import visualstudioLogo from "./assets/tech_logo/VisualStudio.png";
import notepadppLogo from "./assets/tech_logo/Notepad++.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
import phpLogo from "./assets/tech_logo/php.png";

// Experience Section Logo's
import wolfoxLogo from "./assets/company_logo/wolfox.png";

// Education Section Logo's
import kitLogo from "./assets/education_logo/kit.jpeg";
import dmbLogo from "./assets/education_logo/dmb.jpg";
import shivrajLogo from "./assets/education_logo/Shivraj.png";

// Project Section Logo's
import ebookLogo from "./assets/work_logo/ebookapp.png";
import adapLogo from "./assets/work_logo/adap.png";
import movieLogo from "./assets/work_logo/bookmymovie.png";
import gmsLogo from "./assets/work_logo/gms.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Java Script", logo: javascriptLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "MySQL", logo: mysqlLogo },
      { name: "Mongo DB", logo: mongodbLogo },
      { name: "Postgre SQL", logo: postgreLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "Java Script", logo: javascriptLogo },
      { name: "PHP", logo: phpLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Eclipse", logo: eclipseLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Python IDLE", logo: pythonLogo },
      { name: "Notepad ++", logo: notepadppLogo },
      { name: "R Studio", logo: rstudioLogo },
      { name: "Ana conda", logo: anacondaLogo },
      { name: "Visual Studio", logo: visualstudioLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Frontend Developer Intern",
    company: "WOLFOX SERVICES PVT. LTD., KOLHAPUR",
    date: "May 2024 - August 2024",
    desc: "Developed responsive front-end pages using HTML, CSS, and Bootstrap, worked on MySQL databases, and implemented backend functionality with Python CGI.",
    skills: ["HTML", "CSS", "Bootstrap", "MySQL", "Python"],
    img: wolfoxLogo,
  },
];

export const education = [
  {
    id: 0,
    img: kitLogo,
    school: "KIT's IMER, Gokul Shirgaon, Kolhapur",
    date: "August 2023 - June 2025",
    grade: "67%",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from Shivaji University, Kolhapur. During my time at KIT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: dmbLogo,
    school: "Doodhsakhar Mahavidyala, Bidri",
    date: "August 2020 - June 2023",
    grade: "84.32%",
    desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from Shivaji University, Kolhapur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Doodhsakhar Mahavidyalaya allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor's of Science - BSC (Computer Science)",
  },
  {
    id: 2,
    img: shivrajLogo,
    school: "Shivraj Vidyalaya & Junior College, Murgud",
    date: "April 2019 - February 2020",
    grade: "64.62%",
    desc: "I completed my class 12 education from Shivraj Vidyalaya & Junior College, Murgud, under the Maharashtra State board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "HSC(XII) - PCM with Information Technology",
  },
  {
    id: 3,
    img: shivrajLogo,
    school: "Shivraj Vidyalaya & Junior College, Murgud",
    date: "April 2017 - March 2018",
    grade: "67.80%",
    desc: "I completed my class 10 education from Shivraj Vidyalaya & Junior College, Murgud, under the Maharashtra State board, where I studied Science with Computer.",
    degree: "SSC(X), Science with Information and Communication Technology",
  },
];

export const projects = [
  {
    id: 0,
    title: "E-Book Web Application",
    description:
      "We made a website where people can buy and sell used books. I used HTML, CSS, Bootstrap 5, Java Servlets, JSP, and MySQL. The site works well on mobile and has a safe payment system. Admins can manage the users and books easily.",
    image: ebookLogo,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Java Servlet", "MySQL", "JSP"],
  },
  {
    id: 1,
    title: "Audiology Diagnostic Assessment Portal",
    description:
      " This project is made to help doctors check hearing problems in kids aged 0–6 years. I used HTML, CSS, JavaScript, Python, and MySQL. It helps manage patient details, set appointment times, and create reports. It’s simple to use for both doctors and parents.",
    image: adapLogo,
    tags: ["Python", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    id: 2,
    title: "Book My movie",
    description:
      "We built a movie ticket booking website using HTML, CSS, JavaScript, PHP, and MySQL. People can check movie timings and book tickets online. It also has an admin panel to manage movies and bookings.",
    image: movieLogo,
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Gym Management System",
    description:
      " The Gym Management System was developed using C#.NET and SQL Server to manage member information, track attendance, handle payments, schedule classes, and monitor fitness progress. Enabled efficient gym operations, reducing manual workload with an organized and user-friendly interface for staff and members.",
    image: gmsLogo,
    tags: ["C#", "Microsoft SQL Server"],
  },
];
