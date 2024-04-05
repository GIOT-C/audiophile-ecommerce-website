import data from "../data.json";
import { DataInterface } from "../DataInterface";
import UseProductInformation from "../Hooks/UseProductInformation";
import { useContext } from "react";
import { MainContext } from "../../App";
import FullProductInformation from "../FullProductInformation";

function MoreDetails() {
  const productData: DataInterface[] = data;
  const context = useContext(MainContext);
  const productInformation = context?.productInformation;
  const handleProductInformation = UseProductInformation();
  return (
    <>
      <div>
        {productInformation === "yx1-earphones" ? (
          <FullProductInformation
            productImgForDesktopScreen={productData[0].categoryImage.desktop}
            productImgForTabletScreen={productData[0].categoryImage.tablet}
            productImgForMobileScreen={productData[0].categoryImage.mobile}
            productName={productData[0].name}
            productShortName={productData[0].shortName}
            productDescription={productData[0].description}
            productFeaturesOne={productData[0].featuresOne}
            productFeaturesTwo={productData[0].featuresTwo}
            productIncludes={productData[0].includes}
            firstImgForGallery={productData[0].gallery.first}
            secondImgForGallery={productData[0].gallery.second}
            thirdImgForGallery={productData[0].gallery.third}
            others={productData[0].others}
            price={productData[0].price}
            new={productData[0].new}
            handleProductInformation={handleProductInformation}
          />
        ) : productInformation === "xx59-headphones" ? (
          <FullProductInformation
            productImgForDesktopScreen={productData[1].categoryImage.desktop}
            productImgForTabletScreen={productData[1].categoryImage.tablet}
            productImgForMobileScreen={productData[1].categoryImage.mobile}
            productName={productData[1].name}
            productShortName={productData[1].shortName}
            productDescription={productData[1].description}
            productFeaturesOne={productData[1].featuresOne}
            productFeaturesTwo={productData[1].featuresTwo}
            productIncludes={productData[1].includes}
            firstImgForGallery={productData[1].gallery.first}
            secondImgForGallery={productData[1].gallery.second}
            thirdImgForGallery={productData[1].gallery.third}
            others={productData[1].others}
            price={productData[1].price}
            new={productData[1].new}
            handleProductInformation={handleProductInformation}
          />
        ) : productInformation === "xx99-mark-one-headphones" ? (
          <FullProductInformation
            productImgForDesktopScreen={productData[2].image.desktop}
            productImgForTabletScreen={productData[2].categoryImage.tablet}
            productImgForMobileScreen={productData[2].categoryImage.mobile}
            productName={productData[2].name}
            productShortName={productData[2].shortName}
            productDescription={productData[2].description}
            productFeaturesOne={productData[2].featuresOne}
            productFeaturesTwo={productData[2].featuresTwo}
            productIncludes={productData[2].includes}
            firstImgForGallery={productData[2].gallery.first}
            secondImgForGallery={productData[2].gallery.second}
            thirdImgForGallery={productData[2].gallery.third}
            others={productData[2].others}
            price={productData[2].price}
            new={productData[2].new}
            handleProductInformation={handleProductInformation}
          />
        ) : productInformation === "xx99-mark-two-headphones" ? (
          <FullProductInformation
            productImgForDesktopScreen={productData[3].categoryImage.desktop}
            productImgForTabletScreen={productData[3].categoryImage.tablet}
            productImgForMobileScreen={productData[3].categoryImage.mobile}
            productName={productData[3].name}
            productShortName={productData[3].shortName}
            productDescription={productData[3].description}
            productFeaturesOne={productData[3].featuresOne}
            productFeaturesTwo={productData[3].featuresTwo}
            productIncludes={productData[3].includes}
            firstImgForGallery={productData[3].gallery.first}
            secondImgForGallery={productData[3].gallery.second}
            thirdImgForGallery={productData[3].gallery.third}
            others={productData[3].others}
            price={productData[3].price}
            new={productData[3].new}
            handleProductInformation={handleProductInformation}
          />
        ) : productInformation === "zx7-speaker" ? (
          <FullProductInformation
            productImgForDesktopScreen={productData[4].categoryImage.desktop}
            productImgForTabletScreen={productData[4].categoryImage.tablet}
            productImgForMobileScreen={productData[4].categoryImage.mobile}
            productName={productData[4].name}
            productShortName={productData[4].shortName}
            productDescription={productData[4].description}
            productFeaturesOne={productData[4].featuresOne}
            productFeaturesTwo={productData[4].featuresTwo}
            productIncludes={productData[4].includes}
            firstImgForGallery={productData[4].gallery.first}
            secondImgForGallery={productData[4].gallery.second}
            thirdImgForGallery={productData[4].gallery.third}
            others={productData[4].others}
            price={productData[4].price}
            new={productData[4].new}
            handleProductInformation={handleProductInformation}
          />
        ) : (
          <FullProductInformation
            productImgForDesktopScreen={productData[5].categoryImage.desktop}
            productImgForTabletScreen={productData[5].categoryImage.tablet}
            productImgForMobileScreen={productData[5].categoryImage.mobile}
            productName={productData[5].name}
            productShortName={productData[5].shortName}
            productDescription={productData[5].description}
            productFeaturesOne={productData[5].featuresOne}
            productFeaturesTwo={productData[5].featuresTwo}
            productIncludes={productData[5].includes}
            firstImgForGallery={productData[5].gallery.first}
            secondImgForGallery={productData[5].gallery.second}
            thirdImgForGallery={productData[5].gallery.third}
            others={productData[5].others}
            price={productData[5].price}
            new={productData[5].new}
            handleProductInformation={handleProductInformation}
          />
        )}
      </div>
    </>
  );
}
export default MoreDetails;
