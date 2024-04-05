import styles from "../Styles/RevercedProductSection.module.css";
import UseWindowWidth from "../Hooks/UseWindowWidth";

interface Propses {
  productImgForDesktopScreen: string;
  productImgForTabletScreen: string;
  productImgForMobileScreen: string;
  productName: string;
  productDescription: string;
  productSlug: string;
  handleProductInformation: (slug: string) => void;
}

function RevercedProductSection(props: Propses) {
  const windowInnerWidth = UseWindowWidth();
  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.productContainer}>
          <div className={styles.productInfoContainer}>
            <div className={styles.info}>
              <div className={styles.productNameContainer}>
                <h1 className={styles.productName}>{props.productName}</h1>
              </div>
              <p className={styles.description}>{props.productDescription}</p>
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
          <div className={styles.productImgContainer}>
            <img
              src={
                windowInnerWidth <= 600
                  ? props.productImgForMobileScreen
                  : windowInnerWidth <= 992
                  ? props.productImgForTabletScreen
                  : props.productImgForDesktopScreen
              }
              alt="productImg"
              className={styles.productImg}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RevercedProductSection;
