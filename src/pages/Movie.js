/** @format */

import React from "react";
import { useParams } from "react-router-dom";
// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// component
import Grid from "../components/Grid";
import Spinner from "../components/Spinner";
import BreadCrumb from "../components/BreadCrumb";
import MovieInfo from "../components/MovieInfo";
import MovieInfoBar from "../components/MovieInfoBar";
import Actor from "../components/Actor";
// Hooks
import useMovieFetch from "../Hooks/useMovieFetch";

// images
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();
  const { state, loading, error } = useMovieFetch(movieId);
  console.log(state);

  if (loading) return <Spinner />;
  if (error) return <h1>Not found</h1>;
  return (
    <React.Fragment>
      {/* Movie list info bar */}
      <BreadCrumb movieTitle={state.original_title} />
      {/* Movie info section */}
      <MovieInfo movie={state} />
      {/* MovieInfoBar section */}
      <MovieInfoBar
        time={state.runtime}
        budget={state.budget}
        revenue={state.revenue}
      />
      <Grid header="Actors">
        {state.actors &&
          state.actors.map((actor) => (
            <Actor
              key={actor.credit_id}
              name={actor.name}
              character={actor.character}
              imageUrl={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : NoImage
              }
            />
          ))}
      </Grid>
    </React.Fragment>
  );
};

export default Movie;
