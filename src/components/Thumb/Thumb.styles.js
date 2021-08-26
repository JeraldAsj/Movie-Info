/** @format */

import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  max-width: 720px;
  border-radius: 30px;
  animation: Thumb 0.5s;
  transition: all 0.3s;

  :hover {
    opacity: 0.8;
  }

  @keyframes Thumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
