import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import PlayerCard from './components/PlayerCard';

const Game = () => {
  const players = useSelector((state: RootState) => state.players.value);
  const matches = useSelector((state: RootState) => state.matches.value);

  return (
    <div className="w-full px-28 flex [&>div]:flex-1">
      {players?.map((player, index) => (
        <PlayerCard key={player.id} player={player} reverse={index === 1} />
      ))}
    </div>
  );
};

export default Game;
