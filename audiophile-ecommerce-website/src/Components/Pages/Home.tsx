import AboutUs from "../AboutUs";
import NewEarphonesYX1 from "../ComponentsForHomePage/NewEarphonesYX1";
import NewProduct from "../ComponentsForHomePage/NewProduct";
import NewSpeakerZX7 from "../ComponentsForHomePage/NewSpeakerZX7";
import NewSpeakerZX9 from "../ComponentsForHomePage/NewSpeakerZX9";
import homeStyles from "../Styles/Home.module.css";
import SubNavigation from "../SubNavigation";
import data from "../data.json";
import { DataInterface } from "../DataInterface";
import { useContext } from "react";
import { MainContext } from "../../App";
import UseScrollToTheTop from "../Hooks/UseScrollsToTheTop";
import MoreDetails from "../ComponentsForPages/MoreDetails";
import UseProductInformation from "../Hooks/UseProductInformation";

function HomePage() {
  UseScrollToTheTop();
  const context = useContext(MainContext);
  const productInformation = context?.productInformation;
  const productData: DataInterface[] = data;
  const handleProductInformation = UseProductInformation();

  return (
    <>
      <div className={homeStyles.homePageParentContainer}>
        {productInformation ? (
          <MoreDetails />
        ) : (
          <div>
            <NewProduct
              productSlug={productData[3].slug}
              handleProductInformation={handleProductInformation}
            />
            <SubNavigation />
            <NewSpeakerZX9
              productSlug={productData[5].slug}
              handleProductInformation={handleProductInformation}
            />
            <NewSpeakerZX7
              productSlug={productData[4].slug}
              handleProductInformation={handleProductInformation}
            />
            <NewEarphonesYX1
              productSlug={productData[0].slug}
              handleProductInformation={handleProductInformation}
            />
            <AboutUs />
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
