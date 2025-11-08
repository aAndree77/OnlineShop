
import { ThemeContext } from "./Theme"
import { useContext } from "react"

export default function Stats({items}){
    const {theme} = useContext(ThemeContext)

    return(
        <div className="w-screen min-h-140 grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-4 p-18">
            {items.map((item, i)=>(
                <div key={i} className={`bg-[var(--background-color)] rounded-xl border border-[1px] shadow-lg flex justify-between p-8 flex-col items-center hover:translate-y-[-4px] transition duration 300 hover:border-yellow-500 hover:bg-[rgba(255,196,0,0.1)] ${theme==="dark" ? "border-white" : "border-gray-200"}`}>
                    <img src={item.img} className="h-15 hover:scale-110 transition duration 300 bg-[rgba(255,196,0,0.1)] p-4 box-content rounded-2xl border border-yellow-400"/>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex flex-row items-end hover:scale-110 transition duration 300">
                            <h1 className="text-5xl font-bold">{item.nr}</h1>
                            <p className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-300">+</p>
                        </div>
                        <div className="flex gap-2 items-center hover:scale-110 transition duration 300">
                            <div className="w-2 h-2 rounded-[50%] bg-yellow-500 pulse"></div>
                            <p>Live</p>
                        </div>
                        
                    </div> 
                    <div className="flex flex-col gap-2 items-center">
                        <h2 className=" w-fit text-2xl font-bold hover:scale-110 transition duration 300">{item.text}</h2>
                        <p className="text-gray-400 hover:scale-110 transition duration 300 text-center">{item.desc}</p>
                    </div>

                </div>
            ))

        }
    </div>
)
}