// src/ProductDetail.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  console.log("ID:", id);
  const [product, setproduct] = useState(null);
  useEffect(() => {
    axios.get("/pizzadata.json").then((response) => {
      console.log("ID:", id);
      console.log("Response Data:", response.data);
      const pdata = response.data[id];
      console.log("Product Data:", pdata);
      setproduct(pdata);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex md:space-x-12 p-8">
          {/* Product Image Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Product Details Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h2>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-yellow-400">★</span>
              <span className="text-gray-700">★★★★</span>
              <span className="text-gray-500">{product.price}</span>
            </div>
            <p className="text-xl font-semibold text-green-600 mb-4">250 rs</p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Features List */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.ingredients}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {product.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-900 transition duration-300">
                Add to Cart
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-red-600 hover:text-white transition duration-300">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
