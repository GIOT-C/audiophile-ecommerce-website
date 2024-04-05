import { useContext } from "react";
import { MainContext } from "../../App";

function UseHandleNavigation() {
  const context = useContext(MainContext);

  return (nav: string) => {
    context?.setSelectedMark(nav);
    context?.setProductInformation("");
    context?.setStateOfCheckout(false);
    context?.setStateOfFinishedOrder(false);
    context?.setMenuBar(false);
    if (context?.stateOfFinishedOrder) {
      context?.setCartItems([]);
      context?.setQuantityOfProductInCart(0);
    }
  };
}

export default UseHandleNavigation;
