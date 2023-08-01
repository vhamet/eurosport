import { FC } from 'react';

import { Stats } from '../../shared/types';
import { formatHeight, formatWeight } from '../../shared/utils';

type PlayerStatsProps = {
  stats: Stats;
  reversed?: boolean;
};

const PlayerStats: FC<PlayerStatsProps> = ({ stats, reversed }) => (
  <div
    className={`${
      reversed ? 'pr-2 sm:pr-6' : 'pl-2 sm:pl-6'
    } py-3 text-xxs sm:text-xs`}
  >
    <div className="pb-1 flex flex-col sm:flex-row justify-between border-b border-b-gray-400 border-opacity-30">
      <div className="flex justify-between" data-testid="ps-ranking">
        <span className="mr-8">ATP RANKING</span>
        <span className="font-bold">{stats.rank}</span>
      </div>
      <div className="flex justify-between" data-testid="ps-points">
        <span className="mr-8">ATP POINTS</span>
        <span className="font-bold">{stats.points}</span>
      </div>
    </div>
    <div className="pt-1 px-0 sm:px-6 flex justify-between">
      <div className="flex flex-col items-center" data-testid="ps-age">
        <span>AGE</span>
        <span className="font-bold">{stats.age}</span>
      </div>
      <div className="flex flex-col items-center" data-testid="ps-height">
        <span>HEIGHT</span>
        <span className="font-bold">{formatHeight(stats.height)}</span>
      </div>
      <div className="flex flex-col items-center" data-testid="ps-weight">
        <span>WEIGHT</span>
        <span className="font-bold">{formatWeight(stats.weight)}</span>
      </div>
    </div>
  </div>
);

export default PlayerStats;
