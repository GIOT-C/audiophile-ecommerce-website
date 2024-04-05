import { Link } from "react-router-dom";
import footerStyles from "./Styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

interface PropsTypes {
  selectedMark: string | undefined;
  setSelectedMark: React.Dispatch<React.SetStateAction<string>> | undefined;
  handleNavigation: (nav: string) => void;
}

function Footer(props: PropsTypes) {
  return (
    <>
      <div className={footerStyles.parentContainer}>
        <div className={footerStyles.footerMainContainer}>
          <div className={footerStyles.aboutInformationContainer}>
            <div className={footerStyles.footerLine}></div>
            <Link
              to="/"
              className={footerStyles.siteName}
              onClick={() => props.handleNavigation("home")}
            >
              audiophile
            </Link>
            <p className={footerStyles.aboutText}>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className={footerStyles.copyRight}>
              Copyright 2024. All Rights Reserved
            </p>
            <p className={footerStyles.developer}>
              DEVELOPED BY <span>GIORGI OTARASHVILI</span>
            </p>
          </div>
          <div className={footerStyles.contactContainer}>
            <div className={footerStyles.subNavigationContainer}>
              <Link
                to="/"
                className={footerStyles.link}
                onClick={() => props.handleNavigation("home")}
              >
                HOME
              </Link>

              <Link
                to="/headphones"
                className={footerStyles.link}
                onClick={() => props.handleNavigation("headphones")}
              >
                HEADPHONES
              </Link>

              <Link
                to="/speakers"
                className={footerStyles.link}
                onClick={() => props.handleNavigation("speakers")}
              >
                SPEAKERS
              </Link>

              <Link
                to="/earphones"
                className={footerStyles.link}
                onClick={() => props.handleNavigation("earphones")}
              >
                EARPHONES
              </Link>
            </div>

            <div className={footerStyles.socialNetworks}>
              <a
                target="_blank"
                href="https://www.facebook.com/gio.otarashvili.75"
              >
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  className={footerStyles.faFacebook}
                />
              </a>

              <a target="_blank" href="https://github.com/GIOT-C">
                <FontAwesomeIcon
                  icon={faSquareXTwitter}
                  className={footerStyles.faSquareXTwitter}
                />
              </a>
              <a target="_blank" href="https://github.com/GIOT-C">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={footerStyles.faInstagram}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
