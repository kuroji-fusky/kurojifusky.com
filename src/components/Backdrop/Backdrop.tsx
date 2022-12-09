import styles from "./Backdrop.module.scss"

export default function Backdrop(
  props: { fixed?: boolean } & Pick<Components, "className">
) {
  return (
    <div
      aria-hidden
      className={`${props.className} ${
        styles[props.fixed ? "bd-fixed" : "bd-absolute"]
      }`}
    ></div>
  )
}
