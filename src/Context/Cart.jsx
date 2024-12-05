import { createContext, useState } from "react";
export const CartContext=createContext(null);

export const CartProvider= (props)=>{
    const [cart , setCart]= useState(null);
    const [submitSearch,setSubmitSearch]=useState(null)
    return(
    <CartContext.Provider  value={{cart,setCart,submitSearch,setSubmitSearch}}>
        {props.children}
    </CartContext.Provider>
    )
}