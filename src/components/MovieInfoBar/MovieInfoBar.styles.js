/** @format */

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background-color: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;

  .colume {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--medGrey);
    margin: 0 20px;
    border-radius: 20px;
    flex: 1;

    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 767px) {
    display: block;
    .colume {
      margin: 0 20px;
    }
  }
`;
