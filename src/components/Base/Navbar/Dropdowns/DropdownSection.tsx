import React from "react"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { NavItems as n } from "contents/NavItems"
import { DropdownListItem } from "./DropdownListItem"

export interface DropdownListItemProps {
  name: string
  link: string
  icon: IconDefinition
  description?: string
  gradStart?: string
  gradEnd?: string
  svg?: NonNullable<React.ReactElement>
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
