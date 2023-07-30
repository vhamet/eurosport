import { FC } from 'react';

import { Stats } from '../../shared/types';
import { formatHeight, formatWeight } from '../../shared/utils';

type PlayerStatsProps = {
  stats: Stats;
  reversed?: boolean;
};

const PlayerStats: FC<PlayerStatsProps> = ({ stats, reversed }) => (
  <div className={`${reversed ? 'pr-6' : 'pl-6'} py-3 text-xs`}>
    <div className="pb-1 flex justify-between border-b border-b-gray-400 border-opacity-30">
      <div className="flex">
        <span className="mr-8">ATP RANKING</span>
        <span className="font-bold">{stats.rank}</span>
      </div>
      <div className="flex">
        <span className="mr-8">ATP POINTS</span>
        <span className="font-bold">{stats.points}</span>
      </div>
    </div>
    <div className="pt-1 px-6 flex justify-between">
      <div className="flex flex-col items-center">
        <span>AGE</span>
        <span className="font-bold">{stats.age}</span>
      </div>
      <div className="flex flex-col items-center">
        <span>HEIGHT</span>
        <span className="font-bold">{formatHeight(stats.height)}</span>
      </div>
      <div className="flex flex-col items-center">
        <span>WEIGHT</span>
        <span className="font-bold">{formatWeight(stats.weight)}</span>
      </div>
    </div>
  </div>
);

export default PlayerStats;
