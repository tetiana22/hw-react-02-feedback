import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Container } from "./App.styled";

 export class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0

  }
  onLeaveFeedback = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }))
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? ((good / total) * 100).toFixed(0) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const totalPercentage = this.countPositiveFeedbackPercentage(); 

    return (
      <Container>
         <Section title="Please leave feedback">
           <FeedbackOptions
              onLeaveFeedback={this.onLeaveFeedback}
              options={options}
           />
         </Section>
         <Section title="Statistics">
           <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={totalPercentage}
           />
        </Section>
      </Container>
    )
  }
  
};
