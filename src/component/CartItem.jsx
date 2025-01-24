import React from 'react';

const CartItem = ({ cartItems, updateQuantity, removeItem }) => {
  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
    {cartItems.length === 0 ? (
      <p className="text-gray-600">Your cart is empty.</p>
    ) : (
      <div>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex items-center border-b border-gray-200 py-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover mr-4" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 bg-gray-300 rounded-l-md text-gray-800"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-gray-100 border border-gray-300 text-gray-900">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 bg-gray-300 rounded-r-md text-gray-800"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="ml-4 text-red-500 hover:text-red-700 font-bold"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-right">
          <h3 className="text-xl font-semibold text-gray-800">Total: ${calculateTotal()}</h3>
          <button className="mt-4 px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-800 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    )}
  </div>

  );
};

export default CartItem;
