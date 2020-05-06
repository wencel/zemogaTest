import React from "react";
import HomePageTop from "../../Components/Organisms/HomePageTop/HomePageTop.component";
import InfoAlert from "../../Components/Molecules/InfoAlert/InfoAlert.component";
import PreviousVotes from "../../Components/Organisms/PreviousVotes/PreviousVotes.component";
import { Title } from "./HomePage.styled";
import SubmitSection from "../../Components/Molecules/SubmitSection/SubmitSection.component";

const HomePage = () => {
  return (
    <>
      <HomePageTop></HomePageTop>
      <InfoAlert></InfoAlert>
      <Title>Previous Rulings</Title>
      <PreviousVotes />
      <SubmitSection />
    </>
  );
};

export default HomePage;
