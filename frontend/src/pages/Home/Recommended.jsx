import React, { useEffect, useState } from "react";
import { MdLibraryBooks } from "react-icons/md";

import Store from "../books/Store";
import { FaLocationArrow } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Recommended = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-3xl text-grayBrown font-extrabold mb-6 mx-4 flex gap-2 ">
        Recommended section <MdLibraryBooks />
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 2, spaceBetween: 50 },
          1180: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper rounded-lg mb-2 "
      >
        {books.length > 0 &&
          books.slice(10, 20).map((book, index) => (
            <SwiperSlide key={index}>
              <Store book={book} />
            </SwiperSlide>
          ))}
      </Swiper>

      {/* <div className="w-full max-w-[50rem] h-full cursor-pointer bg-primary px-4 py-3 flex items-center gap-4 justify-center mx-auto my-auto rounded-lg hover:bg-secondary shadow-xl">
        <Link to="/exploreBooks" className="text-white font-semibold text-lg">
          Explore All Books
        </Link>
        <FaLocationArrow className="text-white text-2xl" />
      </div> */}

      <div className="w-full max-w-[50rem] h-full cursor-pointer bg-primary px-4 py-3 flex items-center gap-4 justify-center mx-auto my-auto rounded-lg shadow-xl sm:hover:bg-secondary mt-4">
        <Link to="/exploreBooks" className="text-white font-semibold text-lg">
          Explore All Books
        </Link>
        <FaLocationArrow className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default Recommended;
