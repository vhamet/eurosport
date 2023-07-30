import { FC } from 'react';

import { Player } from '../../shared/types';
import PlayerIdentity from '../PlayerIdentity';
import PlayerStats from '../PlayerStats';

type PlayerCardProps = {
  player: Player;
  reversed?: boolean;
};

const PlayerCard: FC<PlayerCardProps> = ({ player, reversed }) => (
  <div
    className={`max-w-md ${reversed ? 'pl-6 bg-gray-300' : 'pr-6 bg-white'}`}
  >
    <PlayerIdentity player={player} reversed={reversed} />
    <PlayerStats stats={player.stats} reversed={reversed} />
  </div>
);

export default PlayerCard;
