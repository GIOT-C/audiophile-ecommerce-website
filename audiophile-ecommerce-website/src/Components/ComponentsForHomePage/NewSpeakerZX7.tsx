import styles from "../Styles/NewSpeakerZX7.module.css";
import speakerImgForDesktopScreen from "../assets/home/desktop/image-speaker-zx7.jpg";
import speakerImgForTabletScreen from "../assets/home/tablet/image-speaker-zx7.jpg";
import speakerImgForMobileScreen from "../assets/home/mobile/image-speaker-zx7.jpg";
import UseWindowWidth from "../Hooks/UseWindowWidth";

interface Propses {
  productSlug: string;
  handleProductInformation: (productSlug: string) => void;
}

function NewSpeakerZX7(props: Propses) {
  const windowInnerWidth = UseWindowWidth();
  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.newProductContainer}>
          <div className={styles.infoContainer}>
            <h4 className={styles.productName}>ZX7 SPEAKER</h4>
            <button
              className={styles.button}
              onClick={() => props.handleProductInformation(props.productSlug)}
            >
              SEE PRODUCT
            </button>
          </div>

          <img
            src={
              windowInnerWidth <= 600
                ? speakerImgForMobileScreen
                : windowInnerWidth <= 768
                ? speakerImgForTabletScreen
                : speakerImgForDesktopScreen
            }
            alt="speakerImg"
            className={styles.productImg}
          />
        </div>
      </div>
    </>
  );
}

export default NewSpeakerZX7;
