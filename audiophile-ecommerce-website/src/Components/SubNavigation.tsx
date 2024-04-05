import { Link } from "react-router-dom";
import styles from "./Styles/SubNavigation.module.css";
import headphonesImg from "./assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "./assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "./assets/shared/desktop/image-category-thumbnail-earphones.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import UseHandleNavigation from "./Hooks/UseHandleNavigation";

function SubNavigation() {
  const handleNavigation = UseHandleNavigation();

  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.categoryNavigation}>
          <div className={styles.category}>
            <Link
              to="/headphones"
              className={styles.link}
              onClick={() => handleNavigation("headphones")}
            >
              <img
                src={headphonesImg}
                alt="category-headphones"
                className={styles.categoryImg}
              />

              <h3 className={styles.categoryName}>HEADPHONES</h3>
              <div className={styles.shopContainer}>
                <span className={styles.categoryShopText}>SHOP</span>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={styles.faAngleRight}
                />
              </div>
            </Link>
          </div>

          <div className={styles.category}>
            <Link
              to="/speakers"
              className={styles.link}
              onClick={() => handleNavigation("speakers")}
            >
              <img
                src={speakersImg}
                alt="category-speakers"
                className={styles.categoryImg}
              />
              <h3 className={styles.categoryName}>SPEAKERS</h3>
              <div className={styles.shopContainer}>
                <span className={styles.categoryShopText}>SHOP</span>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={styles.faAngleRight}
                />
              </div>
            </Link>
          </div>

          <div className={styles.category}>
            <Link
              to="/earphones"
              className={styles.link}
              onClick={() => handleNavigation("earphones")}
            >
              <img
                src={earphonesImg}
                alt="category-earphones"
                className={styles.categoryImg}
              />
              <h3 className={styles.categoryName}>EARPHONES</h3>
              <div className={styles.shopContainer}>
                <span className={styles.categoryShopText}>SHOP</span>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={styles.faAngleRight}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubNavigation;
