import Nav from "../components/Nav";
import { useContext,useState, useEffect } from "react";
import { ThemeContext } from "../components/Theme";
import { useParams } from "react-router-dom";

export default function Products() {
  const { theme } = useContext(ThemeContext);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(p => p.json())
      .then(product => setProduct(product));
  }, [id]);

  return (
    <div className={` ${
    theme === "dark" ? "bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-100" : "bg-[var(--background-color)] text-[var(--text-color)]"}`}>
    <Nav />
    <div className="bg-[var(--primary-color)] min-h-screen p-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
        <div className="bg-[var(--background-color)] rounded shadow p-4 flex flex-col items-center">
          <img src={product.thumbnail} alt={product.title} className="w-full h-80 object-contain rounded" />
          <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
          <span className="text-[var(--text-muted)]">{product.brand}</span>
          <span className="text-gray-500 text-sm">{product.category}</span>
        </div>

        <div className="bg-[var(--background-color)] rounded shadow p-4 flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-bold mb-1">{product.title}</h1>
            <p className="text-[var(--text-muted)] mb-2">{product.description}</p>
            <p className="text-green-600 font-bold text-2xl mb-1">{product.price} lei</p>
            <p className="text-[var(--text-muted)] text-sm mb-1">Category: {product.category}</p>
            <p className="text-[var(--text-muted)] text-sm mb-1">Brand: {product.brand}</p>
            <p className="text-[var(--text-muted)] text-sm mb-1">Stock: {product.stock}</p>
            <p className="text-yellow-500">⭐ {product.rating} / 5</p>
          </div>

         <button className={theme==="light" ? "w-full text-white py-2 rounded mt-2 bg-gradient-to-r from-pink-500 to-blue-600 bg-[length:200%_200%] bg-left transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner" : "w-full py-2 rounded mt-2 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-200 text-gray-100 bg-[length:200%_200%] bg-left transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner"}>Add to cart</button>


        </div>
      </div>

        <div className="max-w-6xl mx-auto mt-6 space-y-2">
          <h2 className="text-xl font-bold mb-2">Reviews</h2>
          {product.reviews?.map((review, reviews) => (
            <div key={reviews} className="bg-[var(--background-color)] p-3 rounded shadow">
              <div className="flex justify-between mb-1">
                <span className="font-semibold">{review.reviewerName}</span>
                <span className="text-yellow-500 font-bold">⭐ {review.rating}</span>
              </div>
              <p className="text-[var(--text-muted)]">{review.comment}</p>
              <span className="text-xs text-gray-400">{review.date}</span>
            </div>
          ))}
        </div>
    </div>
    </div>
  );
}
