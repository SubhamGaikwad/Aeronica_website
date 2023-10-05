import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const Product = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-white-500 text-pink py-2 w-80 text-center">
          Our Services
        </h1>
        <span className="w-20 h-[3px] bg-gray-500"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          {/* Drone Information in brief */}
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProductCard />
      </div>
    </div>
  );
};

export default Product;
