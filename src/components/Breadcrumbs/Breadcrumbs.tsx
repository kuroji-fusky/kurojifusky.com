import { useRouter } from "next/router"
import { LinkUnderline } from "../Links"

interface BreadcrumbProps {
  rootDir?: string
  lists: Array<{
    link: string
    name: string
  }>
}

export function Breadcrumbs(props: BreadcrumbProps) {
  const router = useRouter()

  return (
    <nav>
      <ul className="flex gap-2.5">
        {props.lists.map((item, index) => (
          <li key={index}>
            {router.pathname !== props.rootDir ?? "" + item.link ? (
              <LinkUnderline
                name={item.name}
                link={props.rootDir ?? "" + item.link}
              />
            ) : (
              <span>{item.name}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
