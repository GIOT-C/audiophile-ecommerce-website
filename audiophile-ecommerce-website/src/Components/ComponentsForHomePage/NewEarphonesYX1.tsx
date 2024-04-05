import styles from "../Styles/NewEarphonesYX1.module.css";
import earphonesImgForDesktopScreen from "../assets/home/desktop/image-earphones-yx1.jpg";
import earphonesImgForTabletScreen from "../assets/home/tablet/image-earphones-yx1.jpg";
import earphonesImgForMobileScreen from "../assets/home/mobile/image-earphones-yx1.jpg";
import UseWindowWidth from "../Hooks/UseWindowWidth";

interface Propses {
  productSlug: string;
  handleProductInformation: (productSlug: string) => void;
}

function NewEarphonesYX1(props: Propses) {
  const windowInnerWidth = UseWindowWidth();
  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.newProductContainer}>
          <div className={styles.productImgContainer}>
            <img
              src={
                windowInnerWidth <= 600
                  ? earphonesImgForMobileScreen
                  : windowInnerWidth <= 768
                  ? earphonesImgForTabletScreen
                  : earphonesImgForDesktopScreen
              }
              alt="earphonesImg"
              className={styles.productImg}
            />
          </div>
          <div className={styles.productInfoContainer}>
            <div className={styles.infoContainer}>
              <h4 className={styles.productName}>YX1 EARPHONES</h4>
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

export default NewEarphonesYX1;
