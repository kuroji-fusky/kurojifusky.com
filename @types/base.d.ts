declare interface ILayoutProps {
  children: React.ReactNode
}

declare interface IContainerProps extends ILayoutProps {
  title?: string
  image?: string
  description?: string
  wrap?: boolean
}

declare interface IComponentButtonProps extends ILayoutProps {
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  link?: string
  newTab?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
