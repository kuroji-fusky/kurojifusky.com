const CLOUDINARY_URL =
	"https://res.cloudinary.com/skepfusky-dookie/image/upload/"

const HobbyItems = [
	{
		title: "Video editing & filmography",
		img: `${CLOUDINARY_URL}v1665554714/sf-website/Majira_dynamite_timeline_pytuws.png`,
		imgAlt:
			"Final timeline for *Majira Strawberry sings BTS' Dynamite*, finished on November 10, 2020",
		subtitle:
			"5+ years experience in Adobe products — Premiere Pro, After Effects, Audition, and Photoshop",
		description: `With nearly a decade of experience editing videos, migrating from Sony Vegas to Premiere Pro, and getting more into the VFX and filmography scene with complex motion graphics; it's safe to say that I have honed my video editing skills.\n From making Minecraft videos, to SFM animations, and to vlogs and other stuff!`,
		link: "#"
	},
	{
		title: "Music production",
		subtitle: "Fair amount of experience in FL Studio and Adobe Audition",
		description: `Going under the stage name *Kokoro Husky*, I do self-produce mostly indie and mostly experimental music - releasing 2 albums and 5 EPs since 2017!`,
		linkName: "View Discography",
		link: "#"
	},
	{
		title: "Web design & web development",
		img: `${CLOUDINARY_URL}v1666531239/sf-website/anb-raw-redesign_ime82w.png`,
		subtitle:
			"Fair amount of back-end development, Intermediate experience in ES6 JavaScript and TypeScript",
		description: `A recent interest of mine that has taken me over a year to get decent grasp at in terms of design and fair understanding of back-end development.`,
		link: "#"
	}
]

const HobbySubsectionItems = [
	{
		title: "Data science",
		description: `Along side web dev, I've a niche for visual graphs despite being bad at math that I decided to take data science with Python.
    `
	},
	{
		title: "Draw furries (kinda)",
		description: `Although yes I can *technically* draw, but only on the head, and I'm bad at everything else because I'm not a professional artist by any means lol`
	}
]

const VideoItems = [
	{
		title: "Vlogs/IRL Edits",
		description: `Vlogs and edits during vacations or my senior years`,
		id: "WfeLfeTvf9E",
		cardTitle: "Vlogs & Edits",
		cardDesc: "Stuff for family vacations and other stuff"
	},
	{
		title: "Music videos",
		description: `Music videos from my shitty music lol`,
		id: "Z2KV_Lag7bE",
		cardTitle: "Music Videos",
		cardDesc: "Something to accompany to my music works, I guess lol"
	},
	{
		title: "School projects",
		description: `Some school projects also from my high school years`,
		id: "zIPay0PwumY",
		videoTitle: '"Tourism Video" School Project',
		cardTitle: "School projects",
		cardDesc:
			"These are videos that I've made for end of the year highlights or just group projects I've submitted"
	}
]

const discography = [
	{
		name: "A New Life",
		release: "December 2021",
		image: `${CLOUDINARY_URL}/c_thumb,w_600/v1666532578/sf-website/album-covers/ALBUM_A-New-Life_bofney.png`,
		type: "Album"
	},
	{
		name: "Timeless",
		release: "September 2021",
		image: `${CLOUDINARY_URL}/c_thumb,w_600/v1666532462/sf-website/album-covers/Timeless_cover_nslh7n.png`,
		type: "Single"
	},
	{
		name: "Nostalgia",
		release: "April 2021",
		image: `${CLOUDINARY_URL}/v1666533285/sf-website/album-covers/EPnostalgia_ep2_vy2vxq.png`,
		type: "EP"
	},
	{
		name: "Sea of Clouds",
		release: "April 2021",
		image: `${CLOUDINARY_URL}/c_thumb,w_600/v1666532223/sf-website/album-covers/SINGLE_Sea-of-Clouds_cwkmyr.jpg`,
		type: "Single"
	},
	{
		name: "Utopian Dream",
		release: "March 2021",
		image: `${CLOUDINARY_URL}/c_thumb,w_600/v1666532225/sf-website/album-covers/SINGLE_Utopian_Dream_f7ntcd.jpg`,
		type: "Single"
	},
	{
		name: "Horizon",
		release: "March 2021",
		image: `${CLOUDINARY_URL}/c_thumb,w_600/v1666532325/sf-website/album-covers/ALBUM_Horizon_ph38oh.jpg`,
		type: "Album"
	},
	{
		name: "Origins (Remastered)",
		release: "January 2021",
		image: `${CLOUDINARY_URL}/c_thumb,w_600/v1666532192/sf-website/album-covers/SINGLE_Origins_remastered_ysuduh.png`,
		type: "Single"
	},
	{
		name: "Watch the Sunset",
		release: "September 2020",
		image: `${CLOUDINARY_URL}/c_thumb,w_600/v1666532221/sf-website/album-covers/SINGLE_Watch-the-Sunset__olffxd.png`,
		type: "Single"
	},
	{
		name: "Awaken",
		release: "2020",
		image: `${CLOUDINARY_URL}/v1666532288/sf-website/album-covers/SINGLE_Awaken_edaaep.png`,
		type: "Single"
	},
	{
		name: "Metallic Emperor",
		release: "2020",
		image: `${CLOUDINARY_URL}/c_thumb,w_600/v1666532402/sf-website/album-covers/Metallic_Emperor_single_cover_bhqvoi.png`,
		type: "Single"
	},
]

export { HobbyItems as hobbies, VideoItems as videos, discography }
