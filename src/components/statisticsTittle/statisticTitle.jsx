import PropTypes from 'prop-types';
import css from './statisticsTitle.module.css';

export const StatisticsTitle = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

StatisticsTitle.propTypes = {
  tittle: PropTypes.string,
};
