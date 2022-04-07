import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Carousel = ({ name, movies }) => {
  return (
    <div className="my-6">
      <span className="mx-6">{name}</span>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        speed={500}
        spaceBetween={10}
        slidesPerView={7}
        pagination={{ clickable: true }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <Link to="/">
              <img
                src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.name}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
