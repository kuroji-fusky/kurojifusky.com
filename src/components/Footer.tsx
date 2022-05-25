import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faItunesNote,
	faSoundcloud,
	faSpotify,
	faTwitter,
	faYoutube
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
	return (
		<footer className="bg-neutral-900 text-white">
			<div className={styles.wrapper}>
				<div className={styles.contents}>
					<div className="flex gap-x-[1.5rem]">
						<Link href="https://youtube.com/skepfusky97">
							<a className={styles["social-icons"]} target="_blank">
								<FaIcon icon={faYoutube} />
							</a>
						</Link>
						<Link href="https://twitter.com/skepfuskyjs">
							<a className={styles["social-icons"]} target="_blank">
								<FaIcon icon={faTwitter} />
							</a>
						</Link>
						<Link href="https://instagram.com/skepfusky">
							<a className={styles["social-icons"]} target="_blank">
								<FaIcon icon={faInstagram} />
							</a>
						</Link>
						<Link href="https://github.com/skepfusky">
							<a className={styles["social-icons"]} target="_blank">
								<FaIcon icon={faGithub} />
							</a>
						</Link>
						<Link href="https://soundcloud.com/kokoro-husky-mixtapes">
							<a className={styles["social-icons"]} target="_blank">
								<FaIcon icon={faSoundcloud} />
							</a>
						</Link>
						<Link href="https://open.spotify.com/artist/3fouosCOFa1ykd6j9DZkWl?si=byCWjlfqR3OXDiGTiuCpqA">
							<a className={styles["social-icons"]} target="_blank">
								<FaIcon icon={faSpotify} />
							</a>
						</Link>
						<Link href="https://music.apple.com/us/artist/kokoro-husky/1521326000">
							<a className={styles["social-icons"]} target="_blank">
								<FaIcon icon={faItunesNote} />
							</a>
						</Link>
					</div>
					<div className="flex flex-col md:flex-row text-base justify-end gap-x-4">
						<span className="whitespace-nowrap">
							{"Proudly made with "}
							<FaIcon
								icon={faHeart}
								className="text-borahaealt-600"
								style={{ marginInline: "3px" }}
							/>
							{" in "}
							<Link href="https://nextjs.org">
								<a className="gradient-link">Next.js!</a>
							</Link>
						</span>
						<span className="whitespace-nowrap">
							&copy; 2014-{new Date().getFullYear()} Fusky & Co., LLC
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
