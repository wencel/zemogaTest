import React, { useState } from "react";
import {
  ButtonsContainer,
  VoteButton,
  VoteNowButton,
} from "./VotingButtons.styled";
import PropTypes from "prop-types";

const VotingButtons = ({ addVote, didVote, setDidVote }) => {
  const [likeSelected, setLikeSelected] = useState(false);
  const [dislikeSelected, setDislikeSelected] = useState(false);
  const resetVote = () => {
    setDidVote(false);
    setDislikeSelected(false);
    setLikeSelected(false);
  };
  const voteNow = () => {
    setDidVote(true);
    addVote(likeSelected);
  };
  return (
    <>
      <ButtonsContainer>
        {!didVote && (
          <>
            <VoteButton
              isLike
              selected={likeSelected}
              onClick={() => {
                setLikeSelected(true);
                setDislikeSelected(false);
              }}
            >
              <img
                src='https://storage.googleapis.com/zemogatest/like.png'
                alt='like'
              />
            </VoteButton>
            <VoteButton
              selected={dislikeSelected}
              onClick={() => {
                setLikeSelected(false);
                setDislikeSelected(true);
              }}
            >
              <img
                src='https://storage.googleapis.com/zemogatest/dislike.png'
                alt='dislike'
              />
            </VoteButton>
          </>
        )}
        {didVote ? (
          <VoteNowButton onClick={resetVote}>Vote again</VoteNowButton>
        ) : (
          <VoteNowButton
            disabled={!likeSelected && !dislikeSelected}
            onClick={voteNow}
          >
            Vote now
          </VoteNowButton>
        )}
      </ButtonsContainer>
    </>
  );
};

VotingButtons.propTypes = {
  addVote: PropTypes.func,
};
export default VotingButtons;
