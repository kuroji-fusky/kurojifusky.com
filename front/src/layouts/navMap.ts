import GalleryVertIcon from "~icons/lucide/gallery-vertical-end?raw";
import BookTextIcon from "~icons/lucide/book-text?raw";
import BookImageIcon from "~icons/lucide/book-image?raw";
import PawPrintIcon from "~icons/lucide/cat?raw";
import ShareIcon from "~icons/lucide/share-2?raw";

interface NavMap {
  heading: string;
  link: string;
  icon: astroHTML.JSX.Element;
  subitems?: ({
    link?: string;
    text?: string;
  } & {
    heading?: string;
  })[];
}

export const topNav: NavMap[] = [
  {
    heading: "Portfolio",
    link: "/portfolio",
    icon: GalleryVertIcon,
    subitems: [
      { link: "/portfolio/category/software", text: "Software" },
      { link: "/portfolio/category/videos", text: "Videos" },
      { link: "/portfolio/category/others", text: "Others" },
      { heading: "Featured" },
      { link: "/portfolio/woah", text: "Flinky" },
      { link: "/portfolio/woah", text: "SponsorExplorer" },
      { link: "/portfolio/woah", text: "Kitstory" },
    ],
  },
  {
    heading: "Blog",
    link: "/blog",
    icon: BookTextIcon,
    subitems: [
      { link: "/blog/case-studies", text: "Case Studies" },
      { heading: "Category" },
      { link: "/blog/category/engineering", text: "Engineering" },
      { link: "/blog/category/ui-ux-design", text: "UI and Design" },
      { link: "/blog/category/others", text: "Yapping" },
    ],
  },
  {
    heading: "Artworks",
    link: "/artworks",
    icon: BookImageIcon,
    subitems: [
      { link: "/#", text: "Filters" },
      { link: "/artworks/character/kuro", text: "Kuro" },
      { link: "/artworks/character/kinter", text: "Kinter" },
    ],
  },
  {
    heading: "About me",
    icon: PawPrintIcon,
    link: "/about",
  },
  {
    heading: "Socials",
    icon: ShareIcon,
    link: "/socials",
  },
];

export const footerNav: NavMap["subitems"] = [
  { text: "Sitemap", link: "/#" },
  { text: "Contact", link: "/#" },
  { text: "View sauce code", link: "https://github.com/kuroji-fusky/kurojifusky.com" },
  { text: "View site analytics", link: "/#" },
];
