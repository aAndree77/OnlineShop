
import Nav from "../components/Nav";
import { useContext } from "react";
import { ThemeContext } from "../components/Theme";
import Stats from "../components/Stats";
import parteneriate from "../assets/cooperation.png"
import sales from "../assets/money.png"
import customers from "../assets/happy.png"
import store from "../assets/store.png"

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const stats = [
    {
      text: "Active Partnerships",
      nr: 2,
      img: parteneriate,
      desc: "Global partners driving innovation."
    },

    {
      text: "Sales",
      nr: 100000,
      img: sales,
      desc: "100K sales built on customer trust."
    },

    {
      text: "Stores",
      nr: 10,
      img: store,
      desc: "10 stores bringing ShopEase closer."
    },

    {
      text: "Happy Customers",
      nr: 10000,
      img: customers,
      desc: "10K customers inspiring excellence."
    }
  ]
  return (
    <div className={theme === "dark" ? " text-gray-100 min-h-screen" : " text-gray-900 min-h-screen"}>
      <Nav />
      <div className={theme === "dark"
        ? "md:py-20 pb-20 pt-30 text-center rounded-b-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-200 text-gray-100 p-8 shadow-2xl"
        : "md:py-20 pb-20 pt-30 text-center rounded-b-3xl bg-gradient-to-r from-pink-500 to-blue-600 text-white shadow-2xl"}
      >
        <h1 className="text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
          Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">ShopEase</span>
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-8 font-medium">
          Your one-stop destination for everything you need. Quality products, fast delivery, and unbeatable service!
        </p>
        <a
          href="/shop"
          className={theme === "dark"
            ? "inline-block px-10 py-4 font-bold rounded-full shadow-lg bg-[var(--primary-color)] text-gray-100 hover:bg-gray-700 hover:shadow-xl transition-all duration-300 text-lg"
            : "inline-block px-10 py-4 font-bold rounded-full shadow-lg bg-white text-blue-600 hover:bg-blue-100 hover:shadow-xl transition-all duration-300 text-lg"}
        >
          Explore Shop
        </a>
      </div>
      <h2 className="text-4xl font-extrabold text-center tracking-tight mt-10">Our Achievements</h2>
      <Stats items={stats}/>


      <div className="py-16 px-4 md:px-16 bg-[var(--primary-color)]">
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-tight">
          Why Shop With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[{
            title: "Fast Shipping",
            desc: "Get your orders delivered quickly and safely.",
            icon: "🚚"
          }, {
            title: "Wide Selection",
            desc: "From gadgets to fashion, we have something for everyone.",
            icon: "🛍️"
          }, {
            title: "Easy Returns",
            desc: "Hassle-free returns for your peace of mind.",
            icon: "🔄"
          }].map((card) => (
            <div
              key={card.title}
              className={theme === "dark"
                ? "p-8 border rounded-2xl shadow-xl hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300 bg-[var(--background-color)] border-white flex flex-col items-center"
                : "p-8 border rounded-2xl shadow-xl hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300 bg-white border-gray-200 flex flex-col items-center"}
            >
              <span className="text-5xl mb-4">{card.icon}</span>
              <h3 className="font-bold text-2xl mb-2">{card.title}</h3>
              <p className="text-gray-400 text-lg">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={theme === "dark"
        ? "py-16 px-4 md:px-16 bg-[var(--background-color)] text-gray-300"
        : "py-16 px-4 md:px-16 bg-gray-100"}
      >
        <h2 className="text-4xl font-extrabold text-center mb-8">
          About ShopEase
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-400 text-xl">
          At ShopEase, we aim to provide a seamless shopping experience for all your needs. Browse our shop for the latest products, enjoy fast delivery, and shop with confidence.
        </p>
      </div>

      <div className="py-16 text-center bg-[var(--primary-color)]">
        <h2 className="text-4xl font-extrabold mb-6">
          Ready to Start Shopping?
        </h2>
        <a
          href="/shop"
          className={theme === "dark"
            ? "inline-block px-10 py-4 font-bold rounded-full shadow-xl bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-200 text-gray-100 hover:shadow-2xl hover:translate-y-[-2px] transition-all duration-300 text-lg"
            : "inline-block px-10 py-4 font-bold rounded-full shadow-xl bg-gradient-to-r from-pink-500 to-blue-600 text-white hover:shadow-2xl hover:translate-y-[-2px] transition-all duration-300 text-lg"}
        >
          Go to Shop
        </a>
      </div>

      <div className={theme === "dark"
        ? "py-8 text-center bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-200 text-black"
        : "py-8 text-center bg-gradient-to-r from-pink-500 to-blue-600 text-white"}
      >
        &copy; 2025 ShopEase. All rights reserved.
      </div>
    </div>
  );
}
