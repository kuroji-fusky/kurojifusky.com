import React, { useContext } from "react"
import Link from "next/link"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { isExpandedOnly, NavbarContext } from "contexts"
import { NavItems as n } from "contents/NavItems"
import { NavLink } from "./NavLink"
import { useRouter } from "next/router"

interface DropdownListItemProps {
  name: string
  link: string
  icon: IconDefinition
  description?: string
  gradStart?: string
  gradEnd?: string
  svg?: NonNullable<React.ReactElement>
}

// TEMPLATE
function DropdownListItem(props: DropdownListItemProps) {
  const router = useRouter()

  const currentDir = router.pathname === props.link

  const { isExpanded } = useContext(NavbarContext) as isExpandedOnly
  return (
    <div role="listitem">
      {props.description ? (
        <Link href={props.link} passHref>
          <a
            className="group flex items-center gap-4 rounded-md pl-5 pr-3 py-3"
            onClick={() => isExpanded(true)}
          >
            <div
              className={`border-2 rounded-md p-4 aspect-square w-[3.5rem] grid place-items-center group-hover:border-sona-borahae-200 ${
                currentDir && "!border-sona-borahae-400"
              }`}
            >
              <FontAwesomeIcon icon={props.icon} />
            </div>
            <div>
              <strong>{props.name}</strong>
              <div className="text-sm">{props.description}</div>
            </div>
          </a>
        </Link>
      ) : (
        <NavLink link={props.link} name={props.name} />
      )}
    </div>
  )
}

interface IDropdownSection {
  heading?: string
  section: any[]
}

function DropdownSection(props: IDropdownSection) {
  return (
    <div
      id="dropdown-section"
      className="pt-1.5 pl-0 pr-7 py-6 duration-[310ms]"
    >
      {props.heading && (
        <h2 className="relative uppercase text-2xl pb-2">
          <span className="gradient-header">{props.heading}</span>
        </h2>
      )}
      <div role="list" className="prevent-blocked-list">
        {props.section?.map((item, i) => (
          <DropdownListItem
            key={i}
            link={item.link}
            name={item.name}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export function Summary() {
  return <DropdownSection section={n.summary} />
}

export function Portfolio() {
  return <DropdownSection heading="Creative Works" section={n.portfolio} />
}

export function More() {
  return <DropdownSection heading="More" section={n.autist} />
}
