import { useRouter } from "next/router"
import s from "./footer.module.scss"

export function Footer() {
  const router = useRouter()
  const hideFooter = router.pathname !== "/"
  const TEXT_COUNT = 12

  return hideFooter ? (
    <footer id={s["wrapper"]}>
      <div className={s["content-container"]}>
				<span>
				{`2014-${new Date().getFullYear()} Kerby Keith Aquino`}
				</span>
				<div className={s["social-row"]}>
					social
				</div>
			</div>
      <div id={s["loop-strip-container"]} aria-hidden>
        <div className={s["text-strip"]}>
          {[...Array(TEXT_COUNT)].map((_, i) => (
            <span key={i} className={s["text-loop-item"]}>
              kuroji fusky
            </span>
          ))}
        </div>
      </div>
    </footer>
  ) : null
}
