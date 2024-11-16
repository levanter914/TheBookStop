import React, { useEffect, useState } from "react";
import Store from "./Store"; // Reusing the Store component
import { FiFilter } from "react-icons/fi";
import "./ExploreBooks.css";

const ExploreBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [showFilters, setShowFilters] = useState(false); // For small screens

  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
  });

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

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data); // Initially show all books
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  // Handle Filters
  const applyFilters = () => {
    let updatedBooks = books;

    if (filters.category) {
      updatedBooks = updatedBooks.filter(
        (book) => book.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number);
      updatedBooks = updatedBooks.filter(
        (book) => book.newPrice >= min && book.newPrice <= max
      );
    }

    setFilteredBooks(updatedBooks);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const clearFilters = () => {
    setFilters({ category: "", priceRange: "" });
    setFilteredBooks(books); // Reset to all books
  };

  return (
    <div className="flex flex-col sm:flex-row p-6 gap-6">
      {/* Filter Section */}
      <div
        className={`${
          showFilters ? "block" : "hidden sm:block"
        } w-full sm:w-1/4 bg-grayBrown shadow-lg p-4 rounded-lg border overflow-auto`}
        style={{
          maxHeight: "60vh", // Ensure the filter section takes necessary height
        }}
      >
        <h3 className="text-xl font-semibold mb-4 text-center">Filters</h3>
        <div className="mb-4">
          <label className="block text-white font-medium mb-2">Category</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="w-full border p-2 rounded-lg custom-select"
          >
            {categories.map((category, index) => (
              <option  key={index} value={category.toLowerCase()}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white font-medium mb-2">
            Price Range
          </label>
          <select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleFilterChange}
            className="w-full border p-2 rounded-lg"
          >
            <option value="">All Prices</option>
            <option value="0-200">0 - 200</option>
            <option value="200-500">200 - 500</option>
            <option value="500-1000">500 - 1000</option>
            <option value="200-500">1000 - 1500</option>
          </select>
        </div>
        <button
          onClick={applyFilters}
          className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary transition"
        >
          Apply Filters
        </button>
        <button
          onClick={clearFilters}
          className="w-full mt-2 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition"
        >
          Clear Filters
        </button>
      </div>

      {/* Filter Toggle for Small Screens */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="sm:hidden bg-secondary text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
      >
        <FiFilter />
        <span>Filters</span>
      </button>

      {/* Books Section */}
      <div className="w-full sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <Store key={book._id} book={book} />)
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No books match your filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreBooks;

// import React, { useEffect, useState } from "react";
// import Store from "./Store"; // Reusing the Store component
// import { FiFilter } from "react-icons/fi";

// const ExploreBooks = () => {
//   const [books, setBooks] = useState([]);
//   const [filteredBooks, setFilteredBooks] = useState([]);
//   const [showFilters, setShowFilters] = useState(false); // For small screens

//   const [filters, setFilters] = useState({
//     category: "",
//     priceRange: "",
//   });

//   const categories = [
//     "choose your genre",
//     "fiction",
//     "mystery",
//     "thriller",
//     "fantasy",
//     "science fiction",
//     "romance",
//     "historical",
//     "horror",
//     "adventure",
//     "non-fiction",
//     "biography",
//     "memoir",
//     "self-help",
//     "poetry",
//     "graphic novel",
//     "business",
//     "marketing",
//   ];

//   useEffect(() => {
//     fetch("books.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setBooks(data);
//         setFilteredBooks(data); // Initially show all books
//       })
//       .catch((error) => console.error("Error fetching books:", error));
//   }, []);

//   // Handle Filters
//   const applyFilters = () => {
//     let updatedBooks = books;

//     if (filters.category) {
//       updatedBooks = updatedBooks.filter(
//         (book) => book.category.toLowerCase() === filters.category.toLowerCase()
//       );
//     }

//     if (filters.priceRange) {
//       const [min, max] = filters.priceRange.split("-").map(Number);
//       updatedBooks = updatedBooks.filter(
//         (book) => book.newPrice >= min && book.newPrice <= max
//       );
//     }

//     setFilteredBooks(updatedBooks);
//   };

//   const handleFilterChange = (name, value) => {
//     setFilters({ ...filters, [name]: value });
//   };

//   const clearFilters = () => {
//     setFilters({ category: "", priceRange: "" });
//     setFilteredBooks(books); // Reset to all books
//   };

//   return (
//     <div className="flex flex-col sm:flex-row p-6 gap-6">
//       {/* Filter Section */}
//       <div
//         className={`${
//           showFilters ? "block" : "hidden sm:block"
//         } w-full sm:w-1/4 bg-grayBrown shadow-lg p-4 rounded-lg border overflow-auto`}
//         style={{
//           maxHeight: "60vh", // Ensure the filter section takes necessary height
//         }}
//       >
//         <h3 className="text-xl font-semibold mb-4 text-center">Filters</h3>
//         <div className="mb-4">
//           <label className="block text-white font-medium mb-2">Category</label>
//           <div className="relative">
//             <div className="custom-dropdown">
//               <button
//                 className="dropdown-btn w-full border p-2 rounded-lg text-left"
//                 onClick={() =>
//                   handleFilterChange("category", filters.category)
//                 }
//               >
//                 {filters.category || "Choose your genre"}
//               </button>
//               <ul className="dropdown-list absolute bg-white border rounded-lg mt-2 shadow-lg">
//                 {categories.map((category, index) => (
//                   <li
//                     key={index}
//                     className="dropdown-item px-4 py-2 hover:bg-lightPeach cursor-pointer"
//                     onClick={() =>
//                       handleFilterChange("category", category.toLowerCase())
//                     }
//                   >
//                     {category}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block text-white font-medium mb-2">
//             Price Range
//           </label>
//           <select
//             name="priceRange"
//             value={filters.priceRange}
//             onChange={(e) =>
//               handleFilterChange("priceRange", e.target.value)
//             }
//             className="w-full border p-2 rounded-lg"
//           >
//             <option value="">All Prices</option>
//             <option value="0-200">0 - 200</option>
//             <option value="200-500">200 - 500</option>
//             <option value="500-1000">500 - 1000</option>
//             <option value="200-500">1000 - 1500</option>
//           </select>
//         </div>
//         <button
//           onClick={applyFilters}
//           className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary transition"
//         >
//           Apply Filters
//         </button>
//         <button
//           onClick={clearFilters}
//           className="w-full mt-2 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition"
//         >
//           Clear Filters
//         </button>
//       </div>

//       {/* Filter Toggle for Small Screens */}
//       <button
//         onClick={() => setShowFilters(!showFilters)}
//         className="sm:hidden bg-secondary text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
//       >
//         <FiFilter />
//         <span>Filters</span>
//       </button>

//       {/* Books Section */}
//       <div className="w-full sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredBooks.length > 0 ? (
//           filteredBooks.map((book) => <Store key={book._id} book={book} />)
//         ) : (
//           <div className="col-span-full text-center text-gray-500">
//             No books match your filters.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ExploreBooks;

