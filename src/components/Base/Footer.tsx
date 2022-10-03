import Backdrop from "../Backdrop";
import backdropStyles from "../Backdrop/Backdrop.module.scss";
import styles from "./Base.module.scss";

export default function Footer() {
  return (
    <footer>
      <div className={styles["footer-contents"]}>
        <span id="copyright" className="text-sm">
          {`©  2014-${new Date().getFullYear()} Kerby Keith Aquino`}
        </span>
      </div>
      <div id={styles["backdrop-container"]}>
        <Backdrop className={backdropStyles["footer-center"]} />
      </div>
    </footer>
  );
}
