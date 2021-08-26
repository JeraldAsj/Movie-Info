/** @format */

import React from "react";
// styles
import { Wrapper, Content } from "./MovieInfoBar.styles";
// helpers
import { calcTime, convertMoney } from "../../helpers";

const MovieInfoBar = ({ time, budget, revenue }) => {
  return (
    <Wrapper>
      <Content>
        <div className="colume">
          <p>Runing time: {calcTime(time)}</p>
        </div>
        <div className="colume">
          <p>Budget: {convertMoney(budget)}</p>
        </div>
        <div className="colume">
          <p>Revenue: {convertMoney(revenue)}</p>
        </div>
      </Content>
    </Wrapper>
  );
};

export default MovieInfoBar;
