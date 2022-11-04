export interface Components {
  children: React.ReactNode
  style: React.CSSProperties
  className: string
  id: string
}

export interface GenericInfo {
  title: string
  name: string
  link: string
  description: string
  img: string
}

// ======================
// Type mutations
export type ChildrenOnly = Pick<Partial<Components>, "children">
export type NameLinkOnly = Pick<GenericInfo, "name" | "link">
export type ContainerAlias = Pick<
  Partial<GenericInfo>,
  "title" | "description"
> &
  Omit<Partial<Components>, "id">
