/** @format */

import React from "react";

import { Weapper, Content, Text } from "./HeroImage.styles";

const HeroImage = ({ image, title, text }) => {
  return (
    // banare section
    // banare background image
    <Weapper image={image}>
      <Content>
        <Text>
          {/* show title */}
          <h1>{title}</h1>
          {/* show overview */}
          <p>{text}</p>
        </Text>
      </Content>
    </Weapper>
  );
};

export default HeroImage;
