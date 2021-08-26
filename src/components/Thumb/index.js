/** @format */

import React from "react";
import { Link } from "react-router-dom";

import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        // navigate to movie info section
        <Link to={`/${movieId}`}>
          <Image src={image}></Image>
        </Link>
      ) : (
        <Image src={image}></Image>
      )}
    </div>
  );
};

export default Thumb;
