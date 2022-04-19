import { useState, useEffect } from "react";

import { apiInstance } from "../../api/apiInstance";
import { Button } from "../../components/Button/Button";

import "./Banner.scss";

export const Banner = () => {
  const [trending, setTrending] = useState({});

  useEffect(() => {
    const fetchTrending = async () => {
      const responseData = await apiInstance.get(
        `/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const items = responseData.data.results;
      const item = items[Math.floor(Math.random() * items.length)];
      setTrending(item);
    };
    fetchTrending();
  }, []);
  return (
    <div className="w-auto relative">
      <img
        className="w-full banner-image"
        src={`http://image.tmdb.org/t/p/w500/${trending.backdrop_path}`}
        alt={trending.title}
      />
      <div className="absolute bottom-24 left-20">
        <span className="banner-title">{trending.title || trending.name}</span>
        <div className="flex">
          <Button type="play" />
          <Button type="info" />
        </div>
      </div>
    </div>
  );
};
