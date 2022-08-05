// Google tag stuff
declare interface IEventProps {
  action: string
  params: any
}

/*** Context ***/
declare type NavbarMobileContextType = {
  open: boolean
  isOpen: any
}

declare type NavbarScrollContextType = {
  scrolled: boolean
  isScrolled: any
}

/*** UI types ***/
declare interface ILayoutProps {
  children: React.ReactNode
}

declare interface IContainerProps extends ILayoutProps {
  title?: string
  image?: string
  description?: string
  noWrapper?: true
}

declare interface IOtherCardProps {
  title: string
  description: string
  image: string
}

declare interface IProjectCardProps {
  title?: string
  description?: string
  image?: string
  link?: string
  repoLink?: string
}

declare interface ITechItemProps {
  name: string
  image?: string
}
