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
    image: "/static/projects/time.jpg",
    title: "Fren Time Tracker",
    description:
      "Track your friends' time if you live from the other side of the planet",
    techStack: ["nextjs-plain", "typescript-plain", "electron-original"],
    githubRepo: "skepfusky/fren-time-tracker",
  },
  {
    title: "Scammerino",
    description:
      "Play with scammers' feelings with a game of Bingo or rating their patience",
    techStack: ["vuejs-plain", "typescript-plain", "electron-original"],
    githubRepo: "skepfusky/scammerino",
  },
  {
    image: "/static/projects/paco-stats-2022.png",
    title: "Paco Drawing Stats",
    description:
      "A repository that collects a bunch drawing data from Paco Panda, written in FastAPI and Next.js",
    techStack: [
      "nextjs-plain",
      "sass-plain",
      "typescript-plain",
      "tailwindcss-plain",
      "python-plain",
      "fastapi-plain",
    ],
    githubRepo: "skepfusky/paco-drawing-stats",
    // websiteUrl: "",
  },
  {
    image: "/static/projects/crimson-paw-icon.png",
    title: "The Crimson Paw",
    description: "Moderation bot for The Bad Guys servers written in Python",
    techStack: ["python-plain"],
    githubRepo: "skepfusky/The-Crimson-Paw",
  },
  {
    title: "Tungsten",
    description: "[information classified]",
    techStack: [
      "nuxtjs-plain",
      "typescript-plain",
      "tailwindcss-plain",
      "sass-plain",
    ],
    githubRepo: "skepfusky/tungsten",
    // websiteUrl: "",
  },
  {
    title: "Majira VS Code Theme",
    description:
      "Increase your coding productivity by 69% with this beautiful theme!",
    techStack: ["vscode-plain"],
    githubRepo: "skepfusky/majira-vscode-theme",
    // websiteUrl: "",
  },
  {
    title: "MyFursona",
    description: "An open source project where you an manage your fursona(s)",
    techStack: ["nextjs-plain", "sass-plain", "typescript-plain"],
    githubRepo: "MyFursona-Projects/MyFursona",
    websiteUrl: "https://myfursona.art",
  },
  {
    image: "/static/projects/searchpets-peanut-transparent.png",
    title: "Searchpets",
    description:
      "A website that searches characters from a furry comic, Housepets!",
    techStack: [
      "nextjs-plain",
      "typescript-plain",
      "sass-plain",
      "tailwindcss-plain",
      "python-plain",
      "fastapi-plain",
    ],
    githubRepo: "OpenFurs/searchpets",
    websiteUrl: "https://searchpets.xyz",
  },
]
