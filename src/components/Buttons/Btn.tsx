import { SharedBtnProps } from "./SharedBtnProps";
import styles from "./Button.module.scss";

interface BtnProps extends SharedBtnProps {
  onClick?: () => void;
}

export function Btn(props: BtnProps) {
  return (
    <button onClick={props.onClick} id={styles.style1} data-text={props.name}>
      {props.name}
    </button>
  );
}
