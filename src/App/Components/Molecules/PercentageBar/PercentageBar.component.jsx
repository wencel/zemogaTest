import React from "react";
import { BarSection, BarContainer } from "./PercentageBar.styled";

const PercentageBar = () => {
  return (
    <BarContainer>
      <BarSection width='60' isLike>
        <img
          src='https://storage.googleapis.com/zemogatest/like.png'
          alt='like'
        />
        60%
      </BarSection>
      <BarSection width='40'>
        <img
          src='https://storage.googleapis.com/zemogatest/dislike.png'
          alt='dislike'
        />
        40%
      </BarSection>
    </BarContainer>
  );
};

export default PercentageBar;
