import {
  faDiscord,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons"

const FursonaHero = [
  {
    img: "https://res.cloudinary.com/skepfusky-dookie/image/upload/w_720/v1662975456/fursonas/comm_for_davey_g2_i3nmhp.png",
    artist: "catastrophe#6282",
    social: faDiscord
  },
  {
    img: "https://res.cloudinary.com/skepfusky-dookie/image/upload/w_720/v1665117048/fursonas/blushy_virgin_trans_ebbkdj.png",
    artist: "me lol"
  },
  {
    img: "https://res.cloudinary.com/skepfusky-dookie/image/upload/v1665155943/fursonas/JAKEmegaSNAKE_l61xfu.png",
    artist: "JAKEmegaSNAKE",
    social: faDiscord
  },
  {
    img: "https://res.cloudinary.com/skepfusky-dookie/image/upload/c_crop,h_789,w_1395,x_491,y_0/v1665156704/fursonas/ZAMBOY_orig_u7xxed.png",
    artist: "ZAMBOYYT",
    social: faYoutube
  }
]

const HobbyItems = [
  {
    title: "Video editing & filmography",
    subtitle:
      "5+ years experience in Adobe products — Premiere Pro, After Effects, Audition, and Photoshop",
    description: (
      <>
        With nearly a decade of experience editing videos, migrating from Sony
        Vegas to Premiere Pro, and getting more into the VFX and filmography
        scene with complex motion graphics; it's safe to say that I have honed
        my video editing skills.
        <br />
        From making Minecraft videos, to SFM animations, and to vlogs and other
        stuff!
      </>
    ),
    link: "#"
  },
  {
    title: "Music production",
    subtitle: "Fair amount of experience in FL Studio and Adobe Audition",
    description: (
      <>
        Going under the stage name <em>Kokoro Husky</em>, I do self-produce
        mostly indie and mostly experimental music - releasing 2 albums and 5
        EPs since 2017!
      </>
    ),
    linkName: "View Discography",
    link: "#"
  },
  {
    title: "Web design & web development",
    subtitle:
      "Fair amount of back-end development, Intermediate experience in ES6 JavaScript and TypeScript",
    description: (
      <>
        A recent interest of mine that has taken me over a year to get decent
        grasp at in terms of design and fair understanding of back-end
        development.
      </>
    ),
    link: "#"
  },
  {
    title: "UI/UX design",
    description: (
      <>
        I've been alawys entrigued with user interfaces since at a young age,
        with every single detail of it - including its functionality.
      </>
    )
  }
]

const HobbySubsectionItems = [
  {
    title: "Data science",
    description: (
      <>
        Along side web dev, I've a niche for visual graphs despite being bad at
        math that I decided to take data science with Python.
      </>
    )
  },
  {
    title: "Draw furries (kinda)",
    description: (
      <>
        Although yes I can <i>technically</i> draw, but only on the head, and
        I'm bad at everything else because I'm not a professional artist by any
        means lol
      </>
    )
  }
]

const VideoItems = [
  {
    title: "YTPs",
    description: <>One of the dumbest things I've put a lot of effort in</>,
    id: "7ubbQKBQyg4",
    cardTitle: "YouTube Poops",
    cardDesc: "Yeah this is dumb lmao"
  },
  {
    title: "Vlogs/IRL Edits",
    description: <>Vlogs and edits during vacations or my senior years</>,
    id: "WfeLfeTvf9E",
    cardTitle: "Vlogs & Edits",
    cardDesc: "Stuff for family vacations and other stuff"
  },
  {
    title: "Music videos",
    description: <>Music videos from my shitty music lol</>,
    id: "Z2KV_Lag7bE",
    cardTitle: "Music Videos",
    cardDesc: "Something to accompany to my music works, I guess lol"
  },
  {
    title: "School projects",
    description: <>Some school projects also from my high school years</>,
    id: "zIPay0PwumY",
    videoTitle: '"Tourism Video" School Project',
    cardTitle: "School projects",
    cardDesc:
      "These are videos that I've made for end of the year highlights or just group projects I've submitted"
  }
]

export { FursonaHero as sonas, HobbyItems as hobbies, VideoItems as videos }
