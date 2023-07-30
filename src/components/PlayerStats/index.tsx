import { FC } from 'react';

import { Stats } from '../../shared/types';

type PlayerStatsProps = {
  stats: Stats;
};

const PlayerStats: FC<PlayerStatsProps> = () => <div>Player stats</div>;

export default PlayerStats;
