import { useState, useEffect } from "react";

import { apiInstance } from "../../api/apiInstance";
import { Button } from "../../components/Button/Button";

import "./Banner.css";

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
    <div className="w-auto h-96 relative">
      <img
        className="w-full h-96 "
        src={`http://image.tmdb.org/t/p/w500/${trending.backdrop_path}`}
        alt={trending.title}
      />
      <div className="absolute bottom-24 left-20">
        <span className="banner-title">{trending.title || trending.name}</span>
        <div className="flex">
          <Button name="Play" icon="play" backgroundColor="white" textColor="black" />
          <Button name="More Info" icon="info" backgroundColor="gray-400" textColor="white"/>
        </div>
      </div>
    </div>
  );
};
