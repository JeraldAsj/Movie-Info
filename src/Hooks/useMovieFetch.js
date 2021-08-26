/** @format */

import { useState, useEffect } from "react";
import API from "../API";

const useMovieFetch = (movieId) => {
  const [state, setstate] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // get all movie details
    const fetchMovie = async () => {
      try {
        setLoading(false);
        setError(false);
        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        // get Directors only
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );
        setstate({ ...movie, actors: credits.cast, directors });
      } catch (error) {
        setError(true);
      }
    };
    // setLoading(true);
    fetchMovie();
  }, [movieId]);
  return { state, loading, error };
};

export default useMovieFetch;
