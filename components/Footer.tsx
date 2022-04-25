import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="my-0 mx-auto max-w-screen-2xl p-5">
        <div className="flex justify-between items-center">
          <span>&copy; 2014-{new Date().getFullYear()} skepfusky, all rights reserved.</span>
          <div className="flex gap-x-6">
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <FontAwesomeIcon icon={faYoutube} size="lg" />
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </div>
        </div>
      </div>
    </footer>
  );
}
