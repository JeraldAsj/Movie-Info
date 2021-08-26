/** @format */

import React from "react";
// style
import { Wrapper, Content, Text } from "./MovieInfo.styles";
//  component
import Thumb from "../Thumb";

// image
import NoImage from "../../images/no_image.jpg";
// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

const MovieInfo = ({ movie }) => {
  return (
    <>
      {/* movie info section */}
      <Wrapper backdrop={movie.backdrop_path}>
        <Content>
          {/* show thumnails for selected image */}
          <Thumb
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            clickable={false}
          ></Thumb>
          {/* show details for selected movie */}
          <Text>
            <h1>{movie.title}</h1>
            <h3>PLOT</h3>
            <p>{movie.overview}</p>

            <div className="rating-directors">
              <div>
                <h3>RATING</h3>
                <div className="score">{movie.vote_average}</div>
              </div>
              {movie.director}
              <div className="director">
                <h3>
                  DIRECTOR
                  {movie.directors && movie.directors.length > 1 ? "S" : ""}
                </h3>
                {movie.directors &&
                  movie.directors.map((director) => (
                    <p key={director.credit_id}>{director.name}</p>
                  ))}
              </div>
            </div>
          </Text>
        </Content>
      </Wrapper>
    </>
  );
};

export default MovieInfo;
