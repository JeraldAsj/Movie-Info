/** @format */

import styled from "styled-components";

export const Weapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: heroImage 1s;

  @keyframes heroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);

  h1 {
    font-size: var(--fontXl);

    @media screen and (max-width: 767px) {
      font-size: var(--fontX);
    }
  }
  p {
    font-size: var(--fontM);

    @media screen and (max-width: 767px) {
      font-size: var(--fontS);
    }
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`;
