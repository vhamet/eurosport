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
    className={reversed ? 'pl-2 sm:pl-6 bg-gray-300' : 'pr-2 sm:pr-6 bg-white'}
  >
    <PlayerIdentity player={player} reversed={reversed} withLinkToDetail />
    <PlayerStats stats={player.stats} reversed={reversed} />
  </div>
);

export default PlayerCard;
