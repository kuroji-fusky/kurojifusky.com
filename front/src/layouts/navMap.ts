import GalleryVertIcon from "~icons/lucide/gallery-vertical-end?raw"
import BookTextIcon from "~icons/lucide/book-text?raw"
import BookImageIcon from "~icons/lucide/book-image?raw"
import PawPrintIcon from "~icons/lucide/cat?raw"
import ShareIcon from "~icons/lucide/globe?raw"

interface NavMap {
  heading: string
  link: string
  icon: astroHTML.JSX.Element
  subitems?: ({
    link?: string
    text?: string
  } | {
    heading?: string
  } & { props?: Partial<{ notranslate: boolean }> })[]
}

export const topNav: NavMap[] = [
  {
    heading: "Portfolio",
    link: "/portfolio",
    icon: GalleryVertIcon,
    subitems: [
      { heading: "Categories" },
      { link: "/portfolio/category/software", text: "Software" },
      { link: "/portfolio/category/videos", text: "Videos" },
      { link: "/portfolio/category/legacy", text: "Legacy" },
    ]
  },
  {
    heading: "Blog",
    link: "/blog",
    icon: BookTextIcon,
    subitems: [
      { link: "/blog/case-studies", text: "Case Studies" },
      { heading: "Category" },
      { link: "/blog/category/engineering", text: "Engineering" },
      { link: "/blog/category/ux-design", text: "UX and Design" },
      { link: "/blog/category/others", text: "Yapping" },
    ],
  },
  {
    heading: "Artworks",
    link: "/artworks",
    icon: BookImageIcon,
    subitems: [
      { heading: "Characters" },
      { link: "/artworks/character/kuro", text: "Kuro" },
      { link: "/artworks/character/kinter", text: "Kinter" }
    ]
  },
  {
    heading: "About me",
    icon: PawPrintIcon,
    link: "/about",
    subitems: [
      { link: "/about", text: "Index" },
      { link: "/what-is-a-fusky", text: "What's A Fusky?" },
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

export const footerNav: NavMap["subitems"] = [
  { text: "sitemap.xml", link: "/sitemap.xml" },
  { text: "Contact", link: "/#" },
  { text: "View sauce code", link: "https://github.com/kuroji-fusky/kurojifusky.com" },
  { text: "View site analytics", link: "/#" },
];
