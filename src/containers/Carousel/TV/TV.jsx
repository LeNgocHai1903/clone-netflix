import { useState, useEffect } from "react";
import { apiInstance } from "../../../api/apiInstance";

import { Carousel } from "../../../components/Carousel/Carousel";

export const TVCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const responseData = await apiInstance.get(
        `/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setMovies(responseData.data.results);
    };
    fetchMovie();
  }, []);
  return <Carousel name="TV Shows" movies={movies} type="tv" />;
};
