import styles from "../Styles/StylesForPages.module.css";
import data from "../data.json";
import { DataInterface } from "../DataInterface";
import ProductSection from "../ComponentsForPages/ProductSection";
import SubNavigation from "../SubNavigation";
import AboutUs from "../AboutUs";
import { useContext } from "react";
import { MainContext } from "../../App";
import UseScrollToTheTop from "../Hooks/UseScrollsToTheTop";
import UseProductInformation from "../Hooks/UseProductInformation";
import MoreDetails from "../ComponentsForPages/MoreDetails";

function EarphonesPage() {
  UseScrollToTheTop();
  const productData: DataInterface[] = data;
  const context = useContext(MainContext);
  const productInformation = context?.productInformation;
  const handleProductInformation = UseProductInformation();

  return (
    <>
      <div className={styles.parentContainer}>
        {productInformation ? (
          <MoreDetails />
        ) : (
          <div>
            <div className={styles.darkHeader}>
              <h3 className={styles.pageTextHeader}>EARPHONES</h3>
            </div>
            <div className={styles.productsContainer}>
              <ProductSection
                productImgForDesktopScreen={
                  productData[0].categoryImage.desktop
                }
                productImgForTabletScreen={productData[0].categoryImage.tablet}
                productImgForMobileScreen={productData[0].categoryImage.mobile}
                productName={productData[0].name}
                productDescription={productData[0].description}
                productSlug={productData[0].slug}
                new={productData[0].new}
                handleProductInformation={handleProductInformation}
              />
              <SubNavigation />
              <AboutUs />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default EarphonesPage;
