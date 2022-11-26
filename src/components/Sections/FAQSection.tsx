import FAQ from "contents/FAQ"
import FAQItem from "../FAQItem"
import { HomeSection } from "./HomeSection"
import styles from "./sections.module.scss"

export function FAQSection() {
  return (
    <HomeSection className={styles["info-wrapper"]}>
      <h1 className={styles["info-heading"]}>Questions and Stuff</h1>
      <div className="w-full lg:w-[90%] xl:w-[75%] flex flex-col gap-y-3">
        {FAQ.map((item, i) => (
          <FAQItem key={i} question={item.q} answer={item.a} />
        ))}
      </div>
    </HomeSection>
  )
}
