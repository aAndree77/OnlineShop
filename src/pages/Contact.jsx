import Nav from "../components/Nav";
import { useContext } from "react";
import { ThemeContext } from "../components/Theme";

export default function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
    
    <div className={theme === "dark" ? "bg-[var(--primary-color)] text-gray-100 min-h-auto" : "bg-white text-gray-900 min-h-auto"}>
      <Nav />
      <div className={theme === "dark" ? "md:py-20 pb-20 pt-30 mt-20 text-center rounded-b-lg bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-200 text-gray-100 p-8 rounded-lg shadow-lg" : "md:py-20 pb-20 pt-30 py-20 text-center rounded-b-lg bg-gradient-to-r from-pink-500 to-blue-600 text-white"}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We’d love to hear from you! Whether you have questions, feedback, or need support, we’re here to help.
        </p>
      </div>
      <div className="py-19 px-4 md:px-16 max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center">
        <div className={theme === "dark" ? "p-6 border rounded-lg shadow hover:shadow-lg transition bg-[var(--primary-color)] border-white" : "p-6 border rounded-lg shadow hover:shadow-lg transition bg-white border-gray-200"}>
          <h2 className="text-xl font-bold mb-2">Email</h2>
          <p className={theme === "dark" ? "text-gray-100" : "text-gray-700"}>support@shopease.com</p>
        </div>
        <div className={theme === "dark" ? "p-6 border rounded-lg shadow hover:shadow-lg transition bg-[var(--primary-color)] border-white" : "p-6 border rounded-lg shadow hover:shadow-lg transition bg-white border-gray-200"}>
          <h2 className="text-xl font-bold mb-2">Phone</h2>
          <p className={theme === "dark" ? "text-gray-100" : "text-gray-700"}>+1 (111) 111 111</p>
        </div>
        <div className={theme === "dark" ? "p-6 border rounded-lg shadow hover:shadow-lg transition bg-[var(--primary-color)] border-white" : "p-6 border rounded-lg shadow hover:shadow-lg transition bg-white border-gray-200"}>
          <h2 className="text-xl font-bold mb-2">Address</h2>
          <p className={theme === "dark" ? "text-gray-100" : "text-gray-700"}>123 undeva, nu stiu, Romania</p>
        </div>
      </div>

    </div>
    <footer className={theme === "dark" ? "py-8 text-center bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-200 text-black" : "py-8 text-center bg-gradient-to-r from-pink-500 to-blue-600 text-white"}>
        &copy; 2025 ShopEase. All rights reserved.
    </footer>

    </>
  );
}
