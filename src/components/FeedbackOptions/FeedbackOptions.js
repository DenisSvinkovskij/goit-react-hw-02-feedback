import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={s.btnsBlock}>
      <button
        type="button"
        className={s.button}
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        type="button"
        className={s.button}
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        type="button"
        className={s.button}
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
