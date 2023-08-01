import MatchSummary from './index';
import { Match, Player } from '../../shared/types';
import { computeGameTime, formatDate } from '../../shared/utils';

describe('<MatchSummary /> winner', () => {
  let player: Player, opponent: Player, match: Match;
  beforeEach(() => {
    cy.fixture<{ players: Player[]; matches: Match[] }>('data').then(
      ({ players, matches }) => {
        [player, opponent] = players;
        [match] = matches;
        cy.mount(<MatchSummary match={match} player={player} />);
      }
    );
  });

  it('shows the formatted date of the match', () => {
    cy.get('[data-testid="match-summary"]').contains(
      formatDate(new Date(match.startTime))
    );
  });

  it("shows the opponent's full name", () => {
    cy.get('[data-testid="match-summary"]').contains(
      `${opponent.firstname} ${opponent.lastname}`
    );
  });

  it("shows the opponent's flag", () => {
    cy.get(
      `[data-testid="match-summary"] img[src="${opponent.country.picture.url}"]`
    );
  });

  it('shows the played time', () => {
    const { hours, minutes } = computeGameTime(match.startTime, match.endTime);
    cy.get('[data-testid="match-summary"]').contains(`${hours}:${minutes}`);
  });

  it('shows "WIN" when the player won the match', () => {
    cy.get('[data-testid="match-summary"]').contains('WIN');
  });
});

describe('<MatchSummary /> loser', () => {
  let player: Player, match: Match;
  it('shows "LOSS" when the player lost the match', () => {
    cy.fixture<{ players: Player[]; matches: Match[] }>('data').then(
      ({ players, matches }) => {
        [player] = players;
        [, match] = matches;
        cy.mount(<MatchSummary match={match} player={player} />);
      }
    );
  });
});
