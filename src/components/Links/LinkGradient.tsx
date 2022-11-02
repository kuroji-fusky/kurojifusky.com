import { GenericInfo } from "@/utils/Types"
import Link from "next/link"

export function LinkGradient(props: Pick<GenericInfo, "link" | "name">) {
  return (
    <Link href={props.link ?? ""}>
      <a
        className="relative uppercase bg-clip-text font-bold hover:text-transparent
				bg-gradient-to-tr from-sona-royalblue-500 to-sona-borahaealt-400"
      >
        {props.name}
      </a>
    </Link>
  )
}
