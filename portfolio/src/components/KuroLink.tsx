import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"

export default function KuroLink({
  href,
  external,
  children,
  ...attrs
}: {
  href: string
  external?: boolean
  children?: React.ReactNode
} & Partial<Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, "itemType">>) {
  return (
    <Link
      href={href}
      target={!external ? "_blank" : undefined}
      {...attrs}
      className="group inline-flex gap-x-1 items-center flex-wrap"
    >
      <span
        data-children-wrapper=""
        className="relative 
        before:absolute before:left-0 before:-bottom-1 before:h-[0.1rem] before:bg-kuro-lavender-500 before:w-0 before:group-hover:w-full before:transition-[width] before:duration-200 before:ease-in-out before:z-10
        after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[0.1rem] after:bg-kuro-violet-800"
      >
        {children}
      </span>
      {external ? (
        <ArrowUpRightIcon
          size={21}
          className="transition-transform ease-in-out duration-200 group-hover:rotate-[45deg]"
        />
      ) : null}
    </Link>
  )
}
