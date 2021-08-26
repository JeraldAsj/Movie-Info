/** @format */

import React from "react";

import { Link } from "react-router-dom";

import { Wrapper, Content } from "./BreadCrumb.styles";

const BreadCrumb = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          {/* Navigate to home page */}
          <span>Home</span>
        </Link>
        <span>|</span>
        {/* Show movie title */}
        <span>{movieTitle} </span>
      </Content>
    </Wrapper>
  );
};

export default BreadCrumb;
