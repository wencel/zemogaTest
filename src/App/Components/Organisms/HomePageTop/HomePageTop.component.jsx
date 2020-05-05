import React from "react";
import { TopSection } from "./HomePageTop.styled";
import CurrentPollCard from "../CurrentPollCard/CurrentPollCard.component";
import DaysCounterBar from "../../Molecules/DaysCounterBar/DaysCounterBar.component";

const HomePageTop = () => {
  return (
    <TopSection>
      <CurrentPollCard></CurrentPollCard>
      <DaysCounterBar />
    </TopSection>
  );
};

export default HomePageTop;
