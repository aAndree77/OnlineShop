import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "./Theme";
import SunnyIcon from '@mui/icons-material/Sunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { motion, AnimatePresence } from "framer-motion";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "./CartContext";
import logoWhite from "../assets/logoWhite.png"
import logoBlack from "../assets/logoBlack.png"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Nav() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const {cart} = useContext(CartContext)
  const [toggle, setToggle] = useState(false)
  return (
    <>
    <nav className="hidden md:flex justify-between w-screen items-center p-4 shadow-md bg-[var(--primary-color)] text-[var(--text-color)] fixed top-0 z-50">
      <div className="flex items-center space-x-3">
      <img src={theme === "dark" ? logoBlack : logoWhite} className="w-10 h-10"/>
      <Link to="/">
        <h1 className="text-2xl font-bold hover:text-[var(--navbar-text)] transition cursor-pointer">
          ShopEase
        </h1>
      </Link>
      </div>
      <div className="flex flex  items-center font-bold gap-16">
        <Link to="/" className="hover:text-[var(--navbar-text)] transition">
          Home
        </Link>
        <Link to="/shop" className="hover:text-[var(--navbar-text)] transition">
          Shop
        </Link>
        <Link to="/about" className="hover:text-[var(--navbar-text)] transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-[var(--navbar-text)] transition">
          Contact
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={changeTheme}
          className="px-3 py-1 border rounded hover:bg-[var(--navbar-hover)] hover:text-white transition"
        >
          {theme==="dark"?<SunnyIcon/>:<DarkModeIcon/>}
        </button>

        <Link to="/cart" className="relative flex items-center">
        <ShoppingCartIcon/>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>






    <nav className="fixed top-0 z-50 w-screen md:hidden block bg-[var(--primary-color)] text-[var(--text-color)] border-[var(--text-muted)] border-b ">
      <div className="flex items-center justify-between p-4">
        <div className="flex gap-4 ">
          <img src={theme === "dark" ? logoBlack : logoWhite} className="w-10 h-10"/>
          <Link to="/">
          <h1 className="text-2xl font-bold hover:text-[var(--navbar-text)] transition cursor-pointer">
            ShopEase
          </h1>
          </Link>
        </div>
        <AnimatePresence mode="wait">
          {!toggle ? (
            <motion.div
              key="menu"
              initial={{ rotate: 90 }}
              animate={{ rotate:  0 }}
              exit={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer hover:text-[var(--navbar-text)]"
              onClick={() => setToggle(true)}
            >
              <MenuIcon />
            </motion.div>
          ) : (
            <motion.div
              key="close"
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer hover:text-[var(--navbar-text)]"
              onClick={() => setToggle(false)}
            >
              <CloseIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[var(--background-color)] p-4 overflow-hidden"
          >
            <div className="flex flex-col font-bold gap-5 mb-10">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Link to="/" className="hover:text-[var(--navbar-text)] transition">
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link to="/shop" className="hover:text-[var(--navbar-text)] transition">
                  Shop
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link to="/about" className="hover:text-[var(--navbar-text)] transition">
                  About
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/contact" className="hover:text-[var(--navbar-text)] transition">
                  Contact
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-4"
            >
              <button
                onClick={changeTheme}
                className="px-3 py-1 border rounded hover:bg-[var(--navbar-hover)] hover:text-white transition"
              >
                {theme==="dark"?<SunnyIcon/>:<DarkModeIcon/>}
              </button>

              <Link to="/cart" className="relative flex items-center">
                <ShoppingCartIcon/>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                  {cart.length}
                </span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
