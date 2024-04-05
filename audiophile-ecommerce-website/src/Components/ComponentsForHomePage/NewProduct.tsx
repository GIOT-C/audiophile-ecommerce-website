import styles from "../Styles/NewProduct.module.css";
import UseWindowWidth from "../Hooks/UseWindowWidth";
import headerImgForDesktopScreen from "../assets/home/desktop/image-hero.jpg";
import headerImgForTabletScreen from "../assets/home/tablet/image-header.jpg";
import headerImgForMobileScreen from "../assets/home/mobile/image-header.jpg";

interface Propses {
  productSlug: string;
  handleProductInformation: (productSlug: string) => void;
}

function NewProduct(props: Propses) {
  const windowInnerWidth = UseWindowWidth();

  return (
    <>
      <div className={styles.newProduct}>
        <img
          src={
            windowInnerWidth <= 600
              ? headerImgForMobileScreen
              : windowInnerWidth <= 992
              ? headerImgForTabletScreen
              : headerImgForDesktopScreen
          }
          alt="header-image"
          className={styles.headerImg}
        />
        <div className={styles.newProductInfo}>
          <div className={styles.header}>
            <span className={styles.headerTextOne}>NEW</span>
            <span className={styles.headerTextTwo}>PRODUCT</span>
          </div>
          <div>
            <h1 className={styles.productName}>XX99 MARK ll</h1>
            <h1 className={styles.productCategory}>HEADPHONES</h1>
          </div>

          <div className={styles.productDescriptionContainer}>
            <p className={styles.productDescription}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>

          <button
            className={styles.button}
            onClick={() => props.handleProductInformation(props.productSlug)}
          >
            SEE PRODUCT
          </button>
        </div>
      </div>
    </>
  );
}

export default NewProduct;
