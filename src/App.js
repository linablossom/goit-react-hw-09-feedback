import React, { useState } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveGoodFeedback = () => {
    setGood(good + 1);
  };

  const onLeaveNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };

  const onLeaveBadFeedback = () => {
    setBad(bad + 1);
  };

  const onLeaveFeedback = {
    onLeaveGoodFeedback,
    onLeaveNeutralFeedback,
    onLeaveBadFeedback,
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) return 0;
    return Math.floor((good / total) * 100);
  };

  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          {...onLeaveFeedback}
          // onLeaveGoodFeedback={onLeaveGoodFeedback}
          // onLeaveNeutralFeedback={onLeaveNeutralFeedback}
          // onLeaveBadFeedback={onLeaveBadFeedback}
        />
      </Section>
      <Section title={"Statistics"}>
        {!total ? (
          <Notification message={"No feedback given"} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        )}
      </Section>
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = (type) => {
//     this.setState((prevState) => ({
//       [type]: prevState[type] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     if (!total) return 0;
//     return Math.floor((this.state.good / total) * 100);
//   };

//   render() {
//     const total = this.countTotalFeedback();
//     const percentage = this.countPositiveFeedbackPercentage();
//     return (
//       <>
//         <Section title={"Please leave feedback"}>
//           <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
//         </Section>
//         <Section title={"Statistics"}>
//           {!total ? (
//             <Notification message={"No feedback given"} />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={total}
//               positivePercentage={percentage}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

// export default App;
