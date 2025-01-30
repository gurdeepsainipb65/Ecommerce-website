import React, { useState } from "react";
import Loader from "./loader";
import Footer from "./footer";

const OrderCard = ({ order }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold text-gray-800">Order #{order.id}</h3>
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          order.status === "Delivered"
            ? "bg-green-100 text-green-800"
            : order.status === "Cancelled"
              ? "bg-red-100 text-red-800"
              : "bg-blue-100 text-blue-800"
        }`}
      >
        {order.status}
      </span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
      <div className="flex items-center space-x-2">
        <span className="font-medium">Pizza:</span>
        <span>{order.pizzaName}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-medium">Quantity:</span>
        <span>{order.quantity}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-medium">Total Price:</span>
        <span>${order.totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-medium">Order Date:</span>
        <span>{order.orderDate}</span>
      </div>
    </div>
    <div className="mt-6">
      <button className="w-full md:w-auto bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">
        View Details
      </button>
    </div>
  </div>
);

const OrderHistory = () => {
  // Example order data
  const orders = [
    {
      id: 12345,
      pizzaName: "Pepperoni Pizza",
      quantity: 2,
      totalPrice: 25.98,
      orderDate: "2023-10-15",
      status: "Delivered",
    },
    {
      id: 12346,
      pizzaName: "Margherita Pizza",
      quantity: 1,
      totalPrice: 12.99,
      orderDate: "2023-10-16",
      status: "Cancelled",
    },
    {
      id: 12347,
      pizzaName: "BBQ Chicken Pizza",
      quantity: 3,
      totalPrice: 38.97,
      orderDate: "2023-10-17",
      status: "Processing",
    },
  ];

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
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
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
          Order History
        </h2>
        <div className="space-y-6">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
      <div>
       <Footer/>
      </div>
    </div>
  );
};

export default OrderHistory;
