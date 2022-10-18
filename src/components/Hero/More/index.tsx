import { LinkUnderline } from "@/components/Links"
import ClientSide from "@/utils/ClientSide"
import Script from "next/script"
import styles from "./More.module.scss"

export function More() {
  return (
    <section className={styles.wrapper}>
      <h1 className="text-center">What's Next?</h1>
      <p className="text-center">
        While I don't have a job, plus - I dropped out of college just to be
        couped up on a computer screen 24/7
        <br />
        If you happen to stumble upon my works, you can support my broke ass on{" "}
        <LinkUnderline link="https://www.ko-fi.com/skepfusky">Ko-Fi</LinkUnderline>!
      </p>
    </section>
  )
}
