import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackStatistics.module.css';

export default function FeedbackStatistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={s.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}
FeedbackStatistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
