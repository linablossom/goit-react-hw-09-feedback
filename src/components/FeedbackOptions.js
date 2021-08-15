import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({
  onLeaveGoodFeedback,
  onLeaveNeutralFeedback,
  onLeaveBadFeedback,
}) => {
  return (
    <>
      <button onClick={onLeaveGoodFeedback}>Good</button>
      <button onClick={onLeaveNeutralFeedback}>Neutral</button>
      <button onClick={onLeaveBadFeedback}>Bad</button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveGoodFeedback: PropTypes.func.isRequired,
  onLeaveNeutralFeedback: PropTypes.func.isRequired,
  onLeaveBadFeedback: PropTypes.func.isRequired,
};

// FeedbackOptions.propTypes = {
//   onLeaveFeedback: PropTypes.object.isRequired,
// };

export default FeedbackOptions;
