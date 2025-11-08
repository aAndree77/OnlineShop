import { createContext,useState,useEffect } from "react"
export const DateContext = createContext()

export default function Date({children}){

const [date,setDate] = useState([])

useEffect(()=>{
    fetch("https://dummyjson.com/products?limit=100")
    .then(r=>r.json())
    .then(({ products }) => {
        
        const Initial = products.map(p => ({
            ...p,
            initialPrice: Number((p.price/100*p.discountPercentage + p.price).toFixed(2))
        }))
        setDate(Initial)
    })
},[])
    return(
        <DateContext.Provider value={{date}}>{children}</DateContext.Provider>
    )
}