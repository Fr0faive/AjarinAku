import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebook,  faInstagram,  faSquareXTwitter} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-white text-neutral-content">
      <aside>
        <img src="assets/ajarinaku.svg" alt="" />
      </aside>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FontAwesomeIcon icon={faSquareXTwitter} />
          </a>
          <a>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
