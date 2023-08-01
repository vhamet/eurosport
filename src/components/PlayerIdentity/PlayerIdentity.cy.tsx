import PlayerIdentity from './index';
import { Player } from '../../shared/types';
import { Sex } from '../../shared/types/enums';
import { getCountryNameFromIOCCode } from '../../shared/utils';

const player: Player = {
  id: 'player-1',
  firstname: 'Stan',
  lastname: 'Wawrinka',
  shortname: 'S.WAW',
  sex: Sex.MAN,
  picture: {
    url: 'https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg',
  },
  country: {
    code: 'SUI',
    picture: {
      url: 'https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png',
    },
  },
  stats: {
    rank: 21,
    points: 1784,
    weight: 81000,
    height: 183,
    age: 33,
  },
};

describe('<PlayerIdentity />', () => {
  beforeEach(() => {
    cy.mount(<PlayerIdentity player={player} />);
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
  it("is a link to the player's detail when prop withLinkToDetail is true", () => {
    cy.mount(<PlayerIdentity player={player} withLinkToDetail />);
    cy.get('[data-testid="player-identity"]').should(
      'have.attr',
      'href',
      `/player/${player.id}`
    );
  });
});
