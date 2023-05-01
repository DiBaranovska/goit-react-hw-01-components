import PropTypes from 'prop-types';
import css from './statisticsTitle.module.css';

export const StatisticsTitle = ({ title }) => {
  if ((title = false)) {
    return <></>;
  } else {
    return <h2 className={css.title}>{title}</h2>;
  }
};

StatisticsTitle.propTypes = {
  tittle: PropTypes.string,
};
