import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faInstagram,
  faYoutube,
  faTwitter,
  faSpotify,
  faItunesNote,
  faSoundcloud
} from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
import styles from "@/styles/Footer.module.scss"
import Image from "next/image"

export default function Footer() {
  const socialIcons = [
    { icon: faYoutube, link: "https://youtube.com/c/skepfusky97" },
    { icon: faTwitter, link: "https://twitter.com/skepfuskyjs" },
    { icon: faInstagram, link: "https://instagram.com/skepfuskyjs" },
    { icon: faGithub, link: "https://github.com/skepfusky" },
    {
      icon: faSoundcloud,
      link: "https://soundcloud.com/kokoro-husky-mixtapes"
    },
    {
      icon: faSpotify,
      link: "https://open.spotify.com/artist/3fouosCOFa1ykd6j9DZkWl?si=byCWjlfqR3OXDiGTiuCpqA"
    },
    {
      icon: faItunesNote,
      link: "https://music.apple.com/us/artist/kokoro-husky/1521326000"
    }
  ]

  return (
    <div className={styles.root}>
      <footer className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.left}>
            {socialIcons.map(({ icon, link }) => (
              <Link key={link} href={link} passHref>
                <a target="_blank">
                  <FaIcon icon={icon} />
                </a>
              </Link>
            ))}
          </div>
          <div className={styles.right}>
            <div className={styles["link-row"]}>
              <Link href="/status">
                <a className="anchor">API Status</a>
              </Link>
              <Link href="/copyright-notice">
                <a className="anchor">Copyright</a>
              </Link>
              <Link href="/contact">
                <a className="anchor">Contact</a>
              </Link>
            </div>
            <span>
              &copy; 2014-{new Date().getFullYear()} Fusky N Co., LLC. Written
              in{" "}
              <Link href="https://nextjs.org" passHref>
                <a className="anchor">Next.js</a>
              </Link>
              !
            </span>
          </div>
        </div>
      </footer>
      <div className={styles["peek-a-boo"]}>
        <Link href="https://pat-the-cutie.skepfusky.xyz" passHref>
          <a className={styles.cutie}>
            <Image
              alt="woah a cutie"
              layout="fill"
              src="/static/fursonas/07-transparent.png"
            />
          </a>
        </Link>
      </div>
    </div>
  )
}