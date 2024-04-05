import { useContext } from "react";
import { MainContext } from "../../App";


function UseProductInformation(){
    const context = useContext(MainContext);
return (slug:string)=> {
    context?.setProductInformation(slug);
    context?.setSelectedMark("");
   context?.counterObject.SetCount(1);
};
}

export default UseProductInformation;