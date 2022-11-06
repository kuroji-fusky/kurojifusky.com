const dirParser = (name: string) => {
  const regexParse = name.toLowerCase().replace(/\s/g, "-")

  return {
    link: `/${regexParse}`,
    name: name
  }
}

export const NavItems = {
  summary: [
    {
      link: "/knowledge",
      name: "Knowledge Base",
      description: "Stuff I know about lol"
    },
    {
      link: "/portfolio",
      name: "Portfolio",
      description: "My crappy projects"
    },
    { link: "/blog#", name: "Blogs", description: "Sharing my sad life to people" },
    { link: "/about", name: "About", description: "A big idiot" }
  ],
  portfolio: [
    { link: "#", name: "Projects I've Contributed" },
    { link: "#", name: "Dev Projects" },
    { link: "#", name: "Filmography" },
    { link: "#", name: "Discography" },
    { link: "#", name: "Archived works" }
  ],
  autist: [dirParser("Timeline"), dirParser("Fursona"), dirParser("Artworks")]
}
