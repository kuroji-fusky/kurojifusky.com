import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import styles from "@/styles/base/Footer.module.scss"
import Image from "next/image"
import { socials } from "@/utils/Contents"

export default function Footer() {
  return (
    <div className={styles.root}>
      <footer className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.left}>
            <span>
              &copy; 2014-{new Date().getFullYear()} Fusky N Co., LLC. Site
              written in{" "}
              <Link href="https://nextjs.org" passHref>
                <a className="anchor">Next.js</a>
              </Link>
              !
            </span>
          </div>
          <div className={styles.right}>
            {socials.map(({ icon, link }) => (
              <Link key={link} href={link} passHref>
                <a target="_blank">
                  <FaIcon icon={icon} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </footer>
      <div className={styles["peek-a-boo"]}>
        <Link href="https://www.youtube.com/watch?v=WATSk1MEm40" passHref>
          <a className={styles.cutie}>
            <Image
              alt=""
              layout="fill"
              loading="lazy"
              src="/static/fursonas/07-transparent.png"
            />
          </a>
        </Link>
      </div>
    </div>
  )
}
