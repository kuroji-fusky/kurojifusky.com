import Link from "next/link"

interface LinkUnderlineProps extends Pick<Components, "className">, ISharedBtnProps {
	name?: string
	link?: string
  children: string
  external: boolean
}

export function LinkUnderline(props: Partial<LinkUnderlineProps>) {
  return (
    <Link href={props.link ?? ""} passHref>
      <a
        className={`anchor-underline text-sona-borahaealt-200 inline-block relative w-fit
				hover:text-sona-borahaealt-300
				before:content-[''] before:bg-sona-borahaealt-300 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px]
				${props.className}`}
        onClick={props.onClick}
        target={!props.external ? undefined : "_blank"}
        rel={!props.external ? undefined : "noopener noreferrer"}
      >
        {props.name ?? props.children}
      </a>
    </Link>
  )
}
