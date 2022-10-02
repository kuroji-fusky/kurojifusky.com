import Image from "next/image";
import { BtnLink } from "../Buttons";
import Backdrop from "../Backdrop";
import styles from "./Hero.module.scss";
import backdropStyles from "../Backdrop/Backdrop.module.scss";

export default function Hero() {
  return (
    <>
      <Backdrop className={backdropStyles["heading-left"]} />
      <Backdrop className={backdropStyles["heading-right"]} />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles["gradient-wm-wrapper"]}>
            Hi, I'm&nbsp;
            <span>
              <span className={styles["gradient-wm"]}>skepfusky</span>!
            </span>
          </h2>
          <h3 className={styles.subheading}>
            A 20-year-old self-taught and self-employed hobbyist from the
            Philippines
          </h3>
          <div role="list" className="flex flex-wrap flex-col gap-x-4 gap-y-3 md:flex-row md:w-auto w-[75%] text-base lg:text-lg">
            <BtnLink link="/portfolio" name="🗂️ Portfolio" />
            <BtnLink link="/fursona" name="🦊 Fursona" />
            <BtnLink link="#" name="🧑‍💻 About this idiot" />
          </div>
        </div>
        <div className={styles.img}>
          <Image
            src="https://res.cloudinary.com/skepfusky-dookie/image/upload/w_1000/v1662975456/comm_for_davey_g2_i3nmhp.png"
            alt="skepfusky"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </>
  );
}
