import React, { useEffect, useState } from "react";
import { MdLibraryBooks } from "react-icons/md";
import Store from "../books/Store";

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
const Books = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("choose your genre");

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const filteredBooks =
    selectedCategory === "choose your genre"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase()
        );

  console.log(filteredBooks);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6 mx-4 flex gap-2 ">
        Books
        <MdLibraryBooks />
      </h2>
      {/* categor fltering */}
      <div className="mb-8 flex items-center mx-4">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-grayBrown border-gray-400 px-4 py-2 rounded-lg  text-white focus:outline-none shadow-lg cursor-pointer"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

          {/* show filtered books */}
          {
            filteredBooks.map((book, index) => (
                <Store key={index} book={book} />   
            ))
          }



    </div>
  );
};

export default Books;
