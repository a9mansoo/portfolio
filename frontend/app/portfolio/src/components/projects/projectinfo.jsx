import luckyShrubImg from "../../assets/luckyshrub.png";
import iotImg from "../../assets/iot.png";
import cellImg from "../../assets/cell_detection.png";

export const projectsInfo = [
  {
    id: 4,
    title: "Password Manager",
    date: "2025",
    description: "Fullstack application for password management",
    link: "https://github.com/a9mansoo/password_manager",
    getImageSrc: () => luckyShrubImg,
    extendedInfo: [
      "• Developed a secure, self-hosted password manager using React, FastAPI, and SQL, eliminating third-party dependencies.",
      "• Containerized UI, API, and database with Docker Compose, enabling one-command deployment on any host.",
      "• Comes with JWT Authentication system, automated database migrations and asynchronous password managment service.",
    ],
    chips: [
      "React",
      "FastAPI",
      "TortoiseORM",
      "Docker Compose",
      "Docker",
      "SQL",
      "Async",
      "Formik",
      "React Router",
      "Motion",
    ],
  },
  {
    id: 3,
    title: "IoT Telemetry System",
    date: "2025",
    description:
      "Telemetry system for continous temperature and humidity monitoring",
    link: "https://a9mansoo.github.io/Arduino/projects/temperature_humidity_sensor/",
    getImageSrc: () => iotImg,
    extendedInfo: [
      "• Engineered a full-stack IoT telemetry system to monitor apartment humidity/temperature, integrating hardware (Arduino + DHT22  sensor), a custom distributable Python serial reader cli, and a metrics pipeline.",
      "• Containerized all components (Python reader, InfluxDB, Telegraf, Grafana) with Docker.",
      "• Achieved near real-time (<1 s) data ingestion and 99.9% pipeline uptime over 30 days, without data loss.",
    ],
    chips: [
      "Linux",
      "Python",
      "InfluxDB",
      "Docker",
      "Docker Compose",
      "Arduino",
      "Telegraf",
    ],
  },
  {
    id: 2,
    title: "Animal Cell Detection",
    date: "2021",
    description: "Computer vision application for detecting animal cells",
    link: "https://github.com/a9mansoo/Computational-Linear-Algebra/tree/main/4%20Specteral%20Clustering",
    getImageSrc: () => cellImg,
    extendedInfo: [
      "• Engineered a computer vision application to detect animal cells.",
      "• Achieved 85% detection accuracy on microscopy images.",
    ],
    chips: ["Computer Vision", "MATLAB"],
  },
  {
    id: 1,
    title: "Lucky Shrub",
    date: "2021",
    description: "Website for a for a local shrubbery using modern css",
    link: "https://github.com/a9mansoo/LuckyShrub",
    getImageSrc: () => luckyShrubImg,
    extendedInfo: [
      "• Responsive storefront site using modern CSS Grid/Flexbox, improving load performance and layout consistency across devices.",
    ],
    chips: ["HTML", "CSS", "Javascript", "Flexbox", "Grid"],
  },
];
