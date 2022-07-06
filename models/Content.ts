import { ProjectArrayProps } from "./Interfaces"

export const socials = [
  { icon: "youtube", link: "https://youtube.com/c/skepfusky97" },
  { icon: "twitter", link: "https://twitter.com/skepfuskyjs" },
  { icon: "instagram", link: "https://instagram.com/skepfusky" },
  { icon: "github", link: "https://github.com/skepfusky" },
  {
    icon: "spotify",
    link: "https://open.spotify.com/artist/3fouosCOFa1ykd6j9DZkWl?si=byCWjlfqR3OXDiGTiuCpqA",
  },
  {
    icon: "itunes-note",
    link: "https://music.apple.com/us/artist/kokoro-husky/1521326000",
  },
  { icon: "soundcloud", link: "https://soundcloud.com/kokoro-husky-mixtapes" },
]

export const portfolio = [
  {
    emoji: "🧑‍💻",
    link: "/projects",
    title: "Projects",
    description: "Projects that I'm currently working on or have completed!",
  },
  {
    emoji: "💿",
    link: "/discography",
    title: "Discography",
    description: "High-quality music lol",
  },
  {
    emoji: "🎥",
    link: "/content",
    title: "Videos",
    description: "Videos and other content that I've made!",
  },
  {
    emoji: "📝",
    link: "/blog",
    title: "Blog",
    description: "Blog about programming and other stuff, I guess lol",
  },
  {
    emoji: "⚙️",
    link: "/tools",
    title: "Tools",
    description: "See the tools and technologies I use!",
  },
  {
    emoji: "🦊",
    link: "/about",
    title: "About Me",
    description: "More about me, my resume, and some le epic moments",
  },
]

export const projects: ProjectArrayProps[] = [
  {
    title: "Fren Time Tracker",
    description:
      "Track your friends' time if you live from the other side of the planet",
    techStack: ["python-plain"],
    githubRepo: "skepfusky/fren-time-tracker",
    // websiteUrl: "",
  },
  {
    title: "Scammerino",
    description: "A bot that automatically sends you messages to scam you",
    techStack: ["vuejs-plain", "electron-original"],
    githubRepo: "skepfusky/scammerino",
    // websiteUrl: "",
  },
  {
    title: "Paco Drawing Stats",
    description: "A bot that automatically sends you messages to scam you",
    techStack: [
      "nextjs-plain",
      "sass-plain",
      "tailwindcss-plain",
      "python-plain",
      "fastapi-plain",
    ],
    githubRepo: "skepfusky/paco-drawing-stats",
    // websiteUrl: "",
  },
  {
    title: "The Crimson Paw",
    description: "A bot that automatically sends you messages to scam you",
    techStack: ["python-plain"],
    githubRepo: "skepfusky/The-Crimson-Paw",
    // websiteUrl: "",
  },
  {
    title: "Tungsten",
    description: "A bot that automatically sends you messages to scam you",
    techStack: ["nuxtjs-plain", "tailwindcss-plain", "sass-plain"],
    githubRepo: "skepfusky/tungsten",
    // websiteUrl: "",
  },
  {
    title: "Majira VS Code Theme",
    description: "A bot that automatically sends you messages to scam you",
    techStack: ["vscode-plain"],
    githubRepo: "skepfusky/majira-vscode-theme",
    // websiteUrl: "",
  },
  {
    title: "MyFursona",
    description: "A bot that automatically sends you messages to scam you",
    techStack: ["nextjs-plain", "sass-plain", "fastify-plain"],
    githubRepo: "MyFursona-Projects/MyFursona",
    // websiteUrl: "",
  },
  {
    title: "Searchpets",
    description: "A bot that automatically sends you messages to scam you",
    techStack: [
      "nextjs-plain",
      "sass-plain",
      "tailwindcss-plain",
      "python-plain",
      "fastapi-plain",
    ],
    githubRepo: "OpenFurs/searchpets",
    // websiteUrl: "",
  },
]
