import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const Game = () => {
  const players = useSelector((state: RootState) => state.players.value);
  const matches = useSelector((state: RootState) => state.matches.value);

  return (
    <div>
      {players?.map(({ id, shortname }) => <div key={id}>{shortname}</div>)}
      {matches.length} games
    </div>
  );
};

export default Game;
