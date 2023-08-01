import PlayerIdentity from './index';
import { Player } from '../../shared/types';
import { getCountryNameFromIOCCode } from '../../shared/utils';

describe('<PlayerIdentity />', () => {
  let player: Player;
  beforeEach(() => {
    cy.fixture('players').then(({ players }) => {
      [player] = players;
      cy.mount(<PlayerIdentity player={player} />);
    });
  });

  it("shows the player's firstname", () => {
    cy.get('[data-testid="player-identity"]').contains(player.firstname);
  });

  it("shows the player's lastname", () => {
    cy.get('[data-testid="player-identity"]').contains(player.lastname);
  });

  it("shows the player's country", () => {
    cy.get('[data-testid="player-identity"]').contains(
      getCountryNameFromIOCCode(player.country.code)
    );
  });

  it("shows the player's picture", () => {
    cy.get(`[data-testid="player-identity"] img[src="${player.picture.url}"]`);
  });

  it("shows the player's flag", () => {
    cy.get(
      `[data-testid="player-identity"] img[src="${player.country.picture.url}"]`
    );
  });

  it("is not a link to the player's detail when prop withLinkToDetail is false", () => {
    cy.get('[data-testid="player-identity"]').should('not.have.attr', 'href');
  });
});

describe('<PlayerIdentity withLinkToDetail />', () => {
  let player: Player;
  it("is a link to the player's detail when prop withLinkToDetail is true", () => {
    cy.fixture('players').then(({ players }) => {
      [player] = players;
      cy.mount(<PlayerIdentity player={player} withLinkToDetail />);
      cy.get('[data-testid="player-identity"]').should(
        'have.attr',
        'href',
        `/player/${player.id}`
      );
    });
  });
});
