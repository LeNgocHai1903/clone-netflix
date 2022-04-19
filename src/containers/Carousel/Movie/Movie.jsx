import { useState, useEffect } from "react";
import { apiInstance } from "../../../api/apiInstance";

import { Carousel } from "../../../components/Carousel/Carousel";

export const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const responseData = await apiInstance.get(
        `/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setMovies(responseData.data.results);
    };
    fetchMovie();
  }, []);
  return <Carousel name="Movie" movies={movies} type="movie" />;
};
