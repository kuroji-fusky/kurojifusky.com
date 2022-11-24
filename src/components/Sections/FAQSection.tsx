import FAQ from "contents/FAQ"
import FAQItem from "../FAQItem"
import { HomeSection } from "./HomeSection"

export function FAQSection() {
  return (
    <HomeSection id="faq" className="flex flex-col items-center gap-y-10 py-12">
      <h1 className="text-4xl xl:text-5xl">Questions and Stuff</h1>
      <div className="w-full lg:w-[90%] xl:w-[75%] flex flex-col gap-y-3">
        {FAQ.map((item, i) => (
          <FAQItem key={i} question={item.q} answer={item.a} />
        ))}
      </div>
    </HomeSection>
  )
}
