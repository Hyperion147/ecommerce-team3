import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <h2 className="text-center text-4xl mt-20">
        YOU NEED TO ADD SOMETHING IN CART FIRST GARIB 😂
      </h2>
    );
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center p-6 mt-20 bg-gray-900 min-h-screen">
      {cart.map((item) => (
        <div
          key={item.id}
          className="w-80 h-fit rounded-2xl bg-gray-700 p-4 text-white transition-all duration-500 hover:scale-110  "
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="h-40 mx-auto object-contain"
          />

          <h3 className="mt-2 font-bold">{item.title}</h3>
          <p>Qty: {item.qty}</p>

          <button
            onClick={() => removeFromCart(item.id)}
            className="mt-2 text-red-400"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
