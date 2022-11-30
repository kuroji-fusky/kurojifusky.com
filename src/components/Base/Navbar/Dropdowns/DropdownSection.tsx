import React from "react"
import { NavItems as section } from "contents/NavItems"
import { DropdownListItem } from "./DropdownListItem"
import styles from "./Dropdown.module.scss"

interface IDropdownSection {
  heading?: string
  section: any[]
}

function DropdownSection(props: IDropdownSection) {
  return (
    <div className={styles["section"]}>
      {props.heading && (
        <h2 className="relative uppercase text-2xl pb-2">
          <span className="gradient-header">{props.heading}</span>
        </h2>
      )}
      <div role="list" className={styles["block-list"]}>
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
  return <DropdownSection section={section.summary} />
}

export function Portfolio() {
  return (
    <DropdownSection heading="Creative Works" section={section.portfolio} />
  )
}

export function More() {
  return <DropdownSection heading="More" section={section.autist} />
}
