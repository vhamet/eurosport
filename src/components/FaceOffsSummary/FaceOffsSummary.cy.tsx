import FaceOffsSummary from './index';
import { Match, Player } from '../../shared/types';
import { formatHoursPlayed, getStringDatesDiff } from '../../shared/utils';

describe('<FaceOffsSummary />', () => {
  let players: Player[], matches: Match[];
  beforeEach(() => {
    cy.fixture<{ players: Player[]; matches: Match[] }>('data').then((data) => {
      players = data.players;
      matches = data.matches;
      cy.mount(<FaceOffsSummary players={players} matches={matches} />);
    });
  });

  it('shows the total number of matches played', () => {
    cy.get('[data-testid="faceoffs-summary"]').contains(
      `${matches.length} GAMES`
    );
  });

  it('shows the total number of wins of player 1', () => {
    cy.get('[data-testid="fs-wins1"]').contains(
      matches.reduce(
        (wins, { winner }) => (winner.id === players[0].id ? wins + 1 : wins),
        0
      )
    );
  });

  it('shows the total number of wins of player 2', () => {
    cy.get('[data-testid="fs-wins2"]').contains(
      matches.reduce(
        (wins, { winner }) => (winner.id === players[1].id ? wins + 1 : wins),
        0
      )
    );
  });

  it('shows the total time played', () => {
    cy.get('[data-testid="faceoffs-summary"]').contains(
      formatHoursPlayed(
        matches.reduce(
          (time, { startTime, endTime }) =>
            time + (getStringDatesDiff(startTime, endTime) || 0),
          0
        )
      )
    );
  });
});
