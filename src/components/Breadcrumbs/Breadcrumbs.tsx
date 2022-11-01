import { useRouter } from "next/router"
import { LinkUnderline } from "../Links"

type BreadcrumbProps = {
  rootDir?: string
  lists: {
    link: string
    name: string
  }[]
}

export function Breadcrumbs({ lists, rootDir }: BreadcrumbProps) {
  const router = useRouter()

  return (
    <nav>
      <ul className="flex gap-2.5">
        {lists.map((item, index) => (
          <li key={index}>
            {router.pathname !== item.link ? (
              <LinkUnderline name={item.name} link={item.link} />
            ) : (
              <span>{item.name}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
