import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faItunesNote,
	faSpotify,
	faTwitter,
	faYoutube
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
	return (
		<footer className="bg-slate-900 text-white">
			<div className={styles.wrapper}>
				<div className={styles.contents}>
					<div className="flex gap-x-[1.5rem]">
						<Link href="https://youtube.com/skepfusky97">
							<a className={styles["social-icons"]} target="_blank">
								<FontAwesomeIcon icon={faYoutube} />
							</a>
						</Link>
						<Link href="https://twitter.com/skepfuskyjs">
							<a className={styles["social-icons"]} target="_blank">
								<FontAwesomeIcon icon={faTwitter} />
							</a>
						</Link>
						<Link href="https://instagram.com/skepfusky">
							<a className={styles["social-icons"]} target="_blank">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</Link>
						<Link href="https://github.com/skepfusky">
							<a className={styles["social-icons"]} target="_blank">
								<FontAwesomeIcon icon={faGithub} />
							</a>
						</Link>
						<Link href="https://open.spotify.com/artist/3fouosCOFa1ykd6j9DZkWl?si=byCWjlfqR3OXDiGTiuCpqA">
							<a className={styles["social-icons"]} target="_blank">
								<FontAwesomeIcon icon={faSpotify} />
							</a>
						</Link>
						<Link href="https://music.apple.com/us/artist/kokoro-husky/1521326000">
							<a className={styles["social-icons"]} target="_blank">
								<FontAwesomeIcon icon={faItunesNote} />
							</a>
						</Link>
					</div>
					<div className="flex text-base justify-end gap-x-4">
						<span>
							{"Proudly made with "}
							<FontAwesomeIcon
								icon={faHeart}
								className="text-borahaealt-600"
								style={{ marginInline: "3px" }}
							/>
							{" in "}
							<Link href="https://nextjs.org">
								<a className="gradient-link">Next.js!</a>
							</Link>
						</span>
						{/* <span>
							<Link href="http://github.com/skepfusky/skepfusky-website">
								<a className="gradient-link">
									<FontAwesomeIcon icon={faCode} className="pr-1" size="sm" />
									Website source code
								</a>
							</Link>
						</span> */}
						<span>&copy; 2014-{new Date().getFullYear()} Fusky & Co., LLC</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
