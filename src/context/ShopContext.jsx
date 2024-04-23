import React, { createContext } from "react";
import all_product from "../components/assets/all_product";

//create context and initialize it with null
export const ShopContext=createContext(null);

const ShopContextProvider=(props)=>{
   const contextValue={all_product};
   return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
   )
}
export default ShopContextProvider;