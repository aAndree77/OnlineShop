import Nav from "../components/Nav"
import { CartContext } from "../components/CartContext"
import { useContext, useMemo,useState,useEffect } from "react"
import { ThemeContext } from "../components/Theme";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



export default function Cart() {
  const { cart, increment, decrement, deleteProduct,setCart} = useContext(CartContext)
  const { theme } = useContext(ThemeContext);
  const [buy,setBuy] = useState(false)
  const [loading,setLoading] = useState(false)
  const [succes,setSucces] = useState(false)
  const total = useMemo(()=>{
    return cart.reduce((suma,item)=>suma+item.price*item.qty,0)
  },[cart])

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false)
        setBuy(false)
        setSucces(true)
      }, 2000)
      return () => clearTimeout()
    }
  }, [loading])

useEffect(()=>{
  setTimeout(()=>{
    setSucces(false)
  },2000)
},[succes])
  return (
    <>
      <Nav />
      <div className="bg-[var(--primary-color)] min-h-[74vh]">
        {cart.length>0?(
        <div className="max-w-6xl mx-auto p-6">
          

    
          <h1 className="text-4xl text-[var(--text-color)] font-bold mb-6">My Cart</h1>

          <div className="space-y-6">
            {cart.map(p => (
              <div key={p.id} className="bg-[var(--background-color)] flex items-center gap-6 rounded-2xl shadow-md p-4 hover:shadow-lg transition ">
                <img src={p.thumbnail} alt={p.title} className="w-32 h-32 object-cover rounded-xl border border-[var(--text-color)]"/>

                <div className="flex flex-col gap-3 flex-1 ">
                  <div className="flex items-center justify-between">
                    <h2 className="md:text-2xl sm:text-lg text-md  text-[var(--text-color)] font-semibold">{p.title}</h2>
                    <DeleteIcon onClick={()=>deleteProduct(p)} fontSize="large" className="text-[var(--text-color)] cursor-pointer hover:text-red-500 !transition  !duration-300 active:scale-80"/>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="line-through text-gray-500 text-lg">${(p.initialPrice * p.qty).toFixed(2)}</p>
                    <p className="bg-red-500 text-white text-sm py-1 px-3 rounded-md">- ${((p.initialPrice - p.price) * p.qty).toFixed(2)}</p>
                  </div>

                  <p className="text-2xl text-green-600 font-bold">${(p.price * p.qty).toFixed(2)}</p>

                  <div className="flex items-center gap-3">
                    <button onClick={() => decrement(p)} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
                      <ArrowBackIosNewIcon fontSize="small" />
                    </button>

                    <span className="text-lg text-[var(--text-color)] font-semibold">x{p.qty}</span>

                    <button onClick={() => increment(p)} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
                      <ArrowForwardIosIcon fontSize="small" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
            <div className="flex justify-between">
              <h1 className="text-green-600 text-2xl font-bold">Total:{total.toFixed(2)}$</h1>
              <button onClick={()=>setCart([])}  className="border border-[var(--text-color)] py-2.5 px-2 rounded-md hover:bg-red-500 active:bg-red-700 transition active:scale-95 hover:text-white text-[var(--text-color)]">Clear all</button>
            </div>
            <div className="flex items-center justify-center">
              <button onClick={()=>setBuy(true)}className="font-bold text-[var(--text-color)] border border-[var(--text-color)] px-15 py-4 sm:text-2xl text-xl rounded-md hover:bg-blue-500 hover:text-white active:bg-blue-700  transition active:scale-80">BUY</button>
            </div>
            {buy && (
                <div>
                  {loading && (
                    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.85)] z-50">
                      <CircularProgress size={80} thickness={5} />
                    </div>
                  )}

                  {!loading && (
                    <div className="scrollbardark fixed top-0 left-0 flex items-center justify-center h-screen w-screen bg-[rgba(0,0,0,0.7)] z-40">
                      <div className={theme === "dark"
                        ? "overflow-y-scroll scrollbardark text-white p-0 w-[90%] sm:w-[80%] md:w-[70%] lg:w-120 h-[60vh] sm:h-[65vh] md:h-[70vh] fixed rounded-lg bg-[var(--primary-color)]"
                        : "overflow-y-scroll scrollbarlight text-white p-0 w-[90%] sm:w-[80%] md:w-[70%] lg:w-120 h-[60vh] sm:h-[65vh] md:h-[70vh] fixed rounded-lg bg-[var(--primary-color)]"}>
                        
                        <div className={theme === "dark"
                          ? "w-full sticky flex justify-center items-center top-0 rounded-t-lg h-30 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-200"
                          : "sticky w-full flex justify-center items-center top-0 h-30 rounded-lg bg-gradient-to-r from-pink-500 to-blue-600"}>
                          <p className="text-3xl font-bold text-center">💰Finish your purchase!</p>
                          <CloseIcon
                            onClick={() => setBuy(false)}
                            fontSize="large"
                            className="absolute top-2 text-[var(--primary-color)] right-2 p-1 cursor-pointer hover:text-red-300 active:text-red-500 active:scale-80"
                          />
                        </div>

                        <div className="p-[5%]">
                          <div className="flex flex-col pt-7 gap-3">
                            <label className="font-bold text-[var(--text-color)]">E-mail</label>
                            <input className="bg-[var(--background-color)] text-[var(--input-color)] rounded-lg w-[100%] h-10 p-6" type="text" placeholder="example@gmail.com"/>
                          </div>

                          <p className="font-bold mt-3 text-[var(--text-color)]">Card</p>
                          <div className="flex flex-col pt-5 gap-3">
                            <label className="font-bold text-[var(--text-color)]">Card Number</label>
                            <input className="bg-[var(--background-color)] text-[var(--input-color)] rounded-lg w-[100%] h-10 p-6" type="text" placeholder="1234 5678 9012 3456"/>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                              <div className="flex flex-col items-center w-full sm:w-1/2">
                                <label className="font-bold text-[var(--text-color)]">Exp Date</label>
                                <input className="p-6 bg-[var(--background-color)]  text-[var(--input-color)] rounded-lg h-10 w-[80%]" type="text" placeholder="MM/YY" />
                              </div>
                              <div className="flex flex-col items-center w-full sm:w-1/2">
                                <label className="font-bold text-[var(--text-color)]">CVV</label>
                                <input className="p-6 bg-[var(--background-color)] text-[var(--input-color)] rounded-lg h-10 w-[80%]" type="text" placeholder="123"/>
                              </div>
                            </div>

                            <div>
                              <label className="font-bold">Name</label>
                              <input className="bg-[var(--background-color)] rounded-lg  text-[var(--input-color)] w-[100%] h-10 p-6" type="text" placeholder="John Brown"/>
                            </div>

                            <div className="flex flex-col items-center gap-5 mt-5">
                              <p className="text-green-500 font-bold text-2xl">Total:{total.toFixed(2)}$</p>
                              <button
                                onClick={() => setLoading(true)}
                                className={theme === "light"
                                  ? "mt-auto bg-gradient-to-r from-pink-500 to-blue-600 text-white rounded-xl py-2 px-10 w-full sm:w-auto text-lg font-bold cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner"
                                  : "mt-auto bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-200 text-white px-10 w-full sm:w-auto rounded-xl py-2 text-lg font-bold cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner"}>
                                Pay
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>)}
                </div>)}
                {succes && (
                  <div className="fixed top-5 right-5 z-50 px-4">
                    <div
                      className={
                        theme === "dark"
                          ? "p-6 w-[90%] sm:w-[300px] md:w-[350px] lg:w-[400px] rounded-2xl bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-200 shadow-xl relative animate-fade-in"
                          : "text-white p-6 w-[90%] sm:w-[300px] md:w-[350px] lg:w-[400px] rounded-2xl bg-gradient-to-r from-pink-500 to-blue-600 shadow-xl relative animate-fade-in"
                      }
                    >
                      <div
                        className={
                          theme === "dark"
                            ? "flex flex-col items-start gap-3 w-full"
                            : "flex flex-col items-start gap-3 w-full"
                        }
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircleIcon className="text-emerald-400 text-shadow-md !text-3xl" />
                          <p className="text-2xl md:text-3xl font-bold text-emerald-400 text-shadow-md">
                            Succes!
                          </p>
                        </div>

                        <p className="text-sm md:text-base text-gray-100 leading-snug">
                          Your transaction has been completed successfully!
                        </p>

                        <CloseIcon
                          onClick={() => setSucces(false)}
                          fontSize="large"
                          className="absolute top-2 right-2 text-[var(--text-color)] p-1 cursor-pointer hover:text-red-300 active:text-red-500 active:scale-90 transition"
                        />
                      </div>
                    </div>
                  </div>)}
          </div>
        </div>
        ):(<Link to={"/shop"}><div className="h-[100vh] flex justify-center text-[var(--text-color)] text-center items-center font-bold text-5xl">Nu sunt produse in cos!</div></Link>)}
      </div>
    </>
  )
}
