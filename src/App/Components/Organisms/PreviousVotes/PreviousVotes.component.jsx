import React, { memo } from "react";
import { VotesGrid } from "./PreviousVotes.styled";
import PreviousPollCard from "../PreviousPollCard/PreviousPollCard.component";
import { useSelector } from "react-redux";
import { savePolls } from "../../../Redux/Polls/PollsActions";
import { useDispatch } from "react-redux";

const PreviousVotes = () => {
  const dispatch = useDispatch();
  const polls = useSelector(state => state.polls);
  const updatePolls = newPoll => {
    const newPolls = polls.items.map(poll =>
      poll.id === newPoll.id ? newPoll : poll
    );
    dispatch(savePolls(newPolls));
  };
  return (
    <VotesGrid>
      {polls.items
        .filter(poll => !poll.current)
        .map(poll => (
          <PreviousPollCard
            updatePolls={updatePolls}
            key={poll.id}
            poll={poll}
          />
        ))}
    </VotesGrid>
  );
};

export default memo(PreviousVotes);
