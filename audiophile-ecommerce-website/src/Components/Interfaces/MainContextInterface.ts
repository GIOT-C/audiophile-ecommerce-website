import { ProductItemInterface } from "./ProductItemInterface";

export interface MainContextInterface {
    selectedMark: string;
    setSelectedMark: React.Dispatch<React.SetStateAction<string>>;
    productInformation:string;
    setProductInformation:React.Dispatch<React.SetStateAction<string>>;
    openCart: boolean;
    setOpenCart:  React.Dispatch<React.SetStateAction<boolean>>;
    cartItems: ProductItemInterface[];
    setCartItems: React.Dispatch<React.SetStateAction<ProductItemInterface[]>>;
    quantityOfProductInCart: number;
    setQuantityOfProductInCart: React.Dispatch<React.SetStateAction<number>>;
    stateOfCheckout: boolean;
    setStateOfCheckout: React.Dispatch<React.SetStateAction<boolean>>;
    stateOfFinishedOrder: boolean;
    setStateOfFinishedOrder: React.Dispatch<React.SetStateAction<boolean>>;
    menuBar: boolean;
    setMenuBar: React.Dispatch<React.SetStateAction<boolean>>
    counterObject: {
      count: number;
      increment: () => void;
      decrement: () => void;
      SetCount: React.Dispatch<React.SetStateAction<number>>;
  }
  }

