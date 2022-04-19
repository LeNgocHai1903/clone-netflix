import { Banner } from "../containers/Banner/Banner";
import { MovieCarousel } from "../containers/Carousel/Movie/Movie";
import { TVCarousel } from "../containers/Carousel/TV/TV";

export const LandingPage = () => {
  return (
    <>
      <Banner />
      <MovieCarousel />
      <TVCarousel />
    </>
  );
};
