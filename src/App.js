import './App.css';
// import FeedbackCounter from './components/FeedbackCounter';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import FeedbackStatistics from './components/FeedbackStatistics/FeedbackStatistics';
import Section from './components/Section/Section';
import Notification from './components/NotificationNoStatistics/Notification';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedaback = () => {
    return Object.values(this.state).reduce(
      (curVal, nextVal) => curVal + nextVal,
    );
  };

  countPositiveFeedbackPercentage = (total, good) => {
    const percent = (good / total) * 100;
    return percent.toFixed();
  };

  handleLeaveFeedback = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedaback();
    const posPerc = this.countPositiveFeedbackPercentage(
      total,
      this.state.good,
    );

    return (
      <div className="App">
        <Section title={'Please leave feeaback'}>
          <FeedbackOptions onLeaveFeedback={this.handleLeaveFeedback} />
        </Section>

        <Section title={'Statistics'}>
          {total > 0 ? (
            <FeedbackStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={posPerc}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
