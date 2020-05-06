import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {
  BarContainer,
  LeftBar,
  RightBar,
  RightArow,
} from "./DaysCounterBar.styled";

const DaysCounterBar = ({ poll }) => {
  const now = moment();
  const daysBefore = now.diff(moment(poll.startDate), "days");
  const daysAfter = moment(poll.endDate).diff(now, "days");
  const beforePercentage = (
    (100 * daysBefore) /
    (daysBefore + daysAfter)
  ).toFixed();
  const afterPercentage = 100 - Number(beforePercentage);
  return (
    <BarContainer>
      <LeftBar width={beforePercentage}>
        CLOSING IN
        <RightArow />
      </LeftBar>
      <RightBar width={afterPercentage}>
        {daysAfter}
        <span>days</span>
      </RightBar>
    </BarContainer>
  );
};

DaysCounterBar.propTypes = {
  poll: PropTypes.object,
};

export default DaysCounterBar;
