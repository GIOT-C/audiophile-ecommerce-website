import { Link, Outlet } from "react-router-dom";
import rootStyles from "./Styles/Root.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { MainContext } from "../App";
import Footer from "./Footer";
import CartModal from "./CartModal";
import CheckOut from "./CheckOutComponents/CheckOut";
import UseHandleNavigation from "./Hooks/UseHandleNavigation";
import UseWindowWidth from "./Hooks/UseWindowWidth";
import SubNavigation from "./SubNavigation";

function Root() {
  const context = useContext(MainContext);
  const selectedMark = context?.selectedMark;
  const isopenCart = context?.openCart;
  const handleNavigation = UseHandleNavigation();
  const windowInnerWidth = UseWindowWidth();

  // Function to handle click outside cartModalContainer
  const handleClickOutsideModal = (event: MouseEvent) => {
    const cartModalContainer = document.querySelector(
      `.${rootStyles.cartModalContainer}`
    );

    if (
      cartModalContainer &&
      !cartModalContainer.contains(event.target as Node)
    ) {
      context?.setOpenCart(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideModal);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, []);

  const handleMenuBar = () => {
    context?.setMenuBar(!context?.menuBar);
  };

  const handleOpenCart = () => {
    if (!context?.stateOfFinishedOrder) {
      context?.setOpenCart(!isopenCart);
    }
  };

  return (
    <>
      <div className={rootStyles.navParent}>
        <nav className={rootStyles.nav}>
          <div className={rootStyles.navigationChildContainer}>
            <div className={rootStyles.menuBar}>
              {context?.menuBar ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  className={rootStyles.faXmark}
                  onClick={handleMenuBar}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  className={rootStyles.faBars}
                  onClick={handleMenuBar}
                />
              )}
            </div>

            <Link
              to="/"
              className={rootStyles.siteName}
              onClick={() => handleNavigation("home")}
            >
              audiophile
            </Link>

            <div className={rootStyles.navigation}>
              <Link
                to="/"
                className={
                  selectedMark !== "home"
                    ? rootStyles.navElement
                    : rootStyles.selectedNavElement
                }
                onClick={() => handleNavigation("home")}
              >
                HOME
              </Link>
              <Link
                to="/headphones"
                className={
                  selectedMark !== "headphones"
                    ? rootStyles.navElement
                    : rootStyles.selectedNavElement
                }
                onClick={() => handleNavigation("headphones")}
              >
                HEADPHONES
              </Link>
              <Link
                to="/speakers"
                className={
                  selectedMark !== "speakers"
                    ? rootStyles.navElement
                    : rootStyles.selectedNavElement
                }
                onClick={() => handleNavigation("speakers")}
              >
                SPEAKERS
              </Link>
              <Link
                to="/earphones"
                className={
                  selectedMark !== "earphones"
                    ? rootStyles.navElement
                    : rootStyles.selectedNavElement
                }
                onClick={() => handleNavigation("earphones")}
              >
                EARPHONES
              </Link>
            </div>

            <div className={rootStyles.cartNavigationContainer}>
              {isopenCart ? (
                <p>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className={rootStyles.faCartShopping}
                    onClick={handleOpenCart}
                  />
                </p>
              ) : (
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className={rootStyles.faCartShopping}
                  onClick={handleOpenCart}
                />
              )}

              {context?.quantityOfProductInCart &&
              context?.quantityOfProductInCart > 0 ? (
                <div className={rootStyles.QuantityContainer}>
                  <span>{context?.quantityOfProductInCart}</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </nav>

        {context?.openCart && <div className={rootStyles.overlayForCart} />}
        {context?.menuBar && <div className={rootStyles.overlayForMenuBar} />}

        {windowInnerWidth <= 992 && context?.menuBar ? (
          <div className={rootStyles.navForMobileAndTabletScreens}>
            <SubNavigation />
          </div>
        ) : (
          ""
        )}

        {context?.openCart && (
          <div className={rootStyles.cartModalContainer}>
            <CartModal />
          </div>
        )}

        <div className={rootStyles.Outlet}>
          {context?.stateOfCheckout ? <CheckOut /> : <Outlet />}
        </div>
      </div>
      <Footer
        selectedMark={selectedMark}
        setSelectedMark={context?.setSelectedMark}
        handleNavigation={handleNavigation}
      />
    </>
  );
}

export default Root;
