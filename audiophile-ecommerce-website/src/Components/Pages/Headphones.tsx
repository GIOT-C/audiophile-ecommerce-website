import styles from "../Styles/StylesForPages.module.css";
import data from "../data.json";
import { DataInterface } from "../DataInterface";
import ProductSection from "../ComponentsForPages/ProductSection";
import SubNavigation from "../SubNavigation";
import AboutUs from "../AboutUs";
import RevercedProductSection from "../ComponentsForPages/RevercedProductSection";
import { useContext } from "react";
import { MainContext } from "../../App";
import UseProductInformation from "../Hooks/UseProductInformation";
import UseScrollToTheTop from "../Hooks/UseScrollsToTheTop";
import MoreDetails from "../ComponentsForPages/MoreDetails";

function HeadphonesPage() {
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
              <h3 className={styles.pageTextHeader}>HEADPHONES</h3>
            </div>
            <div className={styles.productsContainer}>
              <ProductSection
                productImgForDesktopScreen={
                  productData[3].categoryImage.desktop
                }
                productImgForTabletScreen={productData[3].categoryImage.tablet}
                productImgForMobileScreen={productData[3].categoryImage.mobile}
                productName={productData[3].name}
                productDescription={productData[3].description}
                productSlug={productData[3].slug}
                new={productData[3].new}
                handleProductInformation={handleProductInformation}
              />
              <RevercedProductSection
                productImgForDesktopScreen={productData[2].image.desktop}
                productImgForTabletScreen={productData[2].categoryImage.tablet}
                productImgForMobileScreen={productData[2].categoryImage.mobile}
                productName={productData[2].name}
                productDescription={productData[2].description}
                productSlug={productData[2].slug}
                handleProductInformation={handleProductInformation}
              />

              <ProductSection
                productImgForDesktopScreen={
                  productData[1].categoryImage.desktop
                }
                productImgForTabletScreen={productData[1].categoryImage.tablet}
                productImgForMobileScreen={productData[1].categoryImage.mobile}
                productName={productData[1].name}
                productDescription={productData[1].description}
                productSlug={productData[1].slug}
                new={productData[1].new}
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

export default HeadphonesPage;
