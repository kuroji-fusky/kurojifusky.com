import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import styles from '../styles/Footer.module.scss';
import FooterList from './FooterList';

export default function Header() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className={styles.wrapper}>
        <div className={styles.contents}>
          <FooterList
            title="ass eater"
            linkItems={["/projects", "/works"]}
            nameItems={["Projects", "Works"]}
          />
          <FooterList
            title="Projects"
            linkItems={["/projects/readybot", "/projects/tungsten", "/projects/pandapaco-art-stats"]}
            nameItems={["ReadyBot", "Tungsten", "Paco Drawing Stats"]}
          />
        </div>
        <div className={styles["lower-third"]}>
          <span className="text-base">
            &copy; 2014-{new Date().getFullYear()} skepfusky, all rights
            reserved. Built in Next.js.{" "}
            <Link href="http://github.com/skepfusky/skepfusky-website">
              <a>
                source code lol
              </a>
            </Link>
          </span>
          <div className="flex gap-x-6">
            <Link href="https://github.com/skepfusky">
              <a className="text-white hover:text-gray-300" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Link>
            <Link href="https://youtube.com/skepfusky97">
              <a className="text-white hover:text-gray-300" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </Link>
            <Link href="https://twitter.com/skepfuskyjs">
              <a className="text-white hover:text-gray-300" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
