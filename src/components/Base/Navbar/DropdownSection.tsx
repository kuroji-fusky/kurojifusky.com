import React, { useContext } from "react"
import Link from "next/link"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { faPoo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DropdownContext } from "@/utils/Context"
import { NavItems as n } from "contents/NavItems"
import { NavLink } from "./NavLink"

interface DropdownListItemProps {
  name: string
  link: string
  icon?: IconDefinition
  description?: string
  gradStart?: string
  gradEnd?: string
  svg?: NonNullable<React.ReactElement>
}

// TEMPLATE
function DropdownListItem(props: DropdownListItemProps) {
  const { isExpanded } = useContext(DropdownContext)
  return (
    <div role="listitem">
      {props.description ? (
        <Link href={props.link} passHref>
          <a
            className="flex items-center gap-4 border rounded-md pl-5 pr-3 py-3"
            onClick={() => isExpanded(true)}
          >
            <div className="w-6 grid place-items-center">
              <FontAwesomeIcon icon={props.icon ?? faPoo} size="lg" />
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
    <div className="pt-1.5 pl-0 pr-7 py-6 duration-[310ms]">
      {props.heading && (
        <h2 className="relative uppercase text-2xl pb-2">
          <span className="gradient-header">{props.heading}</span>
        </h2>
      )}
      <div role="list" className="flex flex-col gap-y-2">
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
  return <DropdownSection heading="Portfolio" section={n.portfolio} />
}

export function More() {
  return <DropdownSection heading="More about this autist" section={n.autist} />
}
