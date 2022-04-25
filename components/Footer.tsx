import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="my-0 mx-auto max-w-screen-2xl p-5">
        &copy; {new Date().getFullYear()} skepfusky, all rights reserved.

        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faTwitter} />
      </div>
    </footer>
  );
}
