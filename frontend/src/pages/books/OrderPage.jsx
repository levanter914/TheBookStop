import React from "react";
import { useGetOrderByEmailQuery } from "../../redux/features/orders/ordersApi";
import { useAuth } from "../../context/AuthContext";
import { FaRupeeSign } from "react-icons/fa";

const OrderPage = () => {
  const { currentUser } = useAuth();

  const {
    data: orders = [],
    isLoading,
    isError,
  } = useGetOrderByEmailQuery(currentUser.email);

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-secondary"></div>
      </div>
    );

  if (isError)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-lg font-semibold">
          Error getting orders data.
        </div>
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Your Orders
      </h2>
      {orders.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">
          No orders found!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order, index) => (
            <div
              key={order._id}
              className="bg-favorite shadow-lg rounded-lg p-6 border border-secondary hover:shadow-2xl transition duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2 bg-secondary text-white rounded-full text-sm">
                  #{index + 1}
                </span>
                <span className="text-sm text-gray-500">
                  Order ID: <strong>{order._id}</strong>
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Name:</strong> {order.name}
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> {order.email}
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> {order.phone}
                </p>
                <p className="text-gray-700 flex">
                  <strong>Total Price:</strong> <FaRupeeSign className="ml-1" />{" "}
                  {order.totalPrice}
                </p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">Address:</h3>
                <p className="text-gray-600">
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country}, {order.address.zipcode}
                </p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">Products:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  {order.productIds.map((productId) => (
                    <li key={productId}>{productId}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
