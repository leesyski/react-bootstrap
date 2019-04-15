import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => (
  <div>
    <div> className="forecast-summary__date" <span>{props.date}</span></div>
    <div> className="forecast-summary__temperature" <span>{props.temperature}</span></div>
    <div> className="forecast-summary__description" <span>{props.decription}</span></div>
    <div> className="forecast-summary__icon" <span>{props.icon}</span></div>
  </div>
);

ForecastSummary.prototype = {
  date: PropTypes.number.isRequired,
  temperture: PropTypes.number.isRequired,
  description: PropTypes.description.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
