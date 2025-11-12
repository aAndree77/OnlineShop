import Nav from "../components/Nav";
import { useContext,useState,useEffect } from "react";
import { ThemeContext } from "../components/Theme";
import CloseIcon from '@mui/icons-material/Close';
import Imagine1 from '../assets/pexels-asphotograpy-230544.jpg'
import Imagine2 from '../assets/pexels-yankrukov-8867434.jpg'

export default function About() {
  const { theme } = useContext(ThemeContext);
  const [sub,setSub] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setSub(false)
    },2000)
  },[sub])
  return (
    <div className={theme === "dark" ? "bg-[var(--primary-color)] text-gray-100 min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      <Nav />

      <div className={theme === "dark" ? "md:py-20 pb-20 pt-30 text-center rounded-b-lg bg-gradient-to-r mt-20 from-orange-500 via-orange-400 to-yellow-200 text-gray-100 p-8 rounded-lg shadow-lg" : "md:py-20 pb-20 pt-30 text-center rounded-b-lg bg-gradient-to-r from-pink-500 to-blue-600 text-white"}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About ShopEase</h1>
        <p className="max-w-2xl mx-auto text-lg">
          ShopEase is committed to providing the best shopping experience possible.
          Our mission is to make online shopping seamless, safe, and enjoyable for everyone.
        </p>
      </div>

      <div className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className={theme === "dark" ? "text-gray-100" : "text-gray-700"}>
              We aim to provide a wide range of products at competitive prices while maintaining
              excellent customer service. Your satisfaction is our top priority.
            </p>
          </div>
          <div>
            <img src={Imagine2} alt="Mission" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>


      <div className={theme === "dark" ? "py-16 px-4 md:px-16 bg-[var(--primary-color)]" : "py-16 px-4 md:px-16 bg-gray-100"}>
        <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <img src={Imagine1} alt="Vision" className="rounded-lg shadow-md" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className={theme === "dark" ? "text-gray-100" : "text-gray-700"}>
              To become the most trusted online shop where customers can find quality products
              effortlessly. We strive for innovation, convenience, and transparency in everything we do.
            </p>
          </div>
        </div>
      </div>
      <div className={theme === "dark" ? "py-16 text-center bg-[var(--background-color)] text-gray-100" : "py-16 text-center"}>
        <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
        <p className={theme === "dark" ? "text-gray-100 mb-6 max-w-xl mx-auto" : "text-gray-700 mb-6 max-w-xl mx-auto"}>
          Sign up for updates, promotions, and exclusive offers.
        </p>
        <button onClick={()=>setSub(true)} className={theme === "dark" ? "px-8 py-3 rounded shadow bg-[var(--primary-color)] text-gray-100 hover:bg-gray-800 transition cursor-pointer" : "px-8 py-3 rounded shadow bg-gradient-to-r from-pink-500 to-blue-600 text-white hover:bg-blue-900 transition cursor-pointer"}>
          Subscribe
        </button>
      </div>
      {sub && (
        <div className="fixed top-5 right-5 z-50 px-4">
          <div
            className={
              theme === "dark"
                ? "p-5 w-[90%] sm:w-[300px] md:w-[350px] lg:w-[400px] rounded-2xl bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-200 shadow-xl relative animate-fade-in"
                : "text-white p-5 w-[90%] sm:w-[300px] md:w-[350px] lg:w-[400px] rounded-2xl bg-gradient-to-r from-pink-500 to-blue-600 shadow-xl relative animate-fade-in"
            }
          >
            <CloseIcon
              onClick={() => setSub(false)}
              fontSize="large"
              className="absolute top-2 right-2 p-1 cursor-pointer hover:text-red-300 active:text-red-500 active:scale-90 transition"
            />

            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-xl md:text-2xl font-bold">🎉 Congrats!</h1>
              <p className="text-sm md:text-base leading-snug">
                You have successfully subscribed! You’ll receive notifications and
                offers by email.
              </p>
            </div>
          </div>
        </div>)}
      <div className={theme === "dark" ? "py-8 text-center bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-200 text-black" : "py-8 text-center bg-gradient-to-r from-pink-500 to-blue-600 text-white"}>
        &copy; 2025 ShopEase. All rights reserved.
      </div>
    </div>
  );
}
