import { useState } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";

import { Modal } from "../Modal/Modal";

import "./Carousel.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Carousel = ({ name, movies, type }) => {
  const [data, setData] = useState({});
  const [isModal, setIsModal] = useState(false);

  const moreInfoHandle = (item) => {
    setIsModal(true);
    setData(item);
  };
  return (
    <div className="my-10">
      {isModal && (
        <Modal onClick={() => setIsModal(false)} data={data} type={type} />
      )}
      <span className="mx-6">{name}</span>
      <Swiper
        id="swipers"
        className="my-6 mx-2"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        speed={500}
        spaceBetween={20}
        slidesPerView={6}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="movie-holder">
              <Link to="/" className="movie-link">
                <div>
                  <img
                    src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt={movie.name}
                  />
                </div>
                <div className="movie-content text-sm">
                  <div>
                    <button>
                      <i className="fa fa-play"></i>
                    </button>
                    <button onClick={() => moreInfoHandle(movie)}>
                      <i className="fa fa-plus"></i>
                    </button>
                    <button>
                      <i className="fa fa-thumbs-up"></i>
                    </button>
                  </div>
                  <ul className="flex mx-2 my-2">
                    <li className="mx-2">{movie.adult ? "Adult" : "Kid"}</li>
                    <li className="mx-2">Vote Average: {movie.vote_average}</li>
                  </ul>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
