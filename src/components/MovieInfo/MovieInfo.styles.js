/** @format */

import styled from "styled-components";
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')` : "#000"};
  padding: 40px 20px;
  background-size: cover;
  animation: BackImage 1s;

  @keyframes BackImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  /* height: 564px; */
  background: rgba(0, 0, 0, 0.7);
  border-radius: 30px;

  @media screen and (max-width: 767px) {
    display: block;
    max-height: none;
  }
`;
export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .rating-directors {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .score {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }
  .directoe {
    margin: 0 0 0 40px;
    p {
      margin: 0;
    }
  }
  h1 {
    @media screen and (max-width: 767px) {
      font-size: var(--fontX);
    }
  }
`;
