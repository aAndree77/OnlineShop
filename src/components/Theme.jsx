import {createContext, useState} from "react"
export const ThemeContext = createContext()

export default function Theme({children}){

const [theme,setTheme] = useState("light")
const changeTheme = ()=>{
    setTheme(t=>t==="light"?"dark":"light")
}
document.documentElement.setAttribute("data-theme",theme)
    return(
        <ThemeContext.Provider value={{changeTheme,theme}}>
            {children}
        </ThemeContext.Provider>

    )
}