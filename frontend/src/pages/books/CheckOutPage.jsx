import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LuIndianRupee } from "react-icons/lu";
import { useAuth } from "../../context/AuthContext";

import Swal from "sweetalert2";
import { useCreateOrderMutation } from "../../redux/features/orders/ordersApi";
import Loading from "../../components/Loading";

const CheckOutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2);

  const { currentUser } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [createOrder, { isLoading, error }] = useCreateOrderMutation();
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };

  const onSubmit = async (data) => {
    const newOrder = {
      name: data.name,
      email: currentUser?.email,
      address: {
        city: data.city,
        country: data.country,
        state: data.state,
        zipcode: data.zipcode,
      },
      phone: data.phone,
      productIds: cartItems.map((item) => item?._id),
      totalPrice: totalPrice,
    };

    try {
      await createOrder(newOrder).unwrap();
      Swal.fire({
        title: "Confirmed Order",
        text: "Your order placed successfully!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, It's Okay!",
      });
      navigate("/orders");
    } catch (error) {
      console.error("Error place an order", error);
      alert("Failed to place an order");
    }
  };

  if (isLoading) return <Loading />;

  return (
    <section>
      <div className="min-h-screen p-6 bg-favorite rounded-2xl flex items-center justify-center mb-3 shadow-2xl">
        <div className="container max-w-screen-lg mx-auto">
          <h2 className="font-semibold text-xl text-gray-600 mb-2">
            Cash On Delivery
          </h2>
          <p className="text-gray-500 mb-2 flex ">
            Total Price: <LuIndianRupee className="mx-1 size-5" /> {totalPrice}
          </p>
          <p className="text-gray-500 mb-6">
            Items: {cartItems.length > 0 ? cartItems.length : 0}{" "}
          </p>

          <div className="bg-blackBG rounded-2xl shadow-lg p-4 px-4 md:p-8 mb-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8"
            >
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="name">Full Name</label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      disabled
                      defaultValue={currentUser?.email}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      {...register("phone", { required: true })}
                      type="number"
                      id="phone"
                      placeholder="+91 12345 67890"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address">Address / Street</label>
                    <input
                      {...register("address", { required: true })}
                      type="text"
                      id="address"
                      placeholder="Your address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">City</label>
                    <input
                      {...register("city", { required: true })}
                      type="text"
                      id="city"
                      placeholder="Your city"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="country">Country / Region</label>
                    <input
                      {...register("country", { required: true })}
                      type="text"
                      id="country"
                      placeholder="Country"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">State / Province</label>
                    <input
                      {...register("state", { required: true })}
                      type="text"
                      id="state"
                      placeholder="State"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="zipcode">Zipcode</label>
                    <input
                      {...register("zipcode", { required: true })}
                      type="text"
                      id="zipcode"
                      placeholder=""
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-5 mt-3">
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="form-checkbox"
                      />
                      <label htmlFor="terms" className="ml-2">
                        I agree to the{" "}
                        <Link className="underline text-secondary">
                          Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link className="underline text-secondary">
                          Shopping Policy
                        </Link>
                        .
                      </label>
                    </div>
                  </div>

                  <div className="md:col-span-5 text-right">
                    <button
                      disabled={!isChecked}
                      className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded"
                    >
                      Place an Order
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOutPage;
