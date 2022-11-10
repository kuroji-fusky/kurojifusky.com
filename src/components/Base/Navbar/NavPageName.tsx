import { useContext } from "react"
import { useRouter } from "next/router"
import { NavbarContext } from "@/utils/Context"

export default function NavPageName() {
	const { pageName } = useContext(NavbarContext)
  const router = useRouter()
  const homePage = router.pathname !== "/"

  return homePage ? (
    <span className="pl-1.5 relative z-3">{pageName}</span>
  ) : null
}
