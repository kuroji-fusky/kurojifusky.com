export interface ILayoutProps {
  children: React.ReactNode
}

export interface IContainerProps extends ILayoutProps {
  title?: string
  image?: string
  description?: string
  noWrapper?: true
}

export interface IProjectCardProps {
  title?: string
  description?: string
  image?: string
  link?: string
  repoLink?: string
  onClick?: () => void
}
