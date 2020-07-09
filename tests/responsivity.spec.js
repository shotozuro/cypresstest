describe('Responsivity Test', () => {
  beforeEach(() => {
    cy.visit('/search?q=covid19');
  });
  it('should show header menu on device above 1000px screen width', () => {
    cy.viewport('macbook-15');
    cy.get('.HeaderMenu').should('be.visible');

    cy.viewport('macbook-11');
    cy.get('.HeaderMenu').should('be.visible');
  });
  it('should hide header menu below 1000px screen width', () => {
    cy.viewport('ipad-2');
    cy.wait(200);
    cy.get('.HeaderMenu').should('not.be.visible');

    cy.viewport('iphone-6');
    cy.wait(200);
    cy.get('.HeaderMenu').should('not.be.visible');

    cy.viewport('iphone-5');
    cy.wait(200);
    cy.get('.HeaderMenu').should('not.be.visible');

    cy.viewport('iphone-3');
    cy.wait(200);
    cy.get('.HeaderMenu').should('not.be.visible');

    cy.viewport('iphone-4', 'landscape');
    cy.wait(200);
    cy.get('.HeaderMenu').should('not.be.visible');
  });
});
