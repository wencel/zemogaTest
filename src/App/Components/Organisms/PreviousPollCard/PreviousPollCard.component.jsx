import React, { useState } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import {
  Card,
  TitleContainer,
  ReactionIcon,
  DateContainer,
} from "./PreviousPollCard.styled";
import VotingButtons from "../../Molecules/VotingButtons/VotingButtons.component";
import PercentageBar from "../../Molecules/PercentageBar/PercentageBar.component";

const PreviousPollCard = ({ poll, updatePolls }) => {
  const [didVote, setDidVote] = useState(false);
  const monthsAgo = moment().diff(moment(poll.endDate), "months");
  const registerVote = isLike => {
    const newPoll = { ...poll };
    if (isLike) {
      newPoll.likes += 1;
    } else {
      newPoll.dislikes += 1;
    }
    updatePolls(newPoll);
  };
  return (
    <Card image={poll.image}>
      <div>
        <TitleContainer>
          <ReactionIcon>
            <img
              src='https://storage.googleapis.com/zemogatest/like.png'
              alt='reaction'
            />
          </ReactionIcon>
          <h5>{poll.name}</h5>
        </TitleContainer>
        <DateContainer>
          <strong>
            {monthsAgo} month{poll.monthsAgo === 1 ? "" : "s"} ago
          </strong>{" "}
          in {poll.category}
        </DateContainer>
        {didVote ? <p>Thanks for voting</p> : <p>{poll.description}</p>}
        <VotingButtons
          addVote={registerVote}
          setDidVote={setDidVote}
          didVote={didVote}
        />
        <PercentageBar likes={poll.likes} dislikes={poll.dislikes} />
      </div>
    </Card>
  );
};

PreviousPollCard.propTypes = {
  poll: PropTypes.object,
  updatePolls: PropTypes.func,
};
export default PreviousPollCard;
