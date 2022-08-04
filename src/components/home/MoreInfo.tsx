import styles from "@/styles/MoreInfo.module.scss"

export default function MoreInfo() {
  return (
    <section className={styles.divider} aria-label="idk lol">
      <div className={styles.wrapper}>
        <h2 className="mt-8 mb-2">More stuff</h2>
        <p className="text-lg w-[80%]">
          I do most of my days writing code (sometimes dancing like an idiot),
          but if I've gotten exhausted someday, I can always go
          back to editing videos or probably drop a new single, who knows?
        </p>
      </div>
    </section>
  )
}
