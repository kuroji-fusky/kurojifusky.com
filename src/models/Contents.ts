import {
	ProjectCardProps,
	VideoItemProps
	// DiscographyItemProps
} from "./Interfaces"

export const projects: ProjectCardProps[] = [
	{
		img: "/static/projects/paco-yt-icon.jpg",
		projectTitle: "Paco Drawing Stats",
		description:
			"A repository that collects a bunch drawing data from Paco Panda, written in FastAPI and Next.js",
		pageLink: "/projects/pandapaco-drawing-stats",
		repoLink: "skepfusky/pandapaco-drawing-stats",
		techIcons: [
			"nextjs-plain",
			"typescript-plain colored",
			"python-plain colored",
			"fastapi-plain colored"
		]
	},
	{
		img: "/static/projects/searchpets-icon.png",
		projectTitle: "Searchpets!",
		description:
			"A website that searches characters from a furry comic, Housepets!",
		repoLink: "OpenFurs/searchpets",
		pageLink: "/projects/searchpets",
		extLink: "https://searchpets.xyz",
		techIcons: [
			"nextjs-plain",
			"typescript-plain colored",
			"python-plain colored",
			"flask-plain"
		]
	},
	{
		img: "/static/projects/majira-vscode.png",
		projectTitle: "Majira Strawberry VS Code Theme",
		description:
			"Increase your coding productivity by 69% with this beautiful theme!",
		repoLink: "skepfusky/majira-strawberry-vscode",
		techIcons: ["vscode-plain colored"]
	},
	{
		img: "/static/projects/scammerino-lol.jpg",
		projectTitle: "Scammerino",
		description:
			"Play with scammers' feelings with a game of Bingo or rating their patience",
		repoLink: "skepfusky/scammerino",
		techIcons: ["electron-original", "vuejs-plain", "typescript-plain colored"]
	},
	{
		img: "/static/projects/myfursona.png",
		projectTitle: "MyFursona",
		pageLink: "/projects/myfursona",
		description: "An open source project where you an manage your fursona(s)",
		repoLink: "MyFursona-Project/MyFursona",
		extLink: "https://www.myfursona.art",
		techIcons: ["nextjs-plain", "typescript-plain colored", "go-plain colored"]
	}
]

export const videos: VideoItemProps[] = [
	{
		id: "5SybfjVntTw",
		title: "DFC Day 2019 - School Edit",
		date: "Oct 4, 2019; Nov 9, 2019; Dec 12-13, 2019",
		description:
			"The highlights on my previous school DFCIS in 2019 - filmed on a Canon EOS M50 and GoPro."
	},
	{
		id: "zIPay0PwumY",
		title: "School Project - Philippine Tourism",
		date: "May 2019",
		description:
			"A school video project on Philippine tourism filmed at a skating rink and Diplomat Hotel."
	},
	{
		id: "Jiydcwo0CeI",
		title: "School Field Trip Edit (2018)",
		date: "May 2018",
		description:
			"A school field trip in 2018 filmed at Riverview Resort on a GoPro for the first time."
	},
	{
		id: "vioAgEgk2O0",
		title: "Solitude - Music Video",
		date: "April-May 2020",
		description:
			'Music video for "Solitude" recorded in the midst of the 2020 pandemic. Re-released in 2021.'
	},
	{
		id: "Z2KV_Lag7bE",
		title: "A New Beginning - Music Video",
		date: "Jan 2020; 2019",
		description:
			'Music video for "A New Beginning" from my debut self-produced album Horizon. Filmed sometime before the pandemic hit.'
	},
	{
		id: "4uUjRlgUEnY",
		title: "Itogon Vlog Edit",
		date: "May 2019",
		description: "Just a family vacation vlog edit in Itogon, Philippines."
	}
]
// export const music: DiscographyItemProps[] = []
