/** @format */

import React from "react";

// config
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// components
import HeroImage from "../components/HeroImage";
import Grid from "../components/Grid";
import Thumb from "../components/Thumb";
import Spinner from "../components/Spinner";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
// Hooks
import useHomeFetch from "../Hooks/useHomeFetch";
// img
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  console.log(state);

  if (error) return <div>Somthing Woring</div>;
  return (
    <>
      {!searchTerm && state.results[0] ? (
        // baner section
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      {/* Search bar section */}
      <SearchBar setSearchTerm={setSearchTerm} />
      {/* Show Data's Grid */}
      <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {state.results.map((movie) => (
          // Thumnail for image list
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {/* Spinner section */}
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        // Load more section
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
