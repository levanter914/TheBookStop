import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { LuIndianRupee } from "react-icons/lu";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";

const Store = ({ book }) => {
  return (
    <div className="flex flex-col items-center border rounded-lg shadow-lg overflow-hidden p-4 bg-white max-w-xs mx-auto transition-transform duration-300 hover:scale-105 sm:max-w-md sm:flex-row sm:items-start">
      {/* Book Cover */}
      <div className="w-full sm:w-1/3 flex-shrink-0 mb-4 sm:mb-0 flex justify-center">
        <Link to={`/book/${book._id}`}>
          <img
            src={`${getImgUrl(book?.coverImage)}`}
            alt="Book Cover"
            className="w-full h-auto object-cover rounded-md cursor-pointer hover:opacity-90 transition-all duration-200"
          />
        </Link>
      </div>

      {/* Book Details */}
      <div className="w-full sm:w-2/3 sm:ml-4 flex flex-col items-center sm:items-start text-center sm:text-left">
        <Link to={`/book/${book._id}`}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600">
            {book?.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4">
          {book?.description.length > 100
            ? `${book?.description.slice(0, 100)}...`
            : book?.description}
        </p>

        <div className="w-[auto] flex items-center justify-between sm:flex-col sm:justify-start gap-3">
          <p className="font-medium text-lg flex items-center text-gray-800 mb-2">
            <span className="line-through text-gray-500 font-normal flex items-center mr-2">
              <LuIndianRupee />
              {book?.oldPrice}
            </span>
            <span className="flex items-center">
              <LuIndianRupee />
              {book?.newPrice}
            </span>
          </p>
          <button className="btn-primary px-4 py-2 sm:py-[auto] flex items-center gap-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition sm:ml-auto">
            <FiShoppingCart />
            <span className="flex">Add to Cart</span>
          </button>
        </div>




        
      </div>
    </div>
  );
};

export default Store;
