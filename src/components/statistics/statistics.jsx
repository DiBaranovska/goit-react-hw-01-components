import PropTypes from 'prop-types';
import { StatisticsItems } from '../statisticsList/statisticsList';
import { StatisticsTitle } from '../statisticsTittle/statisticTitle';
import css from './statistics.module.css';

export const Statistics = ({ tittle, stats }) => {
  return (
    <section className={css.statistics}>
      {tittle && <StatisticsTitle tittle={tittle} />}
      <ul className={css.statList}>
        {stats.map(item => {
          return (
            <StatisticsItems
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  tittle: PropTypes.string,
};
