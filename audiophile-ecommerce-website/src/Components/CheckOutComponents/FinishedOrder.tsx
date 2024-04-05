import styles from "../Styles/FinishedOrder.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState, useEffect } from "react";
import { MainContext } from "../../App";
import UseHandleNavigation from "../Hooks/UseHandleNavigation";

function FinishedOrder() {
  const context = useContext(MainContext);
  const [total, setTotal] = useState<number>(0);
  const [viewMoreItems, setViewMoreItems] = useState<boolean>(false);
  const vatAmount = ((20 / 100) * total).toFixed(2);
  const grandTotatalAmount = total + 50 + parseInt(vatAmount);
  const handleNavigation = UseHandleNavigation();

  const [itemIndex, setItemIndex] = useState(0);
  useEffect(() => {
    // Calculate total amount whenever cart items change
    if (context) {
      let totalPrice = 0;
      let index = 0;
      context.cartItems.forEach((item) => {
        totalPrice += item.price * item.quantity;

        if (item.quantity < 1) {
          index++;
        }
      });
      setTotal(totalPrice);
      setItemIndex(index);
    }
  }, [context?.cartItems]);

  const handleViewMoreItems = () => {
    setViewMoreItems(!viewMoreItems);
  };

  return (
    <>
      <div className={styles.parentContainer}>
        <div>
          <FontAwesomeIcon
            icon={faCircleCheck}
            className={styles.faCircleCheck}
          />
        </div>
        <h1 className={styles.heading}>THANK YOU FOR YOUR ORDER</h1>
        <p>You will receive an email confirmation shortly</p>

        <div className={styles.orderedProductsContainer}>
          <div className={styles.orderedProducts}>
            {context?.quantityOfProductInCart &&
            context?.quantityOfProductInCart > 1 &&
            !viewMoreItems ? (
              <div className={styles.cartItem}>
                <div className={styles.cartItemInfo}>
                  <div className={styles.cartItemImgContainer}>
                    <img
                      src={context.cartItems[itemIndex].productImg}
                      alt="productImg"
                      className={styles.cartItemImg}
                    />
                  </div>

                  <div className={styles.cartItemDetails}>
                    <p className={styles.cartItemName}>
                      {context.cartItems[itemIndex].productShortName}
                    </p>
                    <p className={styles.cartItemPrice}>
                      $ <span>{context.cartItems[itemIndex].price}</span>
                    </p>
                  </div>
                </div>
                <div className={styles.itemQuantity}>
                  <FontAwesomeIcon icon={faXmark} className={styles.faXmark} />
                  <p>{context.cartItems[itemIndex].quantity}</p>
                </div>
              </div>
            ) : (
              <div>
                {context?.cartItems.map((item, index) => (
                  <div key={index}>
                    {item.quantity > 0 ? (
                      <div className={styles.cartItem}>
                        <div className={styles.cartItemInfo}>
                          <div className={styles.cartItemImgContainer}>
                            <img
                              src={item.productImg}
                              alt="productImg"
                              className={styles.cartItemImg}
                            />
                          </div>

                          <div className={styles.cartItemDetails}>
                            <p className={styles.cartItemName}>
                              {item.productShortName}
                            </p>
                            <p className={styles.cartItemPrice}>
                              $ <span>{item.price}</span>
                            </p>
                          </div>
                        </div>
                        <div className={styles.itemQuantity}>
                          <FontAwesomeIcon
                            icon={faXmark}
                            className={styles.faXmark}
                          />
                          <p>{item.quantity}</p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            )}
            {context?.quantityOfProductInCart &&
            context?.quantityOfProductInCart > 1 ? (
              <div className={styles.moreItems}>
                <p className={styles.viewItems} onClick={handleViewMoreItems}>
                  {viewMoreItems ? (
                    <span>View Less</span>
                  ) : (
                    <span>
                      and <span>{context?.quantityOfProductInCart - 1}</span>{" "}
                      more item(s)
                    </span>
                  )}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.grandTotalContainer}>
            <div>
              <p>GRAND TOTAL</p>
              <p className={styles.grandTotalAmount}>
                $ <span>{grandTotatalAmount}</span>
              </p>
            </div>
          </div>
        </div>

        <Link to="/" onClick={() => handleNavigation("home")}>
          <button className={styles.button}>BACK TO HOME</button>
        </Link>
      </div>
    </>
  );
}
export default FinishedOrder;
