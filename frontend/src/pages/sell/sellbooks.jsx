import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const categories = [
  "choose your genre",
  "fiction",
  "mystery",
  "thriller",
  "fantasy",
  "science fiction",
  "romance",
  "historical",
  "horror",
  "adventure",
  "non-fiction",
  "biography",
  "memoir",
  "self-help",
  "poetry",
  "graphic novel",
  "business",
  "marketing",
];

const SellBooks = () => {
  const [formData, setFormData] = useState({
    bookName: "",
    author: "",
    isbn: "",
    description: "",
    category: "",
    oldPrice: "",
    newPrice: "",
    images: [],
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file drop/upload
  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  // Remove an image
  const handleRemoveImage = (index) => {
    const updatedImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: updatedImages });
  };

  // Form validation
  const validate = () => {
    const newErrors = {};
    if (!formData.bookName) newErrors.bookName = "Book Name is required.";
    if (!formData.author) newErrors.author = "Author is required.";
    if (!formData.isbn) newErrors.isbn = "ISBN is required.";
    if (!formData.description)
      newErrors.description = "Description is required.";
    if (!formData.category || formData.category === "choose your genre")
      newErrors.category = "Please select a genre.";
    if (!formData.oldPrice || isNaN(formData.oldPrice))
      newErrors.oldPrice = "Valid old price is required.";
    if (!formData.newPrice || isNaN(formData.newPrice))
      newErrors.newPrice = "Valid new price is required.";
    if (formData.images.length === 0)
      newErrors.images = "At least one image is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      try {
        const imageUploads = await Promise.all(
          formData.images.map(async (image) => {
            const formData = new FormData();
            formData.append("file", image.file);
            formData.append("upload_preset", "your_cloudinary_preset"); // Change if using Cloudinary
            const response = await axios.post(
              {getImgUrl}/api/upload,
              formData
            );
            return response.data.secure_url;
          })
        );

        const payload = {
          ...formData,
          images: imageUploads,
        };

        // Replace with your API endpoint
        await axios.post("/api/books", payload);
        alert("Book added successfully!");
        setFormData({
          bookName: "",
          author: "",
          isbn: "",
          description: "",
          category: "",
          oldPrice: "",
          newPrice: "",
          images: [],
        });
      } catch (error) {
        console.error("Error uploading data:", error);
        alert("Failed to add the book. Try again!");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-6 font-sans bg-favorite mb-4 shadow-2xl rounded-2xl text-gray-800 border border-secondary">
      <div className="flex flex-wrap gap-6 w-full max-w-4xl">
        {/* Left Section */}
        <div className="flex-1 min-w-[300px] flex flex-col items-center justify-center">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-6 w-full h-64 flex items-center justify-center cursor-pointer ${
              isDragActive
                ? "bg-blue-100 border-blue-400"
                : "bg-gray-50 border-gray-300"
            }`}
          >
            <input {...getInputProps()} />
            <p className="text-gray-500 text-center">
              {isDragActive
                ? "Drop the images here..."
                : "Drag and drop images, or click to upload."}
            </p>
          </div>
          {errors.images && (
            <p className="text-red-500 text-sm mt-2">{errors.images}</p>
          )}

          {/* Thumbnails */}
          <div className="flex flex-wrap gap-2 mt-4">
            {formData.images.map((img, index) => (
              <div key={index} className="relative w-20 h-20">
                <img
                  src={img.preview}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-md shadow-md"
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 min-w-[300px]">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Book Name */}
            <div>
              <label className="block font-medium mb-1">Book Name</label>
              <input
                type="text"
                name="bookName"
                value={formData.bookName}
                onChange={handleInputChange}
                placeholder="Enter the book name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              {errors.bookName && (
                <p className="text-red-500 text-sm mt-1">{errors.bookName}</p>
              )}
            </div>

            {/* Author */}
            <div>
              <label className="block font-medium mb-1">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                placeholder="Enter the author name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              {errors.author && (
                <p className="text-red-500 text-sm mt-1">{errors.author}</p>
              )}
            </div>

            {/* ISBN */}
            <div>
              <label className="block font-medium mb-1">ISBN Number</label>
              <input
                type="text"
                name="isbn"
                value={formData.isbn}
                onChange={handleInputChange}
                placeholder="Enter the 13-digit ISBN number"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              {errors.isbn && (
                <p className="text-red-500 text-sm mt-1">{errors.isbn}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter the description (minimum 100 words)"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary resize-none h-28"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="block font-medium mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category}</p>
              )}
            </div>

            {/* Old Price */}
            <div>
              <label className="block font-medium mb-1">Old Price</label>
              <input
                type="number"
                name="oldPrice"
                value={formData.oldPrice}
                onChange={handleInputChange}
                placeholder="Enter the old price"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              {errors.oldPrice && (
                <p className="text-red-500 text-sm mt-1">{errors.oldPrice}</p>
              )}
            </div>

            {/* New Price */}
            <div>
              <label className="block font-medium mb-1">New Price</label>
              <input
                type="number"
                name="newPrice"
                value={formData.newPrice}
                onChange={handleInputChange}
                placeholder="Enter the new price"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              {errors.newPrice && (
                <p className="text-red-500 text-sm mt-1">{errors.newPrice}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white p-3 rounded-md hover:bg-secondary transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellBooks;
