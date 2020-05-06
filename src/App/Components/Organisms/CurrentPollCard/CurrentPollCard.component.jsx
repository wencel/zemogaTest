import React from "react";
import { savePolls } from "../../../Redux/Polls/PollsActions";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  BlurryCard,
  ButtonContainer,
  Container,
} from "./CurrentPollCard.styled";

const CurrentPollCard = ({ poll, polls }) => {
  const dispatch = useDispatch();
  const addVote = isLike => {
    const newPoll = { ...poll };
    if (isLike) {
      newPoll.likes += 1;
    } else {
      newPoll.dislikes += 1;
    }
    const newPolls = polls.items.map(poll =>
      poll.id === newPoll.id ? newPoll : poll
    );
    dispatch(savePolls(newPolls));
  };
  return (
    <Container>
      <BlurryCard>
        <Card>
          <header>
            <h6>What's your opinion on</h6>
            <h1>{poll.name}?</h1>
          </header>
          <p>{poll.description}</p>
          <a href={poll.image} target='_blank' rel='noopener noreferrer'>
            <img
              src='https://storage.googleapis.com/zemogatest/Wiki.png'
              alt='wiki'
            />
            More information
          </a>
          <p className='veredictParagaph'>What's Your Veredict?</p>
        </Card>
      </BlurryCard>
      <ButtonContainer>
        <button
          className='likeButton'
          onClick={() => {
            addVote(true);
          }}
        >
          <img
            src='https://storage.googleapis.com/zemogatest/like.png'
            alt='like'
          />
        </button>
        <button
          className='dislikeButton'
          onClick={() => {
            addVote(false);
          }}
        >
          <img
            src='https://storage.googleapis.com/zemogatest/dislike.png'
            alt='dislike'
          />
        </button>
      </ButtonContainer>
    </Container>
  );
};

CurrentPollCard.propTypes = {
  poll: PropTypes.object,
  polls: PropTypes.object,
};

export default CurrentPollCard;
