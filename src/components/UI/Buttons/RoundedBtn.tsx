import Link from "next/link"

interface RoundedBtnProps extends ISharedBtnProps {
  children?: NonNullable<React.ReactNode>
  external?: boolean
}

export function RoundedBtn(props: RoundedBtnProps) {
  return (
    <Link href={props.link ?? "#"}>
      <a
        className="h-full relative z-2 rounded-[10rem] flex flex-col gap-2 m-0.5 shadow-2xl hover:shadow-sona-royalblue-600
			bg-gradient-to-tr from-sona-borahae-500 to-sona-skycyan-700
			before:content-[''] before:absolute before:inset-0 before:hover:opacity-0 before:bg-sona-royalblue-800 before:-z-1 before:rounded-[10rem] transition-all duration-300 before:transition-all before:duration-300"
        role="button"
        target={!props.external ? undefined : "_blank"}
        rel={!props.external ? undefined : "noopener noreferrer"}
        onClick={props.onClick}
      >
        <div className="bg-borahae-dark px-5 py-2 rounded-[10rem] h-full m-[0.1rem] grid place-items-center select-none font-inter">
          {props.children}
        </div>
      </a>
    </Link>
  )
}
