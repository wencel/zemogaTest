import React from "react";
import { SubmitContaner, SubmitButton } from "./SubmitSection.styled";

const SubmitSection = () => {
  return (
    <SubmitContaner>
      <h2>Is there anyone else you would want s to add?</h2>
      <SubmitButton>Submit a Name</SubmitButton>
    </SubmitContaner>
  );
};

export default SubmitSection;
