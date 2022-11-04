export default function Backdrop(
  props: { fixed?: boolean } & Pick<Components, "className">
) {
  return (
    <div
      id="gradient-decorator"
      aria-hidden="true"
      className={`${props.className} ${
        props.fixed ? "fixed" : "absolute"
      } z-1 blur-[45px] rounded-full pointer-events-none`}
    ></div>
  )
}
