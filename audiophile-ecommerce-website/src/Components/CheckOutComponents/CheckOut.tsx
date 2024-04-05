import { MainContext } from "../../App";
import styles from "../Styles/CheckOut.module.css";
import { useContext, useEffect } from "react";
import FormComponent from "./FormComponent";
import Summary from "./Summary";
import FinishedOrder from "./FinishedOrder";

function CheckOut() {
  const context = useContext(MainContext);
  useEffect(() => {
    context?.setOpenCart(false);
    context?.setSelectedMark("");
  }, []);

  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.childContainer}>
          <span
            className={styles.backStep}
            onClick={() => context?.setStateOfCheckout(false)}
          >
            Go Back
          </span>

          <div className={styles.mainContainer}>
            <div className={styles.checkoutContainer}>
              <h1>CHECKOUT</h1>
              <FormComponent />
            </div>
            <div className={styles.summaryContainer}>
              <Summary />
            </div>
          </div>
        </div>

        {context?.stateOfFinishedOrder && <div className={styles.overlay} />}

        {context?.stateOfFinishedOrder && (
          <div className={styles.finishedOrder}>
            <FinishedOrder />
          </div>
        )}
      </div>
    </>
  );
}

export default CheckOut;
