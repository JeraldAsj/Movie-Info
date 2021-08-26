/** @format */

import React from "react";
import { Link } from "react-router-dom";

// images
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

// style
import { Weapper, Content, TMDBLogoImg, LogoImg } from "./Hearder.styles";

const Header = () => {
  return (
    // Nave bar section
    <Weapper>
      <Content>
        {/* React movie logo */}
        <Link to="/">
          {/* Navigate to home page */}
          <LogoImg src={RMDBLogo} alt="react-movie-logo" />
        </Link>
        {/* Movie db logo */}
        <TMDBLogoImg src={TMDBLogo} alt="tmdb_logo" />
      </Content>
    </Weapper>
  );
};

export default Header;
