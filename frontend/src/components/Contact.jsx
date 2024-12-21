import React, { useState } from "react";
import Swal from "sweetalert2";

function Contact() {
  const [status, setStatus] = useState(""); // To display success or error messages

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Add your access key
    formData.append("access_key", "74707af4-54c1-48e8-86bf-5d52bea612ca");

    // Convert form data to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        //setStatus("Form submitted successfully!");

        Swal.fire({
          title: "Your form submitted successfully!",
          text: "Please be patient while we get back to you.",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Okay!",
        });
        console.log("Success", result);
        event.target.reset(); // Clear the form
      } else {
        setStatus("Form submission failed. Please try again.");
        console.error("Error", result);
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="max-w-lg w-full bg-favorite shadow-2xl rounded-lg border border-secondary p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-secondary focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-secondary focus:outline-none"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="font-semibold text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Enter your message"
              rows="4"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-secondary focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-secondary text-white font-semibold rounded-lg px-4 py-2 hover:bg-primary transition duration-200"
          >
            Submit Form
          </button>
        </form>
        {/* Status Message */}
        {status && (
          <p className="text-center mt-4 text-sm text-gray-700">{status}</p>
        )}
      </div>
    </div>
  );
}

export default Contact;
