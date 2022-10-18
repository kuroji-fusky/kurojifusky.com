import Link from "next/link"

export default function HobbySticky(props: { active?: boolean }) {
  const hobbyItems = [
    "Overview",
    "Videos",
    "Music",
    "Projects",
    "Blog",
    "More About Me"
  ]

  return (
    <nav className="theme-transparent px-10 sticky top-[5rem] z-[10] py-7 mb-[7.5rem] backdrop-blur-xl bg-opacity-25">
      <ul className="flex justify-center gap-x-10 font-inter text-lg">
        {hobbyItems.map((items, index) => (
          <HobbyStickyItem
            key={index}
            name={items}
            link={`#${items.replace("s", "-").toLowerCase()}`}
          />
        ))}
      </ul>
    </nav>
  )
}

interface HobbyStickyItemProps {
  link?: string
  name?: string
}

export function HobbyStickyItem(props: HobbyStickyItemProps) {
  return (
    <li>
      <Link href={props.link ?? ""}>{props.name}</Link>
    </li>
  )
}
