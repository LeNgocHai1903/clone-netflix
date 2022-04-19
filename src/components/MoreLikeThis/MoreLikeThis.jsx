import { useEffect, useState } from "react";

import { apiInstance } from "../../api/apiInstance";
import { Link } from "react-router-dom";

import "./MoreLikeThis.scss";

export const MoreLikeThis = ({ image, content, overview, id, type }) => {
  const [videoLink, setVideoLink] = useState({ key: "" });
  useEffect(() => {
    const fetchVideoLink = async () => {
      const reponse = await apiInstance.get(
        `/${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      const matchResult = reponse.data.results.sort(
        (a, b) => a.published_at > b.published_at
      )[0];
      setVideoLink(matchResult);
    };
    fetchVideoLink();
  }, [type, id]);

  return (
    <Link
      className="moreLikeThis-container"
      to={`https://www.youtube.com/watch?v=${videoLink.key}`}
      target="_blank"
    >
      <img
        src={`http://image.tmdb.org/t/p/w500/${image}`}
        alt="More Like This"
      />
      <div className="flex items-center justify-between px-4">
        <span>{content}</span>
        <button>
          <i className="fa fa-plus"></i>
        </button>
      </div>
      <p className="moreLikeThis-overview px-4">{overview}</p>
    </Link>
  );
};
