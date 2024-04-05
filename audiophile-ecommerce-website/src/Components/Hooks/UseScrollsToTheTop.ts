import { useContext, useEffect } from "react";
import { MainContext } from "../../App";
function UseScrollToTheTop() {
  const context = useContext(MainContext);
  const productInformation = context?.productInformation;
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
    return () => {
      window.scrollTo(0, 0);
    };
  }, [productInformation]);
}

export default UseScrollToTheTop;
