import React, { useState } from "react";
import CartItem from "./CartItem";
import Loader from "../cards/loader";
import Footer from "../cards/footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Margherita",
      price: 13.4,
      quantity: 1,
      image:
        "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/margherita-pizza-c459ab0c.jpg",
    },
    {
      id: 2,
      name: "Mushroom Pizza",
      price: 14.5,
      quantity: 2,
      image:
        "https://p4.wallpaperbetter.com/wallpaper/72/766/456/mushrooms-pizza-tomatoes-olives-wallpaper-preview.jpg",
    },
    {
      id: 3,
      name: "Pepperoni",
      price: 10.95,
      quantity: 2,
      image:
        "https://thumbs.dreamstime.com/b/four-cheese-pizza-close-up-generative-ai-high-quality-illustration-276400410.jpg",
    },
  ]);

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(
        cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleProceed = () => {
    alert(`Proceeding to checkout with total: $${calculateTotal()}`);
  };
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 1000);

  if (loading) {
    return (
      <div className="h-[72vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          🍕 Your cart 🍕
        </h1>
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-gray-200 py-4 last:border-none"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover shadow-md"
                  />
                  <div className="flex-1 ml-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <div className="mt-2 flex items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                      >
                        -
                      </button>
                      <span className="mx-3 text-lg font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 font-bold hover:text-red-800 transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Total:</h2>
                <p className="text-2xl font-bold text-gray-900">
                  ${calculateTotal()}
                </p>
              </div>
              <button
                onClick={handleProceed}
                className="mt-6 w-full bg-red-600 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:bg-red-700 transition"
              >
                Proceed to Checkout
              </button>
            </>
          ) : (
            <p className="text-center text-gray-700 text-lg">
              Your cart is empty 😞
            </p>
          )}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Cart;
