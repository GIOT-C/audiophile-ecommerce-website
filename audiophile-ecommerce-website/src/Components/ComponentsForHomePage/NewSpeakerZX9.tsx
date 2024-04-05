import styles from "../Styles/NewSpeakerZX9.module.css";
import speakerImgForDesktopScreen from "../assets/home/desktop/image-speaker-zx9.png";
import speakerImgForTabletScreen from "../assets/home/tablet/image-speaker-zx9.png";
import speakerImgForMobileScreen from "../assets/home/mobile/image-speaker-zx9.png";
import UseWindowWidth from "../Hooks/UseWindowWidth";

interface Propses {
  productSlug: string;
  handleProductInformation: (productSlug: string) => void;
}

function NewSpeakerZX9(props: Propses) {
  const windowInnerWidth = UseWindowWidth();
  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.newProductContainer}>
          <div className={styles.productImgContainer}>
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
          <div className={styles.productInfoContainer}>
            <h1 className={styles.productName}>ZX9</h1>
            <h1 className={styles.productCategory}>SPEAKER</h1>

            <p className={styles.productDescription}>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>

            <div className={styles.buttonContainer}>
              <button
                className={styles.button}
                onClick={() =>
                  props.handleProductInformation(props.productSlug)
                }
              >
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewSpeakerZX9;
