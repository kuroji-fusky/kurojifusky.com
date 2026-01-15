import GalleryVertIcon from "~icons/lucide/gallery-vertical-end?raw"
import BookTextIcon from "~icons/lucide/book-text?raw"
import BookImageIcon from "~icons/lucide/book-image?raw"
import PawPrintIcon from "~icons/lucide/cat?raw"
import ShareIcon from "~icons/lucide/globe?raw"

interface NavMap {
  heading: string
  link: string
  icon: astroHTML.JSX.Element
  subitems?: Array<
    | { link: string; text: string; props?: Partial<{ notranslate: boolean }> }
    | { heading?: string }
  >
}

export const topNav: NavMap[] = [
  {
    heading: "Portfolio",
    link: "/portfolio",
    icon: GalleryVertIcon,
    subitems: [
      { heading: "Category" },
      { link: "/portfolio/dev", text: "Dev" },
      { link: "/portfolio/videos", text: "Videos" },
      { link: "/portfolio/legacy", text: "Legacy" },
    ]
  },
  {
    heading: "Blog",
    link: "/blog",
    icon: BookTextIcon,
    subitems: [
      { link: "/case-studies", text: "Case Studies" },
      { heading: "Category" },
      { link: "/blog/category/engineering", text: "Engineering" },
      { link: "/blog/category/ux-design", text: "UX and Design" },
      { link: "/blog/category/others", text: "Others" },
      { heading: "More" },
      { link: "/dream-journal", text: "Dream Journal" },
    ],
  },
  {
    heading: "Artworks",
    link: "/artworks",
    icon: BookImageIcon,
    subitems: [
      { heading: "Characters" },
      { link: "/character/kuro", text: "Kuro" },
      { link: "/character/kinter", text: "Kinter" }
    ]
  },
  {
    heading: "About Me",
    icon: PawPrintIcon,
    link: "/about",
    subitems: [
      { link: "/branding", text: "Branding" },
      { link: "/what-is-a-fusky", text: "What Is A Fusky?" },
      { heading: "Lore" },
      { link: "/about/timeline", text: "Timeline" },
      { link: "/in-the-making", text: "In The Making" },
    ]
  },
  {
    heading: "Socials",
    icon: ShareIcon,
    link: "/socials"
  }
]

export const footerNav = [
  { text: "sitemap.xml", link: "/sitemap.xml" },
  { text: "Contact", link: "/#" },
  { text: "View sauce code", link: "https://github.com/kuroji-fusky/kurojifusky.com" },
  { text: "View site analytics", link: "/#" },
] satisfies NavMap["subitems"];
