import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const SellBooks = () => {
  const [formData, setFormData] = useState({
    bookName: '',
    author: '',
    isbn: '',
    description: '',
    price: '',
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
    accept: 'image/*',
  });

  // Remove an image
  const handleRemoveImage = (index) => {
    const updatedImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: updatedImages });
  };

  // Form validation
  const validate = () => {
    const newErrors = {};
    if (!formData.bookName) newErrors.bookName = 'Book Name is required.';
    if (!formData.author) newErrors.author = 'Author is required.';
    if (!formData.isbn) newErrors.isbn = 'ISBN is required.';
    if (!formData.description) newErrors.description = 'Description is required.';
    if (!formData.price || isNaN(formData.price)) newErrors.price = 'Valid price is required.';
    if (formData.images.length === 0) newErrors.images = 'At least one image is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      console.log('Form Data Submitted:', formData);
      // Add actual submission logic here
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 font-sans text-gray-800">
      <div className="flex flex-wrap gap-6 w-full max-w-4xl">
        {/* Left Section */}
        <div className="flex-1 min-w-[300px] flex flex-col items-center justify-center">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-6 w-full h-64 flex items-center justify-center cursor-pointer ${
              isDragActive ? 'bg-blue-100 border-blue-400' : 'bg-gray-50 border-gray-300'
            }`}
          >
            <input {...getInputProps()} />
            <p className="text-gray-500 text-center">
              {isDragActive
                ? 'Drop the images here...'
                : 'Drag and drop images, or click to upload.'}
            </p>
          </div>
          {errors.images && <p className="text-red-500 text-sm mt-2">{errors.images}</p>}

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
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.bookName && <p className="text-red-500 text-sm mt-1">{errors.bookName}</p>}
            </div>

            {/* Author */}
            <div>
              <label className="block font-medium mb-1">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
            </div>

            {/* ISBN */}
            <div>
              <label className="block font-medium mb-1">ISBN Number</label>
              <input
                type="text"
                name="isbn"
                value={formData.isbn}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.isbn && <p className="text-red-500 text-sm mt-1">{errors.isbn}</p>}
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-28"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description}</p>
              )}
            </div>

            {/* Price */}
            <div>
              <label className="block font-medium mb-1">Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
            </div>
          </form>
        </div>
      </div>

      {/* Upload Button */}
      <div className="mt-6 flex justify-center w-full">
        <button
          onClick={handleSubmit}
          disabled={isSubmitting || Object.keys(errors).length > 0}
          className={`px-8 py-3 bg-blue-500 text-white font-bold rounded-md transition ${
            isSubmitting || Object.keys(errors).length > 0
              ? 'bg-gray-400 cursor-not-allowed'
              : 'hover:bg-blue-600'
          }`}
        >
          {isSubmitting ? 'Uploading...' : 'Upload'}
        </button>
      </div>
    </div>
  );
};

export default SellBooks;
