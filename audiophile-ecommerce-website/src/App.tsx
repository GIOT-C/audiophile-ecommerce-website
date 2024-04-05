import "./App.css";
import { createContext, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Components/Root";
import HomePage from "./Components/Pages/Home";
import HeadphonesPage from "./Components/Pages/Headphones";
import SpeakersPage from "./Components/Pages/Speakers";
import EarphonesPage from "./Components/Pages/Earphones";
import UseCounter from "./Components/Hooks/UseCounter";
import { MainContextInterface } from "./Components/Interfaces/MainContextInterface";
import { ProductItemInterface } from "./Components/Interfaces/ProductItemInterface";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="headphones" element={<HeadphonesPage />} />
      <Route path="speakers" element={<SpeakersPage />} />
      <Route path="earPhones" element={<EarphonesPage />} />
    </Route>
  )
);

export const MainContext = createContext<MainContextInterface | undefined>(
  undefined
);

function App() {
  const [selectedMark, setSelectedMark] = useState<string>("home");
  const [productInformation, setProductInformation] = useState<string>("");
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<ProductItemInterface[]>([]);
  const [quantityOfProductInCart, setQuantityOfProductInCart] =
    useState<number>(0);
  const [stateOfCheckout, setStateOfCheckout] = useState<boolean>(false);
  const [stateOfFinishedOrder, setStateOfFinishedOrder] =
    useState<boolean>(false);
  const [menuBar, setMenuBar] = useState<boolean>(false);
  const counterObject = UseCounter();

  return (
    <>
      <MainContext.Provider
        value={{
          selectedMark,
          setSelectedMark,
          productInformation,
          setProductInformation,
          openCart,
          setOpenCart,
          cartItems,
          setCartItems,
          quantityOfProductInCart,
          setQuantityOfProductInCart,
          stateOfCheckout,
          setStateOfCheckout,
          stateOfFinishedOrder,
          setStateOfFinishedOrder,
          menuBar,
          setMenuBar,
          counterObject,
        }}
      >
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  );
}

export default App;
