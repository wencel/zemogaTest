import React from "react";
import {
  Card,
  BlurryCard,
  ButtonContainer,
  Container,
} from "./CurrentPollCard.styled";

const CurrentPollCard = () => {
  return (
    <Container>
      <BlurryCard>
        <Card>
          <header>
            <h6>What's your opinion on</h6>
            <h1>Pope Francis?</h1>
          </header>
          <p>
            He’s talking tough on clergy sexual abuse, but is he just another
            papal pervert protector? (thumbs down) or a true pedophile punishing
            pontiff? (thumbs up)
          </p>
          <a
            href='https://en.wikipedia.org/wiki/Pope_Francis'
            target='_blank'
            rel='noopener noreferrer'
          >
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
        <button className='likeButton'>
          <img
            src='https://storage.googleapis.com/zemogatest/like.png'
            alt='like'
          />
        </button>
        <button className='dislikeButton'>
          <img
            src='https://storage.googleapis.com/zemogatest/dislike.png'
            alt='dislike'
          />
        </button>
      </ButtonContainer>
    </Container>
  );
};

export default CurrentPollCard;
