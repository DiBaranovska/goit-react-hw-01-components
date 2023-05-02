import PropTypes from 'prop-types';
import css from './statisticsTitle.module.css';

export const StatisticsTitle = ({ tittle }) => {
  return <h2 className={css.tittle}>{tittle}</h2>;
};

StatisticsTitle.propTypes = {
  tittle: PropTypes.string.isRequired,
};
