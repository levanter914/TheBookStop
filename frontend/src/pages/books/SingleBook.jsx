import React from "react";
import { FiShoppingCart, FiMessageCircle } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { LuIndianRupee } from "react-icons/lu";
import { getImgUrl } from "../../utils/getImgUrl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useFetchBookByIdQuery } from "../../redux/features/books/booksApi";

const SingleBook = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-secondary"></div>
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 text-lg font-semibold">
        Error loading book info
      </div>
    );

  return (
    <div className="container mx-auto p-6 lg:p-12">
      <div className="max-w-4xl mx-auto bg-favorite rounded-2xl shadow-lg p-6 lg:p-10 border border-secondary hover:shadow-2xl scale-110 transition duration-300">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {book.title}
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={`${getImgUrl(book.coverImage)}`}
              alt={book.title}
              className="w-full h-auto rounded-lg shadow-xl object-fit-cover"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong className="font-semibold">Author:</strong>{" "}
                {book.author || "Admin"}
              </p>
              <p className="text-gray-700">
                <strong className="font-semibold">Published:</strong>{" "}
                {new Date(book?.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-700 capitalize">
                <strong className="font-semibold">Category:</strong>{" "}
                {book?.category}
              </p>
              <p className="text-gray-700">
                <strong className="font-semibold">Description:</strong>{" "}
                {book.description}
              </p>
              {/* Added Price */}
              <p className="font-medium text-lg flex items-center text-gray-800 mb-2 ">
                <span className="line-through text-gray-500 font-normal flex items-center mr-2">
                  <LuIndianRupee />
                  {book?.oldPrice}
                </span>
                <span className="flex items-center">
                  <LuIndianRupee />
                  {book?.newPrice}
                </span>
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:gap-8">
              <button
                onClick={() => handleAddToCart(book)}
                className="btn-primary flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition-all duration-300"
              >
                <FiShoppingCart className="text-lg" />
                <span>Add to Cart</span>
              </button>

              {/* Chat with Seller Button */}
              <button className="flex items-center gap-2 px-6 py-2 bg-secondary text-white rounded-lg shadow-md hover:bg-secondary-dark transition-all duration-300">
                <FiMessageCircle className="text-lg" />
                <span>Chat with Seller</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
