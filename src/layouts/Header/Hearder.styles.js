/** @format */

import styled from "styled-components";

export const Weapper = styled.div`
  background-color: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 20px 0;
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 767px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 767px) {
    width: 80px;
  }
`;
