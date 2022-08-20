declare interface INavItemProps {
  link: string
  name: string
}

declare interface IHobbiesCardProps {
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

declare interface IWhatsMadeItemProps {
  icon: string
  name: string
  link: string
}

declare interface IHeaderHeroItemProps extends ILayoutProps {
  wrap?: boolean
}
