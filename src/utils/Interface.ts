export interface ILayoutProps {
  children: React.ReactNode
}

export interface IContainerProps extends ILayoutProps {
  /**
   * @description Container that uses title, description for its `<meta>` tags
   * @see ILayoutProps
   */
  title?: string
  image?: string
  description?: string
}

export interface IProjectCardProps {
  title?: string
  description?: string
  image?: string
  link?: string
  repoLink?: string
}
