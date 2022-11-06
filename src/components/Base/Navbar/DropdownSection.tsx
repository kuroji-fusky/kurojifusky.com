import { NavItems as n, NavItems } from "contents/NavItems"
import Link from "next/link"
import React from "react"
import { NavLink } from "./NavLink"

interface DropdownListItemProps {
  name: string
  link: string
  description?: string
  gradStart?: string
  gradEnd?: string
  svg?: NonNullable<React.ReactElement>
}

// TEMPLATE
function DropdownListItem(props: DropdownListItemProps) {
  return (
    <div role="listitem">
      {props.description ? (
        <Link href={props.link} passHref>
          <a>
            <div>logo</div>
            <div>
              {props.name}
              {props.description}
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
  heading: string
  section: any[]
}

function DropdownSection(props: IDropdownSection) {
  return (
    <div className="xl:pt-0 pt-6 pl-0 pr-7 py-6 duration-[310ms]">
      <h2 className="relative uppercase text-2xl pb-2">
        <span className="gradient-header">{props.heading}</span>
      </h2>
      <div role="list">
        {props.section?.map((item, i) => (
          <DropdownListItem
            key={i}
            link={item.link}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export function Summary() {
  return <DropdownSection heading="Summary" section={n.summary} />
}

export function Portfolio() {
  return <DropdownSection heading="Portfolio" section={n.portfolio} />
}

export function More() {
  return <DropdownSection heading="More about this autist" section={n.autist} />
}
