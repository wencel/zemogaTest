import React from "react";
import {
  BarContainer,
  LeftBar,
  RightBar,
  RightArow,
} from "./DaysCounterBar.styled";

const DaysCounterBar = () => {
  return (
    <BarContainer>
      <LeftBar width='35'>
        CLOSING IN
        <RightArow />
      </LeftBar>
      <RightBar width='65'>
        22
        <span>days</span>
      </RightBar>
    </BarContainer>
  );
};

export default DaysCounterBar;
