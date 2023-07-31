describe('The home page', () => {
  beforeEach(() => cy.visit('/'));

  it('shows the header', () => {
    cy.get('[data-testid="app-header"]');
  });

  it('shows the Player Overview page', () => {
    cy.get('[data-testid="po-title"]');
  });

  it('shows 2 players full information', () => {
    cy.get('[data-testid="player-card"]').should('have.length', 2);
  });

  it('shows the 2 players face-offs summary', () => {
    cy.get('[data-testid="faceoffs-summary"]');
  });

  it('allows to navigate to the user detail page', () => {
    cy.get('[data-testid="player-card"]')
      .contains('a')
      .should('have.attr', 'href')
      .should('match', /\/player\/player-\d+/);
  });
});

describe('The player victories page', () => {
  beforeEach(() => cy.visit('/player/player-1'));

  it('shows the header', () => {
    cy.get('[data-testid="app-header"]');
  });

  it('shows the Player Victories page', () => {
    cy.get('[data-testid="pv-title"]');
  });

  it('shows 1 player indentity with no link', () => {
    cy.get('[data-testid="player-identity"]')
      .should('have.length', 1)
      .should('not.have.attr', 'href');
  });

  it('shows total wins/losses', () => {
    cy.get('[data-testid="victories-ratio"').contains(
      /\d+\svictories\s\/\s\d+\slosses/
    );
  });

  it('shows the details of winning games', () => {
    cy.get('[data-testid="match-summary"]')
      .should('contain.text', 'WIN')
      .should('not.contain.text', 'LOSS');
  });
});
