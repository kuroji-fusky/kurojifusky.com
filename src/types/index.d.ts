declare interface Components {
  children: React.ReactNode
  style: React.CSSProperties
  className: string
  id: string
}

declare type ChildrenOnly = Pick<Partial<Components>, "children">

declare interface ISharedBtnProps {
  name?: string
  link?: string
  disabled?: boolean
  onClick?: () => void
}