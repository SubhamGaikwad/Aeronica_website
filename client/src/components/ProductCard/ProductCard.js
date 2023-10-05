import React from "react";
import product1 from "../../Images/product-1.jpg";
import product2 from "../../Images/product-2.jpg";
import product3 from "../../Images/product-3.jpg";
import product4 from "../../Images/product-5.jpg";

const ProductCard = () => {
  const products = [
    {
      name: "Drone 1",
      image: product1,
      description: "Drone description",
    },
    {
      name: "Drone 2",
      image: product2,
      description: "Drone description",
    },
    {
      name: "Drone 3",
      image: product3,
      description: "Drone description",
    },
    {
      name: "Drone 4",
      image: product4,
      description: "Drone description",
    },
  ];

  return (
    <div className="bg-slate-300 w-full">
      <div className="grid grid-cols-4 gap-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden transform scale-100 transition-transform duration-500 hover:scale-110 "
          >
            <img
              className="w-full h-72 object-cover"
              src={product.image}
              alt={product.name}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center">
              <p className="text-base font-semibold">{product.description}</p>
              {/* <button className="bg-transparent hover:bg-gray-700 text-white py-2 px-4 rounded-md border border-gray-700">
                Know More
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
