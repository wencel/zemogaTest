import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  TitleContainer,
  ReactionIcon,
  DateContainer,
} from "./PreviousPollCard.styled";
import VotingButtons from "../../Molecules/VotingButtons/VotingButtons.component";
import PercentageBar from "../../Molecules/PercentageBar/PercentageBar.component";

const PreviousPollCard = ({ image, name, category, description }) => {
  return (
    <Card image={image}>
      <div>
        <TitleContainer>
          <ReactionIcon>
            <img
              src='https://storage.googleapis.com/zemogatest/like.png'
              alt='reaction'
            />
          </ReactionIcon>
          <h5>{name}</h5>
        </TitleContainer>
        <DateContainer>
          <strong> 1 month ago</strong> in {category}
        </DateContainer>
        <p>{description}</p>
        <VotingButtons />
        <PercentageBar />
      </div>
    </Card>
  );
};

PreviousPollCard.propTypes = {
  image: PropTypes.string,
};
export default PreviousPollCard;
