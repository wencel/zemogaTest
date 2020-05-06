import React, { useState } from "react";
import { AlertContainer, CloseButton } from "./InfoAlert.styled";
const InfoAlert = () => {
  const [visible, setVisible] = useState(true);
  return (
    <AlertContainer visible={visible}>
      <h5>Speak out. Be heard</h5>
      <p>
        Rule of Thumb is a crowd sourced court of public opinion where anyone
        and everyone can speak out and speak freely. It’s easy: You share your
        opinion, we analyze and put the data in a public report.
      </p>
      <h2>Be counted</h2>
      <CloseButton
        onClick={() => {
          setVisible(false);
        }}
      >
        ×
      </CloseButton>
    </AlertContainer>
  );
};

export default InfoAlert;
