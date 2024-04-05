import styles from "../Styles/StylesForPages.module.css";
import data from "../data.json";
import { DataInterface } from "../DataInterface";
import ProductSection from "../ComponentsForPages/ProductSection";
import RevercedProductSection from "../ComponentsForPages/RevercedProductSection";
import SubNavigation from "../SubNavigation";
import AboutUs from "../AboutUs";
import { useContext } from "react";
import { MainContext } from "../../App";
import UseScrollToTheTop from "../Hooks/UseScrollsToTheTop";
import UseProductInformation from "../Hooks/UseProductInformation";
import MoreDetails from "../ComponentsForPages/MoreDetails";

function SpeakersPage() {
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
              <h3 className={styles.pageTextHeader}>SPEAKERS</h3>
            </div>
            <div className={styles.productsContainer}>
              <ProductSection
                productImgForDesktopScreen={
                  productData[5].categoryImage.desktop
                }
                productImgForTabletScreen={productData[5].categoryImage.tablet}
                productImgForMobileScreen={productData[5].categoryImage.mobile}
                productName={productData[5].name}
                productDescription={productData[5].description}
                productSlug={productData[5].slug}
                new={productData[5].new}
                handleProductInformation={handleProductInformation}
              />
              <RevercedProductSection
                productImgForDesktopScreen={
                  productData[4].categoryImage.desktop
                }
                productImgForTabletScreen={productData[4].categoryImage.tablet}
                productImgForMobileScreen={productData[4].categoryImage.mobile}
                productName={productData[4].name}
                productDescription={productData[4].description}
                productSlug={productData[4].slug}
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

export default SpeakersPage;
