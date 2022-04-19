import { useEffect, useState } from "react";
import { apiInstance } from "../../api/apiInstance";

import { MoreLikeThis } from "../MoreLikeThis/MoreLikeThis";

import "./Modal.scss";

export const Modal = ({ onClick, data, type }) => {
  const [genreList, setGenreList] = useState([]);
  const [related, setRealted] = useState([]);

  useEffect(() => {
    const fetchGenreList = async () => {
      const response = await apiInstance.get(
        `/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setGenreList(response.data.genres);
    };

    const fetchRelated = async () => {
      const response = await apiInstance.get(
        `/${type}/${data.id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      setRealted(response.data.results);
    };
    fetchRelated();
    fetchGenreList();
  }, [type, data.id]);

  const filterList = genreList.filter((item) =>
    data.genre_ids.includes(item.id)
  );

  return (
    <>
      <div className="modal-backdrop" onClick={onClick} />
      <div className="modal-container">
        <div className="modal-header">
          <img
            className="modal-image"
            src={`http://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
            alt="backdrop"
          />
          <div className="modal-title">
            <span>{data.title || data.name}</span>
            <div>
              <button>
                <i className="fa fa-play"></i>
              </button>
              <button>
                <i className="fa fa-plus"></i>
              </button>
              <button>
                <i className="fa fa-thumbs-up"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="modal-content">
          {filterList && (
            <span>
              Genres:{" "}
              {filterList.map((genre, index) => (
                <span key={index} className="mx-2">
                  {genre.name}
                </span>
              ))}
            </span>
          )}
          <p>Language: {data.original_language}</p>
          <p className="my-4">{data.overview}</p>
          <span className="text-2xl">More Like This</span>
          <div className="modal-related grid grid-cols-3 gap-4 my-4">
            {related.map((item, index) => (
              <MoreLikeThis
                key={index}
                id={item.id}
                type={type}
                image={item.backdrop_path}
                content={item.title || item.name}
                overview={item.overview}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
