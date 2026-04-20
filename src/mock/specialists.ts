import type { Specialist } from "@/types/specialist.type"

export const specialists: Specialist[] = [
  {
    id: 1,
    name: "Denis Gaev",
    role: "Python Developer",
    location: "Ташкент",
    description:
      "Middle python developer с опытом создания desktop приложений и Telegram-ботов.",
    skills: [
      "Python",
      "Web",
      "Pandas",
      "Machine Learning",
      "Gitlab",
      "SQL"
    ]
  },
  {
    id: 2,
    name: "Anvarbek Xaydarov",
    role: "CTO | Full Stack",
    location: "Ташкент",
    description:
      "Full stack разработчик с большим опытом разработки web и mobile приложений.",
    skills: [
      "MongoDB",
      "TypeScript",
      "Linux",
      "Redux",
      "Python",
      "SEO"
    ]
  },

  {
    id: 3,
    name: "Samandar Abdullaev",
    role: "System Administrator",
    location: "Ташкент",
    description:
      "IT Specialist / System Administrator с опытом технической поддержки, ERP систем и администрирования сайтов.",
    skills: [
      "Linux",
      "Networking",
      "Server Administration",
      "Docker",
      "Git",
      "Security"
    ]
  },

  {
    id: 4,
    name: "Humoyun Mirzo Abdurasuljonov",
    role: "Frontend Developer",
    location: "Андижан",
    description:
      "Frontend разработчик с интересом к современным web-технологиям и созданию удобных пользовательских интерфейсов.",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Firebase"
    ]
  }
]