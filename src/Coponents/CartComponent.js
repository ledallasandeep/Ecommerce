import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "./Redux/CartSlice";

const CartComponent = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 border-b"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="font-bold">${item.price}</p>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 text-white px-4 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-blue-500 text-white px-6 py-2 rounded font-semibold"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
