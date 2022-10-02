import Link from "next/link";
import styles from "./Button.module.scss";
import { SharedBtnProps } from "./SharedBtnProps";

export function BtnLink(props: SharedBtnProps) {
  return (
    <Link href={props.link}>
      <a id={styles.style1} data-text={props.name}>
        {props.name}
      </a>
    </Link>
  );
}
