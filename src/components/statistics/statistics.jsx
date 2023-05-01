import PropTypes from 'prop-types';
import { StatisticsItems } from '../statisticsList/statisticsList';
import { StatisticsTitle } from '../statisticsTittle/statisticTitle';
import css from './statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <StatisticsTitle title={title} />}
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
  stats: PropTypes.array.isRequired,
};
