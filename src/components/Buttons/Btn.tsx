import { SharedBtnProps } from "@/utils/Types"
import styles from "./Button.module.scss"

interface BtnProps extends SharedBtnProps {
  emojiFix?: boolean
}

export function Btn(props: BtnProps) {
  return (
    <button
      onClick={props.onClick}
      id={styles.style1}
      data-text={props.name}
      style={
        {
          "--text-padding-hover": !props.emojiFix
            ? "var(--default-btn)"
            : "var(--emoji-fix)"
        } as React.CSSProperties
      }
    >
      {props.name}
    </button>
  )
}
