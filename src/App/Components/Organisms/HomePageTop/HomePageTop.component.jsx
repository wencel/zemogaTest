import React from "react";
import { TopSection } from "./HomePageTop.styled";
import CurrentPollCard from "../CurrentPollCard/CurrentPollCard.component";
import DaysCounterBar from "../../Molecules/DaysCounterBar/DaysCounterBar.component";
import { useSelector } from "react-redux";

const HomePageTop = () => {
  const polls = useSelector(state => state.polls);
  const poll = polls.items.find(p => p.current);
  return (
    <>
      <TopSection>
        <CurrentPollCard poll={poll} polls={polls}></CurrentPollCard>
        <DaysCounterBar poll={poll} />
      </TopSection>
    </>
  );
};

export default HomePageTop;
