import React from "react";
import { BarSection, BarContainer } from "./PercentageBar.styled";
import PropTypes from "prop-types";

const PercentageBar = ({ likes, dislikes }) => {
  const likesPercentage = ((100 * likes) / (likes + dislikes)).toFixed();
  const dislikesPercentage = 100 - Number(likesPercentage);
  return (
    <BarContainer>
      <BarSection width={likesPercentage} isLike>
        <img
          src='https://storage.googleapis.com/zemogatest/like.png'
          alt='like'
        />
        {likesPercentage}%
      </BarSection>
      <BarSection width={dislikesPercentage}>
        <img
          src='https://storage.googleapis.com/zemogatest/dislike.png'
          alt='dislike'
        />
        {dislikesPercentage}%
      </BarSection>
    </BarContainer>
  );
};

PercentageBar.propTypes = {
  likes: PropTypes.number,
  dislikes: PropTypes.number,
};

export default PercentageBar;
