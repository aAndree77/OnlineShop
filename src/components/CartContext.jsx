import { createContext, useEffect, useState } from "react";
export const CartContext = createContext()

export default function CartContextFunc({children}){

    const [cart,setCart] = useState([])

    function addCart(produs){
        const exist = cart.find(item=>item.id===produs.id)
        setCart(p=>{
            if(exist){
                return p.map(item=>item.id===produs.id ? {...item, qty:item.qty+1} : item)
            }
            return [...p, {...produs, qty:1}]
        })
    }

    function increment(produs){
        setCart(prev=>prev.map(item=>item.id===produs.id ? {...item, qty:item.qty+1} : item))
    }
    function decrement(produs){
        setCart(prev=>prev.map(item=>item.id===produs.id ? {...item, qty:item.qty-1} : item).filter(item=>item.qty>0))
    }
    function deleteProduct(produs){
        setCart(prev=>prev.filter(p=>p.id!==produs.id))
    }


    return(
        <CartContext.Provider value={{cart, addCart, increment,decrement,deleteProduct,setCart}}>{children}</CartContext.Provider>
    )


}
