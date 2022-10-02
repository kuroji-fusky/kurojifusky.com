import styles from "./Backdrop.module.scss";

interface BackdropProps {
  className: string;
}

export default function Backdrop(props: BackdropProps) {
  return (
    <div
      aria-hidden="true"
      id={styles.provider}
      className={props.className}
    ></div>
  );
}
