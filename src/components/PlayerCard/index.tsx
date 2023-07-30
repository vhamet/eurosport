import { FC } from 'react';

import { Player } from '../../shared/types';
import PlayerIdentity from '../PlayerIdentity';
import PlayerStats from '../PlayerStats';

type PlayerCardProps = {
  player: Player;
  reverse?: boolean;
};

const PlayerCard: FC<PlayerCardProps> = ({ player, reverse }) => (
  <div className={reverse ? 'pl-8 bg-gray-300' : 'pr-8 bg-white'}>
    <PlayerIdentity player={player} reverse={reverse} />
    <PlayerStats stats={player.stats} />
  </div>
);

export default PlayerCard;
