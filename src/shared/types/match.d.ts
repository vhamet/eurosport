import Player from "./player";

type Match = {
  id: string;
  players: Player[];
  winner: Player;
  startTime: string;
  endTime: string;
};

export default Match;
