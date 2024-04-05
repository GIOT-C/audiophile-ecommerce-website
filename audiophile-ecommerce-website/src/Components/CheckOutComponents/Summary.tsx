import styles from "../Styles/Summary.module.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { MainContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import UseHandleNavigation from "../Hooks/UseHandleNavigation";
function Summary() {
  const context = useContext(MainContext);
  const [total, setTotal] = useState<number>(0);
  const vatAmount = ((20 / 100) * total).toFixed(2);
  const grandTotatalAmount = total + 50 + parseInt(vatAmount);
  const handleNavigation = UseHandleNavigation();

  useEffect(() => {
    // Calculate total amount whenever cart items change
    if (context) {
      let totalPrice = 0;
      context.cartItems.forEach((item) => {
        totalPrice += item.price * item.quantity;
      });
      setTotal(totalPrice);
    }
  }, [context?.cartItems]);

  return (
    <>
      <div className={styles.parentContainer}>
        <h3>Summary</h3>

        {context?.quantityOfProductInCart &&
        context?.quantityOfProductInCart > 0 ? (
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
            <div className={styles.summaryDetailsContainer}>
              <div className={styles.summaryPriceDetails}>
                <p>TOTAL</p>
                <p className={styles.totalAmount}>
                  $ <span>{total}</span>
                </p>
              </div>

              <div className={styles.summaryPriceDetails}>
                <p>SHIPPING</p>
                <p className={styles.totalAmount}>
                  $ <span>50</span>
                </p>
              </div>

              <div className={styles.summaryPriceDetails}>
                <p>VAT(INCLUDED)</p>
                <p className={styles.totalAmount}>
                  $ <span>{vatAmount}</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png"
              alt="cart"
              className={styles.cartImg}
            />
          </div>
        )}
        <div className={styles.summaryGrandTotalDetails}>
          <p>GRAND TOTAL</p>
          <p className={styles.grandTotalAmount}>
            ${" "}
            <span>
              {context?.quantityOfProductInCart &&
              context?.quantityOfProductInCart > 0
                ? grandTotatalAmount
                : "0"}
            </span>
          </p>
        </div>

        {context?.quantityOfProductInCart &&
        context?.quantityOfProductInCart > 0 ? (
          ""
        ) : (
          <Link to="/" onClick={() => handleNavigation("home")}>
            <button className={styles.button}>CONTINUE SHOPPING</button>
          </Link>
        )}
      </div>
    </>
  );
}

export default Summary;
