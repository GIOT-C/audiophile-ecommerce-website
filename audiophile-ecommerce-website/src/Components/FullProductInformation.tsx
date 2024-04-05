import styles from "./Styles/FullProductInformation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SubNavigation from "./SubNavigation";
import AboutUs from "./AboutUs";
import { useContext} from "react";
import { MainContext } from "../App";
import UseCounter from "./Hooks/UseCounter";
import UseScrollToTheTop from "./Hooks/UseScrollsToTheTop";
import UseWindowWidth from "./Hooks/UseWindowWidth";


interface Propses {
  productImgForDesktopScreen: string;
  productImgForTabletScreen: string;
  productImgForMobileScreen: string;
  productName: string;
  productShortName: string;
  productDescription: string;
  productFeaturesOne: string;
  productFeaturesTwo: string;
  price: number;
  new: boolean;
  productIncludes: {
    quantity: number;
    item: string;
  }[];
  firstImgForGallery: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  secondImgForGallery: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  thirdImgForGallery: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
  handleProductInformation: (slug: string) => void;
}

function FullProductInformation(props: Propses) {
  UseScrollToTheTop();
  const counterObject = UseCounter();
  const context = useContext(MainContext);
  const windowInnerWidth = UseWindowWidth();

  const handleAddToCart = () => {
    // Check if the product already exists in the cart
    const existingProductIndex = context?.cartItems.findIndex(
      (item) => item.productShortName === props.productShortName
    );

    if (existingProductIndex !== -1) {
      // If the product exists in the cart, update its quantity
      const updatedCartItems = [...(context?.cartItems ?? [])];
      if (existingProductIndex !== undefined) {
        updatedCartItems[existingProductIndex].quantity += counterObject.count;
      }

      context?.setCartItems(updatedCartItems);
    } else {
      // If the product doesn't exist in the cart, add it
      const product = {
        productShortName: props.productShortName,
        productImg: props.productImgForMobileScreen,
        price: props.price,
        quantity: counterObject.count,
      };
      context?.setCartItems([...context?.cartItems, product]);
      // Update the total quantity of products in the cart
      context?.setQuantityOfProductInCart((prevState) => (prevState += 1));
    }
  };

  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.childContainer}>
          <span
            className={styles.backStep}
            onClick={() => props.handleProductInformation("")}
          >
            Go Back
          </span>

          <div className={styles.sectionDetails}>
            <div className={styles.productImgContainer}>
              <img
                src={
                  windowInnerWidth <= 600
                    ? props.productImgForMobileScreen
                    : windowInnerWidth <= 768
                    ? props.productImgForTabletScreen
                    : props.productImgForDesktopScreen
                }
                alt="productImg"
                className={styles.productImg}
              />
            </div>
            <div className={styles.productInfo}>
              <div className={styles.info}>
                {props.new ? (
                  <p className={styles.headerText}>
                    <span>NEW</span> <span>PRODUCT</span>
                  </p>
                ) : (
                  ""
                )}
                <h1 className={styles.productName}>{props.productName}</h1>
                <p className={styles.description}>{props.productDescription}</p>
                <p className={styles.productPrice}>
                  $<span>{props.price * counterObject.count}</span>
                </p>
                <div className={styles.chooseProduct}>
                  <div className={styles.unitQuantity}>
                    <span
                      onClick={() => {
                        counterObject.count > 1
                          ? counterObject.decrement()
                          : "";
                      }}
                    >
                      -
                    </span>
                    <span>{counterObject.count}</span>
                    <span
                      onClick={() => {
                        counterObject.increment();
                      }}
                    >
                      +
                    </span>
                  </div>
                  <button className={styles.button} onClick={handleAddToCart}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectiondescriptions}>
            <div className={styles.descriptionFeaturesContainer}>
              <h1 className={styles.featuresHeader}>FEATURES</h1>
              <p className={styles.featuresOne}>{props.productFeaturesOne}</p>
              <p className={styles.featuresTwo}>{props.productFeaturesTwo}</p>
            </div>
            <div className={styles.descriptionIncludes}>
              <h1 className={styles.includesHeader}>IN THE BOX</h1>
              <div>
                {props.productIncludes.map((includes) => (
                  <div key={includes.item} className={styles.includesContainer}>
                    <p className={styles.quantity}>
                      {includes.quantity}
                      <FontAwesomeIcon
                        icon={faXmark}
                        className={styles.faXmark}
                      />
                    </p>
                    <p>{includes.item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.sectionGallery}>
            <div className={styles.leftSideGallery}>
              <div className={styles.firstImgContainer}>
                <img
                  src={
                    windowInnerWidth <= 600
                      ? props.firstImgForGallery.mobile
                      : windowInnerWidth <= 768
                      ? props.firstImgForGallery.tablet
                      : props.firstImgForGallery.desktop
                  }
                  alt="firstImgFromGallery"
                  className={styles.imgForGallery}
                />
              </div>
              <div className={styles.secondImgContainer}>
                <img
                  src={
                    windowInnerWidth <= 600
                      ? props.secondImgForGallery.mobile
                      : windowInnerWidth <= 768
                      ? props.secondImgForGallery.tablet
                      : props.secondImgForGallery.desktop
                  }
                  alt="secondImgFromGallery"
                  className={styles.imgForGallery}
                />
              </div>
            </div>
            <div className={styles.rightSideGallery}>
              <img
                src={props.thirdImgForGallery.desktop}
                alt="thirdImgFromGallery"
                className={styles.imgForGallery}
              />
            </div>
          </div>

          <div>
            <h1 className={styles.moreProductsHeader}>YOU MAY ALSO LIKE</h1>
            <div className={styles.SectionmoreProducts}>
              {props.others.map((otherProducts) => (
                <div
                  className={styles.productContainer}
                  key={otherProducts.slug}
                >
                  <img
                    src={
                      windowInnerWidth <= 600
                        ? otherProducts.image.mobile
                        : windowInnerWidth <= 768
                        ? otherProducts.image.tablet
                        : otherProducts.image.desktop
                    }
                    alt="otherProducts"
                    className={styles.otherProductsImg}
                  />
                  <div className={styles.moreInfo}>
                    <h2>{otherProducts.name}</h2>
                    <button
                      className={styles.button}
                      onClick={() =>
                        props.handleProductInformation(otherProducts.slug)
                      }
                    >
                      SEE PRODUCT
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SubNavigation />
      <AboutUs />
    </>
  );
}

export default FullProductInformation;
