import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faItunesNote,
	faSpotify,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";
import FooterList from "./FooterList";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
	return (
		<footer className="bg-slate-900 text-white">
			<div className={styles.wrapper}>
				<div className={styles.contents}>
					<FooterList
						title="Browse My Crap"
						linkItems={["/blog", "/projects", "/film", "/music", "/legacy"]}
						nameItems={[
							"Blog",
							"Projects",
							"Filmography",
							"Discography",
							"Legacy",
						]}
					/>
					<FooterList
						title="Projects"
						linkItems={[
							"/projects/tungsten",
							"/projects/pandapaco-art-stats",
							"/projects/searchpets",
						]}
						nameItems={[
							"Tungsten",
							"Paco Drawing Stats",
							"Searchpets",
						]}
					/>
					<section className="content-list">
						<div className="flex flex-col gap-y-2">
							<div className="flex gap-x-[1.15rem]">
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
							<div className="flex flex-col">
								<span className="text-base">
									Proudly built with <FontAwesomeIcon icon={faHeart} className="text-violet-600" style={{  marginInline: '4px' }} /> in{" "}
									<Link href="https://nextjs.org">
										<a className="link-cover__global">Next.js</a>
									</Link>
									,{" "}
									<Link href="http://github.com/skepfusky/skepfusky-website">
										<a className="link-cover__global">
											check out its source code here!
										</a>
									</Link>
								</span>
								<span className="text-base">
									&copy; 2014-{new Date().getFullYear()} skepfusky, all rights
									reserved.
								</span>
							</div>
						</div>
					</section>
				</div>
			</div>
		</footer>
	);
}
