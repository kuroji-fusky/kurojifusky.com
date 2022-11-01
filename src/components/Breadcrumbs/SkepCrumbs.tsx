import { Breadcrumbs } from "./Breadcrumbs"

export function SkepCrumbs() {
  return (
    <Breadcrumbs
      lists={[
        { link: "/portfolio", name: "Portfolio" },
        { link: "/resume", name: "Resume" },
        { link: "/portfolio", name: "Portfolio" }
      ]}
    />
  )
}
