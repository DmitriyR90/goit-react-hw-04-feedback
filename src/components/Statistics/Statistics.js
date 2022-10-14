import PropTypes from 'prop-types';
import { StatWrap, StatInfo } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatWrap>
      <StatInfo>Good: {good}</StatInfo>
      <StatInfo>Neutral: {neutral}</StatInfo>
      <StatInfo>Bad: {bad} </StatInfo>
      <StatInfo>Total: {total}</StatInfo>
      <StatInfo>Positiv feedback: {positivePercentage}%</StatInfo>
    </StatWrap>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
