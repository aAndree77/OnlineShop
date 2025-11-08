import Nav from "../components/Nav"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { DateContext } from "../components/Date"
import { CartContext } from "../components/CartContext"
import { ThemeContext } from "../components/Theme";
import { motion } from "framer-motion";

export default function Shop() {
  const { date } = useContext(DateContext)
  const { addCart } = useContext(CartContext)
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <Nav />
      <div className="bg-[var(--primary-color)] min-h-screen">
        <div className={theme==="light" ? "relative bg-gradient-to-r mt-20 from-pink-500 via-purple-500 to-blue-600 text-white py-16 px-6 text-center":"bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-200 text-gray-100 py-16 px-6 text-center"}>
          <h1 className="text-5xl font-extrabold drop-shadow-lg ">Discover Daily Deals 🎉</h1>
          <p className="mt-4 text-lg opacity-90">Carefully selected products at the best prices</p>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold text-[var(--text-color)] mb-8 text-center">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {date.map(p => (
              <div key={p.id} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col">
                <Link to={`/products/${p.id}`} className="flex justify-center">
                  <img src={p.images[0]} alt={p.title} className="w-40 h-40 mt-6" />
                </Link>
                <div className="flex flex-col flex-1 px-4 py-5">
                  <h2 className="font-semibold text-xl text-[var(--text-color)]">{p.title}</h2>
                  {(p.initialPrice - p.price) > 0 && (
                    <div className="flex items-center gap-2 mt-2">
                      <p className="line-through text-[var(--text-muted)] text-lg">${p.initialPrice}</p>
                      <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-md">- ${(p.initialPrice - p.price).toFixed(2)}</span>
                    </div>
                  )}
                  <p className="text-2xl font-bold text-green-600 mt-2 mb-5">${p.price}</p>
                  <button 
                    onClick={() => addCart(p)} 
                    className={
                      theme === "light" 
                        ? "mt-auto bg-gradient-to-r from-pink-500 to-blue-600 text-white rounded-xl py-2 text-lg font-bold cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner"
                        : "mt-auto bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-200 text-gray-800 rounded-xl py-2 text-lg font-bold cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner"
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
