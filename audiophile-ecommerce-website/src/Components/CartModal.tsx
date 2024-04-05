import styles from "./Styles/CartModal.module.css";
import { useContext, useState, useEffect } from "react";
import { MainContext } from "../App";

function CartModal() {
  const context = useContext(MainContext);
  const [total, setTotal] = useState<number>(0);

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

  const handleRemoveAllItems = () => {
    if (context) {
      context.setCartItems([]);
      context.setQuantityOfProductInCart(0);
    }
  };

  const handleIncrementQuantity = (index: number) => {
    if (context) {
      const updatedCartItems = [...context.cartItems];
      updatedCartItems[index].quantity++;
      context.setCartItems(updatedCartItems);
    }
  };

  const handleDecrementQuantity = (index: number) => {
    if (context) {
      const updatedCartItems = [...context.cartItems];
      if (updatedCartItems[index].quantity > 0) {
        updatedCartItems[index].quantity--;
        context?.setCartItems(updatedCartItems);
      }
      if (updatedCartItems[index].quantity < 1) {
        context.setQuantityOfProductInCart((prevState) => (prevState -= 1));
      }
    }
  };

  const handleCheckOut = () => {
    context?.setStateOfCheckout(true);
    context?.setOpenCart(false);
  };

  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.removeContainer}>
          <p className={styles.cartQuantity}>
            CART ({context?.quantityOfProductInCart})
          </p>
          <p className={styles.removeButton} onClick={handleRemoveAllItems}>
            Remove All
          </p>
        </div>

        {context?.quantityOfProductInCart &&
        context?.quantityOfProductInCart > 0 ? (
          <div>
            {context?.cartItems.map((item, index) => (
              <div key={index}>
                {item.quantity > 0 ? (
                  <div className={styles.cartItem}>
                    <div className={styles.cartModalInfo}>
                      <div className={styles.productImgContainer}>
                        <img
                          src={item.productImg}
                          alt="productImg"
                          className={styles.productImg}
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

                    <div className={styles.quantityContainer}>
                      <div className={styles.unitQuantity}>
                        <span onClick={() => handleDecrementQuantity(index)}>
                          -
                        </span>
                        <span>{item.quantity}</span>
                        <span onClick={() => handleIncrementQuantity(index)}>
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        ) : (
          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png"
            alt="cart"
            className={styles.cartImg}
          />
        )}

        <div className={styles.totalContainer}>
          <p>TOTAL</p>
          <p className={styles.totalAmount}>
            <span>$</span> <span>{total}</span>
          </p>
        </div>
        {context?.quantityOfProductInCart &&
        context?.quantityOfProductInCart > 0 ? (
          <button className={styles.button} onClick={handleCheckOut}>
            CHECKOUT
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default CartModal;
