import PropTypes from 'prop-types';
import css from './statisticsList.module.css';
const colorItem = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const StatisticsItems = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ backgroundColor: colorItem() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsItems.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
